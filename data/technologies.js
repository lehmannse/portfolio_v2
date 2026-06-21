const technologies = [
  'React',
  'Next.js',
  'React Native',
  'Expo',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'Supabase',
  'TanStack React Query',
  'React Hook Form',
  'Zod',
  'Tailwind',
  'shadcn/ui',
  'Firebase (push)',
  'Google Maps',
  '@react-pdf/renderer',
  'Jest',
  'Maestro',
  'Git',
  'CI/CD',
];

const midpoint = Math.ceil(technologies.length / 2);

export const technologiesTop = technologies.slice(0, midpoint);
export const technologiesBottom = technologies.slice(midpoint);

export default technologies;
