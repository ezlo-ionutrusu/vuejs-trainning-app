<template>
  <section>
    <form>
      <h1 class="subtitle has-text-weight-bold">Input v-model, props example</h1>
      <b-field label="Name" :message="firsLastName">
        <b-input type="text" v-model="firsLastName" :value="defaultFirstLastName"></b-input>
      </b-field>
    </form>
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
  data() {
    return {
      firsLastName: null,
    };
  },
  watch: {
    firsLastName(newV) {
      this.$emit('input', newV);
    },
  },
  mounted() {
    const { defaultFirstLastName } = this;
    if (defaultFirstLastName && defaultFirstLastName.trim().length > 0) {
      this.firsLastName = defaultFirstLastName;
    }
  },
};
</script>
