<template>
  <section class="mt-20">
    <h1 class="subtitle has-text-weight-bold">Custom style and class + filters</h1>
    <h1
      :class="['subtitle',customeClass]"
      :style="this.customeStyle"
    >{{customeText | truncateText(50, '...')}}</h1>
    <h1
      :class="['subtitle',customeClass]"
      :style="this.customeStyle"
    >{{customeText | textToUpperCase}}</h1>
    <button class="button" @click="addCustomStyle()">Add custome style</button>
    <button class="button ml-10" @click="addCustomClass()">Add custome class</button>
  </section>
</template>

<script>
import filters from '@/main/filters/filters';

export default {
  filters,
  data() {
    return {
      customeClass: '',
      customeStyle: '',
      customeText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    };
  },
  methods: {
    addCustomClass() {
      this.customeClass = 'has-text-red';
    },
    addCustomStyle() {
      this.customeStyle = {
        fontStyle: 'italic',
      };
    },
  },
};
</script>
<style scoped>
.has-text-red {
  color: red;
}
</style>
