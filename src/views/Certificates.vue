<template>
  <main v-if="content !== null" class="content">
    <div
      class="modal"
      @click="isModalShown = false"
      :class="{ modal_display: isModalShown }"
      v-if="isModalShown"
    >
      <img
        class="modal__image"
        :src="require(`../assets/${content.image.full}`)"
        :alt="content.title"
      />
    </div>
    <h1 class="content__title">{{ content.title }}</h1>
    <p>{{ content.intro }}</p>
    <img
      class="thumb-certificate"
      @click="showModal"
      width="200"
      :src="require(`../assets/${content.image.thumb}`)"
      :alt="content.title"
    />
  </main>
  <LoadingSpinner :display="content === null" />
</template>

<script>
import { loadContent } from "../mixins/mixins";
import LoadingSpinner from "../components/LoadingSpinner";

export default {
  components: { LoadingSpinner },
  setup() {
    let { content } = loadContent("certificates.json");
    return {
      content,
    };
  },
  data() {
    return {
      isModalShown: false,
    };
  },
  methods: {
    showModal() {
      this.isModalShown = true;
    },
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

.thumb {
  &-certificate {
    display: block;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    border: 1px solid #555;
    cursor: pointer;
  }
}

.modal {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);

  &_display {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__image {
    max-height: 90%;
    max-width: 90%;
  }
}
</style>
