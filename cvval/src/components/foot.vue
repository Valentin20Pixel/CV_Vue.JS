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
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
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
          :src="require('../assets/img/LogoVV2.png')"
          contain
          height="200"
        />
      </v-row>
    </v-row>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'Contactez Moi',
        'Télécharger mon CV',
        'Mes réalisations',
        'Contact',
      ],
      infos: [
        
        'Amiens, Picardie',
        '28 ans - Permis + véhicule',
        'valentinvain@gmail.com',
        '06 67 82 78 59',
      ]
    }),
  }
</script>
<style>

</style>