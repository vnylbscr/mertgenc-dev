import { Box, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

const Footer = () => {
   const { t } = useTranslation();
   return (
      <Box py={14} alignItems='center' textAlign='center' color={useColorModeValue('black', 'grey')}>
         {new Date().getFullYear()} Mert Genç. {t('footer.all_rights_reserved')}
      </Box>
   );
};

export default Footer;
