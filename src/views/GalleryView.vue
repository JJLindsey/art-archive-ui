<template>
    <div class="gallery">
        <ArtworkCard
            v-for="artwork in artworks"
            :key="artwork.id"
            :artwork="artwork"
        />
    </div>
</template>
<script setup>
    import { ref, onMounted } from 'vue';
    import {fetchArtworks} from '../api/artworks.js';
    import ArtworkCard from '../components/ArtworkCard.vue';

    const artworks = ref([]);

    onMounted(async () => {
        artworks.value = await fetchArtworks();
    });
</script>

<style scoped>
    .gallery {
        display: flex;
        gap: 16px;
        padding: 20px;
    }
</style>
