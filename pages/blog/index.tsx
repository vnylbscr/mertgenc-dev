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

const postQuery = groq`*[_type == "post"] | order(_createdAt desc){
                title,
                "name":author->name,
                "authorImage":author->image,
                _createdAt,
                publishedAt,
                subtitle,
                categories[] -> {
                 title,
                },
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
   const router = useRouter();
   const tagColor = useColorModeValue('black', 'white');
   return (
      <PageLayout title='Blog Posts'>
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
                  py={6}
               >
                  <Image src={urlFor(item.mainImage).url() || undefined} alt={item.name + item.title} />
                  <Stack pt={4} align='center' gridRowGap={3} spacing={3} flexDir='row' direction='row' wrap='wrap'>
                     {item?.categories?.map((tag: any, index: number) => (
                        <Box key={tag + index} bgColor={'linkedin.400'} p={2} borderRadius='xl'>
                           <Text isTruncated color={tagColor} fontWeight='bold'>
                              #{tag?.title}
                           </Text>
                        </Box>
                     ))}
                  </Stack>
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
