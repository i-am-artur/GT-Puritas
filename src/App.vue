<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: { Footer, Header },
};
</script>

<style lang="less">
@import (reference) "less/helpers";
@import "less/common";

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @color-text;
}

a {
  text-decoration: none;
}
</style>
