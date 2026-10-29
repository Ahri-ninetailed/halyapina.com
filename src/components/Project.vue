<template>
  <v-container class="pa-0 background-img project-container" fluid :style="backgroundImgProp">
    <v-row class="ma-0 pa-0" :class="fillHeight">
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
          <v-col :cols="swiperCols" class="pa-0 mt-sm-0 mt-6">
            <Splide 
              ref="splide"
              class="splider-white-back splide-width" 
              :options="splideOptions"
              :style="shadowBorder"
            >
              <SplideSlide class="splide-width"
                v-for="(img, index) in this.$props.swiperImgs"
                :key="index"
              >
                <full-image :d-lg-h-v=35 :d-md-h-v=45 :d-h-v=55 d-h-u="vw" class="project-img-width" :src-zoom="imgPath(img.srcZoom)" :src="imgPath(img.src)" :alt="img.alt"/>
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
        <v-row class="pa-0 ma-sm-0 mt-2 mb-0 ml-0 mr-0 d-inline-block">
          <h1 class="h-neucha-regular project-header-size project-h-margin-bottom" :class="hPosition" style="background-color: transparent;">
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
    // На телефоне текст может не влезть в экран, поэтому там прокрутку не блокируем
    if (this.$vuetify.display.smAndUp) {
      document.documentElement.style.overflow = 'hidden';
    }
  },
  beforeUnmount() {
    document.documentElement.style.overflow = '';
  },
  computed: {
    backgroundImgProp() {
      if (this.$vuetify.display.smAndUp) { 
        return {
          backgroundImage: `url(${this.$props.backgroundImg})`,
        };
      }
      return {};
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
    },
    fillHeight() {
      if (this.$vuetify.display.smAndUp) {
        return "fill-height";
      } else {
        return "";
      }
    },
    shadowBorder() {
      if (this.$vuetify.display.smAndUp) {
        return {
          boxShadow: "0px 0px 3px 1px rgb(236, 236, 236)",
          margin: "3px",
        }
      } else {
        return {
          boxShadow: 'unset',
          margin: "unset",
        }
      }
      
    }
  },
  methods: {
    imgPath(img) {
      return new URL(`../images/Projects/${img}`, import.meta.url).href;
    },
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
.project-container {
  overflow: hidden;
  height: 100vh;
}
@media (max-width: 599px) {
  .project-container {
    overflow: visible;
    height: auto;
    min-height: 100vh;
  }
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
:root {
  --img-width1: 30vw;
  --img-width2: 32.9vw;
  --img-width3: 37.6vw;
  --img-width4: 52vw;
  --img-width5: 54.8vw;
}

.splider-white-back {
  background-color: white;
}
.project-img-width {
  width: var(--img-width1);
}
.splide-width {
  width: calc(var(--img-width1) + 1px);
}
.project-header-size {
  font-size: 1.8188541666666667vw;
}
.p-project-size {
  font-size: 1.14vw;
  width: 30.1vw;
  background-color: white;
}

.project-h-margin-bottom {
  margin-bottom: 2vh;
}
@media (max-width: 1625px) { 
.project-img-width {
  width: var(--img-width2);
}
.splide-width {
  width: calc(var(--img-width2) + 1px);
}
.project-header-size {
  font-size: 2vw;
}
.p-project-size {
    font-size: 1.3vw;
    width: 34.4vw;
}

}
@media (max-width: 1400px) { 
.project-img-width {
  width: var(--img-width2);
}
.splide-width {
  width: calc(var(--img-width2) + 1px);
}
.project-header-size {
  font-size: 2.2vw;
}
.p-project-size {
    font-size: 1.35vw;
    width: 35.7vw;
}

}
@media (max-width: 1280px) { 
.project-img-width {
  width: var(--img-width3);
}
.splide-width {
  width: calc(var(--img-width3) + 1px);
}
.project-header-size {
  font-size: 2.5vw;
}
.p-project-size {
  font-size: 1.6vw;
  width: 42.3vw;
}

}
@media (max-width: 959px) { 
.project-img-width {
  width: var(--img-width4);
}
.splide-width {
  width: calc(var(--img-width4) + 1px);
}
.project-header-size {
  font-size: 3.1vw;
}
.p-project-size {
  font-size: 2vw;
  width: 52.8vw;
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
.project-img-width {
  width: var(--img-width5);
}
.splide-width {
  width: calc(var(--img-width5) + 1px);
}
.project-header-size {
  font-size: 4vw;
}
.p-project-size {
  font-size: 2.5vw;
  width: 66vw;
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

@media (max-width: 599px) { 
  .project-img-width {
    height: unset;
    width: 100vw;
  }
  .splide-width {
    width: 100vw;
  }
  .project-header-size {
    font-size: 7vw;
  }
  .p-project-size {
    font-size: 4.3vw;
    width: 92vw;
  }
}
</style>
