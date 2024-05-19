<template>
    <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold my-6">{{ categoryTitle }}</h1>
        <ProductCategoryList :products="filteredProducts" :category="category" :categoryTitle="categoryTitle" />
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import ProductCategoryList from '~/components/ProductCategoryList.vue';
import { products } from '~/data/products.js';  // Импортируйте данные продуктов

const route = useRoute();
const category = route.params.category;

// Заголовки категорий
const categoryTitles = {
    boats: 'Boats',
    yachts: 'Yachts',
    'premium-yachts': 'Premium Yachts'
};

const categoryTitle = categoryTitles[category] || 'Products';

// Фильтруем продукты по категории
const filteredProducts = products.filter(product => product.category === category);
</script>
