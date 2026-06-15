/* eslint-disable no-console */
import { Box, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsChevronDown } from 'react-icons/bs';
import { animateScroll as scroll } from 'react-scroll';

import links from '../data/footerLinks';
import styles from '../styles/sections/Footer.module.css';
import { colors } from '../theme';
import LinkIconBar from './LinkIconBar';

export default function Footer() {
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );

  const { t } = useTranslation();

  return (
    <Box as="footer" textAlign="center" className="app" pb={8}>
      <VStack className={styles.reverse}>
        <BsChevronDown />
      </VStack>
      <Box onClick={scroll.scrollToTop}>
        <Text
          as="strong"
          _hover={{
            color: secondary,
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
          }}
        >
          {t('footer')}{' '}
        </Text>
      </Box>
      <LinkIconBar mt={4} links={links} />
    </Box>
  );
}
