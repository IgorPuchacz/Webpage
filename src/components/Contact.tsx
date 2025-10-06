import { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase, isSupabaseConfigured, ContactSubmission } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState<ContactSubmission>({
    full_name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    gdpr_consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactSubmission, string>>>({});
  const isSupabaseAvailable = isSupabaseConfigured && supabase !== null;

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactSubmission, string>> = {};

    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Pole wymagane';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Pole wymagane';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy adres email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Pole wymagane';
    }

    if (!formData.gdpr_consent) {
      newErrors.gdpr_consent = 'Zgoda jest wymagana';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!supabase) {
      console.error('Supabase client is not configured. Skipping submission.');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      setFormData({
        full_name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        gdpr_consent: false,
      });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name as keyof ContactSubmission]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-darker mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto" style={{ lineHeight: '1.5' }}>
            Omów swój projekt z naszym zespołem ekspertów
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isSupabaseAvailable && (
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                  Formularz kontaktowy jest chwilowo niedostępny z powodu braku konfiguracji zaplecza. Skontaktuj się z nami
                  telefonicznie lub mailowo.
                </div>
              )}
              <div>
                <label htmlFor="full_name" className="block text-sm font-medium text-neutral-darker mb-2">
                  Imię i nazwisko *
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                    errors.full_name ? 'border-red-500' : 'border-surface-lighter'
                  }`}
                  placeholder="Jan Kowalski"
                />
                {errors.full_name && (
                  <p className="mt-1 text-sm text-red-600">{errors.full_name}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-darker mb-2">
                  Firma
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-surface-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="Nazwa firmy"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-darker mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                    errors.email ? 'border-red-500' : 'border-surface-lighter'
                  }`}
                  placeholder="email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-darker mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-surface-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="+48 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-darker mb-2">
                  Wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-surface-lighter'
                  }`}
                  placeholder="Opisz swój projekt lub zapytanie..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="gdpr_consent"
                    checked={formData.gdpr_consent}
                    onChange={handleChange}
                    className={`mt-1 w-5 h-5 text-primary border-surface-lighter rounded focus:ring-2 focus:ring-primary ${
                      errors.gdpr_consent ? 'border-red-500' : ''
                    }`}
                  />
                  <span className="text-sm text-neutral-dark" style={{ lineHeight: '1.5' }}>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu
                    zgodnie z Polityką Prywatności *
                  </span>
                </label>
                {errors.gdpr_consent && (
                  <p className="mt-1 text-sm text-red-600 ml-8">{errors.gdpr_consent}</p>
                )}
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <p className="text-sm text-green-800">
                    Dziękujemy! Wiadomość została wysłana. Skontaktujemy się wkrótce.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                  <p className="text-sm text-red-800">
                    Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się telefonicznie.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !isSupabaseAvailable}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-primary-dark transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  'Wysyłanie...'
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Wyślij wiadomość
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-surface-light p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-neutral-darker mb-6">Dane kontaktowe</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-darker mb-1">Adres</h4>
                    <p className="text-neutral-dark" style={{ lineHeight: '1.5' }}>
                      Województwo Pomorskie<br />
                      [Dokładny adres do uzupełnienia]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-darker mb-1">Telefon</h4>
                    <a href="tel:+48123456789" className="text-primary hover:text-primary-dark transition-colors">
                      +48 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-darker mb-1">Email</h4>
                    <a href="mailto:kontakt@teledesign.pl" className="text-primary hover:text-primary-dark transition-colors">
                      kontakt@teledesign.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-darker mb-1">Godziny pracy</h4>
                    <p className="text-neutral-dark" style={{ lineHeight: '1.5' }}>
                      Poniedziałek - Piątek<br />
                      8:00 - 16:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary p-8 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-3">Szybki kontakt</h3>
              <p className="mb-4" style={{ lineHeight: '1.5' }}>
                Potrzebujesz pilnej wyceny lub konsultacji technicznej?
              </p>
              <a
                href="tel:+48123456789"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-surface-light transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                <Phone className="mr-2" size={18} />
                Zadzwoń teraz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
