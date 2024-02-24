<template>
  <project header-text="SpaceJam" :swiper-imgs="images" background-img="../src/images/Projects/SpaceJam/background.png">
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
          а бортики по краям подарят ощущения покоя<br>
          и защищенности.
        </span>
        <span v-else>
          Скажу вам по секрету, «SpaceJam» — необычная
          кровать, это самый настоящий звездолёт!
          Отныне ваши дети будут без лишних уговоров
          ложиться спать, ведь «SpaceJam» подарит им
          незабываемые сновидения, наполненные путешествиями
          по бескрайнему космосу! Обтекаемые формы уберегут
          деток от ушибов, а бортики по краям подарят ощущения
          покоя и защищенности.
        </span>
      </span>
      <span v-else>
        I'll tell you a secret, "SpaceJam" is an unusual bed,
        it's a real starship! From now on, your children will
        go to bed without any extra persuasion, because "SpaceJam"
        will give them unforgettable dreams filled with travel
        through the boundless space! Streamlined shapes will
        protect children from bruises, and the sides at the
        edges will give a feeling of peace and security.
      </span>
    </p>
  </project>
</template>

<script>
import Project from '@/components/Project.vue';

export default {
  name: 'SpaceJam',
  components: {
    Project
  },
  data() {
    return {
      images: [
        { src: "../src/images/Projects/SpaceJam/Images/bed1.png", alt: "Bed1" },
        { src: "../src/images/Projects/SpaceJam/Images/bed2.png", alt: "Bed3" },
        { src: "../src/images/Projects/SpaceJam/Images/bed3.png", alt: "Bed2" },
        { src: "../src/images/Projects/SpaceJam/Images/bed4.png", alt: "Bed4" },
      ]
    }
  }
}
</script>

<style scoped>

</style>
