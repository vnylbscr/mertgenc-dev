import { Button, Link, ListItem } from '@chakra-ui/react';
import React from 'react';

type OnTheWebLinkItemProps = {
   href: string;
   text: string;
   colorScheme?: string;
};

const OnTheWebLinkItem: React.FC<OnTheWebLinkItemProps> = ({ href, text, colorScheme }) => {
   return (
      <ListItem>
         <Link href={href} target='_blank'>
            <Button variant='ghost' colorScheme={colorScheme}>
               {text}
            </Button>
         </Link>
      </ListItem>
   );
};

export default OnTheWebLinkItem;
