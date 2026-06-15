import {
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as LinkScroll } from 'react-scroll';

import landingStyles from '../../styles/sections/Landing.module.css';
import { colors } from '../../theme';
import SectionContainer from '../SectionContainer';

const HighlightedText = ({ text, highlights, styleProps }) => {
  const elements = [];
  let lastIndex = 0;

  // Sort highlights by their position in the text to process them in order
  const sortedHighlights = [...highlights].sort((a, b) => {
    const indexA = text.indexOf(a.text);
    const indexB = text.indexOf(b.text);
    return indexA - indexB;
  });

  sortedHighlights.forEach((highlight, idx) => {
    const index = text.indexOf(highlight.text, lastIndex);
    if (index === -1) return; // Skip if text not found

    // Add text before the highlight
    if (index > lastIndex) {
      elements.push(
        <React.Fragment key={`text-${idx}`}>
          {text.substring(lastIndex, index)}
        </React.Fragment>
      );
    }

    // Add the highlighted element
    if (highlight.url) {
      elements.push(
        <Link
          key={`highlight-${idx}`}
          href={highlight.url}
          style={styleProps[highlight.style]}
          isExternal
        >
          {highlight.text}
        </Link>
      );
    } else {
      elements.push(
        <span key={`highlight-${idx}`} style={styleProps[highlight.style]}>
          {highlight.text}
        </span>
      );
    }

    lastIndex = index + highlight.text.length;
  });

  // Add any remaining text
  if (lastIndex < text.length) {
    elements.push(
      <React.Fragment key="text-final">
        {text.substring(lastIndex)}
      </React.Fragment>
    );
  }

  return <Text>{elements}</Text>;
};

const Bio = ({ secondary }) => {
  const normalLinkStyle = { color: secondary };
  const strongLinkStyle = { color: secondary, fontWeight: 'bold' };
  const textStyles = { normal: normalLinkStyle, strong: strongLinkStyle };

  // const tertiary = useColorModeValue(
  //   colors.tertiary.light,
  //   colors.tertiary.dark
  // );
  const { t } = useTranslation();

  return (
    <GridItem className={landingStyles.grid} style={{ position: 'relative' }}>
      <VStack
        style={{ textAlign: 'justify' }}
        m="auto"
        w="75%"
        spacing="12px"
        pt="5%"
        zIndex={10}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          {t('about.headline')}
        </Text>
        <Text>{t('about.intro')}</Text>
        <HighlightedText
          text={t('about.education.text')}
          highlights={t('about.education.highlights', { returnObjects: true })}
          styleProps={textStyles}
        />
        <HighlightedText
          text={t('about.skills.text')}
          highlights={t('about.skills.highlights', { returnObjects: true })}
          styleProps={textStyles}
        />
        <LinkScroll
          to="contact"
          spy
          smooth
          offset={-50}
          duration={1500}
          activeClass="active"
          style={{ fontSize: '14px' }}
        >
          <Text
            as="strong"
            className={`${landingStyles.learn}`}
            _hover={{ cursor: 'pointer', color: secondary }}
          >
            {t('about.cta')}
          </Text>
        </LinkScroll>
      </VStack>
      {/* <div
        style={{
          background: secondary,
          height: '160px',
          width: '160px',
          position: 'absolute',
          zIndex: 2,
          top: -40,
          left: -20,
          // filter: 'blur(80.5px)',
        }}
      />
      <div
        style={{
          background: tertiary,
          height: '160px',
          width: '160px',
          position: 'absolute',
          zIndex: 1,
          top: -60,
          left: -35,
          // filter: 'blur(80.5px)',
        }}
      /> */}
    </GridItem>
  );
};

const Headshot = () => (
  <GridItem className={landingStyles.grid}>
    <Image
      m="auto"
      src="/me.jpg"
      alt="Filipe Lehmann"
      zIndex={1}
      className="image"
      style={{
        height: '300px',
        borderRadius: '100%',
      }}
      onClick={() => {
        window.open('http://linkedin.com/in/filipe-lehmann-pereira/');
      }}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );

  const { t } = useTranslation();

  return (
    <SectionContainer
      id="about"
      name="about"
      headerText={t('about.header')}
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pr="10%"
        spacing={12}
        columns={[1, 1, 2]}
        justifyContent="center"
        position="relative"
      >
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
