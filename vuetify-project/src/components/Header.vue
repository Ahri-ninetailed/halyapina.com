<template>
  <header :class="{ 'mainpage-header': isHomePage }" class="h-montserrat-regular header">
    <a class="no-default-styles" href="/aboutme"><p>О себе</p></a>
    <!-- Здесь размещайте содержимое вашего хедера -->
  </header>
</template>
  
<script>
export default {
  name: 'MyHeader',
  computed: {
    isHomePage() {
      return window.location.pathname === '/'; // Замените на реальный путь главной страницы
    },
  },
}
</script>

<style scoped>

.header {
  font-size: 2.5vh;
  padding-top: 2.7vh;
  padding-left: 4.1vh;
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