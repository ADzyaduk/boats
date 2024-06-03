import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    categories: [
      { id: 1, name: 'Элитные яхты', slug: 'elite' },
      { id: 2, name: 'Яхты и катера', slug: 'boats' },
      { id: 3, name: 'Вейксерф и Вейкборд', slug: 'wakesurf' },
      { id: 4, name: 'Гидроциклы', slug: 'jet-ski' },
    ],
    products: [
      {
        id: 1,
        name: 'Vegas',
        description: 'Описание элитной яхты 1',
        people: '11',
        price: '10000₽',
        images: {
          preview: '/boats/vegas/1.jpg',
          others: [
            '/boats/vegas/2.jpg',
            '/boats/vegas/3.jpg'
          ]
        },
        category: 'boats',
        isFavorite: true
      },
      {
        id: 2,
        name: 'Vella de Plato',
        description: 'Описание элитной яхты 2',
        price: '$15,000,000',
        images: {
          preview: '/boats/velladeplato/1.jpg',
          others: [
            '/boats/velladeplato/2.jpg',
            '/boats/velladeplato/3.jpg',
            '/boats/velladeplato/6.jpg',
            '/boats/velladeplato/7.jpg'
          ]
        },
        category: 'elite',
        isFavorite: true
      },
      {
        id: 3,
        name: 'Lina',
        description: 'Описание популярной яхты 1',
        price: '$12,000,000',
        images: {
          preview: '/boats/lina/1.jpg',
          others: [
            '/boats/lina/2.jpg',
            '/boats/lina/3.jpg'
          ]
        },
        category: 'elite',
        isFavorite: true
      },
      // Добавьте больше продуктов здесь
    ],
  }),
  getters: {
    getProductsByCategory: (state) => (category) => {
      if (!category) return state.products;
      return state.products.filter(product => product.category === category);
    },
    getFavoriteProducts: (state) => {
      return state.products.filter(product => product.isFavorite);
    },
  },
});
