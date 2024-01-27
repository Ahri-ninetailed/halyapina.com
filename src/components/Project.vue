<template>
  <v-container class="pa-0 background-img" fluid :style="backgroundImgProp" style="overflow: hidden; height: 100vh;">
    <v-row class="ma-0 pa-0 fill-height">
      <v-col align="center" md="6" cols="12" class="pa-0 align-self-center project-swiper-margin-top">
        <v-row class="ma-0 pa-0 imgs-container">
          <v-col v-if="showArrow" cols="2" align="end" class="pa-0 align-self-center">
            <v-btn @click="prevSlide" icon class="button-borderless animated-button">
              <svg class="arrow-size" xmlns="http://www.w3.org/2000/svg" viewBox="-7.5 -5 24 24">
                <g transform="rotate(-90 7 7)">
                  <path fill="#a2a2a2" d="m7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z" />
                </g>
              </svg>
            </v-btn>
          </v-col>
          <v-col :cols="swiperCols" class="pa-0">
            <Splide 
              ref="splide"
              class="project-swiper-width" 
              :options="splideOptions"
              style="box-shadow: 0px 0px 3px 1px rgb(236, 236, 236); margin: 3px; background-color: white;"
            >
              <SplideSlide class="project-swiper-width"
                v-for="(img, index) in this.$props.swiperImgs"
                :key="index"
              >
                <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="project-img-height" :src="img.src" :alt="img.alt"/>
              </SplideSlide>
            </Splide>
          </v-col>
          <v-col v-if="showArrow" cols="2" align="start" class="pa-0 align-self-center">
            <v-btn @click="nextSlide" icon class="button-borderless animated-button">
              <svg class="arrow-size" xmlns="http://www.w3.org/2000/svg" viewBox="-7.5 -5 24 24">
                <g transform="rotate(90 4.5 4.5)">
                  <path fill="#a2a2a2" d="m7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z" />
                </g>
              </svg>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col align="center" md="6" cols="12" class="pa-0 project-text-margin-bottom" :class="this.$vuetify.display.mdAndUp ? 'align-self-center' : 'align-self-start'">
        <v-row class="pa-0 ma-0 d-inline-block" style="background-color: white;">
          <h1 class="h-neucha-regular project-header-size project-h-margin-bottom" :class="hPosition">
            {{  headerText }}
          </h1>
          <slot></slot>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FullImage from '@/components/FullImage.vue';

///splide
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';

export default {
  name: 'DefaultProject',
  data() {
    return {
      splideOptions: {
        arrows: false, 
        pagination: false, 
        autoWidth: false, 
        type: 'loop', 
        drag: true,
        wheel: true,
        autoplay: true,
        interval: 3500
      }
    }
  },
  components: {
    FullImage,
    ///splide
    Splide,
    SplideSlide,
  },
  props: {
    backgroundImg: {
      type: String,
      required: true,
    },
    headerText: {
      type: String,
      required: true,
    },
    swiperImgs: {
      type: Array,
      required: true,
    },
  },
  setup() {
      return {
        
      };
  },
  mounted() {
    document.documentElement.style.overflow = 'hidden';
  },
  beforeUnmount() {
    document.documentElement.style.overflow = '';
  },
  computed: {
    backgroundImgProp() {
      return {
        backgroundImage: `url(${this.$props.backgroundImg})`,
      };
    },
    hPosition() {
      if (this.$vuetify.display.mdAndUp) {
        return "text-start"
      } else {
        return "text-center"
      }
    },
    showArrow() {
      return this.$vuetify.display.width > 1280;
    },
    swiperCols() {
      if (this.showArrow) {
        return 8;
      } else {
        return 12;
      }
    }
  },
  methods: {
    nextSlide() {
      this.$refs.splide.go('+1');
    },
    prevSlide() {
      this.$refs.splide.go('-1');
    },
  },
}
</script>

<style scoped>
.background-img {
  background-size: cover;
  background-position: top;
}
.button-borderless {
  border: none !important;
  background-color: transparent !important;
  box-shadow: none !important;
}
.arrow-size {
  height: 2.5vw;
  width: 2.5vw;
}
.imgs-container {
  position: relative;
  overflow: hidden;
}

.animated-button {
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.imgs-container:hover .animated-button {
  opacity: 1;
  transform: translateY(0);
}
  
</style>

<style>
.project-img-height {
  height: 19.166666666666668vw;
}
.project-header-size {
  font-size: 1.8188541666666667vw;
}
.p-project-size {
  font-size: 1.14vw;
}
.project-swiper-width {
  width: 30vw;
}
.project-h-margin-bottom {
  margin-bottom: 2vh;
}
@media (max-width: 1625px) { 
.project-img-height {
  height: 21vw;
}
.project-header-size {
  font-size: 2vw;
}
.p-project-size {
    font-size: 1.3vw;
}
.project-swiper-width {
  width: 31.84vw;
}
}
@media (max-width: 1400px) { 
.project-img-height {
  height: 21vw;
}
.project-header-size {
  font-size: 2.2vw;
}
.p-project-size {
    font-size: 1.35vw;
}
.project-swiper-width {
  width: 31.84vw;
}
}
@media (max-width: 1280px) { 
.project-img-height {
  height: 24vw;
}
.project-header-size {
  font-size: 2.3vw;
}
.p-project-size {
  font-size: 1.45vw;
}
.project-swiper-width {
  width: 34.84vw;
}
}
@media (max-width: 1280px) { 
.project-img-height {
  height: 24vw;
}
.project-header-size {
  font-size: 2.5vw;
}
.p-project-size {
  font-size: 1.6vw;
}
.project-swiper-width {
  width: 34.84vw;
}
}
@media (max-width: 959px) { 
.project-img-height {
  height: 30vw;
}
.project-header-size {
  font-size: 3.1vw;
}
.p-project-size {
  font-size: 2vw;
}
.project-swiper-width {
  width: 52vw;
}
.project-text-margin-bottom {
  margin-bottom: 8vh;
}
.project-swiper-margin-top {
  margin-top: 2.5vh;
}
.project-h-margin-bottom {
  margin-bottom: 3vh;
}
}
@media (max-width: 750px) { 
.project-img-height {
  height: 35vw;
}
.project-header-size {
  font-size: 4vw;
}
.p-project-size {
  font-size: 2.5vw;
}
.project-swiper-width {
  width:67vw;
}
.project-text-margin-bottom {
  margin-bottom: 8vh;
}
.project-swiper-margin-top {
  margin-top: 2.5vh;
}
.project-h-margin-bottom {
  margin-bottom: 3vh;
}
}
</style>
