<template>
  <v-container class="pa-0" fluid style="margin-top: 5vh">
    <v-row>
      <v-col cols="12">
        <swiper
          :slidesPerView="3"
          :spaceBetween="0"
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
          <swiper-slide>
            <div style="height: 200px; width: 100px; background-color: red;">
              123              
            </div>
          </swiper-slide>
          <swiper-slide>
            <div style="height: 100px; width: 200px; background-color: aqua;">
              321             
            </div>
          </swiper-slide>
          <swiper-slide>
            <div style="height: 60px; width: 100px; background-color: greenyellow;">
              333
            </div>
          </swiper-slide>
          <swiper-slide>
            <div style="height: 150px; width: 50px; background-color: darkorange;">
              666
            </div>
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
    }
}
</script>

<style scoped>

</style>