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
    // Приложение монтируется после router.isReady(), к этому моменту load мог уже пройти
    if (document.readyState === 'complete') {
      this.isPageLoaded = true;
      return;
    }

    window.addEventListener('load', () => {
      this.isPageLoaded = true;
    }, { once: true });
  },
};

</script>

<style scoped>

</style>
