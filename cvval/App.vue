<template>
  <v-app>
      <v-card>
    <v-app-bar
      id="navb"
      color="white accent-4"
      elevate-on-scroll
      dense
      light
      height="70px"
    >
      <v-btn-icon><v-img :src="require('@/assets/img/LogoVV2.png')"  height="60px" width="60px" alt="Logo"></v-img></v-btn-icon>
      <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <v-toolbar-title>Valentin VAIN</v-toolbar-title>
      <v-btn><router-link to="/Home">Maison</router-link></v-btn>
      <v-spacer></v-spacer>
      <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <v-btn icon>
        <a href="https://github.com/Valentin20Pixel"><v-icon>mdi-github</v-icon></a>
      </v-btn>
      <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <v-btn icon>
        <a href="https://www.linkedin.com/in/valentin-vain-7047971a0/"><v-icon>mdi-linkedin</v-icon></a>
      </v-btn>
    </v-app-bar>
    
    <v-content>
      <router-view></router-view>
    </v-content>
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
  top: 20px;
}
</style>