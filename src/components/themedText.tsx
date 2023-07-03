import { useColorModeValue } from '@chakra-ui/color-mode';
import { Text, TextProps } from '@chakra-ui/layout';
import React from 'react';

interface ThemedTextProps extends TextProps {}

const ThemedText: React.FC<ThemedTextProps> = (props) => {
   const { children, ...rest } = props;
   return (
      <Text color={useColorModeValue('grey', 'grey.500')} {...rest}>
         {children}
      </Text>
   );
};

export default ThemedText;
