import { config, collection, singleton, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    workPage: singleton({
      label: 'Work Page',
      path: 'src/content/pages/work',
      schema: {
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'public/images/pages',
          publicPath: '/images/pages/',
        }),
      },
    }),
    personalWorkPage: singleton({
      label: 'Personal Work Page',
      path: 'src/content/pages/personal-work',
      schema: {
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'public/images/pages',
          publicPath: '/images/pages/',
        }),
      },
    }),
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        thumbnail: fields.image({
          label: 'Thumbnail',
          directory: 'public/images/projects',
          publicPath: '/images/projects/',
        }),
        thumbnailType: fields.select({
          label: 'Thumbnail Type',
          options: [
            { label: 'Vertical', value: 'vertical' },
            { label: 'Retângulo', value: 'retangulo' },
            { label: 'Quadrado', value: 'quadrado' },
          ],
          defaultValue: 'vertical',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        year: fields.number({ label: 'Year' }),
        client: fields.text({ label: 'Client' }),
        order: fields.number({ label: 'Order', validation: { isRequired: true } }),
        type: fields.text({ label: 'Type' }),
        heroBackground: fields.text({ label: 'Hero Background Color (hex)' }),
        galleryImage: fields.image({
          label: 'Gallery Image',
          directory: 'public/images/projects',
          publicPath: '/images/projects/',
        }),
        processTitle: fields.text({ label: 'Process Title' }),
        processDescription: fields.text({ label: 'Process Description', multiline: true }),
        processImage: fields.image({
          label: 'Process Image',
          directory: 'public/images/projects',
          publicPath: '/images/projects/',
        }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    personalWork: collection({
      label: 'Personal Work',
      slugField: 'title',
      path: 'src/content/personal-work/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        image: fields.image({
          label: 'Image',
          directory: 'public/images/personal-work',
          publicPath: '/images/personal-work/',
        }),
        alt: fields.text({ label: 'Alt text' }),
        order: fields.number({ label: 'Order', validation: { isRequired: true } }),
        content: fields.markdoc({ label: 'Content (optional)' }),
      },
    }),
  },
});
