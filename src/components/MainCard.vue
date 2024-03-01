<template>
  <v-row>
    <v-col cols="12" class="pa-0">
      <a :href="this.$props.href">
        <!-- Основное изображение -->
        <img id="projectSketch" @mouseleave="handleMouseLeave" @mouseover="handleMouseOver" :style="this.$props.style" :src="this.currentImg" :alt="this.$props.name">
        <!-- Скрытый элемент для предварительной загрузки изображения -->
        <img :src="this.$props.imgHoverPath" style="display: none;" :alt="`${this.$props.name} hover`">
      </a>
    </v-col>
    <v-col cols="12" class="pa-0">
      <p :style="opacity" style="font-size: 3vh; font-style: italic;" class="h-neucha-regular">{{ this.$props.name }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'MainCard',
  props: {
    style: {
      type: Object,
      required: false,
    },
    imgPath: {
      type: String,
      required: true,
    },
    imgHoverPath: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    href: {
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
      // Переключение на вторичное изображение при наведении
      this.currentImg = this.$props.imgHoverPath;
      this.opacity.opacity = '1';
    },
    handleMouseLeave() {
      // Переключение на основное изображение при уходе курсора
      this.currentImg = this.$props.imgPath;
      this.opacity.opacity = '0';
    },
  },
}
</script>

<style scoped>
</style>
