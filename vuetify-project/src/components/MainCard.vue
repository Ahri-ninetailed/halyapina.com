<template>
  <div>
    <img @mouseleave="handleMouseLeave" @mouseover="handleMouseOver" :height="this.$props.imageHeight" :src="this.currentImg" alt="sketch">
    <p style="font-size: 25px; font-style: italic;" class="h-neucha-regular">{{ nameVal }}</p>
  </div>
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
    name: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      currentImg: this.$props.imgPath,
      nameVal: "",
    };
  },
  methods: {
    handleMouseOver() {
      this.currentImg = this.$props.imgHoverPath;
      this.nameVal = this.$props.name;
    },
    handleMouseLeave() {
      this.currentImg = this.$props.imgPath;
      this.nameVal = "";
    },
  },
}

</script>

<style scoped>

</style>