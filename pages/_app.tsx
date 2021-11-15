import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from '../components/layouts/layout';
import theme from '../lib/theme';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Loader from '../components/loader';

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter();
   const [pageLoading, setPageLoading] = React.useState<boolean>(false);

   React.useEffect(() => {
      const handleStart = () => {
         setPageLoading(true);
      };
      const handleComplete = () => {
         setPageLoading(false);
      };

      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);

      return () => {
         router.events.off('routeChangeStart', handleStart);
         router.events.off('routeChangeComplete', handleComplete);
         router.events.off('routeChangeError', handleComplete);
      };
   }, [router]);

   return (
      <ChakraProvider theme={theme}>
         <Loader isLoading={pageLoading} />
         <MainLayout>
            <AnimatePresence exitBeforeEnter initial={true}>
               <Component {...pageProps} />
            </AnimatePresence>
         </MainLayout>
      </ChakraProvider>
   );
}
export default MyApp;
