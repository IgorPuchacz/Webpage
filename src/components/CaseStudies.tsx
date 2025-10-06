import { ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  problem: string;
  solution: string;
  result: string;
}

const CaseStudyCard = ({ title, problem, solution, result }: CaseStudyProps) => {
  return (
    <div className="bg-white p-8 rounded-lg border border-surface-lighter hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <h3 className="text-2xl font-semibold text-neutral-darker mb-6">{title}</h3>

      <div className="space-y-6 flex-1">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">Problem</h4>
          </div>
          <p className="text-neutral-dark pl-4" style={{ lineHeight: '1.5' }}>
            {problem}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">Rozwiązanie</h4>
          </div>
          <p className="text-neutral-dark pl-4" style={{ lineHeight: '1.5' }}>
            {solution}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">Efekt</h4>
          </div>
          <p className="text-neutral-dark pl-4" style={{ lineHeight: '1.5' }}>
            {result}
          </p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-surface-lighter">
        <button className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors group focus:outline-none focus:ring-2 focus:ring-primary rounded-md">
          <span>Szczegóły projektu</span>
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
        </button>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      title: 'Sieć FTTH dla dewelopera',
      problem: 'Deweloper budujący osiedle 200 mieszkań potrzebował kompleksowego projektu sieci światłowodowej z przyłączem do lokalnego operatora.',
      solution: 'Zaprojektowaliśmy sieć FTTH typu GPON z rozdzielnią osiedlową, wykonaliśmy uzgodnienia z operatorem magistralnym oraz dokumentację dla 8 budynków.',
      result: 'Projekt zatwierdzony w 6 tygodni, pomyślna realizacja inwestycji zgodnie z harmonogramem, operator uruchomił usługi przed oddaniem pierwszych mieszkań.',
    },
    {
      title: 'Łącze radiowe backbone 10G',
      problem: 'Operator regionalny wymagał zaprojektowania łącza radiowego 10 Gbps między dwoma miastami odległymi o 25 km w warunkach trudnej topografii terenu.',
      solution: 'Wykonaliśmy analizę profilu trasy i propagacji, dobraliśmy parametry systemowe z marginesem zanikowym 25 dB, przygotowaliśmy dokumentację EMC oraz uzgodnienia UKE.',
      result: 'Łącze działa stabilnie z dostępnością >99.99%, osiągnięta przepustowość 10 Gbps, pozytywny odbiór techniczny i zgodność z wymogami regulacyjnymi.',
    },
    {
      title: 'Modernizacja sieci MAN',
      problem: 'Gmina potrzebowała modernizacji sieci metropolitalnej łączącej 15 jednostek budżetowych. Istniejąca dokumentacja była niekompletna.',
      solution: 'Przeprowadziliśmy pełną inwentaryzację, zaprojektowaliśmy rozbudowę z wykorzystaniem istniejącej infrastruktury kanalizacyjnej, uzyskaliśmy 42 uzgodnienia administracyjne.',
      result: 'Kompleksowa dokumentacja wykonawcza i powykonawcza, przepustowość wzrosła z 100 Mbps do 1 Gbps, zaoszczędzono 30% kosztów dzięki wykorzystaniu istniejącej infrastruktury.',
    },
  ];

  return (
    <section id="realizacje" className="py-20 md:py-28 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-darker mb-4">
            Wybrane realizacje
          </h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto" style={{ lineHeight: '1.5' }}>
            Przykłady projektów wykonanych dla operatorów, deweloperów i instytucji
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <CaseStudyCard key={index} {...caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
