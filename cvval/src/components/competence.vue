
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
    height="auto"
  >
    <v-card-title>Languages</v-card-title>

    <v-card-text>
          <div>
      <div v-for="bar in bars"
      :key="bar.id"
      class="row mb-1 align-content-center">
      <div  class = "col-sm-2 " ><b-img :src="bar.src" class="logos "></b-img></div > 
        <div class="col-sm-10 pt-1 align-self-center">
          <b-progress :value="bar.value" :variant="bar.variant" :label="bar.id" >
            <b-progress-bar :value="bar.value" style="background-color: orangered;">{{bar.id}}</b-progress-bar>
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
    height="auto"
  >
    <v-card-title>FrameWorks</v-card-title>

    <v-card-text>
          <div>
      <div v-for="bart in barts"
      :key="bart.id"
      class="row mb-1">
      <div  class = "col-sm-2" > <b-img :src="bart.src" class="logos"></b-img> </div > 
        <div class="col-sm-10 pt-1 align-self-center">
          <b-progress :value="bart.value" :variant="bart.variant" >
            <b-progress-bar :value="bart.value"  :id="bart.id" style="background-color: blueviolet;">{{bart.id}}</b-progress-bar>
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
          { id: "HMTL", variant: '', value: 80, val: 80,
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'},
          { id: "CSS", variant: 'primary', value: 75, val: 75,
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'},
          { id: "JavaScript", variant: 'warning', value: 60, val: 60,
          src: 'https://i.ya-webdesign.com/images/vector-javascript-14.png'},
          { id: "PHP", variant: 'info', value: 80, val: 80,
          src: 'https://static.tutoriel-video.com/wp-content/themes/tutoriel-video-v2-2/images/logo/php/logo-php-flat-retina.png'},
          { id: "SQL", variant: 'danger', value: 65, val: 65,
          src: 'https://jeydubrulle.files.wordpress.com/2015/04/sql-logo.png?w=290'},
          { id: "Vue.JS", variant: 'success', value: 30, val: 30,
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/888px-Vue.js_Logo_2.svg.png'},
        ],
        barts: [
          { id: "Boostrap", value: 85, val: 85,
          src: 'https://www.ambient-it.net/wp-content/uploads/2016/04/bootstrap-logo-175.png'},
          { id: "CodeIgniter", variant: 'danger', value: 75, val: 75,
          src: 'https://cdn1.iconfinder.com/data/icons/logos-3/304/codeigniter-icon-512.png'},
          { id: "Vuetify", variant: 'primary', value: 50, val: 50,
          src: 'https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png'},
          { id: "WordPress", variant: 'info', value: 40, val: 40,
          src: 'https://image.flaticon.com/icons/png/512/59/59137.png'},
          { id: "Bootstrap Vue", variant: 'success', value: 40, val: 40,
          src: 'https://avatars0.githubusercontent.com/u/22965283?s=280&v=4'},
        ],
        timer: null
      }
    },
    mounted() {
      this.timer = setInterval(() => {
        this.barts.forEach(bart => (bart.value = bart.val + Math.random() * 3 - Math.random() * 3 ))
        this.bars.forEach(bar => (bar.value = bar.val + Math.random() * 3 - Math.random() * 3 ))
      }, 100)
    },
    beforeDestroy() {
      clearInterval(this.timer)
      this.timer = null
    }
  }
</script>
<style>
.logos{
  max-height: 50px;
}

</style>