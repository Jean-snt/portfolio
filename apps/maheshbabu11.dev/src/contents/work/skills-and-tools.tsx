import clsx from 'clsx';

import { Label } from '@/components/mdx/Labels';
import { useLanguage } from '@/contexts/LanguageContext';

const stack = {
  backend: {
    title: {
      es: 'Backend',
      en: 'Backend',
    },
    description: {
      es: 'Construccion de APIs, servicios web y bases solidas para productos escalables.',
      en: 'API development, web services, and solid foundations for scalable products.',
    },
    items: [
      { name: 'C# (.NET 8)', indicator: 100 },
      { name: 'Python (Django, FastAPI)', indicator: 95 },
      { name: 'Node.js (Express)', indicator: 90 },
      { name: 'Go (Golang)', indicator: 75 },
    ],
  },
  frontend: {
    title: {
      es: 'Frontend',
      en: 'Frontend',
    },
    description: {
      es: 'Interfaces claras, responsivas y mantenibles para experiencias web modernas.',
      en: 'Clear, responsive, and maintainable interfaces for modern web experiences.',
    },
    items: [
      { name: 'React', indicator: 100 },
      { name: 'JavaScript (ES6+)', indicator: 95 },
      { name: 'HTML5', indicator: 95 },
      { name: 'CSS3', indicator: 90 },
      { name: 'WordPress', indicator: 75 },
      { name: 'Rust (herramientas)', indicator: 60 },
    ],
  },
  database: {
    title: {
      es: 'Bases de Datos',
      en: 'Databases',
    },
    description: {
      es: 'Modelado, consultas y persistencia para aplicaciones transaccionales y web.',
      en: 'Modeling, querying, and persistence for transactional and web applications.',
    },
    items: [
      { name: 'SQL Server', indicator: 100 },
      { name: 'MongoDB', indicator: 90 },
      { name: 'MySQL', indicator: 85 },
      { name: 'PostgreSQL', indicator: 80 },
    ],
  },
  security: {
    title: {
      es: 'Seguridad / Infraestructura',
      en: 'Security / Infrastructure',
    },
    description: {
      es: 'Practicas de seguridad, certificados y contenedores para despliegues confiables.',
      en: 'Security practices, certificates, and containers for reliable deployments.',
    },
    items: [
      { name: 'Kali Linux', indicator: 85 },
      { name: 'Certbot (SSL/TLS)', indicator: 80 },
      { name: 'Docker', indicator: 95 },
    ],
  },
  cloud: {
    title: {
      es: 'Cloud / DevOps',
      en: 'Cloud / DevOps',
    },
    description: {
      es: 'Despliegue, versionado y operacion de servicios en entornos cloud y hosting.',
      en: 'Deployment, versioning, and operation of services across cloud and hosting environments.',
    },
    items: [
      { name: 'AWS (EC2, S3)', indicator: 90 },
      { name: 'Azure', indicator: 85 },
      { name: 'Git', indicator: 100 },
      { name: 'Hostinger', indicator: 80 },
    ],
  },
  ai: {
    title: {
      es: 'IA / Metodologias',
      en: 'AI / Methodologies',
    },
    description: {
      es: 'Flujos de trabajo agiles y herramientas de IA para construir soluciones mejor coordinadas.',
      en: 'Agile workflows and AI tooling for building better coordinated solutions.',
    },
    items: [
      { name: 'Scrum', indicator: 95 },
      { name: 'Kanban', indicator: 90 },
      { name: 'LangGraph', indicator: 75 },
      { name: 'MCP', indicator: 70 },
    ],
  },
};

function SkillsAndToolsContents() {
  const { language } = useLanguage();
  const sections = Object.entries(stack);

  const intro =
    language === 'es'
      ? 'Stack tecnico orientado a construir productos web completos: backend robusto, interfaces claras, datos confiables, despliegues seguros y automatizacion con IA.'
      : 'A technical stack focused on building complete web products: robust backend systems, clear interfaces, reliable data, secure deployments, and AI automation.';

  const legend =
    language === 'es'
      ? 'El subrayado de cada badge indica uso frecuente o dominio relativo dentro del stack.'
      : 'The underline on each badge shows frequent use or relative strength within the stack.';

  return (
    <div className={clsx('content-wrapper space-y-10')}>
      <section>
        <div
          className={clsx(
            'rounded-lg border border-slate-200 bg-white p-5 shadow-sm',
            'dark:border-slate-800 dark:bg-slate-900/60'
          )}
        >
          <p
            className={clsx(
              'text-base leading-7 text-slate-700',
              'dark:text-slate-300'
            )}
          >
            {intro}
          </p>
          <p className={clsx('mt-3 text-sm text-slate-600 dark:text-slate-400')}>
            {legend}
          </p>
          <div className={clsx('mt-4 flex flex-wrap gap-3')}>
            <Label indicator={100}>
              {language === 'es' ? 'Uso frecuente' : 'Frequently used'}
            </Label>
            <Label indicator={45}>
              {language === 'es' ? 'Uso ocasional' : 'Occasionally used'}
            </Label>
          </div>
        </div>
      </section>

      <section
        className={clsx(
          'grid gap-5',
          'md:grid-cols-2',
          'xl:grid-cols-3'
        )}
      >
        {sections.map(([key, section]) => (
          <article
            key={key}
            className={clsx(
              'rounded-lg border border-slate-200 bg-white p-5 shadow-sm',
              'dark:border-slate-800 dark:bg-slate-900/70'
            )}
          >
            <div className={clsx('mb-5 space-y-2')}>
              <h2 className={clsx('text-xl font-semibold')}>
                {section.title[language]}
              </h2>
              <p className={clsx('text-sm leading-6 text-slate-600 dark:text-slate-400')}>
                {section.description[language]}
              </p>
            </div>
            <div className={clsx('flex flex-wrap gap-2')}>
              {section.items.map((item) => (
                <Label key={item.name} indicator={item.indicator}>
                  {item.name}
                </Label>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default SkillsAndToolsContents;
