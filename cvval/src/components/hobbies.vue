<template>
  <v-carousel
    height="600"
    hide-delimiter-background
    show-arrows-on-hover

  >
    <v-carousel-item
      v-for="(photo, i) in photos"
      :key="i"
      :src="photo.src"
    >


        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        <div style="position:absolute; text-align:center; top 50%;" id="loisir">{{slides[i]}}</div>
        </v-row>

    </v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        photos: [
          {
            src: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?cs=srgb&dl=accessoire-amusement-bloc-bloc-notes-275033.jpg&fm=jpg',
          },
          {
            src: `https://cdn.pixabay.com/photo/2020/01/12/17/31/middle-earth-4760561_960_720.jpg`,
          },
          {
            src: `https://images.pexels.com/photos/1973577/pexels-photo-1973577.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`,
          },
          {
            src: `https://res.cloudinary.com/simpleview/image/upload/v1481922813/clients/surfcityusa-redesign/Volleyball_1_0df826c7-1cc7-4334-be80-078425e9069c.jpg`,
          },
          {
            src: `https://images.pexels.com/photos/2662182/pexels-photo-2662182.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`,
          },
            {
            src: `https://images.pexels.com/photos/2831797/pexels-photo-2831797.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`,
          },
        ],
        slides: [
          'JEUX VIDEO',
          'LECTURE',
          'HOCKEY',
          'SPORT',
          'CANOE',
          'DESSINS',
        ],
      }
    },
  }
</script>
<style>
#loisir{
  background-color: rgba(0, 0, 0, 0.493);
  padding: 3px 8px;
}
</style>