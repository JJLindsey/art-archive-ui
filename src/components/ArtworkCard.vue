<template>
    <div class="artwork-card">
        <h2 class="certificate-header">Artwork Certificate</h2>
        <h3 class="artwork-title">Title: {{ artwork.title }}</h3>
        <p class="meta">Artist: {{ artwork.artist }}</p>
        <p class="meta">Year: {{ artwork.year }}</p>
        <p class="meta">Medium: {{ artwork.medium }}</p>
        <p class="meta">Dimensions: {{ artwork.dimensions }}</p>
        <div class="certificate-view">
            <button class="certificate-btn" @click="showModal = true">View PDF Certificate</button>
        </div>
        <div class="qrcode">
            <qrcode-vue :value="certificateUrl" :size="120" />
        </div>
        <!--modal for pdf-->
        <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
            <div class="modal-content">
                <button class="close-btn" @click="showModal = false"></button>
                <iframe
                    v-if="certificateUrl"
                    :src="certificateUrl"
                    width="100%"
                    height="400px"
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script setup>
    import QrcodeVue from 'qrcode.vue';
    import { computed, ref } from 'vue';
    import { getCertificateUrl } from '../api/artworks.js';

    const props = defineProps({
        artwork: Object
    });

    const showModal = ref(false);

    const certificateUrl = computed(() => {
        return getCertificateUrl(props.artwork.id);
    })
</script>

<style scoped>
    .artwork-card {
        border: 3px solid #e1e1e149;
        border-radius: 9px;
        padding: 16px 20px;
        width: 300px;
        background: #ffffe5;
        box-shadow: 4.5px 9px 9px hsl(0deg 0% 0% / 0.30);
        text-align: left;
    }
    .certificate-header {
        text-align: center;
    }
    .artwork-title {
        font-size: 18px;
        margin-bottom: 8px;
    }

    .meta {
        color: #161616;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 500;
    }
    .certificate-view {
        display: flex;
        justify-content: center;
    }
    .certificate-btn {
        position: relative;
        z-index: 1;
        overflow: hidden;
        margin-top: 8px;
        margin-bottom: 16px;
        padding: 8px 16px;
        background-color: #4248b9;
        box-shadow: 3px 4px 9px hsla(250, 100%, 14%, 0.3);
        background-image: linear-gradient(
        0deg,
        rgba(94, 58, 238, 1) 0%,
        rgba(197, 107, 240, 1) 100%
        );
        color: white;
        border-radius: 18px;
        border: none;
        cursor: pointer;
        text-decoration: none;
    }
    .certificate-btn:hover {
        background-image: none;
        background-color: #cf009e;
    }
    .certificate-btn::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(0deg, #cf009e 0%, #ff6bc1 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    }
    .certificate-btn:hover::after {
    opacity: 1;
    }
    .qrcode {
        display: flex;
        justify-content: center;
        margin-top: 12px;
    }
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding-top: 15px;
        background: rgba(0, 0, 0, 0.497);
        display: flex;
        justify-content: center;
    }
    .modal-content {
        background: white;
        padding: 16px;
        position: relative;
        width: 80%;
        max-width: 800px;
        max-height: 80%;
        border-radius: 8px;
    }
    .close-btn {
        position: absolute;
        top: 8px;
        right: 8px;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
    }
</style>