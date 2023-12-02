<template>
  <v-container>
    <div class="home-main-pic">
    </div>

    <v-row class="pa-12">
      <v-col>
        <div class="main-h text-center h-neucha-regular">Студенческие работы</div>
      </v-col>
    </v-row>

  </v-container>
</template>
    
<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.home-main-pic {
  background-image: url('../images/main-top-img.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 58vh;
}

.main-h {
  font-size: 50px;
}
</style>