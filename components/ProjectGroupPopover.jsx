import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import LinkIconBar from './LinkIconBar';

export default function ProjectGroupPopover({ subProjects = [] }) {
  const items = Array.isArray(subProjects) ? subProjects.slice(0, 3) : [];
  return (
    <Stack spacing={4} p={6}>
      {items.map((item) => (
        <Box key={item.projectName} textAlign="center">
          <Text as="strong">{item.projectName}</Text>
          <Flex mt={2} justifyContent="center">
            <LinkIconBar links={item.links || []} />
          </Flex>
        </Box>
      ))}
    </Stack>
  );
}
