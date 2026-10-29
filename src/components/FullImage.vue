<template>
  <div>
    <v-lazy-image v-if="this.$props.lazy"
      :class="this.$props.class"
      :src="this.$props.src" 
      :style="{...this.$props.style, ...cursor}" 
      :alt="this.$props.alt"
      @click="openImage"
    />
    <img v-else
      :class="this.$props.class"
      :src="this.$props.src" 
      :style="{...this.$props.style, ...cursor}" 
      :alt="this.$props.alt"
      @click="openImage"
    />
    <v-dialog v-model="dialog" :max-width="dialogMaxWidth" :max-height="dialogMaxHeight">
      <v-lazy-image :src="this.$props.srcZoom" @load="isImageLoaded()" :style="{...imgWidth, ...imgHeight, ...showImage}" style="object-fit: contain;" :alt="this.$props.alt" />
      <div class="progress-container" :style="showLoader">
        <v-progress-circular
        color="white"
        indeterminate
        :size="55"
        :width="5"
        ></v-progress-circular>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  name: 'FullImage',
  data() {
    return {
      dialog: false,
      isZoomImgLoaded: false,
      naturalWidth: 0,
      naturalHeight: 0,
    }
  },
  mounted() {
    this.preloadDimensions();
  },
  watch: {
    src() {
      this.preloadDimensions();
    },
  },
  components: {
    VLazyImage
  },
  props: {
    class: {
      type: String,
      required: false,
    },
    src: {
      type: String,
      required: true,
    },
    srcZoom: {
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
    zoomxs: {
      type: Boolean,
      required: false,
      default: true,
    },
    lazy: {
      type: Boolean,
      required: false,
      default: false,
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
    isImageLoaded() {
      this.isZoomImgLoaded = true;
    },
    openImage() {
      if (this.$props.zoomxs === false && this.$vuetify.display.xs) {
        return;
      }
      this.dialog = true;
    },
    preloadDimensions() {
      const img = new Image();
      img.onload = () => {
        this.naturalWidth = img.naturalWidth;
        this.naturalHeight = img.naturalHeight;
      };
      img.src = this.$props.src;
    },
  },
  computed: {
    dialogMaxWidth() {
      if (this.getCurrentWVal !== undefined) {
        return this.imgWidth.width;
      }
      if (!this.naturalWidth || !this.naturalHeight) {
        return '90vw';
      }
      const val = (this.getCurrentHVal * this.naturalWidth) / this.naturalHeight;
      return `${val}${this.getCurrentHUnit}`;
    },
    dialogMaxHeight() {
      if (this.getCurrentHVal !== undefined) {
        return this.imgHeight.height;
      }
      if (!this.naturalWidth || !this.naturalHeight) {
        return '90vh';
      }
      const val = (this.getCurrentWVal * this.naturalHeight) / this.naturalWidth;
      return `${val}${this.getCurrentWUnit}`;
    },
    showLoader() {
      if (this.isZoomImgLoaded === false) {
        return {
          display: 'flex'
        };
      } else {
        return {
          display: 'none'
        };
      }
    },
    showImage() {
      let hasWidht = this.imgWidth.width === 'unset' ? false : true;

      if (this.isZoomImgLoaded === true) {
        if (hasWidht) {
          return this.imgWidth
        } else {
          return this.imgHeight
        }
      } else {
        if (hasWidht) {
          return  {
            width: '0px'
          }
        } else {
          return {
            height: '0px'
          }
        }
      }
    },
    cursor() {
      if (this.$props.zoomxs === false && this.$vuetify.display.xs) {
        return {
          cursor: 'unset'
        };
      }
      return {
        cursor: 'pointer'
      };
    },
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
.progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
