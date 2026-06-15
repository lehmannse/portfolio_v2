import '../styles/globals.css';

import {
  Box,
  ChakraProvider,
  Spinner,
  useColorModeValue,
} from '@chakra-ui/react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useLayoutEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Footer from '../components/Footer';
import FractalFilterDefs from '../components/FractalFilterDefs';
import NavBar from '../components/NavBar';
import stylesSection from '../styles/components/SectionContainer.module.css';
import theme from '../theme';

const SiteHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content="Filipe Lehmann - Software Engineer" />
    <meta name="description" content="Filipe Lehmann - Portfolio" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#252934" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://filipelehmann.vercel.app/" />
    <meta property="og:title" content="Filipe Lehmann - Software Engineer" />
    <meta
      property="og:description"
      content="Filipe Lehmann's personal portfolio"
    />
    <meta property="og:image" content="/logo512.png" />
    <noscript>
      <img
        src="https://queue.simpleanalyticscdn.com/noscript.gif"
        alt=""
        referrerPolicy="no-referrer-when-downgrade"
      />
    </noscript>
  </Head>
);

const PageWrapper = ({ children, title }) => {
  // Gradient backgrounds for light and dark mode (same as Landing.jsx)
  const gradientBgTop = useColorModeValue(
    `linear-gradient(0deg, #fff 10%, rgb(186 230 253 / 0.8) 100%)`, // light
    'linear-gradient(0deg, #1a202c 0%, #2a4365 100%)' // dark
  );
  const gradientBgBottom = useColorModeValue(
    'linear-gradient(180deg, #fff 10%, rgb(186 230 253 / 0.8) 100%)', // light
    'linear-gradient(180deg, #1a202c 0%, #2a4365 100%)' // dark
  );

  const comp = useRef(null);

  const { t } = useTranslation();

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      // Desktop and larger phones/tablets (>= 640px): keep horizontal move
      mm.add('(min-width: 640px)', () => {
        const t1 = gsap.timeline();
        t1.to('#loading', { opacity: 0, duration: 0.2 })
          .from('#intro', { opacity: 1, duration: 1 })
          .to(['#filipe', '#overlaid-title'], {
            opacity: 1,
            stagger: 0.5,
          })
          .to('#filipe', { xPercent: '+=25.5', delay: 0.5 })
          .to('#header', { opacity: 1, delay: 0.5 })
          .to(['#navbar', '#landing-icons'], {
            opacity: 1,
            duration: 0.5,
            stagger: 0.5,
          })
          .to('#intro', {
            duration: 0,
            onComplete: () => {
              if (typeof document !== 'undefined') {
                document.body.classList.remove('no-scroll');
              }
            },
          })
          .to('#intro', {
            opacity: 0,
            duration: 1,
            display: 'none',
            onComplete: () => {
              if (typeof document !== 'undefined') {
                document.body.classList.remove('no-scroll');
              }
            },
          });
      });

      // Small screens (< 640px): avoid horizontal move; use a subtle hold/fade
      mm.add('(max-width: 639px)', () => {
        const t1 = gsap.timeline();
        t1.to('#loading', { opacity: 0, duration: 0.2 })
          .to('#intro-text', { opacity: 0, duration: 0 })
          .to('#header', { opacity: 1, delay: 0.5 })
          .to(['#navbar', '#landing-icons'], {
            opacity: 1,
            duration: 0.5,
            stagger: 0.5,
          })
          .to('#intro', {
            duration: 0,
            onComplete: () => {
              if (typeof document !== 'undefined') {
                document.body.classList.remove('no-scroll');
              }
            },
          })
          .to('#intro', {
            opacity: 0,
            duration: 1,
            display: 'none',
            onComplete: () => {
              if (typeof document !== 'undefined') {
                document.body.classList.remove('no-scroll');
              }
            },
          });
      });
    }, comp);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <div className="relative container relative" ref={comp}>
      <Box
        minH="100vh"
        w="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        bg={gradientBgTop}
        transition="background 0.5s"
        position="absolute"
        top={0}
        zIndex={-1}
      />
      <Box
        minH="100vh"
        w="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        bg={gradientBgBottom}
        transition="background 0.5s"
        position="absolute"
        bottom={0}
        zIndex={-1}
      />
      <SiteHead title={title} />
      <NavBar />

      <div
        id="intro"
        style={{
          height: '100vh',
          width: '100vw',
          backgroundColor: 'black',
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
          paddingBottom: '6vh',
          fontSize: 36,
        }}
        className={stylesSection.header}
      >
        <div
          id="intro-text"
          style={{
            display: 'flex',
            flexDirection: 'inherit',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p style={{ opacity: 0 }} id="filipe">
            Filipe Lehmann
          </p>
          <strong
            id="overlaid-title"
            style={{ color: '#90cdf4', fontWeight: 'bold', opacity: 0 }}
          >
            {t('landing.job')}
          </strong>
        </div>
        <div
          id="loading"
          style={{
            position: 'absolute',
            bottom: '10%',
            display: 'flex',
            gap: 12,
            alignItems: 'center',
          }}
        >
          <Spinner size="sm" color="white" speed="0.6s" thickness="2px" />
          <span style={{ color: 'white', fontSize: 14, opacity: 0.8 }}>
            Loading…
          </span>
        </div>
      </div>

      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [mounted, setMounted] = React.useState(false);

  // Only show the application after first client-side render to prevent hydration issues
  React.useEffect(() => {
    // Remove SSR preload background once app mounts to reveal real backgrounds
    if (typeof document !== 'undefined') {
      document.body.classList.remove('preload-bg');
    }
    setMounted(true);
    const lenis = new Lenis({
      lerp: 0.1, // smoothness
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      mouseMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  const pathToTitle = {
    '/': 'Filipe Lehmann - Sofware Engineer',
  };

  // During SSR and first render, use a minimal layout to avoid hydration issues
  if (!mounted) {
    return (
      <ChakraProvider theme={theme}>
        {/* <div style={{ visibility: 'hidden' }}> */}
        <PageWrapper title={pathToTitle[pathname]}>
          <Component {...pageProps} />
        </PageWrapper>
        {/* </div> */}
      </ChakraProvider>
    );
  }

  // After client-side hydration, render the full application
  return (
    <ChakraProvider theme={theme}>
      <PageWrapper title={pathToTitle[pathname]}>
        <Component {...pageProps} />
        <FractalFilterDefs />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default App;
