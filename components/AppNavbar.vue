<template>
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex items-center">
            <img class="h-8 w-auto" src="#" alt="Company Logo">
            <span class="ml-3 text-xl font-semibold">Company Name</span>
          </div>
          <div class="hidden md:block">
            <div class="flex space-x-4">
              <NuxtLink to="/" class="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NuxtLink>
              <NuxtLink to="/about" class="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</NuxtLink>
              <NuxtLink to="/services" class="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</NuxtLink>
              <NuxtLink to="/contact" class="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</NuxtLink>
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
  