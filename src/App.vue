<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h2>SERVICIOS</h2>
      </div>

      <v-spacer></v-spacer>

      
    </v-app-bar>

    <v-main>
      <carousel />
    </v-main>
  </v-app>
</template>

<script>
import carousel from "./components/carrucel.vue"
export default {
  name: 'App',

  components: {
    carousel
  },

  data: () => ({
    //
  }),
};
</script>
