import { Button, Link, ListItem, Stack } from '@chakra-ui/react';
import React from 'react';
import WEB_LINKS from '../lib/onTheWebLinks';

type OnTheWebLinkItemProps = {
   item: typeof WEB_LINKS[0];
};

const OnTheWebLinkItem: React.FC<OnTheWebLinkItemProps> = ({ item }) => {
   return (
      <ListItem>
         <Link href={item.href} target='_blank'>
            <Stack direction='row' spacing={4} align='center'>
               <Button variant='ghost' colorScheme={item.colorScheme}>
                  {item.text}
               </Button>
            </Stack>
         </Link>
      </ListItem>
   );
};

export default OnTheWebLinkItem;
