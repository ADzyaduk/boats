<template>
    <div class="reviews my-10">
      <h2 class="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <div v-if="reviews.length === 0" class="text-center">No reviews available</div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="review in reviews" :key="review.id" class="review-card p-4 bg-white shadow-md rounded-md">
          <p class="text-sm text-gray-600 mb-2">"{{ review.text }}"</p>
          <div class="text-sm text-gray-800 font-semibold">- {{ review.author }}</div>
          <div class="text-sm text-gray-500">{{ review.date }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const reviews = ref([]);
  
  onMounted(async () => {
    try {
      const response = await fetch('/api/get-yandex-reviews');
      const data = await response.json();
      reviews.value = data.reviews;
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    }
  });
  </script>
  
  <style scoped>
  .review-card {
    transition: transform 0.3s ease;
  }
  .review-card:hover {
    transform: scale(1.05);
  }
  </style>
  