<template>
    <div class="container mx-auto px-4">
        <ProductCategoryList />
        <div class="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
            <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProductsStore } from '~/store/products';
import ProductCategoryList from '~/components/ProductCategoryList.vue';
import ProductCard from '~/components/ProductCard.vue';

const route = useRoute();
const productsStore = useProductsStore();
const { getProductsByCategory } = productsStore;

const filteredProducts = computed(() => {
    return getProductsByCategory(route.params.category);
});
</script>
