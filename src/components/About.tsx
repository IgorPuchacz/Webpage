import { Award, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="o-nas" className="py-20 md:py-28 bg-surface-muted">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-darker mb-4">
              O nas
            </h2>
            <p className="text-lg text-neutral-dark" style={{ lineHeight: '1.5' }}>
              Doświadczony zespół specjalistów z pasją do telekomunikacji
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md mb-12">
            <p className="text-lg text-neutral-dark mb-6" style={{ lineHeight: '1.6' }}>
              Jesteśmy zespołem inżynierów telekomunikacji specjalizujących się w projektowaniu
              zaawansowanej infrastruktury sieciowej. Działamy w województwie pomorskim, obsługując
              zarówno dużych operatorów telekomunikacyjnych, jak i lokalne firmy oraz instytucje.
            </p>
            <p className="text-lg text-neutral-dark" style={{ lineHeight: '1.6' }}>
              Naszą mocną stroną jest kompleksowe podejście do projektów – od wstępnej analizy
              technicznej, przez projektowanie i uzgodnienia, aż po wsparcie na etapie realizacji
              i odbioru. Posiadamy doświadczenie w realizacji projektów różnej skali, od
              pojedynczych przyłączy po rozległe sieci metropolitalne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center border border-surface-lighter">
              <div className="w-12 h-12 bg-surface-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-darker mb-2">Zespół ekspertów</h3>
              <p className="text-neutral-dark text-sm" style={{ lineHeight: '1.5' }}>
                Inżynierowie z uprawnieniami budowlanymi i certyfikatami branżowymi
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center border border-surface-lighter">
              <div className="w-12 h-12 bg-surface-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-darker mb-2">Precyzja wykonania</h3>
              <p className="text-neutral-dark text-sm" style={{ lineHeight: '1.5' }}>
                Dbałość o szczegóły i zgodność z normami branżowymi
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center border border-surface-lighter">
              <div className="w-12 h-12 bg-surface-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-darker mb-2">Sprawdzona jakość</h3>
              <p className="text-neutral-dark text-sm" style={{ lineHeight: '1.5' }}>
                Terminowa realizacja i pozytywne referencje od klientów
              </p>
            </div>
          </div>

          <div className="mt-12 bg-primary p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Kompetencje techniczne</h3>
            <div className="flex flex-wrap justify-center gap-3 text-white">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">FTTH / GPON</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Sieci radiowe PtP/PtMP</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">AutoCAD / QGIS</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Analiza propagacji</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Projektowanie EMC</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Normy branżowe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
