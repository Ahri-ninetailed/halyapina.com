import { createI18n } from 'vue-i18n';

const messages = {
    en: {
      surname: "Halyapina",
      header: {
        home: 'Home',
        aboutme: 'About Me',
        anima: 'Anima',
      },
      home: {
        h: "Projects"
      }
    },
    ru: {
      surname: "Халяпина",
      header: {
        home: 'Главная',
        aboutme: 'О себе',
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
