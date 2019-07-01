<template>
  <div class="container mt-20">
  <div class="columns is-centered is-vcentered">
    <div class="column is-5">
    <h1 class="title">Login</h1>
    <section>
      <b-field label="Username">
        <b-input v-model="loginInfo.username" autocomplete="off" value="" @input="checkLoginData"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input v-model="loginInfo.password" type="password"  autocomplete="off" value="" @input="checkLoginData"></b-input>
      </b-field>
      <button class="button" @click="doLogin" >Login</button>
      <p class="red">{{variable}}</p>
    </section>
    </div>
  </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  data() {
    return {
      variable : "",
      loginFormValidation: false,
      loginInfo: {
        username: "",
        password: "",
      }
    };
  },
  computed: {
    ...mapGetters({
        loginIsAuth:"login/getLoginData"
      }),
    checkLoginData(){
      const { loginInfo}=this;
        if ( loginInfo.username == "" || loginInfo.password == "" ) {
          this.variable = 'username and password are required!';
          this.loginFormValidation = false;
          return;
        }

        if ( loginInfo.username.length < 2 || loginInfo.username.length > 20 ) {
          this.variable = 'username must have min 5 and max 10 characters!';
          this.loginFormValidation = false;
          return;
        }

        var pattern = new RegExp('^([a-zA-Z0-9]+)$');

        if ( !pattern.test(loginInfo.username) ) {
          this.variable = 'username must containt only numbers and letters!';
          this.loginFormValidation = false;
          return;
        }

         this.variable ="";
         this.loginFormValidation = true;
    }
  },
  methods: {
    doLogin(){
      const { isAuth, password, username } = this.loginIsAuth
      if ( this.loginFormValidation ) {
        if ( username != this.loginInfo.username || password != this.loginInfo.password ) {
          this.loginFormValidation = false;
          this.variable = 'username or password incorect!';
          return
        }

        this.loginFormValidation = true;
        //action

        this.$store.dispatch("login/setIsAuth",true);
        if( this.loginIsAuth.isAuth ) {
          this.$router.push({path:"/dashboard"});
        }
      }

    }
  }
};
</script>

<style>
</style>
