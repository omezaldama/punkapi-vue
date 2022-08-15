<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="PunkAPI Logo"
          class="shrink mr-2"
          contain
          src="./../public/img/beer-logo.png"
          transition="scale-transition"
          width="40"
        />

        <span>
          <h3>Punk API</h3>
        </span>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Beers />
    </v-main>
  </v-app>
</template>

<script>
import Beers from './views/Beers'

export default {
  name: 'App',

  components: {
    Beers,
  },

  data: () => ({
    //
  }),
};
</script>
