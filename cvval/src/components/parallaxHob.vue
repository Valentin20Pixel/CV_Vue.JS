<template>
  <v-parallax
    dark
    height="200"
    src="https://images.pexels.com/photos/1426620/pexels-photo-1426620.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="subheading" id="title">Hobbies</h1>
      </v-col>
    </v-row>
  </v-parallax>
</template>
<style>
#title{
    font-family: 'Special Elite', cursive;
}
.v-parallax__image-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

</style>
