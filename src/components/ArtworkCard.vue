<template>
    <div class="artwork-card">
        <h3 class="artwork-title">{{ artwork.title }}</h3>
        <p class="meta">{{ artwork.artist }} ({{ artwork.year }})</p>

        <a href="certificateUrl" target="_blank">Download Certificate</a>

        <qrcode-vue :value="certificateUrl" :size="120" />
    </div>
</template>

<script setup>
    import QrcodeVue from 'qrcode.vue';
    import { computed } from 'vue';
    import { getCertificateUrl } from '../api/artworks.js';

    const props = defineProps({
        artwork: {
            type: Object,
        }
    });

    const certificateUrl = computed(() => {
        getCertificateUrl(props.artwork.id);
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
</style>