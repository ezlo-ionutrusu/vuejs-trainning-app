<template>
  <div>
    <b-field>
      <button class="button is-primary is-medium" @click="goBack">
        Back
      </button>
    </b-field>
    
    <h3>Add User</h3>

    <b-field label="Primary Key">
      <b-input v-model="PK_User"></b-input>
    </b-field>

    <b-field label="Email">
      <b-input type="email"
        v-model="Email"
        maxlength="50">
      </b-input>
    </b-field>

    <b-field label="Role">
      <b-input v-model="PK_PermissionRole" maxlength="2"></b-input>
    </b-field>

    <b-field>
      <button class="button is-primary is-medium" @click="addUser">
        Add user
      </button>
    </b-field>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import nProgress from '@/utils/index';

export default {
  data() {
    return {
      PK_User: '0000',
      PK_PermissionRole: "9, 10, 11 or 13",
      Email: "john@"
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    addUser() {

      let that = this;
      let userObj = {
        "PK_User": this.PK_User,
        "PK_PermissionRole": this.PK_PermissionRole,
        "Email": this.Email
      };

      nProgress.start();

      setTimeout(() => {

        this.$store.dispatch('users/addUser', userObj);
        nProgress.done();
        this.goBack();

      }, 2 * 1000);
      
    }
  }
}
</script>

<style>

</style>
