export default {
    computed: {
      isHomePage() {
        return window.location.pathname === '/'; 
      },
    },
  };