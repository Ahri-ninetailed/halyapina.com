<template>
  <project :header-text="$t('projects.bubble')" :swiper-imgs="images" :background-img="this.background">
    <p class="h-montserrat-regular text-start p-project-size">
      <span v-if="$i18n.locale === 'ru'">
        <span v-if="this.$vuetify.display.smAndUp">
          Все в детстве любили выдувать мыльные<br>
          пузыри, любоваться их хрупкостью и радужны-<br>
          ми переливами. Я всегда хотела сохранить по-<br>
          добную красоту как можно дольше, вероятно,<br>
          по этой причине и был создан проект крана<br>
          «Bubble». Его конструкция — воплощение неж-<br>
          ности и лёгкости. А при эксплуатации пользо-<br>
          вателю откроется небольшое представление:<br>
          вода будет струиться и бурлить, эффектно за-<br>
          полняя, прозрачные шарики. 
        </span>
        <span v-else>
          Все в детстве любили выдувать мыльные пузыри,
          любоваться их хрупкостью и радужными переливами.
          Я всегда хотела сохранить подобную красоту как можно
          дольше, вероятно, по этой причине и был создан проект
          крана «Bubble». Его конструкция — воплощение нежности
          и лёгкости. А при эксплуатации пользователю откроется
          небольшое представление: вода будет струиться и бурлить,
          эффектно заполняя, прозрачные шарики. 
        </span>
      </span>
      <span lang="en" v-else>
        Everyone in childhood loved to blow soap
        bubbles and admire their fragility and rainbow
        tints. I always wanted to preserve such beauty
        for as long as possible, probably for this reason
        the "Bubble" crane project was created. Its design
        is the embodiment of tenderness and lightness. And
        during operation, the user will see a small picture: the
        water will flow and bubble, effectively filling the
        transparent balls.
      </span>
    </p>
  </project>
</template>

<script>
import Project from '@/components/Project.vue';
import background from '@/images/Projects/Bubble/background.webp'

export default {
  name: 'BubblePage',
  components: {
    Project
  },
  data() {
    return {
      background: background,
      images: [
        { src: "Bubble/Images/bubble_tap_water1.webp", srcZoom: "Bubble/Images/bubble_tap_water1_zoom.webp", alt: "Bubble tap water" },
        { src: "Bubble/Images/bubble_tap_water2.webp", srcZoom: "Bubble/Images/bubble_tap_water2_zoom.webp", alt: "Bubble tap water" },
      ]
    }
  }
}
</script>

<style scoped>

</style>
