<template>
  <project :header-text="$t('projects.fennel')" :swiper-imgs="images" :background-img="this.background">
    <p class="h-montserrat-regular text-start p-project-size">
      <span v-if="$i18n.locale === 'ru'">
        <span v-if="this.$vuetify.display.smAndUp">
          Светильник «Fennel» будет прекрасным деко-<br>
          ром как днём, так и ночью. Соцветия сделаны<br>
          из тонкого цветного стекла, в которых днём<br>
          будут отражаться солнечные лучи, а ночью<br>
          графичные элементы создадут неповторимую<br>
          игру теней.
        </span>
        <span v-else>
          Светильник «Fennel» будет прекрасным декором
          как днём, так и ночью. Соцветия сделаны
          из тонкого цветного стекла, в которых днём
          будут отражаться солнечные лучи, а ночью
          графичные элементы создадут неповторимую
          игру теней.
        </span>
      </span>
      <span v-else>
        The Fennel lamp will be a wonderful decoration.
        both day and night. Inflorescences done
        made of thin colored glass, in which during the day
        the sun's rays will be reflected at night
        graphic elements create a unique
        A game of shadows.
      </span>
    </p>
  </project>
</template>

<script>
import Project from '@/components/Project.vue';
import background from '@/images/Projects/Fennel/background.webp'

export default {
  name: 'FennelPage',
  components: {
    Project
  },
  data() {
    return {
      background: background,
      images: [
        { src: "Fennel/Images/FennelLamp.webp", alt: "Fennel lamp" },
        { src: "Fennel/Images/LampInDark.webp", alt: "Fennel lamp in dark" },
        { src: "Fennel/Images/LampTopView.webp", alt: "Fennel lamp top view" },
      ]
    }
  }
}
</script>

<style scoped>

</style>
