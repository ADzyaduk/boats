<template>
    <div class="product-list grid grid-cols-3 sm:grid-cols-1 gap-4">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script setup>
import { useProductsStore } from '~/store/products';
import { storeToRefs } from 'pinia';
import ProductCard from '~/components/ProductCard.vue';

const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore);
</script>
