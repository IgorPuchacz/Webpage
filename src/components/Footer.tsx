const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-neutral-darker text-white">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TeleDesign</h3>
            <p className="text-gray-300 text-sm" style={{ lineHeight: '1.5' }}>
              Projektowanie sieci telekomunikacyjnych światłowodowych i radiowych.
              Kompleksowe usługi dla operatorów i firm.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Nawigacja</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('start')}
                  className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-md"
                >
                  Start
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('oferta')}
                  className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-md"
                >
                  Oferta
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('realizacje')}
                  className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-md"
                >
                  Realizacje
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-md"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Województwo Pomorskie</li>
              <li>
                <a href="tel:+48123456789" className="hover:text-white transition-colors">
                  +48 123 456 789
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@teledesign.pl" className="hover:text-white transition-colors">
                  kontakt@teledesign.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              <p>&copy; {currentYear} TeleDesign. Wszelkie prawa zastrzeżone.</p>
              <p className="mt-1">NIP: [do uzupełnienia] | REGON: [do uzupełnienia]</p>
            </div>
            <div>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-md"
              >
                Polityka prywatności
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
