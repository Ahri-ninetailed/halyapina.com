<template>
  <div id="waiter" class="waiting-container" :style="{...fade, ...backgroundColor}">
    <img :src="background" style="height: 50vh;" alt="Wait please"/>
  </div>
  <div v-show="this.$props.isLoaded" style="z-index: 1;">
    <slot ></slot>
  </div>
</template>

<script>
import AboutmePageCheck from '@/mixins/aboutme-page-check.js';
import ProjectsPagesCheck from '@/mixins/projects-pages-check.js';

export default {
  name: 'WaitPls',
  mixins: [AboutmePageCheck, ProjectsPagesCheck],
  props: {
    isLoaded: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    const block = document.getElementById('waiter');

    block.addEventListener('transitionend', () => {
      block.remove();
    });
    setTimeout(() => {
      // Удаляем элемент после завершения анимации
      block.remove();
    }, 2500); // Здесь 350 миллисекунд - это время анимации (0.35 секунды), нужно привести к миллисекундам

    this.pageScrollMounted();
  },
  beforeUnmount() {
    this.pageScrollBeforeUmount();
  },
  methods: {
    pageScrollMounted() {
      if (this.isProjectPage) {
        document.documentElement.style.overflow = 'hidden';
        return;
      }

      if (this.isAboutPage && this.$vuetify.display.smAndUp) {
        document.documentElement.style.overflow = 'hidden';
        return;
      }
    },
    pageScrollBeforeUmount() {
      if (this.isProjectPage) {
        document.documentElement.style.overflow = '';
        return;
      }

      if (this.isAboutPage && this.$vuetify.display.smAndUp) {
        document.documentElement.style.overflow = '';
        return;
      } 
    },
    imgPath(img) {
      return new URL(`../images/${img}`, import.meta.url).href;
    },
  },
  computed: {
    backgroundColor() {
      if (this.isAboutPage) {
        return {
          backgroundColor: 'black',
        }
      } else {
        return {
          backgroundColor: 'white',
        }
      }
    },
    background() {
      if (this.isAboutPage) {
        return this.imgPath('waiting_dark.webp');
      } else {
        return this.imgPath('waiting.webp');
      }
    },
    fade() {
      if (this.$props.isLoaded) {
        return {
          opacity: '0',
          transition: 'opacity 0.35s ease'
        }
      } else {
        return {
          opacity: '1',
          zIndex: '1',
        }
      }
    }
  }
}
</script>

<style scoped>
.waiting-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
}
</style>
