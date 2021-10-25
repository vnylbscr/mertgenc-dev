import { Center, Container, Heading, Stack } from '@chakra-ui/layout';
import { Box, useColorModeValue, Text, Image } from '@chakra-ui/react';
import React from 'react';
import PageLayout from '../components/layouts/pageLayout';
import WorksItem, { WorksItemProps } from '../components/worksItem';
import { GetArrayType } from '../lib/util-types';

interface Props {}

const WORK_ITEMS: Array<WorksItemProps> = [
   {
      imageUrl: '/images/blogify.png',
      title: 'Blogify',
      description:
         'Blogify is a web app that users can share blog and stories with other peoples. I write front and backend both.',
      repoUrls: [
         { repoUrl: 'https://github.com/vnylbscr/blogify', repoButtonTitle: 'front end repo' },
         { repoUrl: 'https://github.com/vnylbscr/blogify-back-end', repoButtonTitle: 'backend end repo' },
      ],
      tags: ['react', 'typescript', 'apollo-graphql', 'graphql'],
   },
   {
      imageUrl: '/images/f-someone-for-pet.png',
      title: 'F SomeOne For Pet',
      description: 'F SomeOne For Pet is an app that find hosts or caretaker for your pets.',
      repoUrls: [{ repoUrl: 'https://github.com/vnylbscr/FSomeOneForPet', repoButtonTitle: 'repo url' }],
      tags: ['react-native', 'firebase', 'react-native-elements'],
   },
   {
      imageUrl: '/images/truva.png',
      title: 'Truva Zemin',
      description: 'Truva Zemin is a freelance project that I made.',
      repoUrls: [{ repoUrl: 'https://github.com/vnylbscr/truva-zemin', repoButtonTitle: 'repo url' }],
      deployUrl: 'https://truvazemin.com',
      tags: ['semantic-ui', 'react', 'next.js', 'seo-optimization', 'vercel-host'],
   },
   {
      imageUrl: '/images/twitterClone.png',
      title: 'Twitter Clone',
      description: 'A simple Twitter clone app.',
      repoUrls: [{ repoUrl: 'https://github.com/vnylbscr/twitter-clone', repoButtonTitle: 'repo url' }],
      deployUrl: 'https://mert-twitter-clone.netlify.app/',
      tags: ['bootstrap', 'react', 'javascript', 'tailwind-css'],
   },
];

const Works = (props: Props) => {
   return (
      <PageLayout title='Works'>
         <Container>
            <Heading py={6} textAlign='center'>
               My Personal Works
            </Heading>

            {WORK_ITEMS.map((item, index) => (
               <WorksItem
                  key={item.title + index}
                  title={item.title}
                  description={item.description}
                  deployUrl={item.deployUrl}
                  repoUrls={item.repoUrls}
                  imageUrl={item.imageUrl}
                  subtitle={item.subtitle}
                  tags={item.tags}
               />
            ))}
         </Container>
      </PageLayout>
   );
};

export default Works;
