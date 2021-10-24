import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

interface Props {}

const Footer = (props: Props) => {
   return (
      <Box py={14} alignItems='center' textAlign='center' color={useColorModeValue('black', 'grey')}>
         {new Date().getFullYear()} Mert Genç. All Rights Reserved.
      </Box>
   );
};

export default Footer;
