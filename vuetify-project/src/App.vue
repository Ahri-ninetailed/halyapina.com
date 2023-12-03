<template>
  <v-app>
    <v-main>
      <MyHeader />
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import MyHeader from '@/components/Header.vue'; // Подставьте правильный путь к вашему компоненту Header

</script>

<style scoped>

</style>
