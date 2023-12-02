<template>
  <v-app>
    <v-main>
      <MyHeader />
      <router-view /> <!-- В этом месте будет отображаться содержимое каждой страницы -->
      <!-- Другие общие элементы вашего макета -->
    </v-main>
  </v-app>
</template>
  
<script>
import MyHeader from '@/components/Header.vue'; // Подставьте правильный путь к вашему компоненту Header

export default {
  name: 'AppLayout',
  components: {
    MyHeader,
  },
}
</script>

<style scoped>
/* Здесь стили вашего макета */
</style>
  