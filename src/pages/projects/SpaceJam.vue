<template>
  <project :header-text="$t('projects.spacejam')" :swiper-imgs="images" :background-img="this.background">
    <p class="h-montserrat-regular text-start p-project-size">
      <span v-if="$i18n.locale === 'ru'">
        <span v-if="this.$vuetify.display.smAndUp">
          Скажу вам по секрету, «SpaceJam» — необыч-<br>
          ная кровать,  это самый настоящий звездолёт!<br>
          Отныне ваши дети будут без лишних уговоров<br>
          ложиться спать, ведь «SpaceJam» подарит<br>
          им незабываемые сновидения, наполненные<br>
          путешествиями по бескрайнему космосу! Об-<br>
          текаемые формы уберегут деток от ушибов,<br>
          а бортики по краям создадут ощущение покоя<br>
          и защищенности.
        </span>
        <span v-else>
          Скажу вам по секрету, «SpaceJam» — необычная
          кровать, это самый настоящий звездолёт!
          Отныне ваши дети будут без лишних уговоров
          ложиться спать, ведь «SpaceJam» подарит им
          незабываемые сновидения, наполненные путешествиями
          по бескрайнему космосу! Обтекаемые формы уберегут
          деток от ушибов, а бортики по краям создадут ощущение
          покоя и защищенности.
        </span>
      </span>
      <span lang="en" v-else>
        Let me tell you a secret: "SpaceJam" is no ordinary
        bed — it's a real spaceship! From now on, your children
        will go to bed without any persuasion, because "SpaceJam"
        will fill their dreams with unforgettable journeys through
        the boundless cosmos! Its streamlined shapes protect little
        ones from bumps, and the side rails create a feeling of
        calm and safety.
      </span>
    </p>
  </project>
</template>

<script>
import Project from '@/components/Project.vue';
import background from '@/images/Projects/SpaceJam/background.webp'

export default {
  name: 'SpaceJam',
  components: {
    Project,
  },
  data() {
    return {
      background: background,
      images: [
        { src: "SpaceJam/Images/bed1.webp", srcZoom: "SpaceJam/Images/bed1_zoom.webp", alt: "SpaceJam bed" },
        { src: "SpaceJam/Images/bed2.webp", srcZoom: "SpaceJam/Images/bed2_zoom.webp", alt: "SpaceJam bed side view" },
        { src: "SpaceJam/Images/bed3.webp", srcZoom: "SpaceJam/Images/bed3_zoom.webp", alt: "SpaceJam bed" },
        { src: "SpaceJam/Images/bed4.webp", srcZoom: "SpaceJam/Images/bed4_zoom.webp", alt: "SpaceJam bed side view" },
      ]
    }
  }
}
</script>

<style scoped>

</style>
