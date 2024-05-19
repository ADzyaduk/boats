<template>
    <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold my-6">Product List</h1>
        <ProductCategoryList :products="products" category="boats" categoryTitle="Boats" />
        <ProductCategoryList :products="products" category="yachts" categoryTitle="Yachts" />
        <ProductCategoryList :products="products" category="premium-yachts" categoryTitle="Premium Yachts" />
    </div>
</template>

<script setup>
import ProductCategoryList from '~/components/ProductCategoryList.vue';

const products = [
    {
        id: 1,
        title: 'Boat 1',
        description: 'This is the description for boat 1.',
        price: 100,
        people: 4,
        category: 'boats',
        images: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150/0000FF',
            'https://via.placeholder.com/150/FF0000'
        ]
    },
    {
        id: 2,
        title: 'Yacht 1',
        description: 'This is the description for yacht 1.',
        price: 150,
        people: 2,
        category: 'yachts',
        images: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150/FFFF00',
            'https://via.placeholder.com/150/00FF00'
        ]
    },
    {
        id: 3,
        title: 'Premium Yacht 1',
        description: 'This is the description for premium yacht 1.',
        price: 200,
        people: 3,
        category: 'premium-yachts',
        images: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150/FFA500',
            'https://via.placeholder.com/150/800080'
        ]
    }
];
</script>
