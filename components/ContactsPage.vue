<template>
  <UContainer class="mt-28">
    <!-- Заголовок -->
    <h1 class="text-2xl font-semibold text-center mb-4">Наши контакты</h1>

    <div class="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8 rounded-xl shadow-md p-6">
      <!-- Блок с призывом -->
      <div class="md:w-1/2 w-full">
        <p class="text-lg font-medium text-center md:text-left">
          Вы можете заказать звонок, позвонить нам или написать в соцсетях. Мы всегда рады помочь!
        </p>
      </div>

      <!-- Форма и кнопки для связи -->
      <div class="md:w-1/2 w-full">
        <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit" @error="onError">
          <UFormGroup label="Имя" name="name">
            <UInput v-model="state.name" class="w-full" />
          </UFormGroup>

          <UFormGroup label="Телефон" name="phone">
            <UInput v-model="state.phone" type="tel" class="w-full" />
          </UFormGroup>

          <UButton block type="submit" class="w-full">
            Заказать звонок
          </UButton>
        </UForm>

        <div class="flex justify-around items-center mt-4 space-x-4">
          <UButton to="tel:+79000000000" icon="i-mdi-phone" variant="link" size="xl" />
          <UButton to="https://wa.me/79000000000" icon="i-mdi-whatsapp" variant="link" size="xl" />
          <UButton to="https://t.me/telegramusername" icon="i-mdi-telegram" variant="link" size="xl" />
        </div>
      </div>
    </div>

    <!-- Карта -->
    <!-- <div class="mt-8">
      <GoogleMap />
    </div> -->
  </UContainer>
</template>

<script setup lang="ts">

import { reactive } from 'vue'
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'

const state = reactive({
  name: '',
  phone: ''
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Required' })
  if (!state.phone) errors.push({ path: 'phone', message: 'Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}

async function onError(event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id)
  element?.focus()
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<style scoped>
/* Добавьте стили при необходимости */
</style>
