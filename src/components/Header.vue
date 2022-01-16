<template>
  <header class="header">
    <Logo />
    <div class="header__content">
      <LanguageChooser />
      <BurgerMenu
        v-if="isBurgerMenuShown"
        @burgerMenuClicked="burgerMenuIsClicked"
      ></BurgerMenu>
      <Navigation :displayClickEvent="BurgerMenuClickedEvent" />
    </div>
  </header>
  <div class="hr"></div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import LanguageChooser from "./LanguageChooser";
import Navigation from "./Navigation";
import Logo from "./Logo";

export default {
  components: {
    Navigation,
    LanguageChooser,
    Logo,
    BurgerMenu: defineAsyncComponent(() =>
      import(/* webpackChunkName: "BurgerMenu" */ "./BurgerMenu")
    ),
  },
  data() {
    return {
      BurgerMenuClickedEvent: null,
      isBurgerMenuShown: false,
    };
  },
  methods: {
    burgerMenuIsClicked(event) {
      this.BurgerMenuClickedEvent = event;
    },
  },
  created() {
    let mqMaxWidth = window.matchMedia("(max-width: 719px)");
    this.isBurgerMenuShown = mqMaxWidth.matches;
    mqMaxWidth.onchange = () => {
      this.isBurgerMenuShown = mqMaxWidth.matches;
    };
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
