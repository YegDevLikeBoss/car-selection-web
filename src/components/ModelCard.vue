<template>
  <router-link class="card" :to="`/car/${model.id}`">
    <img class="model-image" :src="model.image_url" :alt="model.model" />
    <h2>{{ make }} {{ splitName(model.model) }}</h2>
  </router-link>
</template>

<script>
export default {
  name: "modelCard",
  props: ["make", "model"],
  methods: {
    splitName(name) {
      return name.replaceAll("_", " ");
    },
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
  transition: all 0.2s ease;

  text-decoration: none;
}

.card:link,
.card:visited {
  color: black;
}

.card:hover {
  background: white;
  border-bottom: 3px solid #d4af37;
}

.model-image {
  width: 194px;
  height: auto;
  border-top-right-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;
}
</style>
