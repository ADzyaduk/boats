<template>
    <header class="relative bg-cover bg-center h-screen" style="background-image: url('./port.jpg')">
        <AppNavbar />
        <div class="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-center">
            <h1 class="text-white text-4xl md:text-6xl font-bold mb-4">Find the Perfect Yacht</h1>
            <p class="text-white text-lg md:text-xl mb-6">Discover beautiful yachts and destinations</p>
            <div class="flex space-x-4">
                <NuxtLink to="/catalog" class="bg-transparent border border-white text-white px-4 py-2 rounded">
                    Выбрать яхту
                </NuxtLink>
                <NuxtLink to="/contacts" class="bg-primary-500 border border-white text-white px-4 py-2 rounded">
                    Связаться с нами
                </NuxtLink>
            </div>
        </div>
        <div class="absolute top-12 right-0 m-4 flex space-x-4 items-center">
            <UButton to="https://wa.me/79000000000" icon="i-mdi-phone" class="mx-1" variant="link" size="xl" />
            <UButton to="https://wa.me/79000000000" icon="i-mdi-whatsapp" class="mx-1" variant="link" size="xl" />
            <UButton to="https://wa.me/79000000000" icon="i-mdi-telegram" class="mx-1" variant="link" size="xl" />

        </div>
    </header>
</template>

<script setup>
import AppNavbar from '~/components/AppNavbar.vue';
</script>

<style scoped>
.bg-cover {
    background-size: cover;
}

.bg-center {
    background-position: center;
}
</style>
