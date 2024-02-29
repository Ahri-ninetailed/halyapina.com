/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import { createI18n } from 'vue-i18n';
import vueLazyload from 'vue3-lazyload';


const messages = {
  en: {
    header: {
      home: 'Home',
      about: 'About Me',
      anima: 'Anima',
    },
    home: {
      h: "Projects"
    }
  },
  ru: {
    header: {
      home: 'Главная',
      about: 'О себе',
      anima: 'Анима',
    },
    home: {
      h: "Проекты"
    }
  }
};

const i18n = createI18n({
  locale: 'ru',
  messages
});

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(i18n)
    .use(vueLazyload)
}
