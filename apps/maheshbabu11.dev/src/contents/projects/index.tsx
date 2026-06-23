import clsx from 'clsx';

import { Label } from '@/components/mdx/Labels';
import { useLanguage } from '@/contexts/LanguageContext';

const projects = {
  es: [
    {
      title: 'Intranet Corporativa',
      description:
        'Implementacion y despliegue de soluciones internas para mejorar seguimiento, coordinacion y operacion de areas empresariales.',
      tags: ['Intranet', 'Hostinger', 'QA', 'Gestion'],
    },
    {
      title: 'Sistemas Web para Negocios',
      description:
        'Desarrollo de interfaces, backend y bases de datos para servicios digitales orientados a clientes y procesos internos.',
      tags: ['React', 'Node.js', 'SQL Server', 'MongoDB'],
    },
    {
      title: 'Automatizacion y Mejora Operativa',
      description:
        'Analisis de procesos, seguimiento de objetivos y soporte tecnico para elevar rendimiento, control y continuidad de servicios.',
      tags: ['Automatizacion', 'DevOps', 'Docker', 'Cloud'],
    },
  ],
  en: [
    {
      title: 'Corporate Intranet',
      description:
        'Implementation and deployment of internal solutions to improve tracking, coordination, and business area operations.',
      tags: ['Intranet', 'Hostinger', 'QA', 'Operations'],
    },
    {
      title: 'Web Systems for Businesses',
      description:
        'Development of interfaces, backend services, and databases for client-facing digital services and internal processes.',
      tags: ['React', 'Node.js', 'SQL Server', 'MongoDB'],
    },
    {
      title: 'Automation and Operational Improvement',
      description:
        'Process analysis, goal tracking, and technical support to improve performance, control, and service continuity.',
      tags: ['Automation', 'DevOps', 'Docker', 'Cloud'],
    },
  ],
};

function ProjectsContents() {
  const { language } = useLanguage();
  const copy = {
    es: {
      intro:
        'Estos proyectos resumen mi enfoque: resolver necesidades reales con software claro, mantenible y orientado a resultados.',
      cta: 'Disponible para nuevos proyectos y colaboraciones.',
    },
    en: {
      intro:
        'These projects summarize my approach: solving real needs with clear, maintainable, results-focused software.',
      cta: 'Available for new projects and collaborations.',
    },
  };

  return (
    <div className={clsx('content-wrapper space-y-8')}>
      <p className={clsx('max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300')}>
        {copy[language].intro}
      </p>
      <div className={clsx('grid gap-5 md:grid-cols-2 xl:grid-cols-3')}>
        {projects[language].map((project) => (
          <article
            key={project.title}
            className={clsx(
              'rounded-lg border border-slate-200 bg-white p-5 shadow-sm',
              'dark:border-slate-800 dark:bg-slate-900/70'
            )}
          >
            <h2 className={clsx('text-xl font-semibold')}>{project.title}</h2>
            <p className={clsx('mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300')}>
              {project.description}
            </p>
            <div className={clsx('mt-4 flex flex-wrap gap-2')}>
              {project.tags.map((tag) => (
                <Label key={tag} indicator={85}>
                  {tag}
                </Label>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div
        className={clsx(
          'rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-semibold',
          'text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300'
        )}
      >
        {copy[language].cta}
      </div>
    </div>
  );
}

export default ProjectsContents;
