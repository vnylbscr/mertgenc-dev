import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from '../components/layouts/layout';
import theme from '../lib/theme';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider theme={theme}>
         <MainLayout>
            <AnimatePresence exitBeforeEnter initial={true}>
               <Component {...pageProps} />
            </AnimatePresence>
         </MainLayout>
      </ChakraProvider>
   );
}
export default MyApp;
