import { ChevronDownIcon } from '@chakra-ui/icons';
import {
   Box,
   Button,
   Flex,
   Menu,
   MenuButton as MenuButtonChakra,
   MenuItem,
   MenuList,
   Stack,
   useColorModeValue,
   useDisclosure,
   useMediaQuery,
} from '@chakra-ui/react';
import { TFunction, useTranslation } from 'next-i18next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { GithubIcon } from '../icons';
import { MenuButton } from '../icons/menuButton';
import AnimatedNavText from './animatedNavText';
import ChangeThemeButton from './changeThemeButton';
import HeaderTitle from './headerTitle';

const SELECT_ITEMS = (t: TFunction) => [
   {
      title: t('nav.works_text'),
      url: '/works',
   },
   {
      title: t('nav.blog_text'),
      url: '/blog',
   },
   {
      title: t('nav.about_text'),
      url: '/',
   },
];

const LANGUAGES = [
   {
      title: 'English',
      route: 'en',
   },
   {
      title: 'Türkçe',
      route: 'tr',
   },
];

const AppBar: React.FC = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const { isOpen: isOpenLanguageMenu, onOpen: onOpenLanguageMenu, onClose: onCloseLanguageMenu } = useDisclosure();

   const { locale, locales, asPath } = useRouter();
   const { t } = useTranslation();
   const [isMobile] = useMediaQuery('(max-width: 768px)');

   const ROUTES = SELECT_ITEMS(t);

   return (
      <Flex
         as='nav'
         align='center'
         justify='space-between'
         wrap='wrap'
         position='fixed'
         width='100%'
         zIndex={999}
         style={isMobile ? undefined : { backdropFilter: 'blur(10px)', WebkitBackfaceVisibility: 'hidden' }}
         padding={6}
         //eslint-disable-next-line
         bg={isMobile ? useColorModeValue('white', 'gray.800') : undefined}
      >
         <Flex
            mb={{
               base: 4,
               sm: 0,
            }}
         >
            <HeaderTitle />
            <Stack
               direction={{ base: 'column', md: 'row' }}
               display={{ base: 'none', md: 'flex' }}
               ml={{ base: '0', md: 6 }}
               alignItems='center'
               flexGrow={1}
            >
               <Box w={12} h={12}></Box>
               <AnimatedNavText href='/works' title={t('nav.works_text')} />
               <AnimatedNavText href='/blog' title={t('nav.blog_text')} />
               <AnimatedNavText href='/about' title={t('nav.about_text')} />
            </Stack>
         </Flex>

         <Stack
            width={{
               base: '100%',
               sm: 'auto',
            }}
            direction={'row'}
            align='center'
            mt={{
               base: 2,
               md: 0,
            }}
            spacing={4}
         >
            <Box>
               <Menu isOpen={isOpenLanguageMenu} onOpen={onOpenLanguageMenu} onClose={onCloseLanguageMenu}>
                  <MenuButtonChakra as={Button} rightIcon={<ChevronDownIcon />}>
                     {locale?.toLocaleUpperCase()}
                  </MenuButtonChakra>
                  <MenuList>
                     {locales?.map((item) => (
                        <Link passHref key={item} href={asPath} locale={item}>
                           <MenuItem>{LANGUAGES.find((x) => x.route === item)?.title}</MenuItem>
                        </Link>
                     ))}
                  </MenuList>
               </Menu>
            </Box>
            <Box>
               <Button
                  rightIcon={<GithubIcon />}
                  onClick={() => {
                     window.open('https://github.com/vnylbscr/mertgenc-dev', '_blank');
                  }}
                  mr={4}
                  display={{ base: 'none', md: 'inline-flex' }}
               >
                  {t('nav.source_code')}
               </Button>
               <ChangeThemeButton />
            </Box>

            <Box display={{ base: 'block', md: 'none' }}>
               <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                  <MenuButtonChakra>
                     <MenuButton isOpen={isOpen} />
                  </MenuButtonChakra>
                  <MenuList>
                     {ROUTES.map((item) => (
                        <Link passHref href={item.url} key={item.title}>
                           <MenuItem>{item.title}</MenuItem>
                        </Link>
                     ))}
                     <MenuItem
                        rightIcon={<GithubIcon />}
                        onClick={() => {
                           window.open('https://github.com/vnylbscr/mertgenc-dev', '_blank');
                        }}
                     >
                        {t('nav.source_code')}
                     </MenuItem>
                  </MenuList>
               </Menu>
            </Box>
         </Stack>
      </Flex>
   );
};

export default AppBar;
