
<template>
  <v-parallax
  height="1000"
  :src="require('../assets/img/pcbg.jpg')"
  cover
  
  >

        <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <v-img
          :src="require('../assets/img/LogoVV2.png')"
          contain
          height="200"
        />
      </v-col>

      <v-col class="homename col-5 mb-16">
        <div id="name">
          <p>
            Valentin VAIN
          </p>
        </div>
        <div id="pname">
          <p>
            Développement|Design|Conception|Web|Mobile
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

.homename {
  background-color: rgba(5, 5, 5, 0.5);
  position: relative;
  text-align: center;
  color: white;

}
#pname{
    font-family: 'Special Elite', cursive;
    font-size: 25px;
}
#name{
    font-family: 'Cinzel Decorative', cursive;
    font-size: 70px;
}
</style>
