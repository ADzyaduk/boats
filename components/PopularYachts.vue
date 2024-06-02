<template>
    <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold my-8">Популярные яхты</h2>
        <div class="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProductCard v-for="product in popularProducts" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script setup>
import { useProductsStore } from '~/store/products';
import { storeToRefs } from 'pinia';
import ProductCard from '~/components/ProductCard.vue';

const productsStore = useProductsStore();
const { popularProducts } = storeToRefs(productsStore);
</script>
