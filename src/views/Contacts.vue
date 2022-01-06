<template>
  <main v-if="content !== null" class="content">
    <h1 class="content__title">{{ content.title }}</h1>
    <div class="contacts">
      <h2 class="contacts__company-name">{{ content.companyName }}</h2>

      <div class="contacts__phone-container">
        <img
          :src="require(`../assets/${content.messengersImage}`)"
          alt="telegram viber whatsup"
        />:
        <a class="contacts__phone" :href="`tel:${content.phone}`">{{
          content.phone
        }}</a>
      </div>
      <div class="contacts__email-container">
        {{ content.email.text }}:
        <a :href="`mailto:${content.email.address}`">{{
          content.email.address
        }}</a>
      </div>
    </div>
    <div class="partners">
      <h2 class="content__title">{{ content.partners.text }}</h2>
      <div
        class="partner"
        v-for="(partner, index) in content.partners.list"
        :key="index"
      >
        <img
          class="partner__image"
          :src="require(`../assets/${partner[0]}`)"
          alt="Partner"
        />
        <a class="partner__intro" :href="`${partner[1]}`">{{ partner[2] }}</a>
      </div>
    </div>
  </main>
  <LoadingSpinner :display="content === null" />
</template>

<script>
import { loadContent } from "../mixins/mixins";
import LoadingSpinner from "../components/LoadingSpinner";

export default {
  components: { LoadingSpinner },
  setup() {
    let { content } = loadContent("contacts.json");

    return {
      content,
    };
  },
};
</script>

<style lang="less">
@import (reference) "../less/helpers";

.contacts {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: min-content;

  &__company-name {
    margin-bottom: 5px;
  }

  &__phone {
    white-space: nowrap;

    &-container {
      display: flex;
      align-items: center;
    }
  }

  &__email-container {
    margin-top: 5px;
    white-space: nowrap;
  }
}

.partners {
  margin-top: 50px;
}

.partner {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;

  &__image {
    margin-right: 10px;
    max-width: 200px;
    flex: 1 0 100%;
    background-color: cadetblue;
  }

  &__intro {
    flex: 1 1 min-content;
    margin-top: 5px;
    min-width: 50%;
  }
}
</style>
