import { Box, Heading, Stack } from '@chakra-ui/layout';
import { Container, Text, Image, Button, useColorModeValue } from '@chakra-ui/react';
import groq from 'groq';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import PageLayout from '../../components/layouts/pageLayout';
import ThemedText from '../../components/themedText';
import { getClient, urlFor } from '../../lib/sanity';
import moment from 'moment';

interface BlogPageProps {
   posts: any[];
}

const postQuery = groq`*[_type == "post"] | order(publishedAt desc){
                title,
                "name":author->name,
                "authorImage":author->image,
                _createdAt,
                publishedAt,
                subtitle,
                body,
                slug,
                mainImage{
                asset->{
                _id,
                url
                }
            }
            }`;

const BlogPage = ({ posts }: BlogPageProps) => {
   console.log(posts);

   const router = useRouter();

   return (
      <PageLayout title='Mert Genç | Blog Posts'>
         <Container>
            <Heading py={6} textAlign='center'>
               My Blog Posts
            </Heading>

            {posts.map((item) => (
               <Stack
                  _hover={{
                     cursor: 'pointer',
                     color: 'linkedin.400',
                     transition: 'all .4s',
                  }}
                  onClick={() => router.push(`/blog/${item.slug.current}`)}
                  key={item.title}
                  my={16}
               >
                  <Image src={urlFor(item.mainImage).url() || undefined} alt={item.name + item.title} />
                  <Heading py={4}>
                     {item.title}
                     <ThemedText my={4} color='linkedin.400' fontSize='large'>
                        {moment(item._createdAt).fromNow()}
                     </ThemedText>
                  </Heading>
                  <Text color='grey'>{item.subtitle}</Text>
               </Stack>
            ))}
         </Container>
      </PageLayout>
   );
};

export const getStaticProps = async () => {
   const data = await getClient().fetch(postQuery);

   return {
      props: {
         posts: data,
      },
   };
};

export default BlogPage;
