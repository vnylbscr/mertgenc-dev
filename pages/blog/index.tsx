import { Box, Heading, Stack } from '@chakra-ui/layout';
import { Container, Image, Text, useColorModeValue } from '@chakra-ui/react';
import groq from 'groq';
import moment from 'moment';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import PageLayout from '../../components/layouts/pageLayout';
import ThemedText from '../../components/themedText';
import { getClient, urlFor } from '../../lib/sanity';
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
   const tagColor = useColorModeValue('black', 'white');
   const { t } = useTranslation();
   return (
      <PageLayout title='Blog Posts'>
         <Heading py={6} textAlign='center'>
            {t('blog.header_text')}
         </Heading>

         {posts.map((item) => (
            <Link key={item.title} passHref href={`/blog/${item.slug.current}`}>
               <Stack
                  _hover={{
                     cursor: 'pointer',
                     color: 'linkedin.400',
                     transition: 'all .4s',
                  }}
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
            </Link>
         ))}
      </PageLayout>
   );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
   const data = await getClient().fetch(postQuery);

   return {
      props: {
         ...(await serverSideTranslations(locale, ['common'])),
         posts: data,
      },
   };
};

export default BlogPage;
