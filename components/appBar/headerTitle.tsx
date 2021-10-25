import { Box, Avatar, Heading, Stack, Flex, useColorModeValue, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { CodeIcon } from '../icons';

interface Props {}

const HeaderTitle = (props: Props) => {
   return (
      <Link href='/'>
         <a>
            <Flex flexDir='row' justify='space-between' alignItems='center'>
               <Box mr={4}>
                  <motion.svg
                     whileHover={{
                        rotate: 360,
                        transition: { duration: 2 },
                        textShadow: '0px 0px 4px gray',
                        scale: '1.1',
                     }}
                     width={45}
                     height={45}
                  >
                     <CodeIcon />
                  </motion.svg>
               </Box>
               <Stack spacing={1}>
                  <Heading color={useColorModeValue('light', 'dark')} fontFamily='mono' fontSize='2xl'>
                     Mert Genç
                  </Heading>
                  <Text color='grey' fontFamily='mono'>
                     developer
                  </Text>
               </Stack>
            </Flex>
         </a>
      </Link>
   );
};

export default HeaderTitle;
