import '../styles/globals.css';
import '../i18n';

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

const SITE_URL = 'https://filipelehmann.vercel.app';
const SITE_IMAGE = `${SITE_URL}/logo512.png`;

const SiteHead = ({ title, description, path = '/' }) => {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;
  const isPt = title?.includes('Currículo');

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Filipe Lehmann, Software Engineer, Frontend Engineer, React, Next.js, TypeScript, Portfolio"
      />
      <meta name="author" content="Filipe Lehmann" />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}${path}`} />
      <link rel="alternate" hrefLang="pt-BR" href={`${SITE_URL}${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${path}`} />
      <meta name="theme-color" content="#252934" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={SITE_IMAGE} />
      <meta property="og:locale" content={isPt ? 'pt_BR' : 'en_US'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SITE_IMAGE} />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Filipe Lehmann',
            jobTitle: 'Senior Frontend Engineer',
            url: SITE_URL,
            image: SITE_IMAGE,
            email: 'filipelehmannp@gmail.com',
            sameAs: [
              'https://www.linkedin.com/in/filipe-lehmann-pereira/',
              'https://github.com/lehmannse',
            ],
          }),
        }}
      />
      <noscript>
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </Head>
  );
};

const PageWrapper = ({
  children,
  title,
  description,
  path,
  showIntro = true,
  showNavbar = true,
}) => {
  const gradientBgTop = useColorModeValue(
    `linear-gradient(0deg, #fff 10%, rgb(186 230 253 / 0.8) 100%)`,
    'linear-gradient(0deg, #1a202c 0%, #2a4365 100%)'
  );
  const gradientBgBottom = useColorModeValue(
    'linear-gradient(180deg, #fff 10%, rgb(186 230 253 / 0.8) 100%)',
    'linear-gradient(180deg, #1a202c 0%, #2a4365 100%)'
  );

  const comp = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    if (!showIntro) return undefined;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
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
  }, [showIntro]);

  React.useEffect(() => {
    if (!showIntro && typeof document !== 'undefined') {
      document.body.classList.remove('no-scroll');
    }
  }, [showIntro]);

  return (
    <div className="relative container relative" ref={comp}>
      {showIntro && (
        <>
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
        </>
      )}
      <SiteHead title={title} description={description} path={path} />
      {showNavbar ? <NavBar /> : null}

      {showIntro ? (
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
              className="landing-job-title"
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
      ) : null}

      <main className="main">{children}</main>
      {showIntro ? <Footer /> : null}
    </div>
  );
};

function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [mounted, setMounted] = React.useState(false);
  const { i18n } = useTranslation();

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.remove('preload-bg');
      const lang = i18n.resolvedLanguage === 'pt' ? 'pt-BR' : 'en';
      document.documentElement.lang = lang;
    }
    setMounted(true);
    const lenis = new Lenis({
      lerp: 0.1,
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
  }, [i18n.resolvedLanguage]);

  const isCvPage = pathname === '/cv';

  const pathToMeta = {
    '/': {
      title: 'Filipe Lehmann - Software Engineer',
      description:
        'Portfolio of Filipe Lehmann, Senior Frontend Engineer specializing in React, Next.js, and TypeScript for scalable SaaS platforms.',
    },
    '/cv': {
      title: 'Filipe Lehmann - CV',
      description:
        'Printable HTML CV of Filipe Lehmann, Senior Frontend Engineer with experience in React, Next.js, TypeScript, and SaaS product development.',
    },
  };

  const meta = pathToMeta[pathname] || pathToMeta['/'];

  if (!mounted) {
    return (
      <ChakraProvider theme={theme}>
        <PageWrapper
          title={meta.title}
          description={meta.description}
          path={pathname}
          showIntro={!isCvPage}
          showNavbar={!isCvPage}
        >
          <Component {...pageProps} />
        </PageWrapper>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <PageWrapper
        title={meta.title}
        description={meta.description}
        path={pathname}
        showIntro={!isCvPage}
        showNavbar={!isCvPage}
      >
        <Component {...pageProps} />
        {!isCvPage ? <FractalFilterDefs /> : null}
      </PageWrapper>
    </ChakraProvider>
  );
}

export default App;
