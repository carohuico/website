import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import SpotlightCard from './SpotlightCard';
import StarBorder from './StarBorder';
import './About.css';

const About: React.FC = () => {
  const ref = useInViewAnimation();
  return (
    <section className="section section-about" ref={ref} id="about">
      <div className="section-content">
        <h2>Building software with purpose</h2>
        <StarBorder
          as="div"
          className="custom-class about-tag"
          color="cyan"
          speed="3s"
          thickness={3}
        >
          React
        </StarBorder>
        <StarBorder
          as="div"
          className="custom-class about-tag"
          color="cyan"
          speed="3s"
          thickness={3}
        >
          TypeScript
        </StarBorder>
        <StarBorder
          as="div"
          className="custom-class about-tag"
          color="cyan"
          speed="3s"
          thickness={3}
        >
          JavaScript
        </StarBorder>
        <StarBorder
          as="div"
          className="custom-class about-tag"
          color="cyan"
          speed="3s"
          thickness={3}
        >
          HTML
        </StarBorder>
        <StarBorder
          as="div"
          className="custom-class about-tag"
          color="cyan"
          speed="3s"
          thickness={3}
        >
          CSS
        </StarBorder>
        <StarBorder
          as="div"
          className="custom-class about-tag"
          color="magenta"
          speed="3s"
          thickness={3}
        >
          Python
        </StarBorder>
        <StarBorder
          as="div"
          className="custom-class about-tag"
          color="magenta"
          speed="3s"
          thickness={3}
        >
          SQL
        </StarBorder>
        <StarBorder
          as="div"
          className="custom-class about-tag"
          color="white"
          speed="3s"
          thickness={3}
        >
          Google Cloud
        </StarBorder>
        <StarBorder
          as="div"
          className="custom-class about-tag"
          color="white"
          speed="3s"
          thickness={3}
        >
          Git
        </StarBorder>
        <StarBorder
          as="div"
          className="custom-class about-tag"
          color="white"
          speed="3s"
          thickness={3} 
        >
          Streamlit
        </StarBorder>
        <div className="about-highlights">
          <SpotlightCard className="highlight-card" spotlightColor="rgba(170, 150, 255, 0.2)">
            <div className="highlight-content">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="highlight-icon" style={{fontSize: '1.75rem', width: '1.75rem', height: '1.75rem'}}>
                <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd" />
                <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
            </svg>
              <h3>End-to-end ownership</h3>
              <p>I work across the full product lifecycle, from understanding problems to shipping reliable solutions.</p>
            </div>
          </SpotlightCard>
          
          <SpotlightCard className="highlight-card" spotlightColor="rgba(82, 200, 255, 0.2)">
            <div className="highlight-content">
              <div className="highlight-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="highlight-icon" style={{fontSize: '1.75rem', width: '1.75rem', height: '1.75rem'}}>
                  <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
                </svg>
              </div>
              <h3>Collaboration & leadership</h3>
              <p>I value clear communication, teamwork, and shared ownership in technical environments.</p>
            </div>
          </SpotlightCard>
          
          <SpotlightCard className="highlight-card" spotlightColor="rgba(2, 255, 150, 0.2)">
            <div className="highlight-content">
              <div className="highlight-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="highlight-icon" style={{fontSize: '1.75rem', width: '1.75rem', height: '1.75rem'}}>
                  <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3>System-level thinking</h3>
              <p>I enjoy logic-heavy challenges and making intentional technical decisions that scale.</p>
            </div>
          </SpotlightCard>
        </div>

      </div>
      <a href="#experience" aria-label="Scroll to Experience" className="scroll-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </a>
    </section>
  );
};

export default About;
