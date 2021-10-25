import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { urlFor } from '../lib/sanity';

export const serializers = {
   types: {
      code: (props: any) => {
         const { language, code } = props?.node;
         return (
            <Box py={6}>
               <SyntaxHighlighter
                  customStyle={{
                     lineHeight: '1.75',
                     fontSize: '0.9rem',
                     fontStyle: 'inherit',
                  }}
                  style={nightOwl}
                  language={language || ''}
               >
                  {code || ''}
               </SyntaxHighlighter>
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
