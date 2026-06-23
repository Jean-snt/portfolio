import type { ReactNode } from 'react';
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

export type Language = 'es' | 'en';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations: Translations = {
  greeting: {
    es: '¡Hola!',
    en: 'Hi!',
  },
  nameTitle: {
    es: 'Soy Junior Sulca,',
    en: "I'm Junior Sulca,",
  },
  role: {
    es: 'Desarrollador de Software',
    en: 'Software Developer',
  },
  heroDescription: {
    es: 'Soy un profesional comprometido, responsable y proactivo, con sólidas habilidades para el trabajo en equipo y para la resolución de problemas técnicos complejos.',
    en: 'I am a committed, responsible, and proactive professional with strong teamwork skills and the ability to solve complex technical problems.',
  },
  aboutMe: {
    es: 'Sobre mí',
    en: 'About Me',
  },
  aboutDescription: {
    es: 'Soy Junior, un <strong>desarrollador de software</strong> que ama experimentar con nuevas tecnologías y construir cosas geniales.',
    en: "I'm Junior, a <strong>software developer</strong> who loves to tinker with new technologies and build cool stuff.",
  },
  projects: {
    es: 'Proyectos',
    en: 'Projects',
  },
  work: {
    es: 'Trabajo',
    en: 'Work',
  },
  skills: {
    es: 'Habilidades & Herramientas',
    en: 'Skills & Tools',
  },
  experience: {
    es: 'Experiencia',
    en: 'Experience',
  },
  contact: {
    es: 'Contacto',
    en: 'Contact',
  },
  servicios: {
    es: 'Servicios',
    en: 'Services',
  },
  copyright: {
    es: '© {year}, Junior Sulca',
    en: '© {year}, Junior Sulca',
  },
  ctaResume: {
    es: 'Descargar CV',
    en: 'Download Resume',
  },
  ctaContact: {
    es: 'Contáctame',
    en: 'Get in Touch',
  },
  availableForHire: {
    es: 'Disponible para contratar',
    en: 'Available for hire',
  },
  favoriteTech: {
    es: 'Tecnologías favoritas:',
    en: 'Current favorite tech stack:',
  },
  contactReminder: {
    es: 'Solo un recordatorio amigable que la información proporcionada aquí es solo para <strong>propósitos comerciales</strong>. Si tienes alguna pregunta, no dudes en contactarme directamente en mis redes sociales.',
    en: 'Just a friendly reminder that the information provided here is for <strong>business purposes only</strong>. If you have any questions, feel free to contact me directly on my social media.',
  },
  contactResponsible: {
    es: 'Agradezco tu comprensión al usar esta información de manera responsable.',
    en: 'I appreciate your understanding in using this information responsibly.',
  },
  contactTitle: {
    es: 'Contacto',
    en: 'Contact',
  },
  socialTitle: {
    es: 'Redes Sociales',
    en: 'Social Media',
  },
  whatsappMessage: {
    es: 'Escribe tu mensaje aquí...',
    en: 'Write your message here...',
  },
  whatsappSend: {
    es: 'Enviar por WhatsApp',
    en: 'Send via WhatsApp',
  },
  emailSend: {
    es: 'Enviar por Email',
    en: 'Send by Email',
  },
  // Skills & Tools translations
  skillsIntro: {
    es: 'Comencé mi carrera como desarrollador hace aproximadamente {years} años. Mi experiencia abarca diferentes lenguajes de programación y stacks tecnológicos, principalmente backend, ocasionalmente frontend.',
    en: 'I started my career as a developer about {years} years ago. My experience spans different programming languages and technology stacks, mostly backend, occasionally frontend.',
  },
  skillsBackendFocus: {
    es: 'Aunque el alcance del desarrollo web es amplio, me interesaba y enfocaba mucho en el **Desarrollo Back-End**.',
    en: 'Even though the scope of web development is broad, I was very interested and focused on **Back-End Development**.',
  },
  skillsBackendTitle: {
    es: 'Desarrollador Back-End',
    en: 'Back-End Developer',
  },
  skillsBackendDesc: {
    es: 'Me encanta crear **APIs** y **servicios web**. Estoy enfocado en crear servicios web **altamente escalables** y **altamente disponibles** usando tecnologías eficientes y fiables. Me apasiona crear microservicios y aplicaciones usando las últimas tecnologías como:',
    en: 'I love creating **APIs** and **web services**. I\'m focused on creating **highly scalable** and **highly available** web services using efficient and reliable technologies. I really enjoy creating microservices and applications using latest technologies like:',
  },
  skillsList: {
    es: '- Aplicaciones web,\n- APIs Rest,\n- Paquetes y librerías,\n- Herramientas CLI,\n- y más.',
    en: '- Web applications,\n- Rest APIs,\n- Library packages,\n- CLI tools,\n- and others.',
  },
  skillsWorkWithLatest: {
    es: 'Me encanta trabajar con las últimas tecnologías y herramientas. Siempre estoy buscando nuevas tecnologías y herramientas para aprender y usar.',
    en: 'I love to work with latest technologies and tools. I am always looking for new technologies and tools to learn and use.',
  },
  skillsDetailSummary: {
    es: 'Detalle y Resumen',
    en: 'Detail and Summary',
  },
  skillsLegend: {
    es: 'Represento todos los datos en etiquetas para facilitar la lectura. El **indicador de subrayado** muestra con qué frecuencia usé el elemento relacionado, por ejemplo:',
    en: 'I represent all data in labels to make it easier to read. The **underline indicator** shows how often I used the related item, e.g.:',
  },
  skillsLabel1: {
    es: 'Frecuentemente Usado',
    en: 'Frequently Used',
  },
  skillsLabel2: {
    es: 'Ocasionalmente',
    en: 'Occasionally',
  },
  skillsProgrammingLanguages: {
    es: 'Lenguajes de Programación',
    en: 'Programming Languages',
  },
  skillsTechnologies: {
    es: 'Tecnologías',
    en: 'Technologies',
  },
  skillsSoftwaresAndTools: {
    es: 'Softwares y Herramientas',
    en: 'Softwares and Tools',
  },
  // Services translations
  servicesTitle: {
    es: 'Estructura de la Empresa',
    en: 'Company Structure',
  },
  area1Title: {
    es: 'Área 1 — Software y Sistemas Críticos',
    en: 'Area 1 — Critical Software & Systems',
  },
  teamJava: {
    es: 'Equipo JAVA | Enterprise Team',
    en: 'JAVA Team | Enterprise Team',
  },
  teamJavaTools: {
    es: 'Herramientas: Java, Spring Boot, Hibernate, PostgreSQL',
    en: 'Tools: Java, Spring Boot, Hibernate, PostgreSQL',
  },
  teamJavaDesc: {
    es: 'Desarrollo de CRMs, ERPs y sistemas transaccionales empresariales a medida.',
    en: 'Custom development of CRMs, ERPs and enterprise transactional systems.',
  },
  teamPython: {
    es: 'Equipo PYTHON | AI & Data Team',
    en: 'PYTHON Team | AI & Data Team',
  },
  teamPythonTools: {
    es: 'Herramientas: Python, FastAPI, LangChain, Pandas',
    en: 'Tools: Python, FastAPI, LangChain, Pandas',
  },
  teamPythonDesc: {
    es: 'Algoritmos de IA, web scraping masivo y automatización de reportes corporativos.',
    en: 'AI algorithms, massive web scraping and corporate report automation.',
  },
  teamFrontend: {
    es: 'Equipo FRONTEND | UI Dev Team',
    en: 'FRONTEND Team | UI Dev Team',
  },
  teamFrontendTools: {
    es: 'Herramientas: React, Next.js, Tailwind, WordPress',
    en: 'Tools: React, Next.js, Tailwind, WordPress',
  },
  teamFrontendDesc: {
    es: 'Landing pages, portales corporativos y vistas interactivas de alto rendimiento.',
    en: 'Landing pages, corporate portals and high-performance interactive views.',
  },
  teamBackend: {
    es: 'Equipo BACKEND | API Dev Team',
    en: 'BACKEND Team | API Dev Team',
  },
  teamBackendTools: {
    es: 'Herramientas: Node.js, .NET 8, PostgreSQL, Docker',
    en: 'Tools: Node.js, .NET 8, PostgreSQL, Docker',
  },
  teamBackendDesc: {
    es: 'APIs seguras, pasarelas de pago y bases de datos relacionales escalables.',
    en: 'Secure APIs, payment gateways and scalable relational databases.',
  },
  area2Title: {
    es: 'Área 2 — Innovación y Desarrollo Interno',
    en: 'Area 2 — Innovation & Internal Development',
  },
  teamProps: {
    es: 'Equipo PROPIOS | Labs Team',
    en: 'PROPIOS Team | Labs Team',
  },
  teamPropsTools: {
    es: 'Herramientas: Python, JavaScript, Discord.js',
    en: 'Tools: Python, JavaScript, Discord.js',
  },
  teamPropsDesc: {
    es: 'Construcción del software interno de la empresa: bots, sistemas de registro y herramientas de control.',
    en: 'Building the company\'s internal software: bots, registration systems and control tools.',
  },
  area3Title: {
    es: 'Área 3 — Arquitectura y Diseño Visual',
    en: 'Area 3 — Architecture & Visual Design',
  },
  teamDocs: {
    es: 'Equipo DOCS | Architecture Team',
    en: 'DOCS Team | Architecture Team',
  },
  teamDocsTools: {
    es: 'Herramientas: Notion, Diagrams.net, Miro',
    en: 'Tools: Notion, Diagrams.net, Miro',
  },
  teamDocsDesc: {
    es: 'Consultoría de requerimientos: estructuramos tu idea en un plano técnico listo para desarrollar.',
    en: 'Requirements consulting: we structure your idea into a technical plan ready to develop.',
  },
  teamUxUi: {
    es: 'Equipo UX/UI | Creative Team',
    en: 'UX/UI Team | Creative Team',
  },
  teamUxUiTools: {
    es: 'Herramientas: Figma, Adobe XD, Illustrator',
    en: 'Tools: Figma, Adobe XD, Illustrator',
  },
  teamUxUiDesc: {
    es: 'Prototipado interactivo de alta fidelidad y diseño de identidad de marca.',
    en: 'High-fidelity interactive prototyping and brand identity design.',
  },
  area4Title: {
    es: 'Área 4 — Crecimiento y Pauta Digital',
    en: 'Area 4 — Growth & Digital Strategy',
  },
  teamVentas: {
    es: 'Equipo VENTAS | Sales Team',
    en: 'SALES Team | Sales Team',
  },
  teamVentasTools: {
    es: 'Herramientas: LinkedIn Sales Navigator, CRM, Notion',
    en: 'Tools: LinkedIn Sales Navigator, CRM, Notion',
  },
  teamVentasDesc: {
    es: 'Prospección B2B activa y consultoría de captación comercial en frío.',
    en: 'Active B2B prospecting and cold outreach consulting.',
  },
  teamRedes: {
    es: 'Equipo REDES | Social Media Team',
    en: 'SOCIAL Team | Social Media Team',
  },
  teamRedesTools: {
    es: 'Herramientas: Canva, CapCut, Meta Business',
    en: 'Tools: Canva, CapCut, Meta Business',
  },
  teamRedesDesc: {
    es: 'Gestión mensual de redes sociales y producción de contenido estratégico.',
    en: 'Monthly social media management and strategic content production.',
  },
  teamPauta: {
    es: 'Equipo PAUTA | Media Buying Team',
    en: 'MEDIA Team | Media Buying Team',
  },
  teamPautaTools: {
    es: 'Herramientas: Meta Ads, Google Ads, Analytics',
    en: 'Tools: Meta Ads, Google Ads, Analytics',
  },
  teamPautaDesc: {
    es: 'Campañas pagadas de captación de leads con optimización de retorno de inversión.',
    en: 'Paid lead generation campaigns with ROI optimization.',
  },
  area5Title: {
    es: 'Área 5 — Talento Humano y Legal',
    en: 'Area 5 — Human Talent & Legal',
  },
  teamTalento: {
    es: 'Equipo TALENTO | Talent Team',
    en: 'TALENT Team | Talent Team',
  },
  teamTalentoTools: {
    es: 'Herramientas: LinkedIn, Workable, Notion',
    en: 'Tools: LinkedIn, Workable, Notion',
  },
  teamTalentoDesc: {
    es: 'Headhunting y reclutamiento de talento técnico calificado para otras empresas.',
    en: 'Headhunting and recruitment of qualified technical talent for other companies.',
  },
  teamConvenios: {
    es: 'Equipo CONVENIOS | Legal & Admin Team',
    en: 'PARTNERSHIPS Team | Legal & Admin Team',
  },
  teamConveniosTools: {
    es: 'Herramientas: Excel, Google Drive, Notion',
    en: 'Tools: Excel, Google Drive, Notion',
  },
  teamConveniosDesc: {
    es: 'Gestión de convenios institucionales, reportes semanales y emisión de certificados.',
    en: 'Management of institutional agreements, weekly reports and certificate issuance.',
  },
  area6Title: {
    es: 'Área 6 — Cultura y Clima Laboral',
    en: 'Area 6 — Culture & Work Environment',
  },
  teamBienestar: {
    es: 'Equipo BIENESTAR | Happiness Team',
    en: 'WELLNESS Team | Happiness Team',
  },
  teamBienestarTools: {
    es: 'Herramientas: Discord, Canva, Miro',
    en: 'Tools: Discord, Canva, Miro',
  },
  teamBienestarDesc: {
    es: 'Psicología organizacional, dinámicas de equipo y clima laboral positivo.',
    en: 'Organizational psychology, team dynamics and positive work environment.',
  },
  teamDemo: {
    es: 'Equipo DEMO | Media Production Team',
    en: 'DEMO Team | Media Production Team',
  },
  teamDemoTools: {
    es: 'Herramientas: Premiere, CapCut, OBS',
    en: 'Tools: Premiere, CapCut, OBS',
  },
  teamDemoDesc: {
    es: 'Edición audiovisual y producción del video diario de demostración de proyectos.',
    en: 'Audiovisual editing and production of daily project demo videos.',
  },
  // Skills section titles
  skillsTitleBackend: {
    es: 'Backend',
    en: 'Backend',
  },
  skillsTitleFrontend: {
    es: 'Frontend',
    en: 'Frontend',
  },
  skillsTitleDatabase: {
    es: 'Bases de Datos',
    en: 'Databases',
  },
  skillsTitleSecurity: {
    es: 'Seguridad',
    en: 'Security',
  },
  skillsTitleCloud: {
    es: 'Cloud',
    en: 'Cloud',
  },
  skillsTitleAI: {
    es: 'IA y Metodologías',
    en: 'AI & Methodologies',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('es');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('language', language);
    }
  }, [language, isMounted]);

  const t = useCallback((key: string, params?: Record<string, string | number>): string => {
    let translation = translations[key]?.[language] || key;

    if (params) {
      Object.keys(params).forEach((paramKey) => {
        translation = translation.replace(`{${paramKey}}`, String(params[paramKey]));
      });
    }

    return translation;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  
  // Fallback context for safety if provider isn't available (shouldn't happen with proper setup)
  if (!context) {
    // Create a safe fallback that doesn't throw
    const fallback: LanguageContextType = {
      language: 'es',
      setLanguage: () => {},
      t: (key: string, params?: Record<string, string | number>) => {
        let translation = translations[key]?.es || key;
        
        if (params) {
          Object.keys(params).forEach((paramKey) => {
            translation = translation.replace(`{${paramKey}}`, String(params[paramKey]));
          });
        }
        
        return translation;
      }
    };
    return fallback;
  }
  return context;
}
