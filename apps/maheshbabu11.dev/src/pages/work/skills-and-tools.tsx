import SkillsAndToolsContents from '@/contents/work/skills-and-tools';
import Page from '@/contents-layouts/Page';
import { useLanguage } from '@/contexts/LanguageContext';

function SkillsAndTools() {
  const { language } = useLanguage();

  return (
    <Page
      frontMatter={{
        title: language === 'es' ? 'Habilidades & Herramientas' : 'Skills & Tools',
        description: language === 'es' ? 'Un vistazo a todos los lenguajes de programación, librerías y herramientas con las que he trabajado.' : 'A look at all the programming languages, libraries, and tools I\'ve worked with.',
        caption: language === 'es' ? 'Trabajo' : 'Work',
      }}
    >
      <SkillsAndToolsContents />
    </Page>
  );
}

export default SkillsAndTools;
