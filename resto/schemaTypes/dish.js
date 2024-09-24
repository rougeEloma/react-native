export default {
  name: 'dish',
  title: 'Plats',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Namdu plat',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Court description du plat',
      validation: (Rule) => Rule.max(500),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Prix du plat',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image du plat',
    },
  ],
}
