import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";
import { getLanguagesList } from "./mixins/mixins";

let navigatorLanguage = navigator.language;
let languagesList = getLanguagesList();
let defaultLanguage = getDefaultLanguage() ? getDefaultLanguage() : "en";
setHtmlLangAttribute(defaultLanguage);

const store = createStore({
  state() {
    return {
      currentLanguage: languagesList[defaultLanguage],
    };
  },
  mutations: {
    setCurrentLanguage(state, newLanguage) {
      setHtmlLangAttribute(newLanguage);
      state.currentLanguage = languagesList[newLanguage];
    },
  },
});

createApp(App).use(store).use(router).mount("#app");

function setHtmlLangAttribute(newLanguage) {
  document.documentElement.lang = newLanguage;
}

function getDefaultLanguage() {
  for (const language in languagesList) {
    if (navigatorLanguage.includes(language)) {
      return language;
    }
  }

  return null;
}
