<template>
  <v-app>
      <v-card>
    <v-app-bar
      id="navb"
      absolute
      dark
      shrink-on-scroll
      src="https://images.pexels.com/photos/249203/pexels-photo-249203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    >
      <template v-slot:img="{ props }">
        <div>
        <v-img
          v-bind="props"
          gradient="to top right, rgba(194, 40, 40, .3), rgba(100, 100, 100, 0.3)"
        ></v-img>

      
        </div>
      </template>
      <div class="my-auto">
        <v-btn-icone><v-img :src="require('@/assets/img/LogoVV2.png')" height="45" width="45"  id="logob" alt="Logo"></v-img></v-btn-icone>
      </div>
      <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <v-toolbar-title class="my-auto">Valentin VAIN</v-toolbar-title>
            <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <v-btn class="my-auto"><router-link to="/Home">Home</router-link></v-btn>
      <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <v-btn class="my-auto"><router-link to="/CV">CV</router-link></v-btn>
      <v-spacer></v-spacer>
      <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <v-btn-icon  class="my-auto">
          <a href="https://github.com/Valentin20Pixel"><v-icon>mdi-github</v-icon></a>
      </v-btn-icon>
      <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <v-btn-icon  class="my-auto">
        <a href="https://www.linkedin.com/in/valentin-vain-7047971a0/"><v-icon>mdi-linkedin</v-icon></a>
      </v-btn-icon>
    </v-app-bar>


    <v-main>
      <transition name="bounce" appear mode="out-in">
      <router-view></router-view>
      </transition>
    </v-main>
      <foot/>
          </v-card>
  </v-app>
</template>

<script>
import foot from '@/components/foot';


export default {
  name: 'App',

  components: {
    foot,
  },

  data: () => ({
    //
  }),
};
</script> 
<style>
#navb{
  z-index: 2;
  position: -webkit-sticky;
  position: sticky;
}
.bounce-enter-active {
  animation: bounce-in .6s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}


</style>
