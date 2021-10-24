import React from 'react';
import { Heading, Button, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
interface Props {}

const CustomError = (props: Props) => {
   const router = useRouter();
   return (
      <Stack justify='center' align='center' height='70vh' w='100%' gridRowGap={4}>
         <Heading>404 Not Found</Heading>
         <Heading fontSize='large' fontWeight='normal' textAlign='center'>
            This page could be not found in this server.
         </Heading>
         <Button colorScheme='red' onClick={() => router.push('/')}>
            try to go home?
         </Button>
      </Stack>
   );
};

export default CustomError;
