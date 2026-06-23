import clsx from 'clsx';

import { GitHubIcon, InstagramIcon, LinkedInIcon } from '@/components/Icons';
import { useLanguage } from '@/contexts/LanguageContext';

import dayjs from '@/utils/dayjs';

function FooterDescription() {
  const { t } = useLanguage();

  return (
    <div className={clsx('max-w-[348px]')}>
      <div
        className={clsx(
          'mb-3 text-[13px] text-slate-600',
          'dark:text-slate-400'
        )}
      >
        {t('aboutMe')}
      </div>
      <p
        className={clsx('mb-4 font-normal leading-relaxed')}
        dangerouslySetInnerHTML={{ __html: t('aboutDescription') }}
      />
      <ul className={clsx('-ml-2 flex gap-1')}>
        <li>
          <a
            href="https://github.com/Jean-snt"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="GitHub"
            title="GitHub"
          >
            <GitHubIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/junior-sulca-mendez-980366219"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/jean_sm2743/"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="Instagram"
            title="Instagram"
          >
            <InstagramIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  const { t } = useLanguage();
  const year = dayjs().format('YYYY');

  return (
    <footer
      className={clsx(
        'background-grid background-grid--fade-in border-divider-light mt-5 pt-16 text-sm text-slate-900',
        'dark:border-divider-dark dark:text-slate-200'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('py-10 font-semibold')}>
          <div className={clsx('flex flex-col-reverse', 'lg:flex-row')}>
            <div className={clsx('flex-1')}>
              <FooterDescription />
            </div>
            <div className={clsx('flex flex-1 flex-col sm:flex-row')}>
              <img
                className="h-30 w-60"
                alt="Github Stats"
                src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Jean-snt&theme=transparent"
              />
              <img
                className="h-50 w-80"
                alt="Github Profile Summary"
                src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Jean-snt&theme=transparent"
              />
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'border-divider-light flex justify-between border-t py-6 text-xs',
            'dark:border-divider-dark'
          )}
        >
          <div className={clsx('font-semibold')}>
            {t('copyright', { year })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
