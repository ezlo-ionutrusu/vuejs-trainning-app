<template>
  <div>
    <section class="settings">
      <h1 class="title">
        <i class="fas fa-cogs"></i>&nbsp;Settings
      </h1>
      <hr>
      <!-- <h1 class="subtitle">Wizzard category models - VUEX implementation</h1>-->
      <div v-if="getSettings && getSettings.length > 0">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Settings Name</th>
              <th>Settings Preset</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(itemSettings,index) in getSettings" :key="index">
              <td>{{index}}</td>
              <td>{{itemSettings.settings}}</td>
              <td>{{itemSettings.preset}}</td>
              <td>
                <b-button @click="editSettings(itemSettings)">Edit</b-button>
                <b-button @click="deleteSettings(itemSettings)">Delete</b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button class="button" @click="addSettings">Add Settings</button>
    </section>
    <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <section>
              <b-field label="Settings Name">
                <b-input v-model="settingsName"></b-input>
              </b-field>

              <b-field label="From">
                <b-input required v-model="settingsFrom"></b-input>
              </b-field>
              <b-button @click="saveSettings">Save Settings to Store</b-button>
            </section>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import cuid from "cuid";
export default {
  data() {
    return {
      isCardModalActive: false,
      settingsName: null,
      settingsFrom: null,
      btnMethod: "addSettings",
      itemToEdit: null
    };
  },
  computed: {
    ...mapGetters({
      getSettings: "settings/getSettingsData"
    })
  },
  methods: {
    clearModal() {
      (this.settingsName = null), (this.settingsFrom = null);
    },
    addSettings() {
      this.isCardModalActive = true;
      this.btnMethod = "addSettings";
    },
    saveSettings(itemSettings = null) {
      if (
        this.settingsName &&
        this.settingsName.length > 3 &&
        (this.settingsFrom && this.settingsFrom.length > 3)
      ) {
        let newSettings = {
          settings: this.settingsName,
          preset: this.settingsFrom,
          id: cuid()
        };

        let cloneStore = [...this.getSettings];
        if (this.btnMethod === "addSettings") {
          cloneStore.push(newSettings);
        } else {
          let tmp = [];
          for (let settingsValue of cloneStore) {
            if (
              JSON.stringify(settingsValue) === JSON.stringify(this.itemToEdit)
            ) {
              tmp.push(newSettings);
              this.itemToEdit = JSON.parse(JSON.stringify(newSettings));
            } else {
              tmp.push(settingsValue);
            }
          }
          cloneStore = tmp;
        }

        this.$store.dispatch("settings/setSettings", cloneStore);
        this.clearModal();
        this.isCardModalActive = false;
      } else {
        alert("fill form");
      }
    },
    deleteSettings(itemSettings) {
      let cloneDeleteStore = [...this.getSettings];
      const filteredList = cloneDeleteStore.filter(
        item => JSON.stringify(item) !== JSON.stringify(itemSettings)
      );

      this.$store.dispatch("settings/setSettings", filteredList);
    },
    editSettings(itemSettings) {
      this.settingsFrom = itemSettings.preset;
      this.settingsName = itemSettings.settings;
      this.isCardModalActive = true;

      this.itemToEdit = JSON.parse(JSON.stringify(itemSettings));

      this.btnMethod = "editSettings";
    }
  }
};
</script>

<style>
</style>
