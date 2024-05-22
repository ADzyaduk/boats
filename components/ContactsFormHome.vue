<template>
    <div class="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Request a Call</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" v-model="form.name" class="mt-1 p-2 border border-gray-300 rounded-md w-full" required>
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
          <input type="tel" id="phone" v-model="form.phone" class="mt-1 p-2 border border-gray-300 rounded-md w-full" required>
        </div>
        <div class="flex justify-end">
          <button type="submit" class="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600">Request Call</button>
        </div>
      </form>
      <div class="mt-6 flex justify-around">
        <UButton to="tel:+79000000000" icon="i-mdi-phone" class="mx-1" variant="link" size="xl"/>
        <UButton to="https://wa.me/79000000000" icon="i-mdi-whatsapp" class="mx-1" variant="link" size="xl" />
        <UButton to="https://t.me/telegramusername" icon="i-mdi-telegram" class="mx-1" variant="link" size="xl"/>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const form = ref({
    name: '',
    phone: ''
  })
  
  const submitForm = async () => {
    const botToken = 'YOUR_TELEGRAM_BOT_TOKEN'
    const chatId = 'YOUR_TELEGRAM_CHAT_ID'
    const message = `Name: ${form.value.name}\nPhone: ${form.value.phone}`
  
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`
  
    try {
      await fetch(url)
      alert('Request sent!')
    } catch (error) {
      console.error('Error sending message to Telegram:', error)
      alert('Failed to send request. Please try again later.')
    }
  }
  </script>
  
  <style scoped>
  /* Добавьте стили при необходимости */
  </style>
  