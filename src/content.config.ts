import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    thumbnail: z.string(),
    thumbnailType: z.enum(['vertical', 'retangulo', 'quadrado']),
    tags: z.array(z.string()).optional(),
    year: z.number().optional(),
    client: z.string().optional(),
    order: z.number(),
    type: z.string().optional(),
    heroBackground: z.string().optional(),
    galleryImage: z.string().optional(),
    processTitle: z.string().optional(),
    processDescription: z.string().optional(),
    processImage: z.string().optional(),
  }),
});

const personalWork = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc,yaml}', base: './src/content/personal-work' }),
  schema: z.object({
    title: z.string().optional(),
    image: z.string(),
    alt: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { projects, personalWork };
