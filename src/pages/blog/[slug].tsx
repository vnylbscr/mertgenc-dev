import { Box, Container, Heading, Link } from '@chakra-ui/layout';
import groq from 'groq';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import PageLayout from '../../components/layouts/pageLayout';
import { getClient, urlFor } from '../../lib/sanity';
import BlockContent from '@sanity/block-content-to-react';
import { serializers } from '../../components/serializer';
import moment from 'moment';
import ThemedText from '../../components/themedText';
import { Stack, Avatar, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import 'moment/locale/tr';

const currentPostQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    body,
    _createdAt,
    author->{
       image,
       name
    },
    subtitle,
    mainImage,
    categories[]->{
      _id,
      title
    },
    "slug": slug.current
  }
`;

const allPostsQuery = groq`*[_type == "post"] | order(publishedAt desc){
                title,
                subtitle,
                slug
            }`;

const BlogItem: React.FC<{
   currentPost: any;
   nextPost: any;
}> = ({ currentPost, nextPost }) => {
   const router = useRouter();
   const minRead = Math.ceil(currentPost.body.length / 20);
   const { t } = useTranslation();

   return (
      <PageLayout title={currentPost.title}>
         <Container maxW='645px' my={2} p={4}>
            <Stack justify='space-between'>
               <Heading textAlign='center' color='linkedin.400' pb={4}>
                  {currentPost.title}
               </Heading>

               <Button
                  leftIcon={<ArrowBackIcon fontSize='xl' />}
                  aria-label='back-button'
                  onClick={() => router.push('/blog')}
                  my={4}
                  colorScheme='linkedin'
               >
                  {t('blog.slug_button_text')}
               </Button>

               <Stack py={4} direction='row' spacing={3} align='center'>
                  <Avatar src={urlFor(currentPost?.author?.image).url() || undefined} rounded='2xl' />

                  <Link href='https://twitter.com/accurcy' target='_blank'>
                     {currentPost.author.name}
                  </Link>

                  <ThemedText color='grey' fontStyle='italic' py={2} fontSize='large'>
                     {moment(currentPost._createdAt)
                        .locale(router.locale === 'tr' ? 'tr' : 'en')
                        .format('DD MMM YYYY')}
                  </ThemedText>
                  <ThemedText fontSize='small' color='twitter.400'>
                     {minRead} {t('blog.min_read_time')} ☕
                  </ThemedText>
               </Stack>
            </Stack>

            <Box py={4} lineHeight='30px' fontSize='large'>
               <BlockContent
                  blocks={currentPost.body}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  dataset='production'
                  serializers={serializers}
               />
            </Box>

            <Stack
               py={4}
               p={4}
               direction='column'
               border={'1px'}
               spacing={2}
               onClick={() => router.push(`/blog/${nextPost?.slug?.current}`)}
               borderColor='AppWorkspace'
               _hover={{
                  color: 'linkedin.400',
                  cursor: 'pointer',
                  borderColor: 'twitter.400',
                  transition: 'all .2s',
               }}
            >
               <Heading fontSize='xl' color='grey'>
                  {t('blog.next_post_recommendation')}
               </Heading>

               <Heading fontSize='large'>{nextPost.title}</Heading>
               <ThemedText color='grey'>{nextPost.subtitle}</ThemedText>
            </Stack>
         </Container>
      </PageLayout>
   );
};

export const getStaticProps = async ({ params, preview = false, locale }: any) => {
   const currentPost = await getClient(preview).fetch(currentPostQuery, {
      slug: params.slug,
   });

   const allPosts = await getClient().fetch(allPostsQuery);

   const findNextPost = allPosts.filter((post: any) => post.slug.current !== currentPost.slug);

   return {
      props: {
         ...(await serverSideTranslations(locale, ['common'])),
         currentPost,
         nextPost: findNextPost[0],
      },
   };
};

export const getStaticPaths = async ({ locales }: any) => {
   const paths: any[] = await getClient().fetch(groq`*[_type == "post" && defined(slug.current)][].slug.current`);

   const pathsWithLocale = paths.map((slug: any) =>
      locales.map((locale: string) => ({
         params: { slug },
         locale,
      }))
   );

   const mergedArray = [].concat(...pathsWithLocale);

   return {
      paths: mergedArray,
      fallback: false,
   };
};

export default BlogItem;
