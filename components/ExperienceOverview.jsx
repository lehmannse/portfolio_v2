import {
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  ListItem,
  Select,
  Text,
  UnorderedList,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from '../styles/components/ExperienceOverview.module.css';
import { colors } from '../theme';
import HexagonPattern from './HexagonPattern';

const ExperienceSelect = ({ expIndex, setIndex, jobs }) => (
  <Select
    value={expIndex}
    py={{ base: 2, md: 0 }}
    onChange={(e) => setIndex(e.target.value)}
  >
    {jobs.map((job, index) => (
      <option key={`${job.workplace}-select-option`} value={index}>
        {job.workplace}
      </option>
    ))}
  </Select>
);

const ExperienceButtons = ({ expIndex, setIndex, jobs }) => (
  <Flex alignItems="center">
    <Grid
      templateColumns="repeat(auto-fit, minmax(120px, 1fr))"
      gap={2}
      justifyContent="center"
      alignItems="center"
      as={motion.div}
      layout
    >
      {jobs.map((job, index) => (
        <GridItem as={motion.div} layout key={`${job.workplaceBtn}-btn`}>
          <div>
            <Button
              isActive={expIndex === index}
              width="100%"
              flexWrap="wrap"
              onClick={() => setIndex(index)}
              zIndex={2}
              position="relative"
            >
              {job.workplaceBtn}
              {expIndex === index ? (
                <motion.div
                  layoutId="exp-underline"
                  animate={{ opacity: 1 }}
                  style={{
                    position: 'absolute',
                    left: 3,
                    right: 3,
                    bottom: 0,
                    opacity: 0.2,
                    height: '2px',
                    borderRadius: 0,
                    background: 'var(--chakra-colors-blue-400)',
                  }}
                />
              ) : null}
            </Button>
          </div>
        </GridItem>
      ))}
    </Grid>
  </Flex>
);

const ExperienceDetails = ({ index, jobs }) => {
  const job = jobs[index];
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <Container>
      <Grid
        templateColumns="1fr"
        gap={2}
        m="auto"
        p={{ base: '8px', sm: '12px' }}
      >
        <GridItem>
          <Heading as="h1" size="md" textAlign={{ base: 'center', sm: 'left' }}>
            {job.position} @{' '}
            <Link href={job.url} isExternal color={secondary}>
              {job.workplace}
            </Link>
          </Heading>
        </GridItem>
        <GridItem textAlign={{ base: 'center', sm: 'left' }}>
          {job.duration.map((duration) => (
            <Text key={duration} mt={2}>
              {duration}
            </Text>
          ))}
        </GridItem>
        <Container w="100%">
          <GridItem
            textAlign={{ base: 'left', sm: 'justify' }}
            px={{ base: '4px', sm: '0' }}
          >
            <UnorderedList flex mt={2} spacing={2}>
              {job.description.map((desc) => (
                <ListItem key={desc} wordBreak="break-word" minWidth="100%">
                  {desc}
                </ListItem>
              ))}
            </UnorderedList>
          </GridItem>
        </Container>
      </Grid>
    </Container>
  );
};

export default function ExperienceOverview() {
  const [index, setIndex] = useState(0);
  const showSelect = useBreakpointValue({
    md: false,
    lg: true,
  });
  const bg = useColorModeValue(colors.bg.light, colors.bg.dark);
  const shadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.08)',
    'rgba(59, 130, 246, 0.12)'
  );
  const hoverShadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.12)',
    'rgba(59, 130, 246, 0.2)'
  );

  const hexStroke = useColorModeValue('#1ca7d0', '#90cdf4');

  const { t } = useTranslation();

  const jobs = t('jobs', { returnObjects: true });

  const layoutTransition = {
    layout: { duration: 0.38, ease: [0.4, 0, 0.2, 1] },
  };

  const borderConfig = () => {
    if (!showSelect) return null;
    if (bg === colors.bg.light)
      return {
        border: '1px solid',
        borderColor: 'gray.200',
      };
    return {
      border: '2px solid',
      borderColor: 'gray.700',
    };
  };

  return (
    <Container
      maxWidth={{ base: '90%', md: '70%', lg: '1200px' }}
      position="relative"
    >
      <Flex
        as={motion.div}
        layout
        transition={layoutTransition}
        className={styles.card}
        direction={{ base: 'column', md: 'row' }}
        justifyContent="center"
        alignItems={{ base: 'center', md: 'flex-start' }}
        md={10}
        borderRadius="0"
        {...borderConfig()}
        p={{ base: '12px', md: '20px' }}
        spacing={8}
        shadow={`0 12px 40px ${shadowColor}`}
        _hover={{
          shadow: `0 20px 50px ${hoverShadowColor}`,
        }}
        style={{
          width: '100%',
          position: 'relative',
        }}
      >
        {/* new layers */}
        <HexagonPattern
          radius={22}
          gap={0}
          stroke={hexStroke}
          strokeOpacity={0.2}
          masked
        />
        <div className={styles.backdrop} />
        <div className={styles.filter} />
        <div className={styles.shadow} />

        <Grid direction="column" style={{ position: 'relative', zIndex: 1 }}>
          {showSelect ? (
            <ExperienceButtons
              expIndex={index}
              setIndex={setIndex}
              jobs={jobs}
            />
          ) : (
            <ExperienceSelect
              expIndex={index}
              setIndex={setIndex}
              jobs={jobs}
            />
          )}
        </Grid>

        <Grid
          as={motion.div}
          layout
          transition={layoutTransition}
          style={{ position: 'relative', zIndex: 1, width: '100%' }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                ...layoutTransition,
                opacity: { duration: 0.2 },
              }}
            >
              <ExperienceDetails index={index} jobs={jobs} />
            </motion.div>
          </AnimatePresence>
        </Grid>
      </Flex>
    </Container>
  );
}
