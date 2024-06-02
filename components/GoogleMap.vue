<template>
    <div class="map-container">
        <div ref="map" class="map"></div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const map = ref(null)

onMounted(() => {
    if (typeof google !== 'undefined') {
        initMap()
    } else {
        loadGoogleMapsApi().then(initMap)
    }
})

const loadGoogleMapsApi = () => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`
        script.async = true
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
    })
}

const initMap = () => {
    map.value = new google.maps.Map(document.querySelector('.map'), {
        center: { lat: 40.73061, lng: -73.935242 },
        zoom: 12
    })
}
</script>

<style scoped>
.map-container {
    width: 100%;
    height: 400px;
}

.map {
    width: 100%;
    height: 100%;
}
</style>
