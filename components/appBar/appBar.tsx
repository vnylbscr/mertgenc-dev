import React, { useState } from 'react';
import {
   Box,
   Stack,
   Flex,
   useDisclosure,
   MenuList,
   MenuItem,
   Menu,
   MenuButton as MenuButtonChakra,
   Button,
   useColorModeValue,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import HeaderTitle from './headerTitle';
import { MenuButton } from '../icons/menuButton';
import AnimatedNavText from './animatedNavText';
import ChangeThemeButton from './changeThemeButton';
import { useRouter } from 'next/dist/client/router';
import { GithubIcon } from '../icons';

const SELECT_ITEMS = [
   {
      title: 'Works',
      url: '/works',
   },
   {
      title: 'Posts',
      url: '/blog',
   },
   {
      title: 'About',
      url: '/',
   },
];

const AppBar = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const router = useRouter();
   return (
      <Flex
         as='nav'
         align='center'
         justify='space-between'
         wrap='wrap'
         position='fixed'
         width='100%'
         zIndex={100}
         style={{ backdropFilter: 'blur(10px)', WebkitBackfaceVisibility: 'hidden' }}
         bg={{ base: useColorModeValue('#EDF2F7', '#1A202C'), md: 'none' }}
         padding={6}
      >
         <Flex mr={6}>
            <HeaderTitle />
         </Flex>

         <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: '100%', md: 'auto' }}
            alignItems='center'
            flexGrow={1}
         >
            <AnimatedNavText href='/works' title='Works' />
            <AnimatedNavText href='/blog' title='Posts' />
         </Stack>
         <Box ml='auto' mr='24px'>
            <Button
               rightIcon={<GithubIcon />}
               onClick={() => {
                  window.open('https://github.com/vnylbscr/mertgenc-dev', '_blank');
               }}
               mr={4}
               display={{ base: 'none', md: 'inline-flex' }}
            >
               source code
            </Button>
            <ChangeThemeButton />
         </Box>
         <Box display={{ base: 'block', md: 'none' }}>
            <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
               <MenuButtonChakra>
                  <MenuButton isOpen={isOpen} />
               </MenuButtonChakra>
               <MenuList>
                  {SELECT_ITEMS.map((item) => (
                     <MenuItem key={item.title} onClick={() => router.push(item.url)}>
                        {item.title}
                     </MenuItem>
                  ))}
                  <MenuItem
                     rightIcon={<GithubIcon />}
                     onClick={() => {
                        window.open('https://github.com/vnylbscr/mertgenc-dev', '_blank');
                     }}
                  >
                     source code
                  </MenuItem>
               </MenuList>
            </Menu>
         </Box>
      </Flex>
   );
};

export default AppBar;