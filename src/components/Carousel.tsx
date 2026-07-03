import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import './Carousel.css';

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  backgroundImage?: string;
  /** Detail shown when the circle flips */
  period?: string;
  role?: string;
  highlight?: string;
  highlights?: string[];
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
  responsive?: boolean;
  className?: string;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4,
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 300, damping: 30 };

interface CarouselItemProps {
  item: CarouselItem;
  index: number;
  itemWidth: number;
  round: boolean;
  trackItemOffset: number;
  x: any;
  transition: any;
  isFlipped: boolean;
  onFlip: () => void;
}

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition, isFlipped, onFlip }: CarouselItemProps) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });
  const combinedHighlight = item.highlight || item.highlights?.join(' ');
  const hasDetail = Boolean(item.period || item.role || combinedHighlight);
  const isLongDescription = item.description.trim().length > 28 || item.description.trim().split(/\s+/).length > 3;
  const isLongHighlight = Boolean(combinedHighlight && combinedHighlight.length > 120);

  const handleFlipKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onFlip();
    }
  };

  return (
    <motion.div
      key={`${item?.id ?? index}-${index}`}
      className={`carousel-item ${round ? 'round' : ''}`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : '100%',
        rotateY: rotateY,
        ...(round && { borderRadius: '50%' })
      }}
      transition={transition}
    >
      <div
        className={`carousel-flip ${isFlipped ? 'flipped' : ''}`}
        {...(hasDetail
          ? {
              role: 'button' as const,
              tabIndex: 0,
              'aria-label': isFlipped ? `Hide details for ${item.title}` : `View details for ${item.title}`,
              onClick: onFlip,
              onKeyDown: handleFlipKeyDown
            }
          : {})}
      >
        <div className="carousel-face carousel-front">
          <div className="carousel-item-overlay"></div>
          <div className="carousel-item-content">
            <div className="carousel-item-title">{item.title}</div>
            <p className={`carousel-item-description ${isLongDescription ? 'is-long' : ''}`}>{item.description}</p>
            {hasDetail && <span className="carousel-flip-hint">Tap to see more</span>}
          </div>
        </div>
        <div className="carousel-face carousel-back">
          <div className="carousel-back-content">
            {item.period && <span className="carousel-back-period">{item.period}</span>}
            <div className="carousel-back-title">{item.title}</div>
            {item.role && <p className="carousel-back-role">{item.role}</p>}
            {combinedHighlight && (
              <p className={`carousel-back-highlight-text ${isLongHighlight ? 'is-long' : ''}`}>{combinedHighlight}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  responsive = false,
  className = ''
}: CarouselProps): React.JSX.Element {
  const containerPadding = 16;
  const containerRef = useRef<HTMLDivElement>(null);
  const [measuredWidth, setMeasuredWidth] = useState<number>(baseWidth);

  useEffect(() => {
    if (!responsive || !containerRef.current) {
      setMeasuredWidth(baseWidth);
      return undefined;
    }

    const updateWidth = (width: number) => {
      setMeasuredWidth(width);
    };

    updateWidth(containerRef.current.getBoundingClientRect().width);

    if (typeof ResizeObserver === 'undefined') {
      const handleResize = () => {
        if (containerRef.current) {
          updateWidth(containerRef.current.getBoundingClientRect().width);
        }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }

    const observer = new ResizeObserver(entries => {
      const entry = entries[0];
      if (entry) {
        updateWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [baseWidth, responsive]);

  const itemWidth = responsive ? Math.max(measuredWidth - containerPadding * 2, 0) : baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState<number>(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const isFlipped = flippedIndex !== null;
  const toggleFlip = (index: number) => {
    setFlippedIndex(prev => (prev === index ? null : index));
  };
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;
    if (isFlipped) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length, isFlipped]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setFlippedIndex(null);
    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0
        }
      };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? 'round' : ''} ${responsive ? 'responsive' : ''} ${className}`}
    >
      <motion.div
        className="carousel-track"
        drag={isAnimating || isFlipped ? false : 'x'}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={`${item?.id ?? index}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
            isFlipped={flippedIndex === index}
            onFlip={() => toggleFlip(index)}
          />
        ))}
      </motion.div>
      <div className={`carousel-indicators-container ${round ? 'round' : ''}`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`carousel-indicator ${activeIndex === index ? 'active' : 'inactive'}`}
              animate={{
                scale: activeIndex === index ? 1.2 : 1
              }}
              onClick={() => {
                setFlippedIndex(null);
                setPosition(loop ? index + 1 : index);
              }}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
