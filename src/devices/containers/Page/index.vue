<template>
  <section class="device">
    <h1 class="title">
      <i class="fa fa-charging-station"></i>&nbsp;Devices
    </h1>
    <hr>
    <h1 class="subtitle">Wizzard category models - VUEX implementation</h1>
    <div v-if="checkWizzardData">
      <div v-for="(item,index) in fetchWizzardCategories" :key="index">
        <a
          class="has-text-black model-link"
          href="javascript:void(0)"
          @click="showModelsForCategory(item['PK_DeviceWizardCategory'])"
        >
          <span>{{`${index}.`}} {{item['LS_DeviceWizardCategory'] | no_underscore}}</span>
          <span>{{fetchNumberOfModelsByCategory(item['PK_DeviceWizardCategory'])}}</span>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import filters from "@/devices/filters/filters";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "devices/getWizzardData",
      "devices/getWizzardCategoryModels"
    ]),
    fetchWizzardCategories() {
      const wizzardData = this["devices/getWizzardData"];
      if (wizzardData) {
        const { DeviceWizardCategory } = wizzardData;
        return DeviceWizardCategory;
      }
    },
    checkWizzardData() {
      const { wizzardData } = this;
      if (wizzardData) {
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      wizzardData: []
    };
  },
  methods: {
    fetchNumberOfModelsByCategory(catID) {
      const wizzardData = this["devices/getWizzardData"];
      if (wizzardData) {
        const { KitDevice } = wizzardData;
        return ` ${
          KitDevice.filter(item => item.PK_DeviceWizardCategory === catID)
            .length
        } models`;
      }
    },
    showModelsForCategory(catID) {
      const wizzardData = this["devices/getWizzardData"];
      if (wizzardData) {
        const { KitDevice } = wizzardData;
        const filteredResults = KitDevice.filter(
          item => item.PK_DeviceWizardCategory === catID
        );
        if (filteredResults) {
          this.$store.dispatch(
            "devices/setWizzardCategoryMoidels",
            filteredResults
          );
          this.$router.push({
            name: "category-models",
            params: { id: catID }
          });
        } else {
          this.$dialog.alert({
            title: `Warning`,
            message: `No models found with category id: ${catID}`
          });
        }
      }
    },
    fetchMockData(urlToMock) {
      return new Promise((resolve, reject) => {
        var config = {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/x-www-form-urlencoded"
          }
        };
        this.axios.get(urlToMock, config).then(function(response) {
          resolve(response);
        });
      });
    }
  },
  mounted() {
    NProgress.start();
    this.fetchMockData(`${process.env.BASE_URL}mock/KitDevice.json`).then(
      response => {
        if (response) {
          NProgress.done();
          this.wizzardData = response.data;
          //init store
          this.$store.dispatch("devices/setWizzardData", this.wizzardData);
        }
      }
    );
  }
};
</script>
