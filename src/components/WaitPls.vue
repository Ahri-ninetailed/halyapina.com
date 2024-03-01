<template>
  <div v-show="!this.$props.isLoaded" class="waiting-container">
    <img src="../images/waiting.webp" alt="Wait please"/>
  </div>
  <div v-show="this.$props.isLoaded">
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
}
</script>

<style scoped>
.waiting-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
