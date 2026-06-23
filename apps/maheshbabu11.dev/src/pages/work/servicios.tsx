import ServiciosContents from '@/contents/work/servicios';
import Page from '@/contents-layouts/Page';
import { useLanguage } from '@/contexts/LanguageContext';

function Servicios() {
  const { t, language } = useLanguage();

  return (
    <Page
      frontMatter={{
        title: language === 'es' ? 'Mis Servicios' : 'My Services',
        description: language === 'es' ? 'Cuento con Equipos especializados a ofrecer diversos servicios.' : 'Professional services for clients.',
        caption: language === 'es' ? 'Trabajo' : 'Work',
      }}
    >
      <div className="content-wrapper space-y-6">
        <h2>{t('servicesTitle')}</h2>
        <ServiciosContents />
      </div>
    </Page>
  );
}

export default Servicios;
