<template>
  <v-container>
    <v-card
      class="d-flex pa-2"
      outlined
      tile
    >
      <v-timeline>
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
            <div class="py-4">
              <h2 :class="`headline font-weight mb-4 ${year.color}--text`"  v-text="year.job"></h2>
            <div v-text="year.des"></div>
              <h1 :class="`headline font-weight-light mb-4 ${year.color}--text`" v-text="year.entre"></h1>
            </div>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: "experience",

    data: () => ({
      years: [
        {
          color: 'green',
          year: '2010-2012',
          job: 'Manoeuvre',
          des: 'Intérimaire à plein temps pendants les periodes de vacances scolaires. AMIENS.',
          entre: 'SIGNATURE'
        },
        {
          color: 'amber',
          year: '2012-2016',
          job: 'Chef d\'équipe',
          des: 'Intérimaire à plein temps et CDD pendant 10 mois. J\'ai fais de l\'implantation de parking, gestion d\'équipes etc... AMIENS, ROUEN.',
          entre: 'SIGNATURE',
        },
        {
          color: 'orange',
          year: '2017-2018',
          job: 'Opérateur sur gaufreuse',
          des: 'Intérimaire à plein temps en 3/8. J\'ai commencé en tant qu\'aide au carton pour finir en tant qu\'opérateur-régleur sur une gaufreuse industrielle dans l\'une des derniers entreprises de papier peint. MOREUIL',
          entre: 'UGEPA',
        },
        {
          color: 'cyan',
          year: '2018',
          job: 'Manutentionnaire',
          des: 'Intérimaire à plein temps dans une entreprise de logistique. MOREUIL',
          entre: 'ID LOGISTIC',
        },
        {
          color: 'pink',
          year: '2019',
          job: 'Chauffeur PL/SPL',
          des: 'Intérimaire dans une entreprise de transport dans les Hauts de France.',
          entre: 'GAUTHIER',
        },
      ],
    }),
  }
</script>
