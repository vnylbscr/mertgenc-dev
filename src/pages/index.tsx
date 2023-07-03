import { Flex, Heading, List, Stack } from '@chakra-ui/layout';
import { Avatar, Box, useColorModeValue } from '@chakra-ui/react';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageLayout from '../components/layouts/pageLayout';
import OnTheWebLinkItem from '../components/onTheWebLinkItem';
import ThemedText from '../components/themedText';
import onTheWebLinks from '../lib/onTheWebLinks';

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
   if (locale) {
      return {
         props: { ...(await serverSideTranslations(locale, ['common'])) },
      };
   }
   return { props: {} };
};

const Home = () => {
   const { t } = useTranslation();

   return (
      <PageLayout>
         <Flex
            align='center'
            mt={{
               base: 12,
               md: 0,
            }}
            justify='space-between'
            direction={{ md: 'row', base: 'column-reverse' }}
         >
            <Stack spacing={'4'} alignItems={'center'} justify={'center'} direction={'row'}>
               <Avatar
                  name={'Mert Genç'}
                  mt={{ base: '4', md: undefined }}
                  width={180}
                  height={180}
                  src='/images/profile.jpeg'
               />
               <Box>
                  <Heading
                     variant='page-title'
                     fontWeight='bold'
                     fontSize='4xl'
                     textAlign={{ base: 'center', md: 'initial' }}
                  >
                     Mert Genç
                  </Heading>
                  <ThemedText
                     fontStyle='italic'
                     textAlign={{ base: 'center', md: 'initial' }}
                     color='grey'
                     fontSize='2xl'
                  >
                     {t('home.software_engineer_text')}
                  </ThemedText>
               </Box>
            </Stack>
         </Flex>

         <Box mt={4}>
            <ThemedText mt={6} fontSize='xl'>
               {t('home.about_text')}
            </ThemedText>
         </Box>

         <Box mt={6}>
            <Heading
               borderBottomWidth='thin'
               borderBottom='4px'
               borderColor={useColorModeValue('grey', 'whiteAlpha.400')}
            >
               {t('home.on_the_web_text')}
            </Heading>
            <List mt={6}>
               {onTheWebLinks.map((item) => (
                  <OnTheWebLinkItem key={item.href} item={item} />
               ))}
            </List>
         </Box>
      </PageLayout>
   );
};

export default Home;
