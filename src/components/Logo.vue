<template>
  <h2 class="logo">
    <router-link to="/" class="logo__link">
      <span class="logo__GT">GT</span>
      <span class="logo__Puritas">Puritas</span>
    </router-link>
  </h2>
</template>

<style lang="less">
@import (reference) "../less/helpers";

.logo {
  margin: 0;

  .OnlyOnMobile({
    font-size: 2.2rem;
  });

  .OnTabletSmall({
    font-size: 2.5rem;
  });

  .OnDesktopSmall({
    font-size: 3.5rem;
  });

  &__GT {
    color: @color-main;
  }

  &__Puritas {
    color: @color-dark;
  }
}
</style>
