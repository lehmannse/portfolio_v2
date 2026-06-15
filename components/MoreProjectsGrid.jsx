import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  IconButton,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsGridFill } from 'react-icons/bs';
import { FaListUl } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';

import { colors } from '../theme';
import LinkIconBar from './LinkIconBar';
import Tech from './Tech';

const DisplayBar = ({ showGridView, setShowGridView }) => (
  <Stack
    mt={4}
    direction="row"
    spacing="12px"
    justifyContent="center"
    mb={10}
    float="right"
  >
    <Tooltip label="Exibição em Blocos">
      <IconButton
        aria-label="Display Grid View"
        icon={<BsGridFill />}
        isActive={showGridView}
        onClick={() => setShowGridView(true)}
      />
    </Tooltip>
    <Tooltip label="Exibição em Lista">
      <IconButton
        aria-label="Display List View"
        icon={<FaListUl />}
        isActive={!showGridView}
        onClick={() => setShowGridView(false)}
      />
    </Tooltip>
  </Stack>
);

const ProjectCard = ({ name, description, links, tech }) => {
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  const bg = useColorModeValue(colors.bg.light, colors.bg.dark);
  const shadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.1)',
    'rgba(59, 130, 246, 0.15)'
  );
  const hoverShadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.15)',
    'rgba(59, 130, 246, 0.25)'
  );

  return (
    <Grid
      bgColor={bg}
      borderRadius="lg"
      borderWidth={bg === colors.bg.light ? '1px' : ''}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      rounded="md"
      shadow={`0 8px 25px ${shadowColor}`}
      textAlign="start"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
        shadow: `0 15px 35px ${hoverShadowColor}`,
      }}
      m={{ base: 3, md: 4 }}
      p={4}
      gap={4}
      width={{ base: '80%', sm: '50%', md: '30%' }}
    >
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem colSpan={1}>
          <Icon
            as={HiCode}
            boxSize="3em"
            color={secondary}
            m="auto"
            marginLeft="10px"
          />
        </GridItem>

        <GridItem colSpan={1} justifyItems="end" mr={2} mt={1}>
          <LinkIconBar links={links} />
        </GridItem>
      </Grid>
      <Grid templateColumns="1fr">
        <Heading as="h1" size="md">
          {name}
        </Heading>
      </Grid>
      <Grid templateColumns="1fr">
        <Text fontSize="md">{description}</Text>
      </Grid>
      <Grid
        // templateColumns="repeat(auto-fit, minmax(80px, 1fr))"
        alignContent="end"
        justifyContent="center"
        gridAutoFlow="column"
        gap={4}
        wordBreak="break-word"
      >
        <Tech tech={tech} />
      </Grid>
    </Grid>
  );
};

const ProjectRow = ({ name, type, description, tech, links }) => (
  <Tr>
    <Td>{name}</Td>
    <Td>{type}</Td>
    <Td>{description}</Td>
    <Td>
      <Grid templateColumns="repeat(auto-fit, minmax(80px, 1fr))">
        <Tech tech={tech} techMr={2} />
      </Grid>
    </Td>
    <Td>
      <Flex justifyContent="flex-start">
        <LinkIconBar links={links} />
      </Flex>
    </Td>
  </Tr>
);

const ProjectTable = ({ projs }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <div style={{ overflowX: 'auto' }}>
      <Table size="md" w="100%">
        <Thead>
          <Tr>
            <Th w="10%">Name</Th>
            <Th w="10%">Type</Th>
            <Th w="25%">Description</Th>
            <Th w="20%">Technologies</Th>
            <Th w="15%">Links</Th>
          </Tr>
        </Thead>
        <Tbody>
          {projs.map((project) => (
            <ProjectRow key={project.name} {...project} />
          ))}
        </Tbody>
      </Table>
    </div>
  </motion.div>
);

export default function MoreProjectsGrid() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showGridView, setShowGridView] = useState(true);

  const { t } = useTranslation();

  const extraProjects = t('extraProjects', { returnObjects: true });
  const expandedButton = t('extraProjectsBtn', { returnObjects: true });

  const projects = isExpanded ? extraProjects : extraProjects.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Flex justifyContent="flex-end" w="100%">
        <DisplayBar
          showGridView={showGridView}
          setShowGridView={setShowGridView}
        />
      </Flex>
      <Flex justifyContent="center" w="100%">
        <Box width={{ sm: '90%', md: '90%', lg: '85%' }} textAlign="center">
          {showGridView ? (
            <Flex flexWrap="wrap" justifyContent="center">
              {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </Flex>
          ) : (
            <ProjectTable projs={projects} />
          )}
        </Box>
      </Flex>
      <Flex justifyContent="center" w="100%">
        <Button
          mt={6}
          leftIcon={isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {`${expandedButton.show} ${
            isExpanded ? expandedButton.less : expandedButton.more
          }`}
        </Button>
      </Flex>
    </motion.div>
  );
}
