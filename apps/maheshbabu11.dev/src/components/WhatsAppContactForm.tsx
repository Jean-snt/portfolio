import clsx from 'clsx';
import { m } from 'framer-motion';
import { useState, type FormEvent } from 'react';

import { MailIcon } from '@/components/Icons';
import { useLanguage } from '@/contexts/LanguageContext';

export function WhatsAppContactForm() {
  const [message, setMessage] = useState('');
  const { t, language } = useLanguage();
  const suggestedMessage =
    language === 'es'
      ? 'Hola Junior, me interesa conocer tus servicios. Quiero conversar sobre un proyecto.'
      : 'Hi Junior, I am interested in your services. I would like to discuss a project.';

  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault();
    const phoneNumber = '51991488770';
    const encodedMessage = encodeURIComponent(message || suggestedMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const email = 'juniorgiancarlo2743@gmail.com';
    const subject =
      language === 'es' ? 'Consulta de Servicios' : 'Services Inquiry';
    const body = message || suggestedMessage;
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <div
      className={clsx(
        'rounded-lg border border-slate-200 bg-white p-5 shadow-sm',
        'dark:border-slate-800 dark:bg-slate-900/70'
      )}
    >
      <form
        onSubmit={handleWhatsAppSubmit}
        className={clsx('flex flex-col gap-4')}
      >
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={suggestedMessage}
          className={clsx(
            'min-h-[160px] w-full resize-y rounded-lg border border-slate-300 bg-white p-4',
            'text-slate-900 placeholder-slate-500 transition-colors',
            'focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200',
            'dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100',
            'dark:placeholder-slate-400 dark:focus:border-accent-400 dark:focus:ring-accent-900'
          )}
        />
        <m.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className={clsx(
            'flex items-center justify-center gap-2 rounded-lg bg-accent-600 px-6 py-3',
            'font-semibold text-white transition-colors hover:bg-accent-700',
            'dark:bg-accent-500 dark:hover:bg-accent-600'
          )}
        >
          {t('whatsappSend')}
        </m.button>
        <m.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={handleEmailClick}
          className={clsx(
            'flex items-center justify-center gap-2 rounded-lg border border-accent-600 px-6 py-3',
            'font-semibold text-accent-600 transition-colors hover:bg-accent-600/10',
            'dark:border-accent-400 dark:text-accent-400 dark:hover:bg-accent-400/10'
          )}
        >
          <MailIcon className="h-5 w-5" />
          {t('emailSend')}
        </m.button>
      </form>
    </div>
  );
}
