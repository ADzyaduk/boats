<template>
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <img :src="product.images[0]" alt="Main Product Image" class="w-full h-48 object-cover cursor-pointer"
            @click="openModal" />
        <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{ product.title }}</h2>
            <p class="text-gray-700 mb-4">{{ product.description }}</p>
            <p class="text-lg font-bold">{{ product.price }} $</p>
            <p class="text-sm text-gray-600">For {{ product.people }} people</p>
        </div>

        <!-- Modal -->
        <UModal v-model="isOpen" :overlay="false">
            <div class="p-4">
                <Placeholder class="h-48" />
            </div>
        </UModal>
    </div>
</template>

<script setup>
const isOpen = ref(false)

defineProps({
    product: {
        type: Object,
        required: true
    }
});

const isModalOpen = ref(false);

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};
</script>

<style scoped>
.carousel {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
}
</style>
