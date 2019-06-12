<template>
  <section class="mt-20">
    <h1 class="subtitle has-text-weight-bold">Computed methods</h1>
    <b-field label="Name">
      <b-input type="text" v-model="input"></b-input>
    </b-field>
    <ul>
      <li v-for="(item, index) in filteredList" :key="index">{{ item }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        'JavaScript',
        'Ruby',
        'Scala',
        'Python',
        'Java',
        'Kotlin',
        'Elixir',
      ],
      input: '',
    };
  },
  computed: {
    filteredList() {
      return this.languages.filter(item => item.toLowerCase().includes(this.input.toLowerCase()));
    },
  },
};
</script>
