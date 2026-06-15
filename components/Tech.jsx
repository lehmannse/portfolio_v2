import { GridItem, Text } from '@chakra-ui/react';
import React from 'react';

const Tech = ({ tech, techMr }) => (
  <>
    {tech.map((item, index) => (
      <GridItem key={`${item}-${index}`}>
        <Text as="kbd" mr={techMr}>
          {item}
        </Text>
      </GridItem>
    ))}
  </>
);

export default Tech;
