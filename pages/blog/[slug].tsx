import { Box, Container, Heading, Link } from '@chakra-ui/layout';
import groq from 'groq';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import PageLayout from '../../components/layouts/pageLayout';
import { getClient, urlFor } from '../../lib/sanity';
//@ts-ignore
import BlockContent from '@sanity/block-content-to-react';
import { serializers } from '../../components/serializer';
import moment from 'moment';
import ThemedText from '../../components/themedText';
import { Stack, Avatar, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

interface Props {}

const postQuery = groq`
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

const BlogItem: React.FC<{
   post: any;
}> = ({ post }) => {
   const router = useRouter();

   return (
      <PageLayout>
         <Container maxW='645px' my={2} p={4}>
            <Stack>
               <Heading textAlign='center' color='linkedin.400' pb={4}>
                  {post.title}
               </Heading>

               <Button
                  leftIcon={<ArrowBackIcon fontSize='xl' />}
                  aria-label='back-button'
                  onClick={() => router.back()}
                  my={4}
                  colorScheme='linkedin'
               >
                  back to posts
               </Button>

               <Stack py={4} direction='row' spacing={3} align='center'>
                  <Avatar src={urlFor(post?.author?.image).url() || undefined} rounded='2xl' />
                  <Link>{post.author.name}</Link>

                  <ThemedText color='grey' fontStyle='italic' py={2} fontSize='large'>
                     {moment(post._createdAt).format('DD MMM YY')}
                  </ThemedText>
               </Stack>
            </Stack>

            <Box py={4} lineHeight='30px' fontSize='large'>
               <BlockContent
                  blocks={post.body}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  dataset='production'
                  serializers={serializers}
               />
            </Box>
         </Container>
      </PageLayout>
   );
};

export const getStaticProps = async ({ params, preview = false }: any) => {
   console.log('params slug', params.slug);

   const post = await getClient(preview).fetch(postQuery, {
      slug: params.slug,
   });

   return {
      props: {
         post,
      },
   };
};

export const getStaticPaths = async () => {
   const paths: any = await getClient().fetch(groq`*[_type == "post" && defined(slug.current)][].slug.current`);

   console.log('paths', paths);

   return {
      paths: paths.map((slug: any) => ({ params: { slug } })),
      fallback: false,
   };
};

export default BlogItem;
