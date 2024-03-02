<template>
  <v-app>
    <v-main>
      <MyHeader />
      <wait-pls :is-loaded="isPageLoaded">
        <router-view />
      </wait-pls>
    </v-main>
  </v-app>
</template>

<script setup>
import MyHeader from '@/components/Header.vue'; // Подставьте правильный путь к вашему компоненту Header
</script>

<script>
import WaitPls from '@/components/WaitPls.vue';

export default {
  components: { WaitPls, },
  data() {
    return {
      isPageLoaded: false,
    }
  },
  mounted() {
    window.onload = () => {
      this.isPageLoaded = true;
    };
  },
};

</script>

<style scoped>

</style>
