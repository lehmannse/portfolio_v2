// import { EmailIcon } from "@chakra-ui/icons";
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import links from '../../data/contactLinks';
import LinkIconBar from '../LinkIconBar';
import SectionContainer from '../SectionContainer';

export default function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <SectionContainer
      id="contact"
      name="contact"
      headerText={
        i18n.resolvedLanguage === 'pt' ? 'Entre em Contato' : 'Contact Me'
      }
      style={{ minHeight: '80vh' }}
      useHeaderStyle
    >
      <Flex
        width={{ base: '75%', sm: '50%' }}
        justifyContent="center"
        textAlign="center"
        flexDirection="column"
        px={4}
      >
        <Text fontSize="xl" m="auto">
          {t('contact')}
        </Text>
        {/* <Text fontSize="xl" m="auto">
          
        </Text> */}
        <LinkIconBar pt={12} links={links} />
        {/* <Button
          as={Link}
          leftIcon={<EmailIcon />}
          href="mailto:filipelehmannp@gmail.com"
          m="auto"
          mt={6}
        >
          Email
        </Button> */}
      </Flex>
    </SectionContainer>
  );
}
