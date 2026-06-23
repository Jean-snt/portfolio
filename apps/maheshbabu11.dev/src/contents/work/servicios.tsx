import { useLanguage } from '@/contexts/LanguageContext';

function ServiciosContents() {
  const { t } = useLanguage();

  const sections = [
    {
      titleKey: 'area1Title',
      teams: [
        {
          nameKey: 'teamJava',
          toolsKey: 'teamJavaTools',
          descKey: 'teamJavaDesc',
        },
        {
          nameKey: 'teamPython',
          toolsKey: 'teamPythonTools',
          descKey: 'teamPythonDesc',
        },
        {
          nameKey: 'teamFrontend',
          toolsKey: 'teamFrontendTools',
          descKey: 'teamFrontendDesc',
        },
        {
          nameKey: 'teamBackend',
          toolsKey: 'teamBackendTools',
          descKey: 'teamBackendDesc',
        },
      ],
    },
    {
      titleKey: 'area2Title',
      teams: [
        {
          nameKey: 'teamProps',
          toolsKey: 'teamPropsTools',
          descKey: 'teamPropsDesc',
        },
      ],
    },
    {
      titleKey: 'area3Title',
      teams: [
        {
          nameKey: 'teamDocs',
          toolsKey: 'teamDocsTools',
          descKey: 'teamDocsDesc',
        },
        {
          nameKey: 'teamUxUi',
          toolsKey: 'teamUxUiTools',
          descKey: 'teamUxUiDesc',
        },
      ],
    },
    {
      titleKey: 'area4Title',
      teams: [
        {
          nameKey: 'teamVentas',
          toolsKey: 'teamVentasTools',
          descKey: 'teamVentasDesc',
        },
        {
          nameKey: 'teamRedes',
          toolsKey: 'teamRedesTools',
          descKey: 'teamRedesDesc',
        },
        {
          nameKey: 'teamPauta',
          toolsKey: 'teamPautaTools',
          descKey: 'teamPautaDesc',
        },
      ],
    },
    {
      titleKey: 'area5Title',
      teams: [
        {
          nameKey: 'teamTalento',
          toolsKey: 'teamTalentoTools',
          descKey: 'teamTalentoDesc',
        },
        {
          nameKey: 'teamConvenios',
          toolsKey: 'teamConveniosTools',
          descKey: 'teamConveniosDesc',
        },
      ],
    },
    {
      titleKey: 'area6Title',
      teams: [
        {
          nameKey: 'teamBienestar',
          toolsKey: 'teamBienestarTools',
          descKey: 'teamBienestarDesc',
        },
        {
          nameKey: 'teamDemo',
          toolsKey: 'teamDemoTools',
          descKey: 'teamDemoDesc',
        },
      ],
    },
  ];

  return (
    <div className="space-y-10">
      {sections.map((section, sectionIdx) => (
        <div key={sectionIdx} className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-l-4 border-accent-500 pl-4">
            {t(section.titleKey)}
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {section.teams.map((team, teamIdx) => (
              <div
                key={teamIdx}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-accent-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-3 flex items-center gap-2">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {t(team.nameKey)}
                  </h4>
                </div>
                <p className="mb-2 text-xs font-semibold text-accent-600 dark:text-accent-400">
                  {t(team.toolsKey)}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {t(team.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiciosContents;
