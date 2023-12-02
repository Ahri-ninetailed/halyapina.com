<template>
  <header :class="{ 'main-header': isHomePage }">
    <h1>Мой общий хедер</h1>
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

.main-header {
    /* background-color: transparent; */

    position: fixed;
    top: 0;
    left: 0;
    /* width: 100%; */
    /* background-color: #ffffff; */
    z-index: 1000;
}
</style>