import { motion } from 'framer-motion';
import Head from 'next/head';

const PageLayout: React.FC<{ title?: string }> = ({ children, title }) => (
   <motion.div
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={{
         hidden: { opacity: 0, x: 0, y: 40 },
         enter: { opacity: 1, x: 0, y: 0 },
         exit: { opacity: 0, x: -20, y: 40 },
      }}
      transition={{ duration: 0.8, type: 'linear' }}
      style={{ position: 'relative' }}
   >
      {title && (
         <Head>
            <title> Mert Genç - Software Engineer </title>
            <meta name='twitter:title' content={title} />
            <meta property='og:title' content={title} />
         </Head>
      )}
      {children}
   </motion.div>
);

export default PageLayout;
