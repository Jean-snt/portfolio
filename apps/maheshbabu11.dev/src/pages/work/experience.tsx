import clsx from 'clsx';
import Image from 'next/image';

import { Label } from '@/components/mdx/Labels';
import Page from '@/contents-layouts/Page';
import { useLanguage } from '@/contexts/LanguageContext';

const experience = {
  es: {
    title: 'Experiencia',
    description:
      'Experiencia profesional en desarrollo web, gestion operativa y soporte a negocios digitales.',
    caption: 'Trabajo',
    intro:
      'He trabajado en empresas remotas combinando desarrollo de software, coordinacion operativa y mejora continua de procesos.',
    profileTitle: 'Perfil profesional',
    profileBody:
      'Quieres saber mas informacion de mi experiencia? Te invito a ver mi perfil de LinkedIn, donde comparto certificados, diplomas y mas detalle profesional.',
    profileAction: 'Ver perfil de LinkedIn',
    professional: 'Experiencia Profesional',
    education: 'Educacion',
    educationTitle: 'Desarrollo de Software',
    educationOrg: 'SENATI - Sede SJL',
    educationBody:
      'Actualmente curso ciclos superiores de la carrera de Desarrollo de Software, fortaleciendo conocimientos tecnicos y practicos para construir soluciones reales.',
    companies: [
      {
        company: 'Devdatep Consulting S.A.C',
        roles: [
          {
            title: 'Lider de Desarrollo Web',
            body:
              'Realice seguimiento y soporte a distintas areas, revision, analisis de mejora y aseguramiento de calidad para garantizar resultados confiables. Tambien fui responsable de despliegues de proyectos de Intranet, asegurando su correcta puesta en marcha.',
            tags: ['Intranet', 'QA', 'Despliegues', 'Soporte'],
          },
          {
            title: 'Asistente de Gerencia',
            body:
              'Apoye la coordinacion y control de 6 areas, con seguimiento diario de objetivos, monitoreo de servicios y del sistema profesional que utiliza la empresa. Tambien participe en investigacion de clientes, atraccion, publicidad, mercado y analisis del entorno para elevar el rendimiento y posicionamiento de la organizacion.',
            tags: ['Hostinger', 'Gestion', '6 areas', 'Mercado'],
          },
        ],
      },
      {
        company: 'APM Inversiones E.I.R.L',
        roles: [
          {
            title: 'Desarrollador',
            body:
              'Colabore en optimizacion de sistemas de ventas, diseno de bases de datos, mejora de rendimiento y soporte a iniciativas de transformacion digital para procesos internos.',
            tags: ['Node.js', 'MongoDB', 'SQL Server', 'Microservicios'],
          },
        ],
      },
    ],
  },
  en: {
    title: 'Experience',
    description:
      'Professional experience in web development, operations support, and digital business improvement.',
    caption: 'Work',
    intro:
      'I have worked with remote companies combining software development, operational coordination, and continuous process improvement.',
    profileTitle: 'Professional profile',
    profileBody:
      'Want to know more about my experience? I invite you to visit my LinkedIn profile, where I share certificates, diplomas, and more professional details.',
    profileAction: 'View LinkedIn profile',
    professional: 'Professional Experience',
    education: 'Education',
    educationTitle: 'Software Development',
    educationOrg: 'SENATI - SJL Campus',
    educationBody:
      'I am currently completing advanced cycles in Software Development, strengthening technical and practical knowledge to build real solutions.',
    companies: [
      {
        company: 'Devdatep Consulting S.A.C',
        roles: [
          {
            title: 'Web Development Lead',
            body:
              'I tracked and supported different areas, reviewed processes, analyzed improvements, and handled quality assurance to deliver reliable results. I was also responsible for deploying Intranet projects and ensuring their correct launch.',
            tags: ['Intranet', 'QA', 'Deployments', 'Support'],
          },
          {
            title: 'Management Assistant',
            body:
              'I supported coordination and control across 6 areas, with daily goal tracking, service monitoring, and supervision of the professional system used by the company. I also contributed to client research, attraction, advertising, market work, and environment analysis to improve performance and positioning.',
            tags: ['Hostinger', 'Operations', '6 areas', 'Market'],
          },
        ],
      },
      {
        company: 'APM Inversiones E.I.R.L',
        roles: [
          {
            title: 'Developer',
            body:
              'I collaborated on sales system optimization, database design, performance improvements, and support for digital transformation initiatives for internal processes.',
            tags: ['Node.js', 'MongoDB', 'SQL Server', 'Microservices'],
          },
        ],
      },
    ],
  },
};

function ExperiencePage() {
  const { language } = useLanguage();
  const copy = experience[language];

  return (
    <Page
      frontMatter={{
        title: copy.title,
        description: copy.description,
        caption: copy.caption,
      }}
    >
      <div className={clsx('content-wrapper space-y-10')}>
        <section
          className={clsx(
            'grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm',
            'md:grid-cols-[120px_minmax(0,1fr)]',
            'dark:border-slate-800 dark:bg-slate-900/70'
          )}
        >
          <Image
            src="/mi_foto.png"
            alt="Junior Sulca"
            width={120}
            height={120}
            className={clsx(
              'h-28 w-28 rounded-lg object-cover',
              'md:h-[120px] md:w-[120px]'
            )}
            priority
          />
          <div>
            <h2>{copy.profileTitle}</h2>
            <p
              className={clsx(
                'mt-2 max-w-3xl text-base leading-7 text-slate-700',
                'dark:text-slate-300'
              )}
            >
              {copy.intro}
            </p>
            <p className={clsx('mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400')}>
              {copy.profileBody}
            </p>
            <a
              href="https://linkedin.com/in/junior-sulca-mendez-980366219"
              target="_blank"
              rel="noreferrer nofollow"
              className={clsx('button button--solid mt-4 inline-flex')}
            >
              {copy.profileAction}
            </a>
          </div>
        </section>

        <section className={clsx('space-y-5')}>
          <h2>{copy.professional}</h2>
          <div className={clsx('grid gap-5')}>
            {copy.companies.map((company) => (
              <article
                key={company.company}
                className={clsx(
                  'rounded-lg border border-slate-200 bg-white p-5 shadow-sm',
                  'dark:border-slate-800 dark:bg-slate-900/70'
                )}
              >
                <h3 className={clsx('text-xl font-semibold')}>
                  {company.company}
                </h3>
                <div className={clsx('mt-5 grid gap-4 lg:grid-cols-2')}>
                  {company.roles.map((role) => (
                    <div
                      key={role.title}
                      className={clsx(
                        'rounded-lg border border-slate-200 bg-slate-50 p-4',
                        'dark:border-slate-800 dark:bg-slate-950/40'
                      )}
                    >
                      <h4 className={clsx('font-semibold')}>{role.title}</h4>
                      <p
                        className={clsx(
                          'mt-2 text-sm leading-6 text-slate-700',
                          'dark:text-slate-300'
                        )}
                      >
                        {role.body}
                      </p>
                      <div className={clsx('mt-4 flex flex-wrap gap-2')}>
                        {role.tags.map((tag) => (
                          <Label key={tag} indicator={85}>
                            {tag}
                          </Label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className={clsx(
            'rounded-lg border border-slate-200 bg-white p-5 shadow-sm',
            'dark:border-slate-800 dark:bg-slate-900/70'
          )}
        >
          <h2>{copy.education}</h2>
          <h3 className={clsx('mt-4 text-xl font-semibold')}>
            {copy.educationTitle}
          </h3>
          <p className={clsx('font-semibold text-accent-600 dark:text-accent-400')}>
            {copy.educationOrg}
          </p>
          <p className={clsx('mt-2 max-w-3xl text-slate-700 dark:text-slate-300')}>
            {copy.educationBody}
          </p>
        </section>
      </div>
    </Page>
  );
}

export default ExperiencePage;
