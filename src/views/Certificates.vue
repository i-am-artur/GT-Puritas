<template>
  <main v-if="content !== null" class="content">
    <section
      aria-label="modal"
      class="modal"
      v-if="isModalShown"
      :class="{ modal_display: isModalShown }"
      @click="hideModal"
    >
      <img
        class="modal__image"
        :src="require(`../assets/${content.image.full}`)"
        :alt="content.title"
      />
    </section>

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
import { ref } from "vue";
import { loadContent } from "../mixins/mixins";
import LoadingSpinner from "../components/LoadingSpinner";

export default {
  components: { LoadingSpinner },
  setup() {
    let isModalShown = ref(false);
    let { content } = loadContent("certificates.json");

    let showModal = () => {
      isModalShown.value = true;
      document.body.style.overflow = "hidden";
    };

    let hideModal = () => {
      isModalShown.value = false;
      document.body.style.overflow = "visible";
    };

    return {
      isModalShown,
      content,
      showModal,
      hideModal,
    };
  },
};
</script>

<style lang="less">
@import (reference) "../less/helpers";

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
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);

  &_display {
    display: flex;
  }

  &__image {
    max-height: 90vh;
    max-width: 90%;
  }
}
</style>
