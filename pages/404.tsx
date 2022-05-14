import React from 'react';
import { Heading, Button, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
interface Props {}

const CustomError = (props: Props) => {
   const router = useRouter();
   const { t } = useTranslation();
   return (
      <Stack justify='center' align='center' height='70vh' w='100%' gridRowGap={4}>
         <Heading>{t('404.description')}</Heading>
         <Heading fontSize='large' fontWeight='normal' textAlign='center'>
            {t('404.header_description')}
         </Heading>
         <Button colorScheme='red' onClick={() => router.push('/')}>
            {t('404.button_text')}
         </Button>
      </Stack>
   );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
   if (locale) {
      return {
         props: { ...(await serverSideTranslations(locale, ['common'])) },
      };
   }
   return { props: {} };
};

export default CustomError;
