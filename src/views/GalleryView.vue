<template>
    <div class="gallery">

    </div>
</template>
<script setup>
    import { ref, onMounted } from 'vue';
    import {fetchArtworks} from '@/api/artworks';
    import ArtworkCard from '@/components/ArtworkCard.vue';

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
