<template>
  <header class="header">
    <Logo />
    <div class="header__content">
      <LanguageChooser />
      <BurgerMenu @burgerMenuClicked="burgerMenuIsClicked" />
      <Navigation :displayClickEvent="BurgerMenuClickedEvent" />
    </div>
  </header>
  <div class="hr"></div>
</template>

<script>
import LanguageChooser from "./LanguageChooser";
import BurgerMenu from "./BurgerMenu";
import Navigation from "./Navigation";
import Logo from "./Logo";

export default {
  components: { Navigation, LanguageChooser, BurgerMenu, Logo },
  data() {
    return {
      BurgerMenuClickedEvent: null,
    };
  },
  methods: {
    burgerMenuIsClicked(event) {
      this.BurgerMenuClickedEvent = event;
    },
  },
};
</script>

<style lang="less">
@import (reference) "../less/helpers";

.header {
  &:extend(.section-margin-sides);
  display: flex;
  justify-content: space-between;

  .OnlyOnMobile({
    height: 50px;
    align-items: center;
  });

  .OnTabletSmall({
    margin-top: 1.5rem;
    align-items: baseline;
  });

  &__content {
    position: relative;
    display: flex;
    align-items: center;
  }
}

.hr {
  height: 5px;
  width: 100%;
  background-color: @color-main;
}
</style>
