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
            <img :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/2tables.jpg" alt="">
          </swiper-slide>
          <swiper-slide style="width: 25.58vw;">
            <img :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/2tables_grey.jpg" alt="">
          </swiper-slide>
          <swiper-slide style="width: 25.58vw;">
            <img :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/function_of_boxes.jpg" alt="">
          </swiper-slide>
          <swiper-slide style="width: 19.19vw;">
            <img  :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/function_of_boxes2.jpg" alt="">
          </swiper-slide>
          <swiper-slide style="width: 25.58vw;">
            <img  :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/function_of_boxes3.jpg" alt="">
          </swiper-slide>
          <swiper-slide style="width: 25.58vw;">
            <img :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/interyer.jpg" alt="">
          </swiper-slide>
          <swiper-slide style="width: 19.19vw;">
            <img  :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/constructor.jpg" alt="">
          </swiper-slide>
          <swiper-slide style="width: 19.20vw;">
            <img :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/prototype.jpg" alt="">
          </swiper-slide>
          <swiper-slide style="width: 25.58vw;">
            <img :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/render_with_child.jpg" alt="">
          </swiper-slide>
          <swiper-slide style="width: 19.20vw;">
            <img :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/separate_pieces.jpg" alt="">
          </swiper-slide>
          <swiper-slide style="width: 19.19vw;">
            <img :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/separate_pieces2.jpg" alt="">
          </swiper-slide>
          <swiper-slide style="width: 25.57vw;">
            <img :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/table_with_child.jpg" alt="">
          </swiper-slide>
          <swiper-slide style="width: 25.57vw;">
            <img :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/table_with_child2.jpg" alt="">
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
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

export default {
  name: "AnimaPage",
  data() {
    return {
      heightOfImageSlide: {
        value: 40,
        unit: 'vh' 
      }
    }
  },
  components: {
      Swiper,
      SwiperSlide,
    },
  setup() {
    return {
      modules: [FreeMode, Scrollbar, Autoplay, Mousewheel],
    };
  },
  mounted() {
    document.documentElement.style.overflow = 'hidden';
  },
  beforeUnmount() {
    document.documentElement.style.overflow = '';
  },
  computed: {
    heightOfImageSlideProp() {
      return {
        height: `${this.heightOfImageSlide.value}${this.heightOfImageSlide.unit}`,
      } 
    }
  }
}
</script>

<style scoped>

</style>