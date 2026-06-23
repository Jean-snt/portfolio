import { WhatsAppContactForm } from '@/components/WhatsAppContactForm';
import Page from '@/contents-layouts/Page';
import { useLanguage } from '@/contexts/LanguageContext';

function ContactPage() {
  const { language } = useLanguage();

  const copy = {
    es: {
      title: 'Contacto',
      description:
        'Si te interesa alguno de mis servicios o quieres mejorar tu presencia digital, escribeme y coordinamos por WhatsApp.',
      caption: 'Trabajo',
      heading: 'Hablemos de lo que necesitas construir',
      body:
        'Puedo ayudarte con desarrollo web, automatizacion, backend, despliegues, bases de datos o mejoras para tu negocio. Enviame un mensaje claro y te respondere para revisar alcance, tiempos y siguientes pasos.',
      clientHeading: 'Te interesa alguno de nuestros servicios?',
      clientBody:
        'Cuéntame si necesitas una landing page, una web corporativa, automatizacion, e-commerce, campañas digitales, documentacion de requerimientos o soporte cloud. Te ayudare a elegir la solucion mas conveniente segun tu presupuesto y objetivo.',
    },
    en: {
      title: 'Contact',
      description:
        'If you are interested in any of my services or want to improve your digital presence, message me and we can coordinate on WhatsApp.',
      caption: 'Work',
      heading: "Let's talk about what you need to build",
      body:
        "I can help with web development, automation, backend systems, deployments, databases, or improvements for your business. Send me a clear message and I'll reply so we can review scope, timing, and next steps.",
      clientHeading: 'Interested in any of our services?',
      clientBody:
        'Tell me if you need a landing page, corporate website, automation, e-commerce, digital campaigns, requirements documentation, or cloud support. I will help you choose the best solution for your budget and goal.',
    },
  };

  const content = copy[language];

  return (
    <Page
      frontMatter={{
        title: content.title,
        description: content.description,
        caption: content.caption,
      }}
    >
      <section className="content-wrapper">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(360px,1fr)]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <h2>{content.heading}</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              {content.body}
            </p>
            <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/40">
              <h3 className="text-base font-semibold">
                {content.clientHeading}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {content.clientBody}
              </p>
            </div>
          </div>
          <WhatsAppContactForm />
        </div>
      </section>
    </Page>
  );
}

export default ContactPage;
