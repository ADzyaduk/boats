<template>
    <div class="relative h-screen">
        <!-- Video Background -->
        <video-background src="./720.mp4" poster="#" :sources="[
            { src: './720.mp4', res: 900, autoplay: true },
            { src: './720.mp4', res: 638, autoplay: true, poster: '#' }
        ]" style="max-height: 400px; height: 100vh;" overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)">
        </video-background>

        <!-- Welcome Message -->
        <div class="absolute inset-0 flex justify-center items-center">
            <h1 class="text-white text-4xl md:text-6xl lg:text-8xl font-bold">Hallo welcome!</h1>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
/* Ensuring the video background covers the entire viewport */
h1 {
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
</style>
