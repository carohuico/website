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
    highlights: [
      'Built digital transformation solutions for clients',
      'Full-stack development for web applications and internal tools',
    ],
  },
  {
    title: 'Kalypso: A Rockwell Automation Business',
    description: 'Software Development and Technical Consulting Intern',
    id: 1,
    period: '2024 - Present',
    highlights: [
      'Demo creation and prototyping for clients',
      'Provided technical consulting with multidisciplinary teams',
    ],
  },
  {
    title: 'Momentum Intern',
    description: 'Softtek',
    id: 2,
    period: '2023',
    highlights: [
      'Tecnical consulting and software development for internal tools',
      'Projects using agile methodologies',
    ],
  }
];

const leadershipItems: CarouselItem[] = [
  {
    title: 'General Secretary',
    description: 'FEUDEM',
    id: 1,
    period: '2024',
    highlights: [
      'Student representation at the university',
      'Coordinated initiatives and events',
    ],
  },
  {
    title: 'Women Techmakers Ambassador',
    description: 'Google Developer Groups',
    id: 2,
    period: '2023 - Present',
    highlights: [
      'Promoted diversity and inclusion in tech',
      'Organized workshops and talks',
    ],
  },
  {
    title: 'IEEE Women in Engineering',
    description: 'Professional Community',
    id: 3,
    period: '2022 - 2023',
    highlights: [
      'Professional engineering networking',
      'STEM oriented initiatives and mentorship',
    ],
  }
];

const academicItems: CarouselItem[] = [
  {
    title: 'Final Degree Project',
    description: 'Rainly - AI System',
    id: 1,
    period: '2025',
    highlights: [
      'Rainly AI system',
      'End-to-end design and implementation',
    ],
  },
  {
    title: 'Programming Competitions',
    description: 'Hackathons & Challenges',
    id: 2,
    period: '2021 - 2024',
    highlights: [
      'Participated in hackathons',
      'Programming and algorithms challenges',
    ],
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
