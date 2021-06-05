<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

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
