import './App.css';
import Navbar from './components/navbar';
import { useActiveSection } from './hooks/useActiveSection';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const activeSection = useActiveSection();
  useSmoothScroll();

  const sectionOrder = ['home', 'about', 'experience', 'contact'];
  const currentIndex = sectionOrder.indexOf(activeSection);
  const nextSection = currentIndex >= 0 ? sectionOrder[currentIndex + 1] : undefined;

  const handleNextSection = () => {
    if (!nextSection) return;

    const scrollContainer = document.querySelector('.scroll-container');
    const targetSection = document.getElementById(nextSection);

    if (!scrollContainer || !targetSection) return;

    scrollContainer.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <div className="scroll-container">
        <Home />
        <About />
        <Experience />
        <Contact />
      </div>
      {nextSection && (
        <button
          type="button"
          aria-label={`Scroll to ${nextSection}`}
          className="scroll-arrow-fixed"
          onClick={handleNextSection}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-icon-fixed">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
