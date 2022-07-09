import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
   initialColorMode: 'dark',
   useSystemColorMode: false,
};

const theme = extendTheme({
   config,
   fonts: {
      body: '"Nunito", sans-serif',
      heading: '"Nunito", sans-serif',
   },
});

export default theme;
