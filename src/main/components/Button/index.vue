<template>
  <section class="mt-20">
    <h1 class="subtitle has-text-weight-bold">Button click example+ components bi-communication</h1>
    <b-button
      icon-pack="fa"
      type="is-primary"
      icon-left="home"
      outlined
      @click="handlerButton"
    >Trigger modal</b-button>
  </section>
</template>

<script>
export default {
  props: {
    defaultFirstLastName: {
      type: [String, Number],
      required: false,
    },
  },
  methods: {
    handlerButton() {
      this.$dialog.alert({
        title: `Hello ${this.defaultFirstLastName}`,
        message: 'Buefy modal and reading of props from input',
        confirmText: 'Ok!',
      });
    },
  },
};
</script>
