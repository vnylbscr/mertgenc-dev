import { createClient, createImageUrlBuilder } from 'next-sanity';

const config = {
   dataset: 'production',
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
   useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);

export const previewClient = createClient(config);

export const getClient = (usePreview?: any) => (usePreview ? previewClient : sanityClient);
