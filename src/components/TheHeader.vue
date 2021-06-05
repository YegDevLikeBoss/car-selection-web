<template>
  <header class="header">
    <div class="header-box">
      <router-link to="/" class="text-cursive text-gold title"
        >Автоподбор</router-link
      >
    </div>
    <div class="line"></div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}

.header-box {
  width: 100%;
  height: 40px;
  padding-top: 5px;
  background-color: #111111;
}

.text-gold {
  color: #d4af37;
}

.title {
  margin-left: 5px;
  font-size: 25px;
}

.line {
  width: 100%;
  height: 2px;
  background: rgb(212, 175, 55);
  background: linear-gradient(
    50deg,
    rgba(212, 175, 55, 1) 0%,
    rgba(255, 215, 0, 1) 33%,
    rgba(144, 119, 39, 1) 100%
  );
}
</style>
