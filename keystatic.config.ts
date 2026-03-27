import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        thumbnail: fields.text({ label: 'Thumbnail URL' }),
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
        galleryImage: fields.text({ label: 'Gallery Image URL' }),
        processTitle: fields.text({ label: 'Process Title' }),
        processDescription: fields.text({ label: 'Process Description', multiline: true }),
        processImage: fields.text({ label: 'Process Image URL' }),
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
        image: fields.text({ label: 'Image URL' }),
        alt: fields.text({ label: 'Alt text' }),
        order: fields.number({ label: 'Order', validation: { isRequired: true } }),
        content: fields.markdoc({ label: 'Content (optional)' }),
      },
    }),
  },
});
