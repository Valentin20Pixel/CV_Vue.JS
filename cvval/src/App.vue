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
      <Home/>
    </v-content>
    <v-content class="mt-16">
      <hobbies/>
    </v-content>
    <v-content>
      <formation/>
    </v-content>
    <v-content>
      <profil/>
    </v-content>
    <v-content>
      <experience/>
    </v-content>
    <v-content>
      <foot/>
    </v-content>

          </v-card>
  </v-app>
</template>

<script>
import Home from './components/Home';
import hobbies from './components/hobbies';
import experience from './components/experience';
import profil from './components/profil';
import formation from './components/formation';
import foot from './components/foot';




export default {
  name: 'App',

  components: {
    Home,
    hobbies,
    experience,
    profil,
    formation,
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