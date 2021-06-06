<template>
  <router-link class="card" :to="`/${make.name}`">
    <img class="make-logo" :src="make.image_url" :alt="make.name" />
    <h2>{{ make.name }}</h2>
  </router-link>
</template>

<script>
export default {
  name: "makeCard",
  props: ["make"],
};
</script>

<style scoped>
.card {
  width: 120px;
  padding: 10px 0;
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

.make-logo {
  width: 100px;
  height: auto;
  object-fit: cover;
}
</style>
