import { Heading } from '@chakra-ui/layout';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageLayout from '../components/layouts/pageLayout';
import WorksItem from '../components/worksItem';
import { WORK_ITEMS } from '../lib/works';

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
   if (locale) {
      return {
         props: { ...(await serverSideTranslations(locale, ['common'])) },
      };
   }
   return { props: {} };
};

const Works = () => {
   const { t } = useTranslation();
   return (
      <PageLayout title={t('works.title')}>
         <Heading py={6} textAlign='center'>
            {t('works.title')}
         </Heading>
         z
         {WORK_ITEMS.map((item, index) => (
            <WorksItem key={item.title + index} {...item} />
         ))}
      </PageLayout>
   );
};

export default Works;
