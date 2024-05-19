<template>
    <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between">
            <div class="text-white font-bold text-lg">Product Categories</div>
            <div class="space-x-4">
                <NuxtLink to="/boats" class="text-gray-300 hover:text-white">Boats</NuxtLink>
                <NuxtLink to="/yachts" class="text-gray-300 hover:text-white">Yachts</NuxtLink>
                <NuxtLink to="/premium-yachts" class="text-gray-300 hover:text-white">Premium Yachts</NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>
