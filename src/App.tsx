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

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <div className="scroll-container">
        <Home />
        <About />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
