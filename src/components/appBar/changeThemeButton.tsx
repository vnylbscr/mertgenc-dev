import { AnimatePresence, motion } from 'framer-motion';
import { IconButton, Tooltip, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useTranslation } from 'next-i18next';

const ChangeThemeButton = () => {
   const { toggleColorMode } = useColorMode();
   const { t } = useTranslation();

   return (
      <AnimatePresence exitBeforeEnter initial={false}>
         <motion.div
            style={{ display: 'inline-block' }}
            key={useColorModeValue('light', 'dark')}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
         >
            <Tooltip openDelay={500} label={t('nav.change_theme_tooltip')}>
               <IconButton
                  aria-label='Toggle theme'
                  colorScheme={useColorModeValue('purple', 'blue')}
                  icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                  onClick={toggleColorMode}
               />
            </Tooltip>
         </motion.div>
      </AnimatePresence>
   );
};

export default ChangeThemeButton;
