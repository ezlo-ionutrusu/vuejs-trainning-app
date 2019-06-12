<template>
  <section class="mt-50">
    <h1 class="subtitle has-text-weight-bold">Slot components</h1>
    <slot></slot>
    <h1 class="notification is-info">Information from child</h1>
    <slot name="footer"></slot>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>
