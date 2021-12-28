import React from 'react';
import { DownloadIcon } from '@chakra-ui/icons';
import { Container, Flex, Heading, Link, List, ListItem, Stack } from '@chakra-ui/layout';
import { Avatar, Box, Button, useColorModeValue } from '@chakra-ui/react';
import PageLayout from '../components/layouts/pageLayout';
import ThemedText from '../components/themedText';

const Home = () => {
   return (
      <PageLayout>
         <Container>
            <Flex align='center' justify='space-between' direction={{ md: 'row', base: 'column-reverse' }}>
               <Box>
                  <Heading
                     variant='page-title'
                     fontWeight='bold'
                     fontSize='5xl'
                     textAlign={{ base: 'center', md: 'initial' }}
                  >
                     Mert Genç
                  </Heading>
                  <ThemedText
                     fontStyle='italic'
                     textAlign={{ base: 'center', md: 'initial' }}
                     color='grey'
                     fontSize='3xl'
                  >
                     Full Stack Developer, Designer
                  </ThemedText>
               </Box>
               <Avatar mt={{ base: '4', md: undefined }} src='/images/profile.jpg' size='2xl' />
            </Flex>

            <Box mt={4}>
               <Heading
                  borderBottomWidth='thin'
                  borderBottom='4px'
                  borderColor={useColorModeValue('grey', 'whiteAlpha.400')}
               >
                  About
               </Heading>
               <ThemedText mt={6} fontSize='xl'>
                  Hi. My name is Mert and I&apos;m a fullstack developer from Turkey. I&apos;ve graduaded Sakarya
                  University Computer Science in 2021. My favorite technologies right now are: React.js, Typescript,
                  GraphQL, Node.js, and MongoDB. My English level is B2. Are you interested in me?
                  <Link
                     ml={2}
                     target='_blank'
                     color='linkedin.400'
                     href='https://www.linkedin.com/in/mert-gen%C3%A7-17b93212a/'
                  >
                     Get in touch, I would be grateful.{' '}
                  </Link>
               </ThemedText>

               <a target='_blank' href='/myNewResume.pdf'>
                  <Button mt={6} rightIcon={<DownloadIcon />} isFullWidth colorScheme='twitter'>
                     View my resume
                  </Button>
               </a>
            </Box>

            <Box mt={4}>
               <Heading
                  borderBottomWidth='thin'
                  borderBottom='4px'
                  borderColor={useColorModeValue('grey', 'whiteAlpha.400')}
               >
                  Bio
               </Heading>

               <Stack py={4} direction='row' align='center' spacing={2}>
                  <Heading borderBottom='1px' borderColor='ActiveBorder' fontSize='xl'>
                     1997
                  </Heading>
                  <ThemedText>Born in Istanbul.</ThemedText>
               </Stack>
               <Stack py={4} direction='row' align='center' spacing={2}>
                  <Heading borderBottom='1px' borderColor='ActiveBorder' fontSize='xl'>
                     2016 - 2021
                  </Heading>
                  <ThemedText>Student University Computer Science and Open source stuffs</ThemedText>
               </Stack>
            </Box>

            <Box mt={4}>
               <Heading
                  borderBottomWidth='thin'
                  borderBottom='4px'
                  borderColor={useColorModeValue('grey', 'whiteAlpha.400')}
               >
                  Experience
               </Heading>

               <Box display='inline-block' mt={6}>
                  <Heading display='block' fontSize='2xl'>
                     Information Technology Intern
                     <ThemedText
                        display='inline-block'
                        color='grey'
                        fontStyle='italic'
                        fontWeight='normal'
                        fontSize='xl'
                        ml={{ base: 0, md: 2 }}
                     >
                        (Aug 2020 - Sep 2020)
                     </ThemedText>
                  </Heading>
                  <ThemedText fontSize='xl'>Cekmekoy Municipality</ThemedText>

                  <ThemedText>
                     I have gained experience in the networks of a corporate company&apos;s computers, their topology
                     installations and the management of servers.
                  </ThemedText>
                  <ThemedText color='grey'>
                     <ThemedText color='linkedin.400' fontSize='xl' fontWeight='bold' display='inline-block'>
                        {' '}
                        Tech stack:
                     </ThemedText>{' '}
                     <br />
                     Windows Server, CentOS, Active Directory
                  </ThemedText>
               </Box>

               <Box display='inline-block' mt={6}>
                  <Heading display='block' fontSize='2xl'>
                     Full Stack Developer
                     <ThemedText
                        display='inline-block'
                        color='grey'
                        fontStyle='italic'
                        fontWeight='normal'
                        fontSize='xl'
                        ml={2}
                     >
                        (Jun 2021 - Present)
                     </ThemedText>
                  </Heading>
                  <ThemedText fontSize='xl'>
                     <Link href='https://qpien.com' target='_blank'>
                        Qpien
                     </Link>
                  </ThemedText>

                  <ThemedText>
                     Qpien is the best solution for those who want to manage their customers from a single platform. We
                     are building User Interfaces on frontend using React.js. As a Developer, my responsibility is to
                     design user-friendly interfaces, make them reusable and develop the code using the best practices
                     methods.
                  </ThemedText>
                  <ThemedText color='grey'>
                     <ThemedText color='linkedin.400' fontSize='xl' fontWeight='bold' display='inline-block'>
                        {' '}
                        Tech Stack:
                     </ThemedText>{' '}
                     <br />
                     React.js, GraphQL (Apollo Client / Server / Federation), NextJS, Micro Frontend, Micro Services,
                     TypeScript, Node.js, Jest, Cypress, MongoDB, Express, Docker, AWS, Web Socket, Dependency Injection
                  </ThemedText>
               </Box>
               <Box mt={6}>
                  <Heading
                     borderBottomWidth='thin'
                     borderBottom='4px'
                     borderColor={useColorModeValue('grey', 'whiteAlpha.400')}
                  >
                     On The Web
                  </Heading>
                  <List mt={6}>
                     <ListItem>
                        <Link href='https://github.com/vnylbscr' target='_blank'>
                           <Button variant='ghost'>github</Button>
                        </Link>
                     </ListItem>
                     <ListItem>
                        <Link href='https://www.linkedin.com/in/gencmert/' target='_blank'>
                           <Button variant='ghost' colorScheme='linkedin'>
                              linkedin
                           </Button>
                        </Link>
                     </ListItem>
                     <ListItem>
                        <Link href='https://twitter.com/accurcy' target='_blank'>
                           <Button variant='ghost' colorScheme='twitter'>
                              twitter
                           </Button>
                        </Link>
                     </ListItem>
                     <ListItem>
                        <Link href='https://stackoverflow.com/users/9338972/mert' target='_blank'>
                           <Button variant='ghost' colorScheme='orange'>
                              stackoverflow
                           </Button>
                        </Link>
                     </ListItem>
                  </List>
               </Box>
            </Box>
         </Container>
      </PageLayout>
   );
};

export default Home;
