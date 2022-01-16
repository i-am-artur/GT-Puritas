<template>
  <main v-if="content !== null" class="content">
    <h1 class="content__title">{{ content.title }}</h1>
    <IntroImage
      :bgImage="require('../assets/electroLines.jpg')"
      bgPosition="center"
    />
    <p class="content__paragraph">
      {{ content.intro }}
    </p>
    <p>{{ content.one }}</p>
    <ul class="content__list">
      <li v-for="(facility, index) in content.facilities" :key="index">
        {{ facility }}
      </li>
    </ul>
    <p>{{ content.two }}</p>
    <!--    <p>{{ content.three }}</p>-->
    <p>{{ content.four }}</p>
    <p>
      <span>{{ content.five.title }}</span>
      <span>{{ content.five.content }}</span>
    </p>
    <p>{{ content.six }}</p>
    <p>{{ content.seven }}</p>
    <ul class="content__list">
      <li v-for="(sevenListItem, index) in content.sevenList" :key="index">
        {{ sevenListItem }}
      </li>
    </ul>
    <p>{{ content.eight }}</p>
    <p>{{ content.nine }}</p>
    <p>{{ content.ten }}</p>
  </main>
  <LoadingSpinner :display="content === null" />
</template>

<script>
import { loadContent } from "../mixins/mixins";
import LoadingSpinner from "../components/LoadingSpinner";
import IntroImage from "../components/IntroImage";

export default {
  components: { IntroImage, LoadingSpinner },
  setup() {
    let { content } = loadContent("aboutUs.json");

    return {
      content,
    };
  },
};
</script>

<style lang="less">
@import (reference) "../less/helpers";
</style>
