<template>
  <header :style="height" :class="pagesStyles" class="h-montserrat-regular header">
    <v-row class="ma-0 fill-height">
      <v-col v-if="!isHomePage" cols="auto" class="pa-0 align-self-center ml-6">
        <a class="no-default-styles" href="/"><p>Главная</p></a>
      </v-col>
      <v-col v-if="!isAboutPage" cols="auto" class="pa-0 ml-6 align-self-center">
        <a class="no-default-styles" href="/aboutme"><p>О себе</p></a>
      </v-col>
      <v-col v-if="!isAnimaPage" cols="auto" class="pa-0 ml-6 align-self-center">
        <a class="no-default-styles" href="/anima"><p>Anima</p></a>
      </v-col>
    </v-row>
  </header>
</template>
  
<script>
export default {
  name: 'MyHeader',
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
    pagesStyles() {
      if (this.isAboutPage) {
        return 'aboutpage-header';
      } 
      return '';
    },
    height() {
      return {
        height: `${this.$headerHeightValue}${this.$headerHeightUnit}`
      }
    }
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

.aboutpage-header {
  background-color: black;
  color: white;
}

.no-default-styles {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>