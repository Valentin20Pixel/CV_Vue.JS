
<template>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css" />
  <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css" />

</head>
<body>
<v-container>
  <v-divider></v-divider>
  <v-divider></v-divider>
  <v-row>


    <v-col>
  <v-card
    class="mx-auto"
    max-width="500"
    height="550"
  >
    <v-card-title>Languages</v-card-title>

    <v-card-text>
          <div>
      <div v-for="bar in bars"
      :key="bar.id"
      class="row mb-1">

        <div class="col-sm-10 pt-1">
          <b-progress :value="bar.value" :variant="bar.variant" :label="bar.id" >
            <b-progress-bar :value="bar.value">{{bar.id}}</b-progress-bar>
          </b-progress>
        </div>
      </div>
    </div>
    </v-card-text>
  </v-card>
  </v-col>
  <v-col>
  <v-card
    class="mx-auto"
    max-width="500"
    height="550"
  >
    <v-card-title>FrameWorks</v-card-title>

    <v-card-text>
          <div>
      <div v-for="bart in barts"
      :key="bart.id"
      class="row mb-1">
      <div  class = "col-sm-2" > {{bart.src}}: </div > 
        <div class="col-sm-10 pt-1">
          <b-progress :value="bart.value" :variant="bart.variant" >
            <b-progress-bar :value="bart.value">{{bart.id}}</b-progress-bar>
          </b-progress>
        </div>
      </div>
    </div>
    </v-card-text>
  </v-card>
  </v-col>
  </v-row>
  <v-divider></v-divider>
  <v-divider></v-divider>
  </v-container>
    </body>
</html>
</template>


<script>
  export default {
    data() {
      return {
        bars: [
          { id: "HMTL", variant: 'warning', value: 80, val: 80, max: 85, min: 75,
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'},
          { id: "CSS", variant: 'primary', value: 75, val: 75, max: 80, min: 70 },
          { id: "PHP", variant: 'info', value: 80, val: 80, max: 85, min: 75 },
          { id: "SQL", variant: 'danger', value: 65, val: 65, max: 70, min: 60 },
          { id: "JavaScript", variant: 'warning', value: 60, val: 60, max: 65, min: 55 },
          { id: "Vue.JS", variant: 'success', value: 30, val: 30, max: 35, min: 25 },
        ],
        barts: [
          { id: "Boostrap", variant: 'primary', value: 90, val: 90, max: 95, min: 85 },
          { id: "CodeIgniter", variant: 'info', value: 75, val: 75, max: 80, min: 70 },
          { id: "Vuetify", variant: 'success', value: 50, val: 50, max: 55, min: 45 },
          { id: "WordPress", variant: 'danger', value: 40, val: 40, max: 45, min: 35 },
          { id: "Bootstrap Vue", variant: 'warning', value: 40, val: 40, max: 45, min: 35 },
        ],
        timer: null
      }
    },
    mounted() {
      this.timer = setInterval(() => {
        this.barts.forEach(bart => (bart.value = bart.val + Math.random() * 2 - Math.random() * 2 ))

        this.bars.forEach(bar => (bar.value = bar.val + Math.random() * 2 - Math.random() * 2 ))
      }, 100)
    },
    beforeDestroy() {
      if (this.bar.val == this.bar.max){
        clearInterval(this.timer)
        this.timer = null
      } else if (this.bar.val == this.bar.min){
        clearInterval(this.timer)
        this.timer = null
      }
      if (this.bart.val == this.bart.max){
        clearInterval(this.timer)
        this.timer = null
      } else if (this.bart.val == this.bart.min){
        clearInterval(this.timer)
        this.timer = null
      }
    }
  }
</script>
<style>
#bootstrap{
  color: rgb(137, 43, 226);
}
.compe{
  height: 1000px;
}
</style>