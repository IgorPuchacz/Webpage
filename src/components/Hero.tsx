import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
}

const AnimatedStat = ({ value, suffix, label }: StatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.floor(stepValue * currentStep));
      } else {
        setCount(value);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-neutral-dark">{label}</div>
    </div>
  );
};

const Hero = () => {
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
  };

  return (
    <section id="start" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-surface-light to-white">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-darker leading-tight mb-6">
            Projektujemy sieci telekomunikacyjne
            <span className="block text-primary mt-2">od koncepcji do dokumentacji</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-dark mb-10 max-w-2xl mx-auto" style={{ lineHeight: '1.5' }}>
            Światłowód i łączność radiowa dla operatorów i firm. Kompleksowe projektowanie
            infrastruktury telekomunikacyjnej w województwie pomorskim.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('oferta')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-primary-dark transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
              Zobacz ofertę
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white hover:bg-surface-light border-2 border-primary transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Skontaktuj się
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-12 border-t border-surface-lighter">
            <AnimatedStat value={500} suffix="+" label="km zaprojektowanych sieci" />
            <AnimatedStat value={150} suffix="+" label="zrealizowanych projektów" />
            <AnimatedStat value={10} suffix="" label="lat doświadczenia" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
