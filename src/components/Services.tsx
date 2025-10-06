import { Network, Radio, FileCheck, FileText, Calculator, Eye } from 'lucide-react';
import { Video as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-surface-lighter hover:border-primary hover:shadow-lg transition-all duration-300 group">
      <div className="w-14 h-14 bg-surface-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon className="text-primary group-hover:text-white transition-colors" size={28} />
      </div>
      <h3 className="text-xl font-semibold text-neutral-darker mb-3">{title}</h3>
      <p className="text-neutral-dark leading-relaxed" style={{ lineHeight: '1.5' }}>
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Network,
      title: 'Sieci światłowodowe',
      description: 'Projektowanie sieci FTTH, magistral i łączy międzywęzłowych. Kompleksowa dokumentacja techniczna zgodna z obowiązującymi normami i wymaganiami inwestorów.',
    },
    {
      icon: Radio,
      title: 'Sieci radiowe',
      description: 'Projekty systemów radiowych punktowych i sektorowych. Analiza propagacji, dobór parametrów technicznych i dokumentacja zgodności elektromagnetycznej.',
    },
    {
      icon: FileCheck,
      title: 'Uzgodnienia',
      description: 'Kompleksowa obsługa procesu uzgodnień z właścicielami infrastruktury, zarządcami dróg oraz organami administracji państwowej i samorządowej.',
    },
    {
      icon: FileText,
      title: 'Dokumentacja powykonawcza',
      description: 'Przygotowanie kompletnej dokumentacji powykonawczej z inwentaryzacją geodezyjną. Aktualizacja projektów zgodnie z rzeczywistym stanem wykonania.',
    },
    {
      icon: Calculator,
      title: 'Kosztorysy',
      description: 'Szczegółowe kosztorysy inwestorskie i ofertowe. Przedmiary robót sporządzone na podstawie dokumentacji projektowej z uwzględnieniem lokalnych warunków.',
    },
    {
      icon: Eye,
      title: 'Nadzór inwestorski',
      description: 'Nadzór nad realizacją inwestycji telekomunikacyjnych. Kontrola zgodności wykonania z dokumentacją projektową i obowiązującymi normami.',
    },
  ];

  return (
    <section id="oferta" className="py-20 md:py-28 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-darker mb-4">
            Nasza oferta
          </h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto" style={{ lineHeight: '1.5' }}>
            Kompleksowe usługi projektowe w zakresie infrastruktury telekomunikacyjnej
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
