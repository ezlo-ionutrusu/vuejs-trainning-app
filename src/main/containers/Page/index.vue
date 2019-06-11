<template>
  <section class="main">
    <h1 class="title">
      <i class="fa fa-home"></i>&nbsp;Home
    </h1>
    <hr>
    <form-component :defaultFirstLastName="defaultFirstLastName" v-model="defaultFirstLastName"/>
    <button-component :defaultFirstLastName="defaultFirstLastName"/>
    <image-component/>
    <style-component/>
    <list-component/>
  </section>
</template>
<script>
export default {
  data() {
    return {
      defaultFirstLastName: "John Doe"
    };
  },
  components: {
    "form-component": () => import("@/main/components/Form/index"),
    "button-component": () => import("@/main/components/Button/index"),
    "image-component": () => import("@/main/components/Image/index"),
    "style-component": () => import("@/main/components/Style/index"),
    "list-component": () => import("@/main/components/List/index")
  }
};
</script>
