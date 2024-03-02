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

export default {
  name: 'WaitPls',
  mixins: [AboutmePageCheck],
  props: {
    isLoaded: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    const block = document.getElementById('waiter');

    block.addEventListener('transitionend', () => {
        block.classList.add('z-index-after');
    });
  },
  methods: {
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

.z-index-after {
    z-index: -1;
}
</style>
