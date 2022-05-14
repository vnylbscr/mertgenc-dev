import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

type RepoUrls = {
   repoUrl: string;
   repoButtonTitle: string;
};

export interface WorksItemProps {
   images: Array<string>;
   title: string;
   description: string;
   repoUrls: Array<RepoUrls>;
   subtitle?: string;
   deployUrl?: string;
   tags?: Array<string>;
}

const SliderSettings: Settings = {
   dots: false,
   infinite: true,
   speed: 1000,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
};

const WorksItem: React.FC<WorksItemProps> = (props) => {
   const { images, title, description, repoUrls, subtitle, deployUrl, tags } = props;

   return (
      <Center py={6}>
         <Box
            maxW={'645px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
         >
            <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
               <Slider {...SliderSettings}>
                  {images.map((image, index) => (
                     <Image
                        key={image + index}
                        src={image}
                        alt={title + 'Mert Genç' + tags?.map((tag) => tag)}
                        layout={'fill'}
                     />
                  ))}
               </Slider>
            </Box>
            <Stack>
               <Text
                  color={'linkedin.500'}
                  textTransform={'uppercase'}
                  fontWeight={800}
                  fontSize={'2xl'}
                  letterSpacing={1.1}
               >
                  {title}
               </Text>
               <Stack align='center' gridRowGap={3} spacing={3} flexDir='row' direction='row' wrap='wrap'>
                  <Text fontSize='xl' fontWeight='bold' colorScheme='facebook'>
                  
                  </Text>

                  {tags?.map((tag, index) => (
                     <Box key={tag + index} bgColor={'linkedin.400'} p={2} borderRadius='xl'>
                        <Text isTruncated fontWeight='bold'>
                           #{tag}
                        </Text>
                     </Box>
                  ))}
               </Stack>

               <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'} fontFamily={'body'}>
                  {subtitle}
               </Heading>
               <Text fontSize='larger' color={'gray.500'}>
                  {description}
               </Text>

               <Flex flexWrap='wrap' justify='space-between' gridRowGap='6' style={{ marginTop: 32 }}>
                  {repoUrls.map((item) => (
                     <a key={item.repoUrl} target='_blank' href={item.repoUrl} rel='noreferrer'>
                        <Button colorScheme='linkedin'>{item.repoButtonTitle}</Button>
                     </a>
                  ))}

                  {deployUrl && (
                     <a target='_blank' href={deployUrl} rel='noreferrer'>
                        <Button colorScheme='orange'>preview</Button>
                     </a>
                  )}
               </Flex>
            </Stack>
         </Box>
      </Center>
   );
};

export default WorksItem;
