<template>
  <div class="app">
    <left-side/>
    <div class="right-side">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    'left-side': () => import('@/common/containers/Left-side/index'),
  },
};
</script>
<style lang="scss">
@import "resources/styles/index.scss";
</style>
