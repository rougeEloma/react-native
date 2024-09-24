export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nom du restaurant',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Court description',
      validation: (Rule) => Rule.max(500),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image du restaurant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude du restaurant',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude du restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Adresse du estaurant',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Entrer une note (1-5 étoiles)',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Veuillez entrer une note (1-5 étoiles)'),
    },
    {
      name: 'type',
      title: 'Categorie',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Plats du restaurant',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'dish',
            },
          ],
        },
      ],
    },
  ],
}
