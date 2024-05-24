<template>
    <div class="services-slider my-10">
      <swiper :slides-per-view="1" :space-between="10" class="mySwiper" breakpoints="{ 640: { slidesPerView: 2, spaceBetween: 20 }, 768: { slidesPerView: 3, spaceBetween: 30 }, 1024: { slidesPerView: 4, spaceBetween: 40 } }">
        <swiper-slide v-for="(service, index) in services" :key="index">
          <div class="service-card p-4 bg-white shadow-md rounded-md">
            <img :src="service.image" alt="Service Image" class="w-full h-32 object-cover rounded-t-md">
            <h3 class="text-lg font-semibold mt-2">{{ service.name }}</h3>
            <p class="text-sm text-gray-600 mt-1">{{ service.description }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
  const services = [
    {
      name: 'Group Tours',
      description: 'Enjoy a group tour on our luxurious yachts.',
      image: 'path-to-group-tours-image.jpg',
    },
    {
      name: 'Fishing',
      description: 'Experience an amazing fishing adventure.',
      // image: 'path-to-fishing-image.jpg',
    },
    {
      name: 'Catering',
      description: 'Delicious catering services for your trips.',
      // image: 'path-to-catering-image.jpg',
    },
    {
      name: 'Yacht Rental',
      description: 'Rent a yacht for your private events.',
      // image: 'path-to-yacht-rental-image.jpg',
    },
  ];
  </script>
  
  <style scoped>
  .service-card {
    transition: transform 0.3s ease;
  }
  .service-card:hover {
    transform: scale(1.05);
  }
  </style>
  