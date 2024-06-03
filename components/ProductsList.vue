<template>
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <ProductCard v-for="product in products" :key="product.id" :product="product" class="" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProductsStore } from '~/store/products';
import ProductCard from '~/components/ProductCard.vue';

const productsStore = useProductsStore();
const products = computed(() => productsStore.products);
</script>
