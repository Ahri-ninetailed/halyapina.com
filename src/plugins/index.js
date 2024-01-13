/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import { createI18n } from 'vue-i18n';


const messages = {
  en: {

  },
  ru: {

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
}
