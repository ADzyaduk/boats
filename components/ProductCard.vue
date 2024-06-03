<template>
    <div class="product-card border border-primary p-4 rounded-lg shadow-lg">
        <img @click="isOpen = true" :src="product.images.preview" alt="Product Preview"
            class="w-full h-[300px] rounded-lg object-cover" />
        <h3 class="text-xl font-semibold mt-4 text-center">{{ product.name }}</h3>
        <p class="text-gray-600 mt-2">{{ product.description }}</p>
        <p class="text-green-500 font-bold mt-2">{{ product.price }}</p>
        <!-- <div class="additional-images flex mt-4">
            <img v-for="(image, index) in product.images.others" :key="index" :src="image" alt="Product Image"
                class="w-16 h-16 mr-2 rounded-md" />
        </div> -->
    </div>

    <UModal v-model="isOpen">
        <div class="p-2">
            <UCarousel :items="product.images.others" :ui="{ item: 'basis-full' }"
                class="rounded-lg overflow-hidden h-96" arrows>
                <template v-slot="{ item }">
                    <img :src="item" class="w-full object-contain" draggable="false">
                </template>
            </UCarousel>
        </div>
    </UModal>
</template>

<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});
// const productsStore = useProductsStore();
const isOpen = ref(false)


</script>

<style scoped></style>
