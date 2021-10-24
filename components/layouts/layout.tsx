import { Container } from '@chakra-ui/layout';
import { useColorModeValue, Box } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';
import AppBar from '../appBar';
import Footer from '../footer';

const MainLayout: React.FC = (props) => {
   return (
      <Box as='main' pb={1}>
         <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='description' content="Mert Genç's Homepage" />
            <meta name='author' content='Mert Genç' />
            <meta name='author' content='Mert Genç' />
            <meta name='author' content='Mert Genç Sakarya Istanbul Turkey' />
            <meta name='author' content='Mert Genç Developer Computer Engineer Programmer Full Stack Developer' />
            <link rel='apple-touch-icon' href='apple-touch-icon.png' />
            <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@accurcy' />
            <meta name='twitter:creator' content='@accurct' />
            <meta name='twitter:image' content='/card.png' />
            <meta name='github:card' content='summary_large_image' />
            <meta name='github:site' content='@vnylbscr' />
            <meta name='github:creator' content='@vnylbscr' />
            <meta name='github:image' content='/card.png' />
            <meta property='og:site_name' content="Mert Genç's Homepage" />
            <meta property='og:type' content='website' />
            <meta property='og:image' content='/card.png' />
            <title>Mert Genç - Homepage</title>
         </Head>
         <AppBar />
         <Container maxW='container.md' pt='150px'>
            {props.children}
         </Container>
         <Footer />
      </Box>
   );
};

export default MainLayout;
