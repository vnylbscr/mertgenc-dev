import { Heading } from '@chakra-ui/layout';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageLayout from '../components/layouts/pageLayout';
import WorksItem, { WorksItemProps } from '../components/worksItem';

const WORK_ITEMS: WorksItemProps[] = [
   {
      images: [
         'images/notestack_home_dark.png',
         'images/notestack_home_light.png',
         'images/notestack_home_completed.png',
         'images/notestack_search_mix.png',
         'images/notestack_delete.png',
         'images/notestack_login.png',
         'images/notestack_backend_swagger.png',
         'images/notestack_swagger_expanded.png',
         'images/notestack_register.png',
         'images/notestack_shortcuts.png',
      ],
      title: 'NoteStack',
      description: 'Notestack is a web app that user can take colored notes. Front end next.js, back end: spring boot.',
      repoUrls: [
         {
            repoUrl: 'https://github.com/vnylbscr/notestack-client-next-js',
            repoButtonTitle: 'front end repo',
         },
         {
            repoUrl: 'https://github.com/vnylbscr/spring-boot-next-js-rest',
            repoButtonTitle: 'back end repo',
         },
      ],
      tags: [
         'react',
         'typescript',
         'java-ee',
         'next.js',
         'node.js',
         'spring-boot',
         'mongodb',
         'heroku',
         'docker',
         'dockerfile',
      ],
   },
   {
      images: [
         '/images/blogify.png',
         '/images/blogify_register.png',
         '/images/blogify_login.png',
         '/images/blogify_about.png',
         '/images/blogify_contact.png',
         '/images/blogify_homepage.png',
         '/images/blogify_contributors.png',
      ],
      title: 'Blogify',
      description:
         'Blogify is a web app that users can share blog and stories with other peoples. I wrote front and backend both.',
      repoUrls: [
         {
            repoUrl: 'https://github.com/vnylbscr/blogify',
            repoButtonTitle: 'front end repo',
         },
         {
            repoUrl: 'https://github.com/vnylbscr/blogify-back-end',
            repoButtonTitle: 'backend end repo',
         },
      ],
      tags: ['react', 'typescript', 'apollo-graphql', 'graphql', 'node.js', 'redis', 'express.js'],
   },

   {
      images: ['/images/truva.png'],
      title: 'Truva Zemin',
      description: 'Truva Zemin is a static website that belongs to a company that sells construction materials.',
      repoUrls: [
         {
            repoUrl: 'https://github.com/vnylbscr/truva-zemin',
            repoButtonTitle: 'repo url',
         },
      ],
      deployUrl: 'https://truvazemin.com',
      tags: ['semantic-ui', 'react', 'next.js', 'seo-optimization', 'vercel-host'],
   },
   {
      images: ['/images/f-someone-for-pet.png'],
      title: 'F SomeOne For Pet',
      description: 'F SomeOne For Pet is an app that find hosts or caretaker for your pets.',
      repoUrls: [
         {
            repoUrl: 'https://github.com/vnylbscr/FSomeOneForPet',
            repoButtonTitle: 'repo url',
         },
      ],
      tags: ['react-native', 'firebase', 'react-native-elements'],
   },
   {
      title: 'Svelte Happy Year',
      description: 'A basic merry christimas app',
      repoUrls: [
         {
            repoUrl: 'https://github.com/vnylbscr/svelte-happy-new-year',
            repoButtonTitle: 'Source Code',
         },
      ],
      tags: ['svelte', 'css', 'javascript'],
      images: ['/images/svelte-happy-new-year.png'],
      deployUrl: 'https://svelte-new-year.netlify.app/',
   },

   {
      images: ['/images/twitterClone.png'],
      title: 'Twitter Clone',
      description: 'A simple Twitter clone app.',
      repoUrls: [
         {
            repoUrl: 'https://github.com/vnylbscr/twitter-clone',
            repoButtonTitle: 'repo url',
         },
      ],
      deployUrl: 'https://mert-twitter-clone.netlify.app/',
      tags: ['bootstrap', 'react', 'javascript', 'tailwind-css'],
   },
];

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

         {WORK_ITEMS.map((item, index) => (
            <WorksItem
               key={item.title + index}
               title={item.title}
               description={item.description}
               deployUrl={item.deployUrl}
               repoUrls={item.repoUrls}
               images={item.images}
               subtitle={item.subtitle}
               tags={item.tags}
            />
         ))}
      </PageLayout>
   );
};

export default Works;
