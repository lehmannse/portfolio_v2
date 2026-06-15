import React from 'react';
import { useTranslation } from 'react-i18next';

import ExperienceOverview from '../ExperienceOverview';
import SectionContainer from '../SectionContainer';

export default function Experience() {
  const { i18n } = useTranslation();

  return (
    <SectionContainer
      id="experience"
      name="experience"
      // headerMt="-5%"
      headerText={i18n.resolvedLanguage === 'pt' ? 'Experiência' : 'Experience'}
      useHeaderStyle
      style={{ minHeigth: '100vh' }}
    >
      <ExperienceOverview />
    </SectionContainer>
  );
}
