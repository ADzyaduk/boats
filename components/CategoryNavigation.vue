<!-- components/CategoryNavigation.vue -->
<template>
    <UContainer>
        <UHorizontalNavigation :links="categoryLinks">
            <template #default="{ link }">
                <span class="group-hover:text-primary relative">{{ link.label }}</span>
            </template>
        </UHorizontalNavigation>
    </UContainer>

</template>

<script setup>
import { computed } from 'vue';
import { useProductsStore } from '~/store/products';

const productsStore = useProductsStore();

const categoryLinks = computed(() => {
    return productsStore.categories.map(category => ({
        label: category.name,
        to: `/catalog/${category.slug}`
    }));
});
</script>
