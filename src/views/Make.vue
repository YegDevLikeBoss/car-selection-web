<template>
  <div class="about">
    <h1>This is make page</h1>
    <p>{{ make }}</p>
  </div>
</template>

<script>
export default {
  name: "Make",
  computed: {
    make() {
      return this.$store.getters.make;
    },
  },
  mounted() {
    this.$store.dispatch("getMake", this.$route.params.make);
  },
};
</script>
