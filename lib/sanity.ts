import { createClient, createImageUrlBuilder } from 'next-sanity';

const config = {
   dataset: 'production',
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
   useCdn: process.env.NODE_ENV === 'production',
};

//@ts-ignore
export const sanityClient = createClient(config);

//@ts-ignore
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);
//@ts-ignore
export const previewClient = createClient(config);

export const getClient = (usePreview?: any) => (usePreview ? previewClient : sanityClient);
