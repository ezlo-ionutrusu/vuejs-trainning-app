<template>
  <section class="mt-20" v-if="fetchCategoryModels">
    <h1 class="title">
      <i class="fa fa-charging-station"></i>&nbsp;Fetch models by category from VUEX
    </h1>
    <button class="button is-default" @click="goBack()">
      <i class="fa fa-arrow-left"></i>&nbsp;Go back
    </button>
    <div v-if="data" class="mt-20">
      <b-table
        :data="data"
        :paginated="isPaginated"
        :per-page="perPage"
        icon-pack="fa"
        :current-page.sync="currentPage"
        :pagination-simple="isPaginationSimple"
        :default-sort-direction="defaultSortDirection"
        default-sort="Name.text"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
      >
        <template slot-scope="props">
          <b-table-column field="id" label="ID" width="40" numeric>{{ props.row.PK_KitDevice }}</b-table-column>

          <b-table-column field="Name.text" label="Name">{{ props.row.Name.text }}</b-table-column>

          <b-table-column field="Manufacturer" label="Manufacturer">{{ props.row.Manufacturer }}</b-table-column>
        </template>
      </b-table>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      data: null,
      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: "asc",
      currentPage: 1,
      perPage: 5
    };
  },
  computed: {
    ...mapGetters(["devices/getWizzardCategoryModels"]),
    fetchCategoryModels() {
      if (this["devices/getWizzardCategoryModels"]) {
        return true;
      }
      return false;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    if (
      this["devices/getWizzardCategoryModels"] &&
      this["devices/getWizzardCategoryModels"].length > 0
    ) {
      this.data = this["devices/getWizzardCategoryModels"];
    } else {
      this.goBack();
    }
  }
};
</script>

<style>
table {
  width: 100%;
}
</style>
