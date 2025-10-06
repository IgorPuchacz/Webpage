import type { LucideIcon } from 'lucide-react';
import { Search, Map, Ligature as FileSignature, FileCheck } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep = ({ number, icon: Icon, title, description, isLast }: ProcessStepProps) => {
  return (
    <div className="relative flex flex-col items-center text-center group">
      <div className="relative z-10">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-white" size={28} />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
          {number}
        </div>
      </div>

      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-surface-lighter">
          <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-500"></div>
        </div>
      )}

      <h3 className="text-xl font-semibold text-neutral-darker mb-2 mt-4">{title}</h3>
      <p className="text-neutral-dark max-w-xs" style={{ lineHeight: '1.5' }}>
        {description}
      </p>
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Analiza wymagań',
      description: 'Zbieramy wymagania techniczne, analizujemy lokalizację i określamy zakres projektu.',
    },
    {
      icon: Map,
      title: 'Koncepcja i trasy',
      description: 'Opracowujemy koncepcję techniczną i optymalne trasy przebiegu infrastruktury.',
    },
    {
      icon: FileSignature,
      title: 'Projekt i uzgodnienia',
      description: 'Przygotowujemy dokumentację projektową i przeprowadzamy wymagane uzgodnienia.',
    },
    {
      icon: FileCheck,
      title: 'Dokumentacja i wsparcie',
      description: 'Finalizujemy projekt oraz zapewniamy wsparcie podczas realizacji i odbioru.',
    },
  ];

  return (
    <section id="proces" className="py-20 md:py-28 bg-surface-light">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-darker mb-4">
            Proces realizacji
          </h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto" style={{ lineHeight: '1.5' }}>
            Sprawdzony model pracy zapewniający terminowość i wysoką jakość projektów
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              {...step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
