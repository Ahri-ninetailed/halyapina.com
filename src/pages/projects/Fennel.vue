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
      <span lang="en" v-else>
        The "Fennel" lamp makes a beautiful decoration both
        day and night. Its inflorescences are made of thin
        colored glass that catches the sun's rays by day,
        while at night its graphic elements create a unique
        play of shadows.
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
        { src: "Fennel/Images/FennelLamp.webp", srcZoom: "Fennel/Images/FennelLamp_zoom.webp", alt: "Fennel lamp" },
        { src: "Fennel/Images/LampInDark.webp", srcZoom: "Fennel/Images/LampInDark_zoom.webp", alt: "Fennel lamp in dark" },
        { src: "Fennel/Images/LampTopView.webp", srcZoom: "Fennel/Images/LampTopView_zoom.webp", alt: "Fennel lamp top view" },
      ]
    }
  }
}
</script>

<style scoped>

</style>
