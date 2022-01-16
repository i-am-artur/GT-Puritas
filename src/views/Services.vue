<template>
  <main v-if="content !== null" class="content">
    <h1 class="content__title">{{ content.title }}</h1>
    <IntroImage
      :bgImage="require('../assets/architectDrawings.jpg')"
      bgPosition="bottom"
    />
    <h4 class="content__heading">
      {{ content.WorkPerformed.heading }}
    </h4>
    <ul class="content__list content__list_wide">
      <li
        class="content__list-item"
        v-for="(WorkPerformed, index) in content.WorkPerformed.list"
        :key="index"
      >
        {{ WorkPerformed }}
      </li>
    </ul>
    <h4 class="content__heading">
      {{ content.NormativeDocuments.heading }}
    </h4>
    <h4 class="content__heading">
      {{ content.NormativeDocuments.QA.heading }}
    </h4>
    <ul class="content__list content__list_wide">
      <li
        class="content__list content__list-item"
        v-for="(QA, index) in content.NormativeDocuments.QA.list"
        :key="index"
      >
        {{ QA }}
      </li>
    </ul>
    <h4 class="content__heading">
      {{ content.NormativeDocuments.construction.heading }}
    </h4>
    <ul class="content__list content__list_wide">
      <li
        class="content__list-item"
        v-for="(constructionDocument, index) in content.NormativeDocuments
          .construction.list"
        :key="index"
      >
        {{ constructionDocument }}
      </li>
    </ul>
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
    let { content } = loadContent("services.json");

    return {
      content,
    };
  },
};
</script>

<style lang="less" scoped>
@import (reference) "../less/helpers";
</style>
