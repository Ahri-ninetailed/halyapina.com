<template>
  <div id="waiter" class="waiting-container" :style="fade">
    <img src="../images/waiting.webp" style="height: 50vh;" alt="Wait please"/>
  </div>
  <div v-show="this.$props.isLoaded" style="z-index: 1;">
    <slot ></slot>
  </div>
</template>

<script>
export default {
  name: 'WaitPls',
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
  computed: {
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
  background-color: white;
  position: absolute;
}

.z-index-after {
    z-index: -1;
}
</style>
