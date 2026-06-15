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
  Container,
  HStack,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { colors } from '../theme';
import BRAFlagIcon from './icons/BRAFlagIcon';
import EUAFlagIcon from './icons/EUAFlagIcon';

const Logo = () => {
  const logo = useColorModeValue('/logo.png', '/logo-dark.png');

  return (
    <Box m="4">
      <img
        id="logo"
        alt="Portfolio Logo"
        src={logo}
        width={30}
        height={30}
        onClick={scroll.scrollToTop}
      />
    </Box>
  );
};

const MenuToggle = ({ isOpen, onOpen }) => {
  const bg = useColorModeValue('gray.100', 'gray.700');
  const hoverBg = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <Button
        onClick={onOpen}
        bg={bg}
        _hover={{ bg: hoverBg }}
        borderRadius="lg"
        transition="all 0.3s ease"
        _active={{
          transform: 'scale(0.95)',
        }}
      >
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </Button>
    </Box>
  );
};

const NavButtons = ({ size, onClose }) => {
  const { t, i18n } = useTranslation();
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  // Hoist color mode value out of the map to avoid calling hooks inside loops
  const hoverBgButton = useColorModeValue('gray.100', 'gray.700');

  // Use state to handle client-side rendering
  const [isClient, setIsClient] = React.useState(false);
  const [navItems, setNavItems] = React.useState([]);

  // Only update navigation items after component mounts on client
  React.useEffect(() => {
    setIsClient(true);
    const options = t('navbar', { returnObjects: true });
    if (options && Array.isArray(options)) {
      setNavItems(options);
    }
  }, [t, i18n.resolvedLanguage]);

  // For server-side rendering, use a simple placeholder that will be replaced on client
  if (!isClient) {
    return (
      <>
        <Button size={size} variant="ghost" visibility="hidden">
          Loading
        </Button>
      </>
    );
  }

  // Client-side rendering with actual navigation items
  const btns = navItems.map((btn) => (
    <Button
      key={btn.label}
      size={size}
      variant="ghost"
      onClick={onClose}
      borderRadius="lg"
      transition="all 0.3s ease"
      _hover={{
        bg: hoverBgButton,
        color: secondary,
        transform: 'translateY(-2px)',
      }}
      _active={{
        transform: 'scale(0.95)',
      }}
      fontWeight="medium"
    >
      {btn.href ? (
        <Link href={btn.href} isExternal>
          {btn.label}
        </Link>
      ) : (
        <ScrollLink
          to={btn.section.toLowerCase()}
          href={btn.href}
          spy
          smooth
          offset={-70}
          duration={500}
          onClick={onClose}
        >
          {btn.label}
        </ScrollLink>
      )}
    </Button>
  ));

  return <>{btns}</>;
};

const ColorModeButton = ({ mr }) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue('dark', 'light');
  const { i18n } = useTranslation();
  const bg = useColorModeValue('gray.100', 'gray.700');
  const hoverBg = useColorModeValue('gray.200', 'gray.600');

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
        size="md"
        fontSize="lg"
        aria-label={
          i18n.resolvedLanguage === 'pt'
            ? `Alternar para modo ${nextMode}`
            : `Toggle ${nextMode} mode`
        }
        variant="ghost"
        bg={bg}
        _hover={{ bg: hoverBg }}
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        style={{ marginRight: mr }}
        borderRadius="lg"
        transition="all 0.3s ease"
        _active={{
          transform: 'scale(0.95)',
        }}
      />
    </Tooltip>
  );
};

const LanguageButton = ({ mr }) => {
  const { i18n } = useTranslation();
  // Use state to track client-side language to prevent hydration mismatch
  const [currentLanguage, setCurrentLanguage] = React.useState('en');
  const [isClient, setIsClient] = React.useState(false);
  const bg = useColorModeValue('gray.100', 'gray.700');
  const hoverBg = useColorModeValue('gray.200', 'gray.600');

  // Only update language state after component mounts on client
  React.useEffect(() => {
    setIsClient(true);
    setCurrentLanguage(i18n.resolvedLanguage || 'en');
  }, [i18n.resolvedLanguage]);

  const handleChangeLanguage = (lng) => {
    const newLang = lng === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
    setCurrentLanguage(newLang);
  };

  // Only render the actual flag icon on client-side to prevent hydration mismatch
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
        bg={bg}
        _hover={{ bg: hoverBg }}
        color="current"
        onClick={() => handleChangeLanguage(currentLanguage)}
        icon={flag}
        style={{ marginRight: mr }}
        isLoading={!isClient}
        borderRadius="lg"
        transition="all 0.3s ease"
        _active={{
          transform: 'scale(0.95)',
        }}
      />
    </Tooltip>
  );
};

const MenuLinks = ({ onClose }) => (
  <HStack
    display={{ base: 'none', sm: 'none', md: 'flex' }}
    spacing="24px"
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
      <DrawerContent>
        <DrawerBody>
          <Stack
            alignItems="center"
            justifyContent="center"
            direction={['column']}
            spacing="24px"
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
  const primary = useColorModeValue(
    colors.primary07.light,
    colors.primary07.dark
  );
  const shadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.08)',
    'rgba(59, 130, 246, 0.12)'
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1: how close to bottom
  const [lastScrollY, setLastScrollY] = useState(0);

  // const controls = useAnimation();

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
    setLastScrollY(scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const border = useColorModeValue('gray.200', 'gray.700');
  const translateScroll = -148 * scrollProgress;

  return (
    <>
      <div
        id="navbar"
        style={{
          position: 'fixed',
          opacity: 0,
          top: 18,
          left: 0,
          right: 0,
          zIndex: 97,
          display: 'flex',
          justifyContent: 'center',
          width: '100vw',
          boxSizing: 'border-box',
          transform: `translateY(${translateScroll}%)`,
        }}
      >
        <Box
          className="navbar"
          // as="header"
          bg={primary}
          boxShadow={`0 4px 20px ${shadowColor}`}
          borderBottom="1px solid"
          borderColor={border}
          backdropFilter="blur(13px)"
          zIndex={99}
        >
          <Container maxW="container.xl">
            <HStack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Logo />
              <MenuLinks onClose={onClose} />
              <NavMenu isOpen={isOpen} onClose={onClose} />
              <MenuToggle isOpen={isOpen} onOpen={onOpen} />
            </HStack>
          </Container>
        </Box>
      </div>
    </>
  );
}
