<template>
  <v-container class="pa-0" fluid style="margin-top: 5vh">
    <v-row>
      <v-col cols="12">
        <swiper
          :slidesPerView="'auto'"
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
          <swiper-slide :style="widthOfSlide('2tables')">
            <img id="2tables" :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/2tables.jpg" alt="">
          </swiper-slide>
          <swiper-slide :style="widthOfSlide('2tables_grey')">
            <img id="2tables_grey" :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/2tables_grey.jpg" alt="">
          </swiper-slide>
          <swiper-slide :style="widthOfSlide('function_of_boxes')">
            <img id="function_of_boxes" :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/function_of_boxes.jpg" alt="">
          </swiper-slide>
          <swiper-slide :style="widthOfSlide('function_of_boxes2')">
            <img id="function_of_boxes2" :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/function_of_boxes2.jpg" alt="">
          </swiper-slide>
          <swiper-slide :style="widthOfSlide('function_of_boxes3')">
            <img id="function_of_boxes3" :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/function_of_boxes3.jpg" alt="">
          </swiper-slide>
          <swiper-slide :style="widthOfSlide('interyer')">
            <img id="interyer" :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/interyer.jpg" alt="">
          </swiper-slide>
          <swiper-slide :style="widthOfSlide('constructor')">
            <img id="constructor" :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/constructor.jpg" alt="">
          </swiper-slide>
          <swiper-slide :style="widthOfSlide('prototype')">
            <img id="prototype" :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/prototype.jpg" alt="">
          </swiper-slide>
          <swiper-slide :style="widthOfSlide('render_with_child')">
            <img id="render_with_child" :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/render_with_child.jpg" alt="">
          </swiper-slide>
          <swiper-slide :style="widthOfSlide('separate_pieces')">
            <img id="separate_pieces" :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/separate_pieces.jpg" alt="">
          </swiper-slide>
          <swiper-slide :style="widthOfSlide('separate_pieces2')">
            <img id="separate_pieces2" :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/separate_pieces2.jpg" alt="">
          </swiper-slide>
          <swiper-slide :style="widthOfSlide('table_with_child')">
            <img id="table_with_child" :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/table_with_child.jpg" alt="">
          </swiper-slide>
          <swiper-slide :style="widthOfSlide('table_with_child2')">
            <img id="table_with_child2" :style="heightOfImageSlideProp" src="../images/AnimaPage/Carousel/table_with_child2.jpg" alt="">
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
      },
      slidesWidth: {
        "2tables": null,
        "2tables_grey": null,
        "function_of_boxes": null,
        "function_of_boxes2": null,
        "function_of_boxes3": null,
        "interyer": null,
        "constructor": null,
        "prototype": null,
        "render_with_child": null,
        "separate_pieces": null,
        "separate_pieces2": null,
        "table_with_child": null,
        "table_with_child2": null
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

    this.fillSlidesWidth();
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
  },
  methods: {
    getWidthForSlide(naturalWidth, naturalHeight) {
      return `${(naturalWidth * this.heightOfImageSlide.value) / naturalHeight}vh`;
    },
    widthOfSlide(id) {
      return {
        width: `${this.slidesWidth[id]}`
      }
    },
    prepareAndProcessImage(id) {
      let img = document.getElementById(id);
      if (img && img.tagName === 'IMG') {
        if (img.complete) {
          // Если изображение уже загружено
          this.slidesWidth[id] = this.getWidthForSlide(img.naturalWidth, img.naturalHeight);
        } else {
          // Если изображение еще загружается
          img.addEventListener('load', () => {
            this.slidesWidth[id] = this.getWidthForSlide(img.naturalWidth, img.naturalHeight);
          });
        }
      }
    },
    fillSlidesWidth() {
      this.prepareAndProcessImage('2tables');
      this.prepareAndProcessImage('2tables_grey');
      this.prepareAndProcessImage('function_of_boxes');
      this.prepareAndProcessImage('function_of_boxes2');
      this.prepareAndProcessImage('function_of_boxes3');
      this.prepareAndProcessImage('interyer');
      this.prepareAndProcessImage('constructor');
      this.prepareAndProcessImage('prototype');
      this.prepareAndProcessImage('render_with_child');
      this.prepareAndProcessImage('separate_pieces');
      this.prepareAndProcessImage('separate_pieces2');
      this.prepareAndProcessImage('table_with_child');
      this.prepareAndProcessImage('table_with_child2');
    }
  }
}
</script>

<style scoped>

</style>