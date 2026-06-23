import clsx from 'clsx';
import Link from 'next/link';

import type { ReactNode } from 'react';

export type NavLinkProps = {
  title: string;
  href: string;
  icon?: ReactNode;
  active?: boolean;
};

function NavLink({ title, href, icon = null, active = false }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className={clsx(
        'nav-link',
        active && [
          'relative',
          'text-blue-600 dark:text-blue-400',
          'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2',
          'after:w-0 after:h-0 after:border-l-[4px] after:border-r-[4px] after:border-b-[4px]',
          'after:border-transparent after:border-b-blue-600 dark:after:border-b-blue-400'
        ]
      )}
    >
      {title}
      {icon}
    </Link>
  );
}

export default NavLink;
