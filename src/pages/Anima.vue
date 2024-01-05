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
            <full-image src="../src/images/AnimaPage/Carousel/2tables.jpg" :style="heightOfImageSlideProp" alt="Two tables"/>
          </swiper-slide>
          <swiper-slide style="width: 25.58vw;">
            <full-image src="../src/images/AnimaPage/Carousel/2tables_grey.jpg" :style="heightOfImageSlideProp" alt="Two tables with grey wings"/>
          </swiper-slide>
          <swiper-slide style="width: 25.58vw;">
            <full-image src="../src/images/AnimaPage/Carousel/function_of_boxes.jpg" :style="heightOfImageSlideProp" alt="Functionality of boxes 1"/>
          </swiper-slide>
          <swiper-slide style="width: 19.19vw;">
            <full-image src="../src/images/AnimaPage/Carousel/function_of_boxes2.jpg" :style="heightOfImageSlideProp" alt="Functionality of boxes 2"/>
          </swiper-slide>
          <swiper-slide style="width: 25.58vw;">
            <full-image src="../src/images/AnimaPage/Carousel/function_of_boxes3.jpg" :style="heightOfImageSlideProp" alt="Functionality of boxes 3"/>
          </swiper-slide>
          <swiper-slide style="width: 25.58vw;">
            <full-image src="../src/images/AnimaPage/Carousel/interyer.jpg" :style="heightOfImageSlideProp" alt="Interyer"/>
          </swiper-slide>
          <swiper-slide style="width: 19.19vw;">
            <full-image src="../src/images/AnimaPage/Carousel/constructor.jpg" :style="heightOfImageSlideProp" alt="Constructor"/>
          </swiper-slide>
          <swiper-slide style="width: 19.20vw;">
            <full-image src="../src/images/AnimaPage/Carousel/prototype.jpg" :style="heightOfImageSlideProp" alt="Prototype"/>
          </swiper-slide>
          <swiper-slide style="width: 25.58vw;">
            <full-image src="../src/images/AnimaPage/Carousel/render_with_child.jpg" :style="heightOfImageSlideProp" alt="Render with child"/>
          </swiper-slide>
          <swiper-slide style="width: 19.20vw;">
            <full-image src="../src/images/AnimaPage/Carousel/separate_pieces.jpg" :style="heightOfImageSlideProp" alt="Separate pieces 1"/>
          </swiper-slide>
          <swiper-slide style="width: 19.19vw;">
            <full-image src="../src/images/AnimaPage/Carousel/separate_pieces2.jpg" :style="heightOfImageSlideProp" alt="Separate pieces 2"/>
          </swiper-slide>
          <swiper-slide style="width: 25.57vw;">
            <full-image src="../src/images/AnimaPage/Carousel/table_with_child.jpg" :style="heightOfImageSlideProp" alt="Child near table 1"/>
          </swiper-slide>
          <swiper-slide style="width: 25.57vw;">
            <full-image src="../src/images/AnimaPage/Carousel/table_with_child2.jpg" :style="heightOfImageSlideProp" alt="Child near table 2"/>
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

  import FullImage from '@/components/FullImage.vue';

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
      FullImage
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