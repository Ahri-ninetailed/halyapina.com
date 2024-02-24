<template>
  <project header-text="Fennel" :swiper-imgs="images" background-img="../src/images/Projects/Fennel/background.png">
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

export default {
  name: 'FennelPage',
  components: {
    Project
  },
  data() {
    return {
      images: [
        { src: "../src/images/Projects/Fennel/Images/FennelLamp.jpg", alt: "Fennel lamp" },
        { src: "../src/images/Projects/Fennel/Images/LampInDark.jpg", alt: "Fennel lamp in dark" },
        { src: "../src/images/Projects/Fennel/Images/LampTopView.jpg", alt: "Fennel lamp top view" },
      ]
    }
  }
}
</script>

<style scoped>

</style>
