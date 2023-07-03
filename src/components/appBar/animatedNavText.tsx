import { Link, Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';
import React from 'react';
interface Props {
   title: string;
   href: string;
}

const configStyle = {
   content: "''",
   position: 'absolute',
   width: '100%',
   transform: 'scaleX(0)',
   height: 1,
   bottom: 0,
   left: 0,
   backgroundColor: '#0087ca',
   transformOrigin: 'bottom center',
   transition: 'transform 0.25s ease-out',
};

export const AnimatedNavText = ({ title, href }: Props) => {
   const router = useRouter();
   const isActive = router.pathname.includes(href);

   return (
      <NextLink href={href}>
         <Link
            px={2}
            py={1}
            display='inline-block'
            rounded={'md'}
            position='relative'
            fontSize='xl'
            color={useColorModeValue('black', 'white')}
            bgColor={isActive ? 'linkedin.400' : undefined}
            _after={!isActive ? configStyle : undefined}
            _hover={{
               _after: {
                  transform: 'scaleX(1)',
                  transformOrigin: 'bottom left',
               },
            }}
         >
            <Text>{title}</Text>
         </Link>
      </NextLink>
   );
};

export default AnimatedNavText;
