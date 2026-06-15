import React from 'react';
import { useTranslation } from 'react-i18next';

import ProjectsOverview from '../ProjectsOverview';
import SectionContainer from '../SectionContainer';

export default function MoreProjects() {
  const { i18n } = useTranslation();
  return (
    <SectionContainer
      id="projects"
      name="projects"
      headerText={
        i18n.resolvedLanguage === 'pt'
          ? 'Projetos em Destaque'
          : 'Featured Projects'
      }
      useHeaderStyle
    >
      <ProjectsOverview />
    </SectionContainer>
  );
}
