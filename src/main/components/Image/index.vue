<template>
  <section class="mt-50">
    <h1 class="subtitle">Image loading via axios+ v-if</h1>
    <div class="columns">
      <div class="column is-2">
        <button @click="loadImage" class="button is-primary">Load image</button>
      </div>
      <div class="column" v-if="isImageLoaded">
        <img :src="imageData">
      </div>
    </div>
  </section>
</template>

<script>
import nProgress from '@/utils/index';

export default {
  data() {
    return {
      isImageLoaded: false,
      imageData: null,
      pending: false,
    };
  },
  methods: {
    loadImageProcess(imageUrl) {
      nProgress.start();
      return new Promise((resolve) => {
        const config = {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          responseType: 'blob',
        };
        this.axios.get(imageUrl, config).then((response) => {
          const reader = new window.FileReader();
          reader.readAsDataURL(response.data);
          reader.onload = () => {
            resolve(reader.result);
          };
        });
      });
    },
    loadImage() {
      this.loadImageProcess('/img/icons/android-chrome-192x192.png').then(
        (response) => {
          this.isImageLoaded = true;
          nProgress.done();
          this.imageData = response;
        },
      );
    },
  },
};
</script>
