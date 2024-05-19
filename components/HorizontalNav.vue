<script setup lang="ts">
const route = useRoute()

const links = [
  [{
    label: 'Главная',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'Каталог',
    icon: 'i-heroicons-chart-bar',
    to: `/catalog`
  }, {
    label: 'Услуги',
    icon: 'i-heroicons-command-line',
    to: '/components/command-palette'
  }], [{
    label: 'Контакты',
    icon: 'i-heroicons-phone'
  }, {
    label: 'О нас',
    icon: 'i-heroicons-question-mark-circle'
  }]
]
</script>

<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>

