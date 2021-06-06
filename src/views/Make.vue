<template>
  <div class="about">
    <div class="wrapper">
      <div class="card">
        <img class="make-image" :src="make.image_url" :alt="make.name" />
        <h2>{{ make.name }}</h2>
      </div>
      <model-card
        v-for="model of make.models"
        :make="make.name"
        :model="model"
      ></model-card>
    </div>
  </div>
</template>

<script>
import ModelCard from "../components/ModelCard.vue";

export default {
  name: "Make",
  components: {
    ModelCard,
  },
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

<style scoped>
.card {
  width: 200px;
  padding: 3px 0;
  margin-top: 15px;
  margin-left: 15px;
  background-color: #eeeeee;
  border-radius: 5px;
  border-bottom: 3px solid transparent;
  text-align: center;
}

.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.make-image {
  width: 194px;
  height: auto;
  border-top-right-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;
}
</style>
