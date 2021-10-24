import React, { useState } from 'react';
import {
   Box,
   Stack,
   Heading,
   Flex,
   Text,
   Button,
   Spacer,
   useDisclosure,
   useColorModeValue,
   MenuList,
   MenuItem,
   Menu,
   MenuButton as MenuButtonChakra,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import HeaderTitle from './headerTitle';
import { MenuButton } from './icons/menuButton';
import AnimatedNavText from './animatedNavText';
import ChangeThemeButton from './changeThemeButton';
import { useRouter } from 'next/dist/client/router';

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
         style={{ backdropFilter: 'blur(10px)' }}
         padding={6}
         // bg={useColorModeValue('#FEF9EF', '#222831')}
         // bg={useColorModeValue('#ffffff40', '#20202380')}
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
               </MenuList>
            </Menu>
         </Box>
      </Flex>
   );
};

export default AppBar;
