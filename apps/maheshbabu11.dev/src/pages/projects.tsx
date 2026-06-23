import ProjectsContents from '@/contents/projects';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';
import { useLanguage } from '@/contexts/LanguageContext';

function Projects() {
  const { language } = useLanguage();

  return (
    <Page
      frontMatter={{
        title: language === 'es' ? 'Proyectos' : 'Projects',
        description:
          language === 'es'
            ? 'Muestra de trabajos, soluciones y sistemas que he construido.'
            : 'Showcase of my work, solutions, and systems I have built.',
      }}
      headerImage={<HeaderImage />}
    >
      <ProjectsContents />
    </Page>
  );
}

export default Projects;
