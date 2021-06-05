<template>
  <div class="home">
    <make-card v-for="make of featured.makes" :make="make"></make-card>
  </div>
</template>

<script>
import MakeCard from "../components/MakeCard.vue";

export default {
  name: "Featured",
  components: {
    MakeCard,
  },
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

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>