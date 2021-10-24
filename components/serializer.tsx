import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { urlFor } from '../lib/sanity';
import { twilight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// serialize for code
export const serializers = {
   types: {
      code: (props: any) => {
         console.log('props', props);

         return (
            <Box py={6}>
               <pre>
                  <code>{props?.node?.code}</code>
               </pre>
            </Box>
         );
      },
      image: (props: any) => {
         return (
            <Image
               src={urlFor(props.node).url() || undefined}
               rounded='lg'
               alt='Mert Genç Blog Developer Turkey Istanbul'
               py={6}
               width='full'
            />
         );
      },
   },
};
