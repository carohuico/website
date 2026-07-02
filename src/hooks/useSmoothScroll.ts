import { useEffect } from 'react';

/**
 * Section-based scroll control (wheel / desktop only):
 *
 * - Inside a section you can scroll freely through its content,
 *   but the scroll is clipped to the section boundaries (it never invades the
 *   next or previous section halfway through).
 * - When you reach the edge of a section and keep scrolling, it jumps to the START
 *   of the destination section (title first), regardless of direction.
 *   That way, when entering a section from above or below, it always shows
 *   from the beginning of the content.
 *
 * On mobile (without wheel events) native touch scrolling is used.
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container') as HTMLElement;
    if (!scrollContainer) return;

    const EDGE = 4; // px tolerance for considering "I'm at the edge"
    let isAnimating = false;
    let animTimeout: ReturnType<typeof setTimeout>;

    const getSections = () =>
      Array.from(document.querySelectorAll('.section')) as HTMLElement[];

    // Index of the section we are in according to the current position.
    const getCurrentIndex = (sections: HTMLElement[], scrollTop: number) => {
      let idx = 0;
      for (let i = 0; i < sections.length; i++) {
        if (scrollTop >= sections[i].offsetTop - EDGE) idx = i;
        else break;
      }
      return idx;
    };

    const snapTo = (top: number) => {
      isAnimating = true;
      scrollContainer.scrollTo({ top, behavior: 'smooth' });
      clearTimeout(animTimeout);
      animTimeout = setTimeout(() => {
        isAnimating = false;
      }, 800);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating || e.deltaY === 0) return;

      const sections = getSections();
      if (sections.length === 0) return;

      const scrollTop = scrollContainer.scrollTop;
      const viewport = scrollContainer.clientHeight;
      const cur = getCurrentIndex(sections, scrollTop);
      const section = sections[cur];
      const sectionTop = section.offsetTop;
      // Maximum scroll position inside this section (its bottom edge
      // aligned with the viewport bottom).
      const maxWithin = Math.max(sectionTop, sectionTop + section.offsetHeight - viewport);
      const hasOverflow = maxWithin - sectionTop > EDGE;

      if (e.deltaY > 0) {
        // Hacia abajo
        if (hasOverflow && scrollTop < maxWithin - EDGE) {
          // There is still content below: free scroll clipped to the edge.
          const target = Math.min(scrollTop + e.deltaY, maxWithin);
          scrollContainer.scrollTo({ top: target, behavior: 'instant' as ScrollBehavior });
        } else if (cur < sections.length - 1) {
          // At the end of the content: jump to the start of the next section.
          snapTo(sections[cur + 1].offsetTop);
        }
      } else {
        // Hacia arriba
        if (hasOverflow && scrollTop > sectionTop + EDGE) {
          // There is still content above: free scroll clipped to the start.
          const target = Math.max(scrollTop + e.deltaY, sectionTop);
          scrollContainer.scrollTo({ top: target, behavior: 'instant' as ScrollBehavior });
        } else if (cur > 0) {
          // At the start of the content: jump to the START of the previous section.
          snapTo(sections[cur - 1].offsetTop);
        }
      }
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
      clearTimeout(animTimeout);
    };
  }, []);
};
