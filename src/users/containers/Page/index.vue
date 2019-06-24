<template>
  <div>

    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <div class="card">
        <div class="card-content">
          <div class="content">
            Edit user with PK: {{userToEditPK}}
          </div>
        </div>
      </div>
    </b-modal>

    <b-field>
      <button class="button is-primary is-medium" @click="goBack">
        Back
      </button>
    </b-field>

    <b-field>
      <button class="button is-primary is-medium" @click="goAddUser">
        Add User
      </button>
    </b-field>

    <div>
      <h3> Account Users </h3>
      <div v-if="checkUsersData">
        <div v-for="(user, index) in usersData" :key="index">
          
          <span>{{`${index}  |  `}} {{user["PK_User"]}}</span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span>{{user["Email"]}}</span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span>{{returnUserRole(user["PK_PermissionRole"])}}</span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            class="has-text-blue model-link"
            href="javascript:void(0)"
            @click="openEditUser(user['PK_User'])"
          >
            Edit User
          </a>
          <a
            class="has-text-blue model-link"
            href="javascript:void(0)"
            @click="deleteUser(user['PK_User'])"
          >
            Delete User
          </a>
        </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import nProgress from '@/utils/index';

export default {
  computed: {
    ...mapGetters([
      'users/getUsersData',
    ]),
    checkUsersData() {
      const { usersData } = this;
      if (usersData) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {
      usersData: [],
      isComponentModalActive: false,
      userToEditPK: 0
    };
  },
  methods: {
    goAddUser (){
      this.$router.push({
        name: 'users-add',
        params: {}
      });
    },
    openEditUser(userPK) {

      this.userToEditPK = userPK;
      this.isComponentModalActive = true;

    },
    deleteUser(PK_User) {
      this.$store.dispatch('users/deleteUser', PK_User);
    },
    returnUserRole(role) {

      const rolesArray = {
        "10"  : "Admin",
        "9"   : "Basic User",
        "11"  : "Notification Only",
        "13"  : "Advanced User"
      };

      return rolesArray[String(role)] ? rolesArray[String(role)]: "N/A";
    },
    goBack() {
      this.$router.go(-1);
    },
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
    }
  },
  created(){

  },
  mounted(){
    nProgress.start();

    if (this["users/getUsersData"].length > 0){
      console.log("x1");
      this.usersData = this["users/getUsersData"];

      nProgress.done();
    } else {
      this.fetchMockData(`${process.env.BASE_URL}mock/users.json`).then(
        (response) => {
          if (response) {
            nProgress.done();
            this.usersData = response.data.Users;
            // init store
            this.$store.dispatch('users/setUsersData', this.usersData);
          }
        },
      );
    }
    
  }
}
</script>

<style>

</style>
