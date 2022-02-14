import { Box, Heading, Link } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import ThemedText from './themedText';

export type ExperiencedInfoProps = {
   title: string;
   workedDate: string;
   description?: string;
   company: string;
   companyUrl: string;
   technologies?: string[];
};

const ExperienceInfo: React.FC<ExperiencedInfoProps> = ({
   title,
   workedDate,
   description,
   company,
   companyUrl,
   technologies,
}) => {
   return (
      <Box mt={4}>
         <Heading display='block' fontSize='2xl'>
            {title}
            <ThemedText display='inline-block' color='grey' fontStyle='italic' fontWeight='normal' fontSize='xl' ml={2}>
               ({workedDate})
            </ThemedText>
         </Heading>
         <ThemedText fontSize='xl'>
            <Link href={companyUrl} target='_blank'>
               {company}
            </Link>
         </ThemedText>

         <ThemedText>{description}</ThemedText>
         {technologies && (
            <Fragment>
               <ThemedText color='grey'>
                  <ThemedText color='linkedin.400' fontSize='xl' fontWeight='bold' display='inline-block'>
                     Tech Stack:
                  </ThemedText>
                  <br />
                  {technologies?.map((tech) => tech)}
               </ThemedText>
            </Fragment>
         )}
      </Box>
   );
};

export default ExperienceInfo;
