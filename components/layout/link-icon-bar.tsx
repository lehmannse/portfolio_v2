import { BiLink } from 'react-icons/bi';
import { FaLinkedin, FaTelegram } from 'react-icons/fa';
import { IoLogoWhatsapp, IoMdDocument } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { VscGithubInverted } from 'react-icons/vsc';
import type { IconType } from 'react-icons';

import { IconLink } from '@/lib/links';
import { cn } from '@/lib/utils';

const icons: Record<string, IconType> = {
  github: VscGithubInverted,
  linkedin: FaLinkedin,
  email: MdEmail,
  document: IoMdDocument,
  link: BiLink,
  whatsapp: IoLogoWhatsapp,
  telegram: FaTelegram,
};

export function LinkIconBar({
  links,
  className,
}: {
  links: IconLink[];
  className?: string;
}) {
  return (
    <div className={cn('flex items-center justify-center gap-5', className)}>
      {links.map((link) => {
        const Icon = icons[link.icon] ?? BiLink;
        const isExternal = link.url.startsWith('http');
        return (
          <a
            key={link.label}
            href={link.url}
            aria-label={link.label}
            title={link.label}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            className="text-muted-foreground transition-colors hover:text-brand"
          >
            <Icon className="size-6" />
          </a>
        );
      })}
    </div>
  );
}
