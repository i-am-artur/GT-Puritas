import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";
import { getLanguagesList } from "./mixins/mixins";

let navigatorLanguage = navigator.language;
let languagesList = getLanguagesList();
let defaultLanguage = getDefaultLanguage();

const store = createStore({
  state() {
    return {
      currentLanguage: defaultLanguage
        ? languagesList[defaultLanguage]
        : languagesList["en"],
    };
  },
  mutations: {
    setCurrentLanguage(state, newLanguage) {
      state.currentLanguage = languagesList[newLanguage];
    },
  },
});

createApp(App).use(store).use(router).mount("#app");

function getDefaultLanguage() {
  for (const language in languagesList) {
    if (navigatorLanguage.includes(language)) {
      return language;
    }
  }

  return null;
}
