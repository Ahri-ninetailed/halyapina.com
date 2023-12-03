<template>
  <img :style="{ height: imageHeight }" :src="this.$props.imgPath" alt="sketch">
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
      required: false,
    },
    imageHeight: {
      type: String,
      default: "100px"
    },
  },
}

</script>

<style scoped>

</style>