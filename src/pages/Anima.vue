<template>
  <v-container class="pa-0" fluid style="margin-top: 5vh">
    <v-row>
      <v-col cols="12">
        <swiper
          :slidesPerView="'auto'"
          :slidesPerGroup="1"
          :spaceBetween="25"
          :freeMode="true"
          :mousewheel="true"
          :loop="true"
          :autoplay="{
            delay: 1,
            disableOnInteraction: true,
          }"
          :speed="10000"
          :scrollbar="{
            hide: true
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide style="width: 19.20vw;">
            <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/2tables.jpg" :style="styleOfImageSlideProp" alt="Two tables"/>
          </swiper-slide>
          <swiper-slide style="width: 25.58vw;">
            <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/2tables_grey.jpg" :style="styleOfImageSlideProp" alt="Two tables with grey wings"/>
          </swiper-slide>
          <swiper-slide style="width: 25.58vw;">
            <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/function_of_boxes.jpg" :style="styleOfImageSlideProp" alt="Functionality of boxes 1"/>
          </swiper-slide>
          <swiper-slide style="width: 19.19vw;">
            <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/function_of_boxes2.jpg" :style="styleOfImageSlideProp" alt="Functionality of boxes 2"/>
          </swiper-slide>
          <swiper-slide style="width: 25.58vw;">
            <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/function_of_boxes3.jpg" :style="styleOfImageSlideProp" alt="Functionality of boxes 3"/>
          </swiper-slide>
          <swiper-slide style="width: 25.58vw;">
            <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/interyer.jpg" :style="styleOfImageSlideProp" alt="Interyer"/>
          </swiper-slide>
          <swiper-slide style="width: 19.19vw;">
            <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/constructor.jpg" :style="styleOfImageSlideProp" alt="Constructor"/>
          </swiper-slide>
          <swiper-slide style="width: 19.20vw;">
            <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/prototype.jpg" :style="styleOfImageSlideProp" alt="Prototype"/>
          </swiper-slide>
          <swiper-slide style="width: 25.58vw;">
            <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/render_with_child.jpg" :style="styleOfImageSlideProp" alt="Render with child"/>
          </swiper-slide>
          <swiper-slide style="width: 19.20vw;">
            <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/separate_pieces.jpg" :style="styleOfImageSlideProp" alt="Separate pieces 1"/>
          </swiper-slide>
          <swiper-slide style="width: 19.19vw;">
            <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/separate_pieces2.jpg" :style="styleOfImageSlideProp" alt="Separate pieces 2"/>
          </swiper-slide>
          <swiper-slide style="width: 25.57vw;">
            <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/table_with_child.jpg" :style="styleOfImageSlideProp" alt="Child near table 1"/>
          </swiper-slide>
          <swiper-slide style="width: 25.57vw;">
            <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/table_with_child2.jpg" :style="styleOfImageSlideProp" alt="Child near table 2"/>
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
    <Splide :options="splideOptions" :extensions="extensions">
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/2tables.jpg" :style="styleOfImageSlideProp" alt="Two tables"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/2tables_grey.jpg" :style="styleOfImageSlideProp" alt="Two tables with grey wings"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/function_of_boxes.jpg" :style="styleOfImageSlideProp" alt="Functionality of boxes 1"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/function_of_boxes2.jpg" :style="styleOfImageSlideProp" alt="Functionality of boxes 2"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/function_of_boxes3.jpg" :style="styleOfImageSlideProp" alt="Functionality of boxes 3"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/interyer.jpg" :style="styleOfImageSlideProp" alt="Interyer"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/constructor.jpg" :style="styleOfImageSlideProp" alt="Constructor"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/prototype.jpg" :style="styleOfImageSlideProp" alt="Prototype"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/render_with_child.jpg" :style="styleOfImageSlideProp" alt="Render with child"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/separate_pieces.jpg" :style="styleOfImageSlideProp" alt="Separate pieces 1"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=56 :d-h-v=49 d-h-u="vh" src="../src/images/AnimaPage/Carousel/separate_pieces2.jpg" :style="styleOfImageSlideProp" alt="Separate pieces 2"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/table_with_child.jpg" :style="styleOfImageSlideProp" alt="Child near table 1"/>
      </SplideSlide>
      <SplideSlide>
        <full-image :d-md-h-v=66 :d-sm-h-v=49 :d-h-v=37 d-h-u="vh" src="../src/images/AnimaPage/Carousel/table_with_child2.jpg" :style="styleOfImageSlideProp" alt="Child near table 2"/>
      </SplideSlide>
    </Splide>
  </v-container>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';

  import 'swiper/css/scrollbar';
  import { Scrollbar } from 'swiper/modules';

  import 'swiper/css/free-mode';
  import { FreeMode } from 'swiper/modules';

  import { Autoplay } from 'swiper/modules';
  import { Mousewheel } from 'swiper/modules';

  import FullImage from '@/components/FullImage.vue';

  ///splide
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
  import '@splidejs/vue-splide/css/core';

export default {
  name: "AnimaPage",
  data() {
    return {
      heightOfImageSlide: {
        value: 19.145833333333332,
        unit: 'vw' 
      },
      splideOptions: {
        arrows: false, 
        pagination: false, 
        autoWidth: true, 
        type: 'loop', 
        drag: 'free',
        autoScroll: {
          speed: 0.7,
        },
        wheel: true
      }
    }
  },
  components: {
      Swiper,
      SwiperSlide,
      FullImage,

      ///splide
      Splide,
      SplideSlide,
    },
  setup() {
    return {
      modules: [FreeMode, Scrollbar, Autoplay, Mousewheel],
      extensions: { AutoScroll },
    };
  },
  mounted() {
    document.documentElement.style.overflow = 'hidden';
  },
  beforeUnmount() {
    document.documentElement.style.overflow = '';
  },
  computed: {
    styleOfImageSlideProp() {
      return {
        height: `${this.heightOfImageSlide.value}${this.heightOfImageSlide.unit}`,
        marginRight: "25px",
      } 
    }
  }
}
</script>

<style scoped>

</style>