<template>
    <div class="container mx-auto px-4 my-4">
        <h2 class="text-2xl font-bold mb-4 text-center">Популярные яхты</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProductCard v-for="product in favoriteProducts" :key="product.id" :product="product" class="" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProductsStore } from '~/store/products';
import ProductCard from '~/components/ProductCard.vue';

const productsStore = useProductsStore();
const favoriteProducts = computed(() => productsStore.getFavoriteProducts);
</script>
