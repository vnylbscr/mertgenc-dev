import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
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
   const { t } = useTranslation();

   return (
      <Box mt={4}>
         <Heading fontSize={'2xl'}>
            {title}
            <ThemedText pl={2} display='inline' color='grey' fontStyle='italic' fontWeight='bold' fontSize='xl'>
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
               <ThemedText mt={'1'} color='grey'>
                  <ThemedText color='linkedin.400' fontSize='xl' fontWeight='bold' display='inline-block'>
                     {t('home.tech_stack_text')}
                  </ThemedText>
                  <br />
                  {technologies?.map((tech, index) => {
                     return index === technologies.length - 1 ? tech : tech + ', ';
                  })}
               </ThemedText>
            </Fragment>
         )}
      </Box>
   );
};

export default ExperienceInfo;
