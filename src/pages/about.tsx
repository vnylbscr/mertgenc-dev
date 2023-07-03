import React from 'react';
import PageLayout from '../components/layouts/pageLayout';
import { Box, Heading, List, useColorModeValue } from '@chakra-ui/react';
import ThemedText from '../components/themedText';
import { useTranslation } from 'next-i18next';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import experienceData from '../lib/experienceData';
import ExperienceInfo from '../components/experienceInfo';
import onTheWebLinks from '../lib/onTheWebLinks';
import OnTheWebLinkItem from '../components/onTheWebLinkItem';

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
   if (locale) {
      return {
         props: { ...(await serverSideTranslations(locale, ['common'])) },
      };
   }
   return { props: {} };
};

const AboutPage = () => {
   const { t } = useTranslation();
   return (
      <PageLayout title={t('nav.about_text')}>
         <Heading py={6} textAlign='center'>
            {t('nav.about_text')}
         </Heading>
         <Box mt={4}>
            <ThemedText mt={6} fontSize='xl'>
               {t('about.get_started_text')}
            </ThemedText>
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
                     <OnTheWebLinkItem key={item.href} item={item} />
                  ))}
               </List>
            </Box>
         </Box>
      </PageLayout>
   );
};

export default AboutPage;
