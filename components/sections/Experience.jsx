import { useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { technologiesBottom, technologiesTop } from '../../data/technologies';
import { colors } from '../../theme';
import ExperienceOverview from '../ExperienceOverview';
import SectionContainer from '../SectionContainer';
import TechTicker from '../TechTicker';

export default function Experience() {
  const { i18n } = useTranslation();
  const tickerColor = useColorModeValue(
    colors.primary.dark,
    colors.primary.light
  );

  return (
    <>
      <div style={{ color: tickerColor }}>
        <TechTicker items={technologiesTop} />
      </div>
      <SectionContainer
        id="experience"
        name="experience"
        headerText={
          i18n.resolvedLanguage === 'pt' ? 'Experiência' : 'Experience'
        }
        useHeaderStyle
      >
        <ExperienceOverview />
      </SectionContainer>
      <div style={{ color: tickerColor }}>
        <TechTicker items={technologiesBottom} reverse />
      </div>
    </>
  );
}
