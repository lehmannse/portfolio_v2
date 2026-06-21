import React from 'react';
import { useTranslation } from 'react-i18next';

import ExperienceOverview from '../ExperienceOverview';
import HexagonPattern from '../HexagonPattern';
import SectionContainer from '../SectionContainer';

export default function Experience() {
  const { i18n } = useTranslation();

  return (
    <SectionContainer
      id="experience"
      name="experience"
      headerText={i18n.resolvedLanguage === 'pt' ? 'Experiência' : 'Experience'}
      useHeaderStyle
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(28, 167, 208, 0.12) 0%, rgba(144, 205, 244, 0.08) 45%, rgba(37, 41, 52, 0.02) 100%)',
          }}
        />
        <HexagonPattern
          stroke="#90cdf4"
          strokeOpacity={0.14}
          radius={24}
          gap={8}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <ExperienceOverview />
      </div>
    </SectionContainer>
  );
}
