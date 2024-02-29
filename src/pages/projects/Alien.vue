<template>
  <project :header-text="$t('projects.alien')" :swiper-imgs="images" :background-img="this.background">
    <p class="h-montserrat-regular text-start p-project-size">
      <span v-if="$i18n.locale === 'ru'">
        <span v-if="this.$vuetify.display.smAndUp">
          Он явно прибыл к нам с какой-нибудь далё-<br>
          кой планеты. Мы можем лишь строить догадки<br>
          об особенностях его мира. Его тело покрыто<br>
          мягким мехом, а форма тела плавна и изящна.<br>
          Шезлонг «Alien» — это яркий, выразительный<br>
          предмет мебели, он станет украшением ком-<br>
          наты и любимцем детей! 
        </span>
        <span v-else>
          Он явно прибыл к нам с какой-нибудь далёкой планеты.
          Мы можем лишь строить догадки об особенностях
          его мира. Его тело покрыто мягким мехом, а форма
          тела плавна и изящна. Шезлонг «Alien» — это яркий,
          выразительный предмет мебели, он станет украшением
          комнаты и любимцем детей! 
        </span>
      </span>
      <span v-else>
        He clearly came to us from some distant planet.
        We can only speculate about the features of his
        world. Its body is covered with soft fur, and its
        body shape is smooth and graceful. The Alien chaise
        longue is a bright, expressive piece of furniture;
        it will decorate the room and be a children's favorite!
      </span>
    </p>
  </project>
</template>

<script>
import Project from '@/components/Project.vue';
import background from '@/images/Projects/Alien/background.jpg'

export default {
  name: 'AlienPage',
  components: {
    Project
  },
  data() {
    return {
      background: background,
      images: [
        { src: "Alien/Images/ChaiseLounge1.jpg", alt: "Chaise lounge" },
        { src: "Alien/Images/ChaiseLounge2.jpg", alt: "Chaise lounge side view" },
        { src: "Alien/Images/ChaiseLounge3.jpg", alt: "Chaise lounge top view" },
      ]
    }
  }
}
</script>

<style scoped>

</style>
