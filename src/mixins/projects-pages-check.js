
import AnimaPageCheck from '@/mixins/anima-page-check.js';
import AboutmePageCheck from '@/mixins/aboutme-page-check.js';
import HomePageCheck from '@/mixins/home-page-check.js';
export default {
    mixins: [AnimaPageCheck, AboutmePageCheck, HomePageCheck],
    computed: {
      isProjectPage() {
        if (!this.isAnimaPage && !this.isAboutPage && !this.isHomePage) {
          return true;
        } else {
          return false;
        }
      },
    },
  };