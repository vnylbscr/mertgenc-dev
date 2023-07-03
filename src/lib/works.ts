import { WorksItemProps } from '../components/worksItem';

export const WORK_ITEMS: WorksItemProps[] = [
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
      images: [
         'https://user-images.githubusercontent.com/24382252/211196445-0d138a0c-39f9-4ec0-a76b-99716318a7bb.png',
         'https://user-images.githubusercontent.com/24382252/211196449-25a38e69-a1ec-4a10-8aab-bc84f0747515.png',
         'https://user-images.githubusercontent.com/24382252/211196496-4e446459-c7bd-45de-888b-b0a0d7db92d3.png',
      ],
      title: 'iOS based calculator',
      description: 'This is a simple calculator app based on iOS. Built with React Native and Expo.',
      repoUrls: [
         {
            repoUrl: 'https://github.com/vnylbscr/rn-ios-calculator',
            repoButtonTitle: 'repo url',
         },
      ],
      tags: ['react-native', 'expo', 'javascript', 'typescript'],
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
