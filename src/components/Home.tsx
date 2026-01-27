import React from 'react';
import Aurora from './Aurora';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import TextType from './TextType';
import './Home.css';

const Home: React.FC = () => {
  const ref = useInViewAnimation();

  return (
    <section className="section section-hero" ref={ref} id="home">
      <Aurora
        colorStops={["#0a7a7e", "#71eeba", "#27ff56"]}
        blend={5}
        amplitude={2}
        speed={0.5}
      />
      <div className="hero-title">
        <h1 className="hero-title-typing">
          <TextType
            text={["Hi, I'm Carolina Huicochea"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>
        <p className="hero-subtitle">Full-stack engineer building thoughtful, human-centered software</p>
        <p className="hero-paragraph">I build software as a way to serve people.
        With a background in full-stack engineering and a deep connection to art and creativity, I focus on turning complex problems into clear, intuitive, and scalable solutions.
        <br></br>Logic, design, and empathy guide everything I create.</p>
      </div>
      <a href="#about" aria-label="Scroll to About" className="scroll-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </a>
    </section>
  );
};

export default Home;
