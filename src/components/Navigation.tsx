import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('start');

  const navItems = [
    { id: 'start', label: 'Start' },
    { id: 'oferta', label: 'Oferta' },
    { id: 'proces', label: 'Proces' },
    { id: 'realizacje', label: 'Realizacje' },
    { id: 'o-nas', label: 'O nas' },
    { id: 'kontakt', label: 'Kontakt' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollPosition(currentScroll);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollOffset = currentScroll + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollOffset) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navOpacity = Math.min(scrollPosition / 160, 1);
  const showShadow = scrollPosition > 40;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md' : 'bg-transparent'
      }`}
      style={{
        backgroundColor: navOpacity === 0 ? 'transparent' : `rgba(255, 255, 255, ${navOpacity})`
      }}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('start')}
            className="group relative font-black text-primary transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md text-2xl md:text-3xl"
          >
            <span
              className="inline-block bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent drop-shadow-[0_6px_14px_rgba(1,67,164,0.25)] transition-transform duration-300 group-hover:scale-105 group-active:scale-95"
              style={{ textShadow: '0 8px 16px rgba(1, 67, 164, 0.25)' }}
            >
              TeleDesign
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  activeSection === item.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-neutral-dark hover:text-primary hover:bg-primary/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-dark hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-surface-lighter">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-full text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                  activeSection === item.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-neutral-dark hover:text-primary hover:bg-primary/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
