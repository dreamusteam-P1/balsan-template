export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'wattage',
      title: 'Wattage (W)',
      type: 'string',
    },
    {
      name: 'lumens',
      title: 'Lumens (lm)',
      type: 'string',
    },
    {
      name: 'efficiency',
      title: 'Efficiency (lm/W)',
      type: 'string',
    },
    {
      name: 'cri',
      title: 'CRI',
      type: 'string',
    },
    {
      name: 'lifespan',
      title: 'Lifespan',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
