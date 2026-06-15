import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export const colors = {
  primary: {
    light: '#F7F8FA',
    dark: '#252934',
  },
  primary07: {
    light: '#F7F8FAB3',
    dark: '#252934B3',
  },
  primary05: {
    light: '#F7F8FA80',
    dark: '#25293480',
  },
  secondary: {
    light: '#1ca7d0',
    dark: '#90cdf4',
  },
  tertiary: {
    light: '#736CED',
    dark: '#0056b3',
  },
  subtle: {
    light: 'gray.400',
    dark: '#FFFFFF',
  },
  bg: {
    light: '',
    dark: '#343a40',
  },
};

const fonts = {
  body: 'Gotham, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  heading:
    'Gotham, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
};

export default extendTheme({
  config,
  colors,
  fonts,
});
