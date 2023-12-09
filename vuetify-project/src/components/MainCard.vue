<template>
  <v-row>
    <v-col cols="12" class="pa-0">
      <img @mouseleave="handleMouseLeave" @mouseover="handleMouseOver" :height="this.$props.imageHeight" :src="this.currentImg" alt="sketch">
    </v-col>
    <v-col cols="12" class="pa-0">
      <p :style="opacity"  style="font-size: 22px; font-style: italic;" class="h-neucha-regular">{{ this.$props.name }}</p>
    </v-col>
  </v-row>
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
      opacity: {
        opacity: '0'
      }
    };
  },
  methods: {
    handleMouseOver() {
      this.currentImg = this.$props.imgHoverPath;
      this.opacity.opacity = '1';
    },
    handleMouseLeave() {
      this.currentImg = this.$props.imgPath;
      this.opacity.opacity = '0';
    },
  },
}

</script>

<style scoped>

</style>