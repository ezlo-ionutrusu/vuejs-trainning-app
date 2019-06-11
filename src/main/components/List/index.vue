<template>
  <section class="mt-20">
    <h1 class="subtitle has-text-weight-bold">List with dynamic import</h1>
    <ul v-if="wizzardCategory && wizzardCategory.length>0">
      <li v-for="(item,index) in wizzardCategory" :key="index">{{item.LS_DeviceWizardCategory}}</li>
    </ul>
  </section>
</template>
<script>
import KitDevice from "@/mock/KitDevice.json";
export default {
  data() {
    return {
      wizzardCategory: []
    };
  },
  mounted() {
    if (KitDevice) {
      const { DeviceWizardCategory } = KitDevice;
      this.wizzardCategory = DeviceWizardCategory;
    }
  }
};
</script>
