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

    let tables2 = document.getElementById('2tables');
    this.slidesWidth['2tables'] = this.getWidthForSlide(tables2.naturalWidth, tables2.naturalHeight);

    let tables_grey2 = document.getElementById('2tables_grey');
    this.slidesWidth['2tables_grey'] = this.getWidthForSlide(tables_grey2.naturalWidth, tables_grey2.naturalHeight);

    let function_of_boxes = document.getElementById('function_of_boxes');
    this.slidesWidth['function_of_boxes'] = this.getWidthForSlide(function_of_boxes.naturalWidth, function_of_boxes.naturalHeight);

    let function_of_boxes2 = document.getElementById('function_of_boxes2');
    this.slidesWidth['function_of_boxes2'] = this.getWidthForSlide(function_of_boxes2.naturalWidth, function_of_boxes2.naturalHeight);

    let function_of_boxes3 = document.getElementById('function_of_boxes3');
    this.slidesWidth['function_of_boxes3'] = this.getWidthForSlide(function_of_boxes3.naturalWidth, function_of_boxes3.naturalHeight);

    let interyer = document.getElementById('interyer');
    this.slidesWidth['interyer'] = this.getWidthForSlide(interyer.naturalWidth, interyer.naturalHeight);

    let constructor = document.getElementById('constructor');
    this.slidesWidth['constructor'] = this.getWidthForSlide(constructor.naturalWidth, constructor.naturalHeight);

    let prototype = document.getElementById('prototype');
    this.slidesWidth['prototype'] = this.getWidthForSlide(prototype.naturalWidth, prototype.naturalHeight);

    let render_with_child = document.getElementById('render_with_child');
    this.slidesWidth['render_with_child'] = this.getWidthForSlide(render_with_child.naturalWidth, render_with_child.naturalHeight);

    let separate_pieces = document.getElementById('separate_pieces');
    this.slidesWidth['separate_pieces'] = this.getWidthForSlide(separate_pieces.naturalWidth, separate_pieces.naturalHeight);

    let separate_pieces2 = document.getElementById('separate_pieces2');
    this.slidesWidth['separate_pieces2'] = this.getWidthForSlide(separate_pieces2.naturalWidth, separate_pieces2.naturalHeight);

    let table_with_child = document.getElementById('table_with_child');
    this.slidesWidth['table_with_child'] = this.getWidthForSlide(table_with_child.naturalWidth, table_with_child.naturalHeight);

    let table_with_child2 = document.getElementById('table_with_child2');
    this.slidesWidth['table_with_child2'] = this.getWidthForSlide(table_with_child2.naturalWidth, table_with_child2.naturalHeight);
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
    }
  }
}
</script>

<style scoped>

</style>