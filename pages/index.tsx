import { DownloadIcon } from '@chakra-ui/icons';
import { Flex, Heading, Link, List, Stack } from '@chakra-ui/layout';
import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ExperienceInfo from '../components/experienceInfo';
import PageLayout from '../components/layouts/pageLayout';
import OnTheWebLinkItem from '../components/onTheWebLinkItem';
import ThemedText from '../components/themedText';
import experienceData from '../lib/experienceData';
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
         <Flex align='center' justify='space-between' direction={{ md: 'row', base: 'column-reverse' }}>
            <Box>
               <Heading
                  variant='page-title'
                  fontWeight='bold'
                  fontSize='5xl'
                  textAlign={{ base: 'center', md: 'initial' }}
               >
                  Mert Genç
               </Heading>
               <ThemedText fontStyle='italic' textAlign={{ base: 'center', md: 'initial' }} color='grey' fontSize='3xl'>
                  {t('home.software_engineer_text')}
               </ThemedText>
            </Box>
         </Flex>

         <Box mt={4}>
            <Heading
               borderBottomWidth='thin'
               borderBottom='4px'
               borderColor={useColorModeValue('grey', 'whiteAlpha.400')}
            >
               {t('home.about')}
            </Heading>
            <ThemedText mt={6} fontSize='xl'>
               {t('home.about_text')}
               <Link
                  ml={2}
                  target='_blank'
                  color='linkedin.400'
                  href='https://www.linkedin.com/in/mert-gen%C3%A7-17b93212a/'
               >
                  {t('home.about_get_in_touch_text')}
               </Link>
            </ThemedText>

            <a target='_blank' href='/myNewResume.pdf'>
               <Button mt={6} rightIcon={<DownloadIcon />} isFullWidth colorScheme='twitter'>
                  {t('home.about_download_resume_text')}
               </Button>
            </a>
         </Box>

         <Box mt={4}>
            <Heading
               borderBottomWidth='thin'
               borderBottom='4px'
               borderColor={useColorModeValue('grey', 'whiteAlpha.400')}
            >
               {t('home.experience_text')}
            </Heading>

            <Box display='inline-block' mt={6}>
               {experienceData.map((experience, index) => <ExperienceInfo key={index} {...experience} />).reverse()}
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
                     <OnTheWebLinkItem key={item.href} {...item} />
                  ))}
               </List>
            </Box>
         </Box>
      </PageLayout>
   );
};

export default Home;
