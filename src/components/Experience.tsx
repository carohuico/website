import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import './Experience.css';
import Carousel, { CarouselItem } from './Carousel';

const professionalItems: CarouselItem[] = [
  {
    title: 'Kalypso: A Rockwell Automation Business',
    description: 'Full time Developer',
    id: 1,
    period: '2026 - Present',
    highlight: 'Built digital transformation solutions with full-stack web development for client and internal tools.'
  },
  {
    title: 'Kalypso: A Rockwell Automation Business',
    description: 'Software Development and Technical Consulting Intern',
    id: 2,
    period: '2024 - Present',
    highlight: 'Created client-facing demos and prototypes while providing technical consulting with multidisciplinary teams.'
  },
  {
    title: 'Momentum Intern',
    description: 'Softtek',
    id: 3,
    period: '2023',
    highlight: 'Delivered technical consulting and software development for internal tools using agile methodologies.'
  }
];

const leadershipItems: CarouselItem[] = [
  {
    title: 'General Secretary',
    description: 'FEUDEM',
    id: 1,
    period: '2024',
    highlight: 'Represented students at the university while coordinating strategic initiatives and events.'
  },
  {
    title: 'Women Techmakers Ambassador',
    description: 'Google Developer Groups',
    id: 2,
    period: '2023 - Present',
    highlight: 'Promoted diversity and inclusion in tech through workshops, talks, and community outreach.'
  },
  {
    title: 'IEEE Women in Engineering',
    description: 'Professional Community',
    id: 3,
    period: '2022 - 2023',
    highlight: 'Built professional engineering networks and led STEM-oriented initiatives with mentorship impact.'
  }
];

const academicItems: CarouselItem[] = [
  {
    title: 'Final Degree Project',
    description: 'Rainly - AI System',
    id: 1,
    period: '2025',
    highlight: 'Designed and implemented Rainly as an end-to-end AI system from architecture to delivery.'
  },
  {
    title: 'Programming Competitions',
    description: 'Hackathons & Challenges',
    id: 2,
    period: '2021 - 2024',
    highlight: 'Competed in hackathons and algorithmic programming challenges with iterative problem-solving focus.'
  }
];

const Experience: React.FC = () => {
  const ref = useInViewAnimation();
  return (
    <section className="section section-experience" ref={ref} id="experience">
      <div className="section-content">
        <h2>Experience</h2>
        <p>Engineering, leadership, and impact</p>
        <div className="experience-circles">
          <div className="experience-circle">
            <Carousel
              items={professionalItems}
              baseWidth={310}
              autoplay
              autoplayDelay={3000}
              pauseOnHover
              loop
              round
              responsive
              className="experience-carousel"
            />
          </div>
          <div className="experience-circle">
            <Carousel
              items={leadershipItems}
              baseWidth={310}
              autoplay
              autoplayDelay={3500}
              pauseOnHover
              loop
              round
              responsive
              className="experience-carousel"
            />
          </div>
          <div className="experience-circle">
            <Carousel
              items={academicItems}
              baseWidth={310}
              autoplay
              autoplayDelay={4000}
              pauseOnHover
              loop
              round
              responsive
              className="experience-carousel"
            />
          </div>
        </div>
      </div>
      
    </section>
    
  );
};

export default Experience;
