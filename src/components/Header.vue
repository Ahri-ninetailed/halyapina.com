<template>
  <header ref="header" :style="{...height, ...textColor, ...headerColor, ...headerOtherStyleProp}" class="h-montserrat-regular header">
    <v-row class="ma-0 fill-height">
      <v-col v-if="!isHomePage" cols="auto" class="pa-0 align-self-center ml-6">
        <a class="no-default-styles" href="/"><p>Главная</p></a>
      </v-col>
      <v-col v-if="!isAboutPage" cols="auto" class="pa-0 ml-6 align-self-center">
        <a class="no-default-styles" href="/aboutme"><p>О себе</p></a>
      </v-col>
      <v-col v-if="!isAnimaPage" cols="auto" class="pa-0 ml-6 align-self-center">
        <a class="no-default-styles" href="/anima"><p>Anima</p></a>
      </v-col>
    </v-row>
  </header>
</template>
  
<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      headerStyleStart: true,
      backgroundColor: null,
      headerOtherStyle: null,
    }
  },
  mounted() {
    this.setBackgroundColor();
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  computed: {
    isHomePage() {
      return window.location.pathname === '/'; // Замените на реальный путь главной страницы
    },
    isAboutPage() {
      return window.location.pathname === '/aboutme'; // Замените на реальный путь главной страницы
    },
    isAnimaPage() {
      return window.location.pathname === '/anima'; // Замените на реальный путь главной страницы
    },
    textColor() {
      if (this.isAboutPage) {
        return {
          color: 'white'
        };
      } 
      return {
          color: 'unset'
        };
    },
    height() {
      return {
        height: `${this.$headerHeightValue}${this.$headerHeightUnit}`
      }
    },
    headerColor() {
      return this.backgroundColor;
    },
    headerOtherStyleProp() {
      return this.headerOtherStyle
    }
  },
  methods: {
    scrollOnStart() {
      return window.scrollY === 0;
    },
    setBackgroundColor() {
      if (this.isAboutPage) {
        this.backgroundColor = {
          backgroundColor: 'black'
        }
      } else if (this.isHomePage) {
        this.backgroundColor = {
          backgroundColor: 'unset'
        }
      } else {
        this.backgroundColor = {
          backgroundColor: 'white'
        }
      }
    },
    onScroll() {
      if (!this.scrollOnStart() && this.headerStyleStart) {
        this.headerStyleStart = false;

        if (this.isAboutPage) {
          this.backgroundColor = {
            backgroundColor: 'rgba(0,0,0,0.8) !important'
          }
        } else {
          this.backgroundColor = {
            backgroundColor: 'rgba(255,255,255,0.8) !important'
          }
        }

        this.headerOtherStyle = {
          backdropFilter: 'saturate(180%) blur(20px)',
          transition: 'all 0.8s ease-in-out'
        }


      } else if (this.scrollOnStart() && this.headerStyleStart === false) {
        this.headerStyleStart = true;

        this.setBackgroundColor();

        this.headerOtherStyle = {
          backdropFilter: 'unset',
          transition: 'all 0.2s ease-in-out'
        }
      }
    },
  },
}
</script>

<style scoped>

.header {
  font-size: 2.5vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.no-default-styles {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>