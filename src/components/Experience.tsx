import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import './Experience.css';
import Carousel, { CarouselItem } from './Carousel';
import { FiBriefcase, FiUsers, FiAward, FiCode, FiHeart, FiTarget } from 'react-icons/fi';
import kalypsoImg from '../images/kalypso.jpg';

const professionalItems: CarouselItem[] = [
  {
    title: 'Kalypso - Rockwell Automation',
    description: 'Software Development and Technical Consulting Intern',
    id: 1,
    backgroundImage: kalypsoImg,
  },
  {
    title: 'Momentum Intern',
    description: 'Softtek',
    id: 2,
  },
  {
    title: 'Engineering in Practice',
    description: 'Multidisciplinary teams',
    id: 3,
  }
];

const leadershipItems: CarouselItem[] = [
  {
    title: 'General Secretary',
    description: 'FEUDEM',
    id: 1,
  },
  {
    title: 'Women Techmakers Ambassador',
    description: 'Google Developer Groups',
    id: 2,
  },
  {
    title: 'IEEE Women in Engineering',
    description: 'Professional Community',
    id: 3,
  }
];

const academicItems: CarouselItem[] = [
  {
    title: 'Final Degree Project',
    description: 'Rainly - AI System',
    id: 1,
  },
  {
    title: 'Programming Competitions',
    description: 'Hackathons & Challenges',
    id: 2,
  }
];

const Experience: React.FC = () => {
  const ref = useInViewAnimation();
  return (
    <section className="section section-experience" ref={ref} id="experience">
      <div className="section-content">
        <h2>Experience</h2>
        <p>Engineering, leadership, and impact</p>
        <div style={{ 
          display: 'flex', 
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{ height: '300px', position: 'relative' }}>
            <Carousel
              items={professionalItems}
              baseWidth={310}
              autoplay
              autoplayDelay={3000}
              pauseOnHover
              loop
              round
            />
          </div>
          <div style={{ height: '300px', position: 'relative' }}>
            <Carousel
              items={leadershipItems}
              baseWidth={310}
              autoplay
              autoplayDelay={3500}
              pauseOnHover
              loop
              round
            />
          </div>
          <div style={{ height: '300px', position: 'relative' }}>
            <Carousel
              items={academicItems}
              baseWidth={310}
              autoplay
              autoplayDelay={4000}
              pauseOnHover
              loop
              round
            />
          </div>
        </div>
      </div>
      
    </section>
    
  );
};

export default Experience;
