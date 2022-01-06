<template>
  <button class="burger" @click="$emit('burgerMenuClicked', $event)">
    <span class="burger__line"></span>
    <span class="burger__line"></span>
    <span class="burger__line"></span>
  </button>
</template>

<script>
export default {
  name: "ButtonMenu",
  emits: ["burgerMenuClicked"],
};
</script>

<style lang="less">
@import (reference) "../less/helpers";

.burger {
  display: none;
}

.OnlyOnMobile({
  .burger {
    margin: 0;
    width: 40px;
    height: @burger-height;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 3px;
    background-color: @color-main;
    border: none;
    cursor: pointer;

    &__line {
      margin: 0;
      height: 3px;
      width: 80%;
      background-color: white;
    }
  }
});
</style>
