export default {
  name: 'category',
  title: 'Catégories du',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nom de la categorie',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image de la categorie',
    },
  ],
}
