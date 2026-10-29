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
      },
      projects: {
        crownbed: "Crown bed",
        spacejam: "SpaceJam",
        fennel: "Fennel",
        alien: "Alien",
        duo: "Duo",
        dragonfly: "Dragonfly",
        firefly: "Firefly",
        ufo: "UFO",
        bubble: "Bubble",
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
      },
      projects: {
        crownbed: "Crown bed",
        spacejam: "SpaceJam",
        fennel: "Fennel",
        alien: "Alien",
        duo: "Duo",
        dragonfly: "Dragonfly",
        firefly: "Firefly",
        ufo: "UFO",
        bubble: "Bubble",
      }
    }
  };
  
// Хранилище может быть недоступно, например при полностью заблокированных cookie
function getSavedLanguage() {
    try {
        return localStorage.getItem('language');
    } catch (e) {
        return null;
    }
}

const i18n = createI18n({
    // Язык из прошлого визита нужен еще до первой навигации: по нему роутер ставит заголовок вкладки
    locale: getSavedLanguage() || 'ru',
    messages
});

export default i18n;
