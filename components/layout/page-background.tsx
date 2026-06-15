export function PageBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-x-0 top-0 h-screen bg-gradient-to-b from-sky-200/70 to-background dark:from-[#2a4365] dark:to-[#1a202c]" />
      <div className="absolute inset-x-0 bottom-0 h-screen bg-gradient-to-t from-sky-200/70 to-background dark:from-[#2a4365] dark:to-[#1a202c]" />
    </div>
  );
}
