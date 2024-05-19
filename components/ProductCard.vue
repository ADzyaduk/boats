<template>
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <div class="carousel">
            <img v-for="(image, index) in product.images" :key="index" :src="image" alt="Product Image"
                class="w-full h-48 object-cover" />
        </div>
        <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{ product.title }}</h2>
            <p class="text-gray-700 mb-4">{{ product.description }}</p>
            <p class="text-lg font-bold">{{ product.price }} $</p>
            <p class="text-sm text-gray-600">For {{ product.people }} people</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        required: true
    }
});
</script>
