<template>
    <div class="artwork-card">
        <h3 class="artwork-title">Title: {{ artwork.title }}</h3>
        <p class="meta">Artist: {{ artwork.artist }}</p>
        <p class="meta">Year: {{ artwork.year }}</p>
        <p class="meta">Medium: {{ artwork.medium }}</p>

        <button class="certificate-btn" @click="showModal = true">View Certificate</button>
        <div>
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
        border: 2px solid #7c7c7c88;
        border-radius: 9px;
        padding: 16px;
        width: 300px;
        background: #ffffff;
        text-align: center;
    }

    .artwork-title {
        font-size: 18px;
        margin-bottom: 8px;
    }

    .meta {
        color: #2c2c2c;
        margin-bottom: 12px;
    }
    .certificate-btn {
        margin-top: px;
        margin-bottom: 12px;
        padding: 8px 16px;
        background-color: #42b983;
        color: white;
        border: none;
        cursor: pointer;
        text-decoration: none;
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