<template>
    <div class="container">
        <h4 class="header">Art Archive & Provenance Tracker</h4>
        <div>
            <p class="title">Artwork Certificates</p>
        </div>
        <div class="gallery">
            <ArtworkCard
            v-for="artwork in artworks"
            :key="artwork.id"
            :artwork="artwork"
        />
        </div>
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
    .header {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 24px;
    }
    .title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 16px;
    }
    .gallery {
        display: flex;
        gap: 16px;
        padding: 20px;
    }
</style>
