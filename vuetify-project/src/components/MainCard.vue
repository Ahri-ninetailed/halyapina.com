<template>
  <img @mouseleave="handleMouseLeave" @mouseover="handleMouseOver" :height="this.$props.imageHeight" :src="this.currentImg" alt="sketch">
</template>
  
<script>
export default {
  name: 'MainCard',
  props: {
    imgPath: {
      type: String,
      required: true,
    },
    imgHoverPath: {
      type: String,
      required: true,
    },
    imageHeight: {
      type: String,
      default: "50"
    },
  },
  data() {
    return {
      currentImg: this.$props.imgPath,
    };
  },
  methods: {
    handleMouseOver() {
      this.currentImg = this.$props.imgHoverPath
    },
    handleMouseLeave() {
      this.currentImg = this.$props.imgPath
    },
  },
}

</script>

<style scoped>

</style>