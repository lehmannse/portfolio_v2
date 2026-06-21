'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ backgroundSize: '0% 100%' }}
      animate={{ backgroundSize: '100% 100%' }}
      transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={cn(
        'rounded-md bg-gradient-to-r from-sky-300/60 to-brand/50 px-1 dark:from-sky-500/40 dark:to-brand/40',
        className
      )}
    >
      {children}
    </motion.span>
  );
}
