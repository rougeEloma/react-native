export default {
  name: 'featured',
  type: 'document',
  title: 'Categories mise en avant',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nom de la Categorie mise en avant',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Court description mise en avant',
      validation: (Rule) => Rule.max(500),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
}
