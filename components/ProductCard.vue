<template>
    <div class="product-card border border-primary p-4 rounded-lg shadow-lg">
        <img @click="isOpen = true" :src="product.images[0]" alt="Product Preview"
            class="w-full h-[300px] aspect-auto rounded-lg object-cover" />
        <h3 class="text-xl font-semibold mt-4 text-center">{{ product.name }}</h3>
        <p class="text-gray-600 mt-2">{{ product.description }}</p>
        <p class="text-green-500 font-bold mt-2">{{ product.price }}</p>
        <div class="flex items-center mt-4 gap-4">
            <div class="w-full items-center">
                <UButton @click="isFormModalOpen = true" block label="Button" color="blue">
                    <template #trailing>
                        <UIcon name="i-mdi-telegram" class="w-5 h-5" />
                    </template>
                </UButton>
            </div>
            <div class="w-full">
                <UButton @click="isFormModalOpen = true" block label="Button" color="green">
                    <template #trailing>
                        <UIcon name="i-mdi-whatsapp" class="w-5 h-5" />
                    </template>
                </UButton>
            </div>
        </div>
    </div>

    <UModal v-model="isOpen" class="">

        <UCarousel :items="product.images" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" indicators>
            <template v-slot="{ item }">
                <img :src="item" class="w-full " draggable="false">
            </template>
        </UCarousel>

        <!-- <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden"
            indicators>
            <img :src="item" class="w-full" draggable="false">
        </UCarousel> -->
    </UModal>

    <UModal v-model="isFormModalOpen">
        <div class="p-4">
            <h3 class="text-xl font-semibold mb-4">Введите информацию</h3>
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="people">Количество человек</label>
                    <USelect v-model="selectedPeople" :options="peopleOptions" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="date">Дата</label>
                    <DatePick v-model="selectedDate" format="yyyy-MM-dd" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="time">Время</label>
                    <input v-model="selectedTime" type="time" id="time"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required>
                </div>
                <div class="flex items-center justify-between">
                    <UButton type="submit" label="Отправить" color="blue" />
                    <UButton type="button" @click="isFormModalOpen = false" label="Отмена" color="gray" />
                </div>
            </form>
        </div>
    </UModal>
</template>

<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

const isOpen = ref(false);
const isFormModalOpen = ref(false);
const selectedPeople = ref('');
const selectedDate = ref('');
const selectedTime = ref('');

const peopleOptions = [
    { value: '1', label: '1 человек' },
    { value: '2', label: '2 человека' },
    { value: '3', label: '3 человека' },
    { value: '4', label: '4 человека' },
    { value: '5', label: '5 человек' },
    { value: '6', label: '6 человек' },
    { value: '7', label: '7 человек' },
    { value: '8', label: '8 человек' },
    { value: '9', label: '9 человек' },
    { value: '10', label: '10 человек' },
    { value: '11', label: '11 человек' },
    { value: 'more', label: 'Больше 11 человек' },
];

const submitForm = () => {
    console.log('Данные формы:', {
        people: selectedPeople.value,
        date: selectedDate.value,
        time: selectedTime.value,
    });
    // Здесь можно добавить логику для обработки формы
    isFormModalOpen.value = false;
};
</script>

<style scoped></style>
