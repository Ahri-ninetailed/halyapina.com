import { createI18n } from 'vue-i18n';

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

export default i18n;
