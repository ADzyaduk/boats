<template>
    <div class="container mx-auto px-4">
        <CategoryNavigation />
        <div class="product-list grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProductsStore } from '~/store/products';
import CategoryNavigation from '~/components/CategoryNavigation.vue';
import ProductCard from '~/components/ProductCard.vue';

const route = useRoute();
const productsStore = useProductsStore();
const { getProductsByCategory } = productsStore;

const filteredProducts = computed(() => {
    return getProductsByCategory(route.params.category);
});
</script>
