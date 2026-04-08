<template>
  <project :header-text="$t('projects.dragonfly')" :swiper-imgs="images" :background-img="this.background">
    <p class="h-montserrat-regular text-start p-project-size">
      <span v-if="$i18n.locale === 'ru'">
        <span v-if="this.$vuetify.display.smAndUp">
          Насекомые всегда являлись отличным источ-<br>
          ником вдохновения. Строение их тела, столь<br>
          отличное от нашего, поражает воображение.<br>
          Конструкция светильников «Dragonfly» пред-<br>
          ставляет собой сочетание прозрачного стекла<br>
          во внешнем слое и матового внутри, первый<br>
          создаёт объёмные блики, а второй скрывает<br>
          техническую сторону проекта, крылышки вы-<br>
          полнены из металлической проволоки.<br>
        </span>
        <span v-else>
          Насекомые всегда являлись отличным источником вдохновения.
          Строение их тела, столь  отличное от нашего, поражает воображение.
          Конструкция светильников «Dragonfly» представляет собой
          сочетание прозрачного стекла во внешнем слое и матового
          внутри, первый создаёт объёмные блики, а второй скрывает
          техническую сторону проекта, крылышки выполнены из
          металлической проволоки. 
        </span>
      </span>
      <span lang="en" v-else>
        Insects have always been a wonderful source of inspiration.
        The structure of their bodies, so different from ours,
        is astonishing. The "Dragonfly" lamp combines transparent
        glass on the outer layer with frosted glass within: the
        former creates rich, dimensional reflections, while the
        latter conceals the technical components. The wings are
        crafted from metal wire.
      </span>
    </p>
  </project>
</template>

<script>
import Project from '@/components/Project.vue';
import background from '@/images/Projects/Dragonfly/background.webp'

export default {
  name: 'DragonflyPage',
  components: {
    Project
  },
  data() {
    return {
      background: background,
      images: [
        { src: "Dragonfly/Images/lamp.webp", srcZoom: "Dragonfly/Images/lamp_zoom.webp", alt: "Dragonfly lamp" },
        { src: "Dragonfly/Images/lamp_dark.webp", srcZoom: "Dragonfly/Images/lamp_dark_zoom.webp", alt: "Dragonfly lamp in the dark" },
      ]
    }
  }
}
</script>

<style scoped>

</style>
