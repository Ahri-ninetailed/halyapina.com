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
      // Приложение монтируется после router.isReady(), к этому моменту load мог уже пройти.
      // Тогда контент виден с первой отрисовки: слайдер Splide, смонтированный в скрытом блоке,
      // считает ширину слайдов нулевой и показывает клон слайда, по которому клик не работает
      isPageLoaded: document.readyState === 'complete',
    }
  },
  mounted() {
    if (this.isPageLoaded) {
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
