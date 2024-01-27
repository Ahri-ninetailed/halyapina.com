<template>
  <header ref="header" :style="{...height, ...textColor, ...headerColor, ...headerOtherStyleProp}" class="h-montserrat-regular header">
    <v-row class="mb-0 mt-0 ml-0 mr-sm-6 mr-3 fill-height">
      <v-col v-if="!isHomePage" cols="auto" class="pa-0 align-self-center ml-3 ml-sm-6">
        <a class="no-default-styles" href="/"><p>{{ $t('header.home') }}</p></a>
      </v-col>
      <v-col v-if="!isAnimaPage" cols="auto" class="pa-0 ml-3 ml-sm-6 align-self-center">
        <a class="no-default-styles" href="/anima"><p>{{ $t('header.anima') }}</p></a>
      </v-col>
      <v-col v-if="!isAboutPage" cols="auto" class="pa-0 ml-3 ml-sm-6 align-self-center">
        <a class="no-default-styles" href="/aboutme"><p>{{ $t('header.about') }}</p></a>
      </v-col>

      <v-spacer></v-spacer>

      <v-col cols="auto" class="pa-0 align-self-center">
        <v-row class="ma-0">
          <v-col cols="auto" class="pa-0">
            <button type="button" class="no-default-styles" :style="underLineRu" @click="setLanguage('ru')"><p>Ru</p></button>
          </v-col>
          <v-col cols="auto" class="pa-0 ml-2 mr-2">
            <p>/</p>
          </v-col>
          <v-col cols="auto" class="pa-0">
            <button type="button" class="no-default-styles" :style="underLineEn" @click="setLanguage('en')"><p>En</p></button>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </header>
</template>
  
<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      headerStyleStart: true,
      backgroundColor: null,
      headerOtherStyle: null,
    }
  },
  beforeCreate() {
    const savedLanguage = localStorage.getItem('language') || this.$i18n.fallbackLocale;
    this.$i18n.locale = savedLanguage;
  },
  mounted() {
    this.setBackgroundColor();
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  computed: {
    isHomePage() {
      return window.location.pathname === '/'; // Замените на реальный путь главной страницы
    },
    isAboutPage() {
      return window.location.pathname === '/aboutme'; // Замените на реальный путь главной страницы
    },
    isAnimaPage() {
      return window.location.pathname === '/anima'; // Замените на реальный путь главной страницы
    },
    textColor() {
      if (this.isAboutPage) {
        return {
          color: 'white'
        };
      } 
      return {
          color: 'unset'
        };
    },
    height() {
      return {
        height: `${this.$headerHeightValue}${this.$headerHeightUnit}`
      }
    },
    headerColor() {
      return this.backgroundColor;
    },
    headerOtherStyleProp() {
      return this.headerOtherStyle
    },
    underLineRu() {
      if (this.$i18n.locale === 'ru') {
        return {
          textDecoration: 'underline'
        }
      } else {
        return {}
      }
    },
    underLineEn() {
      if (this.$i18n.locale === 'en') {
        return {
          textDecoration: 'underline'
        }
      } else {
        return {}
      }
    },
  },
  methods: {
    scrollOnStart() {
      return window.scrollY === 0;
    },
    setBackgroundColor() {
      if (this.isAboutPage) {
        this.backgroundColor = {
          backgroundColor: 'black'
        }
      } else if (this.isHomePage) {
        this.backgroundColor = {
          backgroundColor: 'unset'
        }
      } else {
        this.backgroundColor = {
          backgroundColor: 'white'
        }
      }
    },
    onScroll() {
      if (!this.scrollOnStart() && this.headerStyleStart) {
        this.headerStyleStart = false;

        if (this.isAboutPage) {
          this.backgroundColor = {
            backgroundColor: 'rgba(0,0,0,0.8) !important'
          }
        } else {
          this.backgroundColor = {
            backgroundColor: 'rgba(255,255,255,0.8) !important'
          }
        }

        this.headerOtherStyle = {
          backdropFilter: 'blur(5px)',
          transition: 'all 0.8s ease-in-out'
        }


      } else if (this.scrollOnStart() && this.headerStyleStart === false) {
        this.headerStyleStart = true;

        this.setBackgroundColor();

        this.headerOtherStyle = {
          backdropFilter: 'unset',
          transition: 'all 0.2s ease-in-out'
        }
      }
    },
    setLanguage(lang) {
      localStorage.setItem('language', lang);
      this.$i18n.locale = lang;
    },
  },
}
</script>

<style scoped>

.header {
  font-size: 2.5vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.no-default-styles {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>