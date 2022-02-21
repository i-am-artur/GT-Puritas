<template>
  <main v-if="content !== null" class="content">
    <h1 class="content__title">{{ content.title }}</h1>
    <ImageSrcSet
      alt="intro image"
      path="img/"
      src="powerPlant-1280.jpg"
      sizes="(max-width: 719px) 719px, (min-width: 720px) 1280px"
      :srcset="[
        { src: 'powerPlant-719.jpg', intrinsicSize: '719w' },
        { src: 'powerPlant-1280.jpg', intrinsicSize: '1280w' },
      ]"
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
import ImageSrcSet from "../components/ImageSrcSet";

export default {
  components: {
    ImageSrcSet,
    LoadingSpinner,
  },
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
