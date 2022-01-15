<template>
  <nav v-if="content !== null" class="nav" :class="{ nav_display: isShown }">
    <ul class="nav__body">
      <li class="nav__item">
        <router-link :to="links.home" class="nav__link">{{
          content.aboutUs
        }}</router-link>
      </li>
      <li class="nav__item">
        <router-link :to="links.services" class="nav__link">{{
          content.services
        }}</router-link>
      </li>
      <li class="nav__item">
        <router-link :to="links.experience" class="nav__link"
          >{{ content.experience }}
        </router-link>
      </li>
      <li class="nav__item">
        <router-link :to="links.certificates" class="nav__link"
          >{{ content.certificates }}
        </router-link>
      </li>
      <li class="nav__item">
        <router-link :to="links.contacts" class="nav__link">{{
          content.contacts
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { getLinks, loadContent } from "../mixins/mixins";

export default {
  name: "Navigation",
  props: ["displayClickEvent"],
  data() {
    return {
      isShown: false,
    };
  },
  setup() {
    let { content } = loadContent("navigation.json");
    const links = getLinks();
    return {
      content,
      links,
    };
  },
  created() {
    document.addEventListener("click", (event) => {
      this.isShown = event === this.displayClickEvent ? !this.isShown : false;
    });
  },
};
</script>

<style lang="less">
@import (reference) "../less/helpers";

.nav {
  .OnlyOnMobile({
    display: none;
    position: absolute;
    width: 100vw;
    top: (@burger-height + 10px);
    right: -10px;
    padding: 10px;
    background-color: @color-main;

    &_display {
      display: block;
    }
  });

  .OnTabletSmall({
    position: static;
    display: block;
    padding: 0;
    /*background-color: unset;*/
  });

  &__body {
    display: flex;
    list-style-type: none;
    align-items: flex-end;
    margin: 0;
    padding: 0;

    .OnlyOnMobile({
      flex-direction: column;
    });

    .OnTabletSmall({
      flex-direction: row;
      justify-content: flex-end;
      flex-wrap: wrap;
    });
  }

  &__item {
    .OnlyOnMobile({
      padding: 10px;
    });

    .OnTabletSmall({
      padding: 0;
    });
  }

  &__link {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 20px;
    font-weight: bold;
    white-space: nowrap;

    .OnlyOnMobile({
      font-size: 2rem;
      color: white;
    });

    .OnTabletSmall({
      color: @color-main;
    });

    .OnlyOnTabletSmall({
      font-size: 0.82rem;
    });

    .OnTablet({
      font-size: 0.95rem;
    });

    .OnDesktopSmall({
      font-size: 1.3rem;
    });
  }
}

.router-link-exact-active {
  .OnlyOnMobile({
    color: yellow;
  });

  .OnTabletSmall({
    color: crimson;
  });
}
</style>
