import '../i18n';

import React from 'react';

import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Experience from '../components/sections/Experience';
import Landing from '../components/sections/Landing';
import MoreProjects from '../components/sections/MoreProjects';
import Projects from '../components/sections/Projects';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Landing />
      <About />
      <Experience />
      <Projects />
      <MoreProjects />
      <Contact />
    </div>
  );
}
