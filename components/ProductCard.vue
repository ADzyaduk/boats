<template>
    <div class="product-card border border-gray-300 p-4 rounded-lg shadow-lg">
        <img :src="product.images.preview" alt="Product Preview" class="w-full h-auto rounded-md" />
        <h3 class="text-xl font-semibold mt-4">{{ product.name }}</h3>
        <p class="text-gray-600 mt-2">{{ product.description }}</p>
        <p class="text-green-500 font-bold mt-2">{{ product.price }}</p>
        <div class="additional-images flex mt-4">
            <img v-for="(image, index) in product.images.others" :key="index" :src="image" alt="Product Image"
                class="w-16 h-16 mr-2 rounded-md" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
.product-card {
    @apply m-2;
}
</style>
