import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import './Contact.css';

const Contact: React.FC = () => {
  const ref = useInViewAnimation();
  return (
    <section className="section section-contact" ref={ref} id="contact">
      <div className="section-content">
        <h2>Get In Touch</h2>
        <p>Let's connect and collaborate</p>
      </div>
    </section>
  );
};

export default Contact;
