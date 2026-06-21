export interface IconLink {
  label: string;
  icon: string;
  url: string;
}

export const footerLinks: IconLink[] = [
  { label: 'Github', icon: 'github', url: 'https://github.com/lehmannse/' },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/filipe-lehmann-pereira/',
  },
  { label: 'CV', icon: 'document', url: '/resume.pdf' },
];

export const contactLinks: IconLink[] = [
  { label: 'Whatsapp', icon: 'whatsapp', url: 'https://wa.me/553391590880' },
  { label: 'Email', icon: 'email', url: 'mailto:filipelehmannp@gmail.com' },
  { label: 'Telegram', icon: 'telegram', url: 'https://t.me/FilipeLehmann' },
];
