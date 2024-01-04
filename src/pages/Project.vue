<template>
   <v-container class="background-img project pa-0" fluid>
    <v-row style="height: 100vh;">
        <v-col cols="6" class="pa-0 d-flex flex-column align-center justify-center">
          <div style="margin-right: 0vw; margin-left: 3vw">
            <v-carousel
            cycle
            hide-delimiters
            show-arrows="hover"
            height="auto"
            style="box-shadow: 0px 0px 3px 1px rgb(236, 236, 236); width: 30vw;"
          >
            <v-carousel-item>
              <v-col class="pa-0 d-flex flex-column align-center justify-center">
                <img class="carousel-height" src="../images/Projects/CrownBed/Images/bed1.jpg" alt="Bed1" />
              </v-col>
            </v-carousel-item>
            <v-carousel-item>
              <v-col class="pa-0 d-flex flex-column align-center justify-center">
                <img class="carousel-height" src="../images/Projects/CrownBed/Images/bed3.jpg" alt="Bed3" />
              </v-col>
            </v-carousel-item>
            <v-carousel-item>
              <v-col class="pa-0 d-flex flex-column align-center justify-center">
                <img class="carousel-height" src="../images/Projects/CrownBed/Images/bed2.jpg" alt="Bed2" />
              </v-col>
            </v-carousel-item>
            <v-carousel-item>
              <v-col class="pa-0 d-flex flex-column align-center justify-center">
                <img class="carousel-height" src="../images/Projects/CrownBed/Images/beds.jpg" alt="Three beds" />
              </v-col>
            </v-carousel-item>
            <v-carousel-item>
              <v-col class="pa-0 d-flex flex-column align-center justify-center">
                <img class="carousel-height" src="../images/Projects/CrownBed/Images/child_bed.jpg" alt="Bed for child" />
              </v-col>
            </v-carousel-item>
          </v-carousel>
          </div>

        </v-col>
        <v-col cols="6" class="pa-0 d-flex flex-column align-center justify-center">
          <div style="margin-right: 3vw;">
            <h1 class="h-neucha-regular" style="margin-bottom: 2vh; font-size: 3.8vh;">{{ h }}</h1>
            <p class="h-montserrat-regular" v-html="description" style="font-size: 2.35vh;"></p>
          </div>
        </v-col>
      </v-row>
   </v-container>
</template>

<script>
export default {
  name: "ProjectPage",
  data() {
    return {
      description: "",
      h: "",
    };
  },
  props: {
    projectName: {
      type: String,
      required: true,
    },
  },
  beforeMount() {
    if (this.$props.projectName === "crownbed") {
      this.h = "Crown bed";
      this.description = "Коллекция кроватей «Crown bed» создаст в вашей<br>квартире атмосферу единения с природой. Уни-<br>версальное для всех моделей изголовье упростит<br>производство, а вы сможете побаловать себя лю-<br>бым вариантом «кроны»!";
      return;
    }
  },
  mounted() {
    document.documentElement.style.overflow = 'hidden';
  },
  beforeUnmount() {
    document.documentElement.style.overflow = '';
  }
}
</script>

<style scoped>
  .project {
    height: 101.3vh;
  }
  .background-img {
  background-image: url('../images/Projects/CrownBed/background.png');
  background-size: cover;
  background-position: top;
  }
  .carousel-height {
    height: 40vh;
  }
</style>