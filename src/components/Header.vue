<template>
  <header :style="height" :class="pagesStyles" class="h-montserrat-regular header">
    <v-row>
      <v-col v-if="!isHomePage" cols="auto" class="pt-0 pb-0 pl-0 pr-6">
        <a class="no-default-styles" href="/"><p>Главная</p></a>
      </v-col>
      <v-col v-if="!isAboutPage" cols="auto" class="pt-0 pb-0 pl-0 pr-6">
        <a class="no-default-styles" href="/aboutme"><p>О себе</p></a>
      </v-col>
      <v-col v-if="!isAnimaPage" cols="auto" class="pt-0 pb-0 pl-0 pr-6">
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
      } else {
        return 'covering-header';
      }
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
  padding-top: 2.7vh;
  padding-left: 4.1vh;
}

.aboutpage-header {
  background-color: black;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  /* width: 100%; */
  /* background-color: #ffffff; */
  z-index: 1000;
}

.covering-header {
    /* background-color: transparent; */

    position: fixed;
    top: 0;
    left: 0;
    /* width: 100%; */
    /* background-color: #ffffff; */
    z-index: 1000;
}

.no-default-styles {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
</style>