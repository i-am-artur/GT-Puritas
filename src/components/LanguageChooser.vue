<template>
  <div class="languages__container" tabindex="0">
    <div class="languages__select" @click="toggleLanguageSelectDisplay">
      <img
        class="languages__current-language"
        :src="selectedLanguage"
        :alt="`Chosen language is ${currentLanguage}`"
      />
      <span class="languages__select-decor">&#9662;</span>
    </div>

    <ul class="languages" :class="{ languages_display: languagesIsShown }">
      <li v-for="(flag, language) in languagesSelectItems" :key="language">
        <img
          @click="currentLanguage = language"
          class="language"
          :src="flag"
          :alt="`Choose ${language}`"
          v-if="language !== currentLanguage"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LanguageChooser",
  data() {
    return {
      languagesIsShown: false,
    };
  },
  methods: {
    toggleLanguageSelectDisplay() {
      this.languagesIsShown = !this.languagesIsShown;
    },
    languages() {
      return {
        ru: require(`../assets/russian.png`),
        en: require(`../assets/british.png`),
        pl: require(`../assets/polish.png`),
      };
    },
  },
  computed: {
    currentLanguage: {
      get: function () {
        return this.$store.state.currentLanguage["short"];
      },
      set: function (newLanguage) {
        this.$store.commit("setCurrentLanguage", newLanguage);
      },
    },
    languagesSelectItems() {
      let languages = this.languages();

      return Object.keys(languages)
        .filter((key) => key !== this.currentLanguage)
        .sort((key) => (key === this.currentLanguage ? -1 : 1))
        .reduce((result, key) => {
          result[key] = languages[key];
          return result;
        }, {});
    },
    selectedLanguage() {
      return this.languages()[this.currentLanguage];
    },
  },
  created() {
    document.addEventListener("click", (event) => {
      let target = event.target;
      if (
        !target.className.includes("languages__container") &&
        !target.className.includes("languages__select") &&
        !target.className.includes("languages__current-language") &&
        !target.className.includes("languages__select-decor")
      ) {
        this.languagesIsShown = false;
      }
    });
  },
};
</script>

<style lang="less">
@import (reference) "../less/helpers";

@flag-border: #888;

.languages {
  position: absolute;
  display: none;
  padding: 0;
  right: 5px;
  top: 15px;
  list-style-type: none;
  background-color: white;

  &_display {
    display: block;
  }

  &__container {
    .OnlyOnMobile({
      position: relative;
      margin-right: 10px;
    });

    .OnTabletSmall({
      position: absolute;
      /*display: block;*/
      top: -2.5rem;
      right: 0;
      margin-right: 0;
    });
  }

  &__select {
    display: flex;
    align-items: flex-end;
    padding: 3px;
    cursor: pointer;
    /*border: 1px solid darkgrey;*/

    &-decor {
      margin-left: 2px;
    }
  }

  &__current-language {
    width: 30px;
    border: 1px solid @flag-border;
  }
}

.language {
  width: 48px;
  border: 1px solid @flag-border;
  cursor: pointer;
}
</style>
