<template>
  <section class="mt-50">
    <h1 class="subtitle has-text-weight-bold">List with dynamic import</h1>
    <ul v-if="wizzardCategory && wizzardCategory.length>0">
      <li v-for="(item,index) in wizzardCategory" :key="index">{{item.LS_DeviceWizardCategory}}</li>
    </ul>
  </section>
</template>
<script>
import nProgress from '@/utils/index';

export default {
  data() {
    return {
      wizzardCategory: [],
    };
  },
  mounted() {
    nProgress.start();
    this.fetchMockData(`${process.env.BASE_URL}mock/KitDevice.json`).then(
      (response) => {
        if (response) {
          nProgress.done();
          const { DeviceWizardCategory } = response.data;
          this.wizzardCategory = DeviceWizardCategory;
        }
      },
    );
  },
  methods: {
    fetchMockData(urlToMock) {
      return new Promise((resolve) => {
        const config = {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        };
        this.axios.get(urlToMock, config).then((response) => {
          resolve(response);
        });
      });
    },
  },
};
</script>
