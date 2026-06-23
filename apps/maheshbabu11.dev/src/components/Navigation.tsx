import clsx from 'clsx';
import { m } from 'framer-motion';
import { useRouter } from 'next/router';

import { GitHubIcon, InstagramIcon, LinkedInIcon } from '@/components/Icons';
import { useLanguage, type Language } from '@/contexts/LanguageContext';
import NavIcon from '@/components/navigations/NavIcon';
import NavIconQuickAccess from '@/components/navigations/NavIconQuickAccess';
import NavLink from '@/components/navigations/NavLink';
import NavLogo from '@/components/navigations/NavLogo';

import useOnScroll from '@/hooks/useOnScroll';

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <li className={clsx('flex items-center')}>
      <div className={clsx('flex gap-1 rounded-full bg-slate-100 p-1 dark:bg-slate-800')}>
        <m.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleLanguageChange('es')}
          className={clsx(
            'px-3 py-1 text-xs font-semibold rounded-full transition-all',
            language === 'es'
              ? 'bg-accent-500 text-white dark:bg-accent-400'
              : 'text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
          )}
        >
          ES
        </m.button>
        <m.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleLanguageChange('en')}
          className={clsx(
            'px-3 py-1 text-xs font-semibold rounded-full transition-all',
            language === 'en'
              ? 'bg-accent-500 text-white dark:bg-accent-400'
              : 'text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
          )}
        >
          EN
        </m.button>
      </div>
    </li>
  );
}

function Navbar() {
  const isScrolled = useOnScroll(0);
  const { t } = useLanguage();
  const router = useRouter();

  const workLinks = [
    { title: t('skills'), href: '/work/skills-and-tools' },
    { title: t('experience'), href: '/work/experience' },
    { title: t('servicios'), href: '/work/servicios' },
    { title: t('contact'), href: '/work/contact' },
  ];
  const currentPath = router.asPath.split('?')[0];
  const isRouteActive = (href: string) =>
    currentPath === href || currentPath.startsWith(`${href}/`);

  return (
    <header
      className={clsx('fixed left-0 right-0 top-0 z-[1000]', 'fm:absolute')}
    >
      <div
        className={clsx(
          'fixed inset-0 h-16',
          [
            isScrolled === true && [
              'border-divider-light border-b bg-white/70 backdrop-blur',
              'dark:border-divider-dark dark:bg-slate-900/80',
            ],
          ],
          'fm:hidden'
        )}
      />
      <div className={clsx('h-2', [isScrolled === true && ['-mt-2']])} />
      <div className={clsx('content-wrapper-max')}>
        <div
          className={clsx(
            'relative z-50 flex h-16 items-center justify-between px-2 text-sm',
            'md:px-4'
          )}
        >
          <nav className={clsx('flex', 'md:gap-2')} data-accent="violet">
            <NavLogo href="/" title="Home" />
            <ul className={clsx('flex items-center', 'md:gap-1')}>
              <li className="mx-3 h-5 w-px bg-slate-200 dark:bg-slate-700" />
              <li>
                <NavLink
                  title={t('projects')}
                  href="/projects"
                  active={isRouteActive('/projects')}
                />
              </li>
              {workLinks.map((item) => (
                <li key={item.href}>
                  <NavLink
                    title={item.title}
                    href={item.href}
                    active={isRouteActive(item.href)}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <ul className={clsx('flex items-center')}>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://linkedin.com/in/junior-sulca-mendez-980366219"
                icon={<LinkedInIcon className={clsx('h-5 w-5')} />}
                title="LinkedIn"
              />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://www.instagram.com/jean_sm2743/"
                icon={<InstagramIcon className={clsx('h-5 w-5')} />}
                title="Instagram"
              />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://github.com/Jean-snt"
                icon={<GitHubIcon className={clsx('h-5 w-5')} />}
                title="GitHub"
              />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
              <div
                className={clsx(
                  'ml-2 mr-4 h-3 w-[1px] bg-slate-200',
                  'dark:bg-slate-700'
                )}
              />
            </li>
            <LanguageSwitcher />
            <li className={clsx('mr-2')}>
              <NavIconQuickAccess />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
