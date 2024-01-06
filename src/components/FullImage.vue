<template>
  <div>
    <img
      class="pointer" 
      :src="this.$props.src" 
      :style="this.$props.style" 
      :alt="this.$props.alt"
      @click="openImage"
    />
    <v-dialog v-model="dialog" :max-width="dialogMaxWidth()" :max-height="dialogMaxHeight()">
      <img :src="this.$props.src" :style="{...imgWidth, ...imgHeight}" style="object-fit: contain;" :alt="this.$props.alt"/>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'FullImage',
  data() {
    return {
      dialog: false,
    }
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    style: {
      type: Object,
      required: false,
    },
    alt: {
      type: String,
      required: false,
      default: '',
    },
    dHV: {
      type: Number,
      required: false
    },
    dHU: {
      type: String,
      required: false
    },
    dWV: {
      type: Number,
      required: false
    },
    dWU: {
      type: String,
      required: false
    },
    dSmHV: {
      type: Number,
      required: false
    },
    dSmHU: {
      type: String,
      required: false
    },
    dSmWV: {
      type: Number,
      required: false
    },
    dSmWU: {
      type: String,
      required: false
    },
    dMdHV: {
      type: Number,
      required: false
    },
    dMdHU: {
      type: String,
      required: false
    },
    dMdWV: {
      type: Number,
      required: false
    },
    dMdWU: {
      type: String,
      required: false
    },
    dLgHV: {
      type: Number,
      required: false
    },
    dLgHU: {
      type: String,
      required: false
    },
    dLgWV: {
      type: Number,
      required: false
    },
    dLgWU: {
      type: String,
      required: false
    },
  },
  methods: {
    openImage() {
      this.dialog = true;
    },
    dialogMaxWidth() {
      if (this.getCurrentWVal !== undefined) {
        return this.imgWidth.width;
      }

      const img = new Image();
      img.src = this.$props.src;
      
      let val = (this.getCurrentHVal * img.width) / img.height;
      return `${val}${this.getCurrentHUnit}`;
    },
    dialogMaxHeight() {
      if (this.getCurrentHVal !== undefined) {
        return this.imgHeight.height;
      }

      const img = new Image();
      img.src = this.$props.src;
      
      let val = (this.getCurrentWVal * img.height) / img.width;
      return `${val}${this.getCurrentWUnit}`;
    },
  },
  computed: {
    getCurrentHVal() {
      if (this.$vuetify.display.lgAndUp) {
        if (this.dLgHV !== undefined) {
          return this.dLgHV;
        } else if (this.dMdHV !== undefined) {
          return this.dMdHV;
        } else if (this.dSmHV !== undefined) {
          return this.dSmHV;
        } else {
          return this.dHV;
        }
      }

      if (this.$vuetify.display.mdAndUp) {
        if (this.dMdHV !== undefined) {
          return this.dMdHV;
        } else if (this.dSmHV !== undefined) {
          return this.dSmHV;
        } else {
          return this.dHV;
        }
      } 

      if (this.$vuetify.display.smAndUp) {
        if (this.dSmHV !== undefined) {
          return this.dSmHV;
        } else {
          return this.dHV;
        }
      } 

      if (this.$vuetify.display.xs) {
        if (this.dHV !== undefined) {
          return this.dHV;
        }
      } 
      
      return this.dHV;
    },
    getCurrentHUnit() {
      if (this.$vuetify.display.lgAndUp) {
        if (this.dLgHU !== undefined) {
          return this.dLgHU;
        } else if (this.dMdHU !== undefined) {
          return this.dMdHU;
        } else if (this.dSmHU !== undefined) {
          return this.dSmHU;
        } else {
          return this.dHU;
        }
      }

      if (this.$vuetify.display.mdAndUp) {
        if (this.dMdHU !== undefined) {
          return this.dMdHU;
        } else if (this.dSmHU !== undefined) {
          return this.dSmHU;
        } else {
          return this.dHU;
        }
      } 

      if (this.$vuetify.display.smAndUp) {
        if (this.dSmHU !== undefined) {
          return this.dSmHU;
        } else {
          return this.dHU;
        }
      } 

      if (this.$vuetify.display.xs) {
        if (this.dHU !== undefined) {
          return this.dHU;
        }
      } 
      
      return this.dHU;
    },
    getCurrentWVal() {
      if (this.$vuetify.display.lgAndUp) {
        if (this.dLgWV !== undefined) {
          return this.dLgWV;
        } else if (this.dMdWV !== undefined) {
          return this.dMdWV;
        } else if (this.dSmWV !== undefined) {
          return this.dSmWV;
        } else {
          return this.dWV;
        }
      }

      if (this.$vuetify.display.mdAndUp) {
        if (this.dMdWV !== undefined) {
          return this.dMdWV;
        } else if (this.dSmWV !== undefined) {
          return this.dSmWV;
        } else {
          return this.dWV;
        }
      } 

      if (this.$vuetify.display.smAndUp) {
        if (this.dSmWV !== undefined) {
          return this.dSmWV;
        } else {
          return this.dWV;
        }
      } 

      if (this.$vuetify.display.xs) {
        if (this.dWV !== undefined) {
          return this.dWV;
        }
      } 
      
      return this.dWV;
    },
    getCurrentWUnit() {
      if (this.$vuetify.display.lgAndUp) {
        if (this.dLgWU !== undefined) {
          return this.dLgWU;
        } else if (this.dMdWU !== undefined) {
          return this.dMdWU;
        } else if (this.dSmWU !== undefined) {
          return this.dSmWU;
        } else {
          return this.dWU;
        }
      }

      if (this.$vuetify.display.mdAndUp) {
        if (this.dMdWU !== undefined) {
          return this.dMdWU;
        } else if (this.dSmWU !== undefined) {
          return this.dSmWU;
        } else {
          return this.dWU;
        }
      } 

      if (this.$vuetify.display.smAndUp) {
        if (this.dSmWU !== undefined) {
          return this.dSmWU;
        } else {
          return this.dWU;
        }
      } 

      if (this.$vuetify.display.xs) {
        if (this.dWU !== undefined) {
          return this.dWU;
        }
      } 
      
      return this.dWU;
    },
    imgHeight() {
      if (this.getCurrentHVal === undefined || this.getCurrentHUnit === undefined) {
        return {
          height: 'unset'
        };
      }
      return {
        height: `${this.getCurrentHVal}${this.getCurrentHUnit}`
      };
    },
    imgWidth() {
      if (this.getCurrentWVal === undefined || this.getCurrentWUnit === undefined) {
        return {
          width: 'unset'
        };
      }
      return {
        width: `${this.getCurrentWVal}${this.getCurrentWUnit}`
      };
    },
  }
}

</script>

<style scoped>

.pointer {
  cursor: pointer;
}
</style>
