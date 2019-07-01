<template>
  <div class="app">
    <left-side/>
    <div class="right-side">
      <router-view/>
    </div>
  </div>
</template>

<script>
import leftSide from "@/common/containers/Left-side/index";
export default {
  components: {
    "left-side": leftSide
  }
};
</script>

<style>
</style>
