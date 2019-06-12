<template>
  <section class="mt-50">
    <h1 class="subtitle has-text-weight-bold">Input Validation using Vee-Validate</h1>
    <div class="columns">
      <div class="column is-half">
        <b-field
          label="First Name"
          :type="{'is-danger':errors.has('First-Name')}"
          :message="errors.first('First-Name')"
        >
          <b-input
            type="text"
            v-model="firstName"
            name="First-Name"
            v-validate="{required:true,min:3}"
          ></b-input>
        </b-field>
        <b-field
          label="Last Name"
          :type="{'is-danger':errors.has('Last-Name')}"
          :message="errors.first('Last-Name')"
        >
          <b-input
            type="text"
            v-model="lastName"
            name="Last-Name"
            v-validate="{required:true,min:3}"
          ></b-input>
        </b-field>
        <b-field
          label="Password"
          :type="{'is-danger':errors.has('Password')}"
          :message="errors.first('Password')"
        >
          <b-input
            type="password"
            v-model="passWord"
            name="Password"
            v-validate="{required:true,min:1}"
          ></b-input>
        </b-field>
        <b-field
          label="Email Address"
          :type="{'is-danger':errors.has('Email-Address')}"
          :message="errors.first('Email-Address')"
        >
          <b-input
            type="email"
            v-model="emailAddress"
            name="Email-Address"
            v-validate="'required|email'"
          ></b-input>
        </b-field>
        <div class="columns">
          <div class="column">
            <button @click="resetForm" class="button is-default is-fullwidth">Reset</button>
          </div>
          <div @click="validateForm" class="column has-text-right">
            <button class="button is-primary is-fullwidth">Validate</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      emailAddress: null,
      passWord: null,
    };
  },
  methods: {
    resetForm() {
      this.firstName = null;
      this.lastName = null;
      this.emailAddress = null;
      this.passWord = null;
      setTimeout(() => {
        this.errors.clear();
      }, 200);
    },
    validateForm() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // do something
        }
      });
    },
  },
};
</script>
