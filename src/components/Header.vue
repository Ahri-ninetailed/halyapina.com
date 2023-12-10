<template>
  <header :class="pagesStyles" class="h-montserrat-regular header">
    <a v-if="!isAboutPage" class="no-default-styles" href="/aboutme"><p>О себе</p></a>
    <a v-if="!isHomePage" class="no-default-styles" href="/"><p>Главная</p></a>
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
    pagesStyles() {
      if (this.isHomePage) {

        return 'mainpage-header';

      } else if (this.isAboutPage) {

        return 'aboutpage-header';

      } else {

        return '';

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
  color: white
}

.mainpage-header {
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