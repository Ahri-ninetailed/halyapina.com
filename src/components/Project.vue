<template>
  <v-imgs-container class="pa-0 background-img" fluid :style="backgroundImgProp" style="overflow: hidden; height: 100vh;">
    <v-row class="ma-0 pa-0 fill-height">
      <v-col align="center" cols="6" class="pa-0 align-self-center">
        <v-row class="ma-0 pa-0 imgs-container">
          <v-col cols="1" align="center" class="pa-0 align-self-center">
            <v-btn @click="prevSlide" icon class="button-borderless animated-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-7.5 -5 24 24">
                <g transform="rotate(-90 7 7)">
                  <path fill="#a2a2a2" d="m7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z" />
                </g>
              </svg>
            </v-btn>
          </v-col>
          <v-col cols="10" class="pa-0">
            <swiper 
              :loop="true"
              :simulateTouch="true"
              :mousewheel="true"
              :modules="modules"
              class="mySwiper"
              @swiper="onSwiper"
            >
              <swiper-slide
                v-for="(img, index) in this.$props.swiperImgs"
                :key="index"
              >
                <img class="img-height" :src="img.src" :alt="img.alt" />
              </swiper-slide>
            </swiper>
          </v-col>
          <v-col cols="1" align="center" class="pa-0 align-self-center">
            <v-btn @click="nextSlide" icon class="button-borderless animated-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-7.5 -5 24 24">
                <g transform="rotate(90 4.5 4.5)">
                  <path fill="#a2a2a2" d="m7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z" />
                </g>
              </svg>
            </v-btn>
          </v-col>
        </v-row>

        <!-- <div style="margin-right: 0vw; margin-left: 3vw">
            <v-carousel
            cycle
            hide-delimiters
            show-arrows="hover"
            height="auto"
            style="box-shadow: 0px 0px 3px 1px rgb(236, 236, 236); width: 30vw;"
          >
            <v-carousel-item
              v-for="(img, index) in this.$props.swiperImgs"
              :key="index"
            >
              <v-col class="pa-0 d-flex flex-column align-center justify-center">
                <img class="carousel-height" :src="img.src" :alt="img.alt" />
              </v-col>
            </v-carousel-item>
          </v-carousel>
        </div> -->
      </v-col>
      <v-col align="center" cols="6" class="pa-0 align-self-center">
        <v-row class="pa-0 ma-0 d-inline-block">
          <h1 class="h-neucha-regular text-start" style="margin-bottom: 2vh; font-size: 3.8vh;">
            {{  headerText }}
          </h1>
          <slot></slot>
        </v-row>
      </v-col>
    </v-row>
  </v-imgs-container>
</template>

<script>
import FullImage from '@/components/FullImage.vue';

import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
  name: 'DefaultProject',
  components: {
    FullImage,
    Swiper,
    SwiperSlide,
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
        swiper: null,
        modules: [Mousewheel],
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
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    nextSlide() {
      this.swiper.slideNext();
    },
    prevSlide() {
      this.swiper.slidePrev();
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
.img-height {
  height: 40vh;
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
