<template>
  <div>
    <div class="car-info">
      <img class="car-image" :src="model.image_url" :alt="model.model" />
      <h2 class="model-name">{{ model.model }}</h2>
    </div>
    <div class="car-info hidden">
      <model-card v-for="car in model.recommended" :model="car"></model-card>
    </div>
  </div>
</template>

<script>
import ModelCard from "../components/ModelCard.vue";

export default {
  name: "Model",
  components: {
    ModelCard,
  },
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

<style scoped>
.hidden {
  overflow: hidden;
}

.car-info {
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  padding-left: 15px;
}

.car-image {
  height: 320px;
  width: auto;
  margin-right: 10px;
}

.model-name {
  color: white;
  font-size: 30px;
}
</style>