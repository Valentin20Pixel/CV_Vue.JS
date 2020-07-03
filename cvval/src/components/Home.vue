
<template>
  <v-parallax
  height="1000"
  cover
  :src="require('../assets/img/pcbg.jpg')"
  
  >

    <v-row
      align="center"
      justify="center"
      class="my-16"
    >
      <v-col cols="12">
        <v-img
          :src="require('../assets/img/LogoVV3.png')"
          contain
          height="200"
        />
      </v-col>
      <v-col class="homename col-5">
        <div id="name">
          <p>
            Valentin VAIN
          </p>
        </div>
        <div id="pname">
          <p>
            Développement | Design | Conception | Web | Mobile
          </p>
        </div>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({

    }),
  }
</script>
<style>
</style>
