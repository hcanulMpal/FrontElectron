<template>
  <v-app>
    <v-app-bar
      app
      color="red darken-2"
      dark
    >
      <div class="d-flex align-center">
        Servicios
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
