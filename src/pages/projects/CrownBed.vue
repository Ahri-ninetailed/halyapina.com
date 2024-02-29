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
      <span v-else>
        The Crown bed collection will create an atmosphere of unity with nature in your apartment. 
        A headboard that is universal for all models will simplify production, and you can pamper yourself with any “crown” option!
      </span>
    </p>
  </project>
</template>

<script>
import Project from '@/components/Project.vue';
import background from '@/images/Projects/CrownBed/background.png'

export default {
  name: 'CrownBed',
  components: {
    Project
  },
  data() {
    return {
      background: background,
      images: [
        { src: "CrownBed/Images/bed1.jpg", alt: "Bed1" },
        { src: "CrownBed/Images/bed3.jpg", alt: "Bed3" },
        { src: "CrownBed/Images/bed2.jpg", alt: "Bed2" },
        { src: "CrownBed/Images/beds.jpg", alt: "Three beds" },
        { src: "CrownBed/Images/child_bed.jpg", alt: "Bed for child" },
      ]
    }
  }
}
</script>

<style scoped>

</style>
