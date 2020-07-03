<template>
  <v-footer
    color="grey"
    padless
  >
  
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        color="white"
        text
        rounded
        class="my-2"
      >
          {{ link }}
          <router-link to="/contact">Contactez moi</router-link>

      </v-btn>
           <v-btn
        color="white"
        text
        rounded
        class="my-2"
      >
          {{ link }}
          <router-link to="/contact">Télécharger mon CV</router-link>

      </v-btn>     <v-btn
        color="white"
        text
        rounded
        class="my-2"
      >
          {{ link }}
          <router-link to="/contact">Mes Réalisations</router-link>

      </v-btn>     <v-btn
        color="white"
        text
        rounded
        class="my-2"
      >
          {{ link }}
          <router-link to="/contact">Qui suis je?</router-link>

      </v-btn>
      <br>
      
      <v-col
        v-for="info in infos"
        :key="info"
        class="red lighten-1 py-3 text-center white--text"
        cols="12"
      >
        {{ info }}
        
      </v-col>
      <v-row
      justify="center"
      no-gutters
      >
        <v-img
          :src="require('../assets/img/LogoVV3.png')"
          contain
          height="100"
        />
      </v-row>
    </v-row>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      links: [
        'Contactez Moi',
        'Télécharger mon CV',
        'Mes réalisations',
        'Qui suis je?',
      ],
      infos: [
        
        'Amiens, Picardie',
        'valentinvain@gmail.com',
      ]
    }),
  }

</script>
<style>

</style>