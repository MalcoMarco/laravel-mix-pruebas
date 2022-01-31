<template>
  <div>
    example component
    <div class="alert" v-text="message"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "I am an alert.",
    };
  },
};
</script>

<style lang="sass" scoped>
.alert
    background: red
</style>