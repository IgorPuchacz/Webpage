import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Process />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
