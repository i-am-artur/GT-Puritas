<template>
  <div ref="introImageWrapper" class="intro-image"></div>
</template>
<script>
export default {
  name: "IntroImage",
  props: ["bgImage", "bgPosition"],
  mounted() {
    let introImage = document.querySelector(".intro-image");
    introImage.style.backgroundImage = `url(${this.bgImage})`;
    introImage.style.backgroundPosition = this.bgPosition;
  },
};
</script>
<style lang="less">
@import (reference) "../less/helpers";

.intro-image {
  margin-bottom: 20px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
