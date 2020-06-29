
<template>
  <v-container>
    <v-card
      outlined
      tile
    >

      <v-timeline
        :align-top="alignTop"
        :dense="dense"
        :reverse="reverse"
      >
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :icon="icon ? 'mdi-buffer' : ''"
          :color="year.color"
        >
          <template v-slot:icon ></template>
          <span 
            :class="`headline`"
            v-text="year.year"
            slot="opposite">
          </span>
          <v-card class="elevation-4">
          <v-card-title class="headline" v-text="year.for"></v-card-title>
          <v-card-text v-text="year.des"></v-card-text>
          <v-card-text><h6 v-text="year.etab"></h6></v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      icon: true,
      years: [
        {
          color: 'black',
          year: '2007',
          for: 'Brevet des collèges',
          des: 'Titulaire du Brevet des collèges.',
          etab: 'SAGEBIEN, Amiens'
        },
        {
          color: 'black',
          year: '2010',
          for: 'BAC STI GMA',
          des: 'Titulaire du BAC STI "Génie Mécanique".',
          etab: 'E.BRANLY, Amiens',
        },
        {
          color: 'black',
          year: '2012',
          for: 'BTS MI',
          des: 'Niveau 2ème année de BTS "Maintenance Industriel".',
          etab: 'E.BRANLY, Amiens',
        },
        {
          color: 'black',
          year: '2016',
          for: 'Titre Professionnel PL/SPL',
          des: 'Obtention du permis C, CE et BE ainsi que l\'ABR niveau 1 et la FIMO.',
          etab: 'AFTRAL, Amiens',
        },
        {
          color: 'black',
          year: '2020',
          for: 'Titre Professionel DWWM',
          des: 'En cours de formation du titre "Développelement Web et Web Mobile".',
          etab: 'AFPA, Amiens',
        },
      ],
    }),
  }
</script>
