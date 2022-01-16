<template>
  <main v-if="content !== null" class="content">
    <h1 class="content__title">{{ content.title }}</h1>
    <p>{{ content.intro }}</p>
    <IntroImage
      :bgImage="require('../assets/powerPlant.jpg')"
      bgPosition="center"
    />
    <h4 class="content__heading">{{ content.thermalPP.heading }}</h4>
    <table class="work-list">
      <tr>
        <th
          class="work-list__header"
          v-for="(heading, index) in content.thermalPP.table.heading"
          :key="index"
        >
          {{ heading }}
        </th>
      </tr>
      <tr v-for="(row, index) in content.thermalPP.table.content" :key="index">
        <td class="work-list__part">{{ row[0] }}</td>
        <td class="work-list__part work-list__part_center">{{ row[1] }}</td>
        <td class="work-list__part work-list__part_right">{{ row[2] }}</td>
      </tr>
    </table>
    <h4 class="content__heading">{{ content.nuclearPP.heading }}</h4>
    <table class="work-list">
      <tr>
        <th
          class="work-list__header"
          v-for="(heading, index) in content.nuclearPP.table.heading"
          :key="index"
        >
          {{ heading }}
        </th>
      </tr>
      <tr v-for="(row, index) in content.nuclearPP.table.content" :key="index">
        <td class="work-list__part">{{ row[0] }}</td>
        <td class="work-list__part work-list__part_center">{{ row[1] }}</td>
        <td class="work-list__part work-list__part_right">{{ row[2] }}</td>
      </tr>
    </table>
    <h4 class="content__heading">{{ content.otherPP.heading }}</h4>
    <table class="work-list">
      <tr v-for="(row, index) in content.otherPP.table.content" :key="index">
        <td class="work-list__part">{{ row[0] }}</td>
        <td class="work-list__part work-list__part_center">{{ row[1] }}</td>
        <td class="work-list__part work-list__part_right">{{ row[2] }}</td>
      </tr>
    </table>
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
    let { content } = loadContent("experience.json");

    return {
      content,
    };
  },
};
</script>

<style lang="less">
@import (reference) "../less/helpers";

.work-list {
  width: 100%;
  border-collapse: collapse;

  &__part {
    padding: 3px;
    text-align: left;
    border: 1px solid #aaa;

    &_center {
      text-align: center;
    }

    &_right {
      text-align: right;
    }
  }

  &__header {
    border: 1px solid #aaa;
    background-color: #eee;
  }
}
</style>
