<template>
    <div class="artwork-card">
        <h3 class="artwork-title">Title: {{ artwork.title }}</h3>
        <p class="meta">Artist: {{ artwork.artist }}</p>
        <p class="meta">Year: {{ artwork.year }}</p>
        <p class="meta">Medium: {{ artwork.medium }}</p>

        <a :href="certificateUrl" target="_blank" download>Download Certificate</a>
       
        <div>
            <qrcode-vue :value="certificateUrl" :size="120" />
        </div>
    </div>
</template>

<script setup>
    import QrcodeVue from 'qrcode.vue';
    import { computed } from 'vue';
    import { getCertificateUrl } from '../api/artworks.js';

    const props = defineProps({
        artwork: Object
    });

    const certificateUrl = computed(() => {
        return getCertificateUrl(props.artwork.id);
    })
</script>

<style scoped>
    .artwork-card {
        border: 1px solid #ccc;
        padding: 16px;
        width: 200px;
        background: #fff;
        text-align: center;
    }

    .artwork-title {
        font-size: 18px;
        margin-bottom: 8px;
    }

    .meta {
        color: #666;
        margin-bottom: 12px;
    }
    .certificate-btn {
        margin-top: 8px;
        margin-bottom: 8px;
        padding: 8px 16px;
        background-color: #42b983;
        color: white;
        border: none;
        cursor: pointer;
        text-decoration: none;
    }
</style>