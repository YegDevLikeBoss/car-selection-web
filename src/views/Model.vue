<template>
  <div class="about">
    <h1>This is model page</h1>
    <p>{{ model }}</p>
  </div>
</template>

<script>
export default {
  name: "Model",
  computed: {
    model() {
      return this.$store.getters.model;
    },
  },
  mounted() {
    this.$store.dispatch("getModel", this.$route.params.id);
  },
};
</script>