<template>
  <nav class="shadow-md mb-8">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center">
          <img class="h-8 w-auto" src="#" alt="Logo">
          <span class="ml-3 text-xl font-semibold">Company Name</span>
        </div>
        <div class="hidden md:block">
          <div class="flex space-x-4">
            <NuxtLink to="/"
              class="text-gray-700 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium">Главная
            </NuxtLink>
            <NuxtLink to="/catalog"
              class="text-gray-700 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium">Каталог
              Яхт
            </NuxtLink>
            <NuxtLink to="/services"
              class="text-gray-700 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium">Услуги
            </NuxtLink>
            <NuxtLink to="/contacts"
              class="text-gray-700 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium">Контакты
            </NuxtLink>

          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
/* Добавьте стили при необходимости */
</style>
