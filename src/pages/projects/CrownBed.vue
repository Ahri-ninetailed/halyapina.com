<template>
  <project :header-text="$t('projects.crownbed')" :swiper-imgs="images" :background-img="this.background">
    <p class="h-montserrat-regular text-start p-project-size">
      <span v-if="$i18n.locale === 'ru'">
        <span v-if="this.$vuetify.display.smAndUp">
          Коллекция кроватей «Crown bed» создаст в вашей<br>
          квартире атмосферу единения с природой. Уни-<br>
          версальное для всех моделей изголовье упростит<br>
          производство, а вы сможете побаловать себя лю-<br>
          бым вариантом «кроны»!
        </span>
        <span v-else>
          Коллекция кроватей «Crown bed»<br>
          создаст в вашей квартире атмос-<br>
          феру единения с природой.<br>
          Универсальное для всех моделей<br>
          изголовье упростит производство,<br>
          а вы сможете побаловать себя лю-<br>
          бым вариантом «кроны»!
        </span>
      </span>
      <span lang="en" v-else>
        The "Crown bed" collection will bring an atmosphere
        of unity with nature into your home. A headboard shared
        across all models simplifies production, while you can
        treat yourself to any "crown" variation you like!
      </span>
    </p>
  </project>
</template>

<script>
import Project from '@/components/Project.vue';
import background from '@/images/Projects/CrownBed/background.webp'

export default {
  name: 'CrownBed',
  components: {
    Project
  },
  data() {
    return {
      background: background,
      images: [
        { src: "CrownBed/Images/bed1.webp", srcZoom: "CrownBed/Images/bed1_zoom.webp", alt: "Crownbed 1" },
        { src: "CrownBed/Images/bed3.webp", srcZoom: "CrownBed/Images/bed3_zoom.webp", alt: "Crownbed 3" },
        { src: "CrownBed/Images/bed2.webp", srcZoom: "CrownBed/Images/bed2_zoom.webp", alt: "Crownbed 2" },
        { src: "CrownBed/Images/beds.webp", srcZoom: "CrownBed/Images/beds_zoom.webp", alt: "Three crownbeds" },
        { src: "CrownBed/Images/child_bed.webp", srcZoom: "CrownBed/Images/child_bed_zoom.webp", alt: "Crownbed for child" },
      ]
    }
  }
}
</script>

<style scoped>

</style>
