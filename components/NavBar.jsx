// eslint-disable-next-line
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Link,
  Stack,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  HStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import useLanguageToggle from '../i18n/useLanguageToggle';
import { colors } from '../theme';
import BRAFlagIcon from './icons/BRAFlagIcon';
import EUAFlagIcon from './icons/EUAFlagIcon';

const Logo = () => {
  const logo = useColorModeValue('/logo.png', '/logo-dark.png');

  return (
    <button
      type="button"
      className="navbar-logo"
      aria-label="Filipe Lehmann home"
      onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
    >
      <img alt="Filipe Lehmann logo" src={logo} width={28} height={28} />
      <span className="navbar-logo-text">Filipe Lehmann</span>
    </button>
  );
};

const MenuToggle = ({ isOpen, onOpen }) => {
  const border = useColorModeValue('gray.300', 'gray.600');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <Button
        onClick={onOpen}
        variant="ghost"
        border="1px solid"
        borderColor={border}
        borderRadius="0"
        minW="40px"
        h="40px"
        p={0}
        _hover={{ bg: hoverBg }}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon boxSize={4} />}
      </Button>
    </Box>
  );
};

const isInternalHref = (href) =>
  Boolean(href && href.startsWith('/') && !href.startsWith('//'));

const NavButtons = ({ size, onClose }) => {
  const { t, i18n } = useTranslation();
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  const hoverBg = useColorModeValue('gray.100', 'gray.700');

  const [isClient, setIsClient] = React.useState(false);
  const [navItems, setNavItems] = React.useState([]);

  React.useEffect(() => {
    setIsClient(true);
    const options = t('navbar', { returnObjects: true });
    if (options && Array.isArray(options)) {
      setNavItems(options);
    }
  }, [t, i18n.resolvedLanguage]);

  if (!isClient) {
    return (
      <Button size={size} variant="ghost" visibility="hidden">
        Loading
      </Button>
    );
  }

  const renderNavLabel = (btn) => {
    if (btn.href && isInternalHref(btn.href)) {
      return btn.label;
    }

    if (btn.href) {
      return (
        <Link href={btn.href} isExternal>
          {btn.label}
        </Link>
      );
    }

    return (
      <ScrollLink
        to={btn.section.toLowerCase()}
        spy
        smooth
        offset={-88}
        duration={500}
        onClick={onClose}
      >
        {btn.label}
      </ScrollLink>
    );
  };

  const btns = navItems.map((btn) => {
    const isInternalLink = btn.href && isInternalHref(btn.href);

    return (
      <Button
        key={btn.label}
        as={isInternalLink ? NextLink : undefined}
        href={isInternalLink ? btn.href : undefined}
        size={size}
        variant="ghost"
        onClick={isInternalLink ? onClose : undefined}
        className="navbar-link"
        borderRadius="0"
        fontFamily="var(--font-mono)"
        fontSize="11px"
        letterSpacing="0.08em"
        textTransform="uppercase"
        fontWeight="600"
        px={3}
        h="36px"
        transition="opacity 0.15s ease"
        _hover={{
          bg: hoverBg,
          color: secondary,
          transform: 'none',
        }}
        _active={{
          transform: 'none',
        }}
      >
        {renderNavLabel(btn)}
      </Button>
    );
  });

  return <>{btns}</>;
};

const ColorModeButton = ({ mr }) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue('dark', 'light');
  const { i18n } = useTranslation();
  const border = useColorModeValue('gray.300', 'gray.600');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Tooltip
      label={
        i18n.resolvedLanguage === 'pt'
          ? `Alternar para modo ${nextMode}`
          : `Toggle ${nextMode} mode`
      }
      aria-label={
        i18n.resolvedLanguage === 'pt'
          ? `Alternar para modo ${nextMode}`
          : `Toggle ${nextMode} mode`
      }
    >
      <IconButton
        size="sm"
        fontSize="md"
        aria-label={
          i18n.resolvedLanguage === 'pt'
            ? `Alternar para modo ${nextMode}`
            : `Toggle ${nextMode} mode`
        }
        variant="ghost"
        border="1px solid"
        borderColor={border}
        borderRadius="0"
        minW="40px"
        h="40px"
        _hover={{ bg: hoverBg }}
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        style={{ marginRight: mr }}
        transition="opacity 0.15s ease"
        _active={{
          transform: 'none',
        }}
      />
    </Tooltip>
  );
};

const LanguageButton = ({ mr }) => {
  const { i18n } = useTranslation();
  const { currentLanguage, toggleLanguage } = useLanguageToggle();
  const [isClient, setIsClient] = React.useState(false);
  const border = useColorModeValue('gray.300', 'gray.600');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');

  React.useEffect(() => {
    setIsClient(true);
  }, [i18n.resolvedLanguage]);

  const flag =
    isClient && (currentLanguage === 'pt' ? <BRAFlagIcon /> : <EUAFlagIcon />);

  return (
    <Tooltip label="Switch language" aria-label="Switch language">
      <IconButton
        aria-label={
          isClient && currentLanguage === 'pt'
            ? 'Trocar de linguagem'
            : 'Switch language'
        }
        variant="ghost"
        border="1px solid"
        borderColor={border}
        borderRadius="0"
        minW="40px"
        h="40px"
        _hover={{ bg: hoverBg }}
        color="current"
        onClick={toggleLanguage}
        icon={flag}
        style={{ marginRight: mr }}
        isLoading={!isClient}
        transition="opacity 0.15s ease"
        _active={{
          transform: 'none',
        }}
      />
    </Tooltip>
  );
};

const MenuLinks = ({ onClose }) => (
  <HStack
    display={{ base: 'none', sm: 'none', md: 'flex' }}
    spacing="4px"
    alignItems="center"
  >
    <NavButtons size="sm" onClose={onClose} />
    <LanguageButton mr="0" />
    <ColorModeButton mr="0" />
  </HStack>
);

const NavMenu = ({ isOpen, onClose }) => (
  <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay>
      <DrawerContent borderRadius="0">
        <DrawerBody>
          <Stack
            alignItems="center"
            justifyContent="center"
            direction={['column']}
            spacing="16px"
            mt="20vh"
          >
            <NavButtons size="lg" onClose={onClose} />
            <LanguageButton />
            <ColorModeButton />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
);

export default function Navbar() {
  const { pathname } = useRouter();
  const isCvPage = pathname === '/cv';
  const primary = useColorModeValue(
    colors.primary07.light,
    colors.primary07.dark
  );
  const shadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.08)',
    'rgba(0, 0, 0, 0.35)'
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const { scrollY } = window;
    const { scrollHeight, clientHeight } = document.documentElement;
    const maxScroll = scrollHeight - clientHeight;
    const bottomThreshold = 300;
    const distanceFromBottom = maxScroll - scrollY;
    let progress = 0;
    if (distanceFromBottom < bottomThreshold) {
      progress = 1 - distanceFromBottom / bottomThreshold;
    }
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const border = useColorModeValue('gray.200', 'gray.700');
  const translateScroll = -148 * scrollProgress;

  return (
    <div
      id="navbar"
      className="navbar-wrap"
      style={{
        position: 'fixed',
        opacity: isCvPage ? 1 : 0,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 97,
        display: 'flex',
        justifyContent: 'center',
        width: '100vw',
        boxSizing: 'border-box',
        transform: `translateY(${translateScroll}%)`,
        padding: '12px 24px 0',
      }}
    >
      <Box
        className="navbar"
        as="header"
        bg={primary}
        boxShadow={`0 8px 30px ${shadowColor}`}
        border="1px solid"
        borderColor={border}
        backdropFilter="blur(10px)"
        zIndex={99}
        maxW="1200px"
        w="100%"
      >
        <HStack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          px={{ base: 2, md: 4 }}
          py={2}
          minH="52px"
          gap={3}
        >
          <Logo />
          <Box flex="1" />
          <MenuLinks onClose={onClose} />
          <NavMenu isOpen={isOpen} onClose={onClose} />
          <MenuToggle isOpen={isOpen} onOpen={onOpen} />
        </HStack>
      </Box>
    </div>
  );
}
