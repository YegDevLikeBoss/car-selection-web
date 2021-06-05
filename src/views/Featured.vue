<template>
  <div class="home">
    <p>Featured page</p>
    <p>{{ featured }}</p>
  </div>
</template>

<script>
export default {
  name: "Featured",
  computed: {
    featured() {
      return this.$store.getters.featured;
    },
  },
  mounted() {
    this.$store.dispatch("getFeatured");
  },
};
</script>
