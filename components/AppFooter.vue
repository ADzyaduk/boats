<template>
  <div class=" shadow-top my-2 mt-8">
    <UContainer class="w-full">
      <div class="flex justify-center items-center space-x-4 md:hidden">
        <NuxtLink to="/" class="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium">Home
        </NuxtLink>
        <NuxtLink to="/about" class="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium">
          About</NuxtLink>
        <NuxtLink to="/services" class="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium">
          Services</NuxtLink>
        <NuxtLink to="/contact" class="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium">
          Contact</NuxtLink>
      </div>
      <div class="flex justify-center items-center mt-2">
        <UButton to="https://wa.me/79000000000" icon="i-mdi-phone" class="mx-1" variant="link" size="xl" />
        <UButton to="https://wa.me/79000000000" icon="i-mdi-whatsapp" class="mx-1" variant="link" size="xl" />
        <UButton to="https://wa.me/79000000000" icon="i-mdi-telegram" class="mx-1" variant="link" size="xl" />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.shadow-top {
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}
</style>
