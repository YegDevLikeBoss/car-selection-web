<template>
  <TheHeader />
  <section class="section">
    <router-view />
  </section>
  <div
    style="width: 100%; height: 400px; background-color: rgb(26, 25, 25)"
  ></div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "app",
  components: {
    TheHeader,
  },
  created() {
    document.title = "Автоподбор";
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Roboto&family=Spectral:wght@700&display=swap");

* {
  vertical-align: baseline;
  font-weight: inherit;
  font-family: inherit;
  font-style: inherit;
  font-size: 100%;
  border: 0 none;
  outline: 0;
  padding: 0;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Spectral", serif;
}
p {
  font-family: "Roboto", sans-serif;
}
ul {
  list-style: outside none none;
}
.link {
  text-decoration: none;
}
.text-cursive {
  font-family: "Kelly Slab", cursive;
}
</style>

<style scoped>
.section {
  margin-top: 43px;
  padding-top: 1px;
  background-color: rgb(26, 25, 25);
}
</style>