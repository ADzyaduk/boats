<template>
    <div class="category-list mb-8">
        <ul class="flex flex-wrap">
            <li v-for="category in categories" :key="category.id" class="mr-4 mb-2">
                <nuxt-link :to="`/catalog/${category.slug}`" class="text-blue-500 hover:underline">{{ category.name
                    }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useProductsStore } from '~/store/products';
import { storeToRefs } from 'pinia';

const productsStore = useProductsStore();
const { categories } = storeToRefs(productsStore);
</script>
