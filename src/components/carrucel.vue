<template>
    <v-container fluid>
        <v-theme-provider>
            <v-responsive>
                    <v-card height="auto" width="auto">
                        <div class="debajo">
                            <v-carousel :show-arrows="false" interval="20000" height="100%" cycle>
                                <v-carousel-item>
                                    <v-row justify="center">
                                        <video autoplay muted>
                                            <source src="https://res.cloudinary.com/dszfwrmcq/video/upload/c_scale,w_1200/v1668646055/Videos/Carrusel/INFRAESTRUCTURA_hmclns.mp4" type="video/mp4">
                                        </video>
                                    </v-row>
                                    <v-row
                                        class="fill-height frente"
                                        align="center"
                                        justify="center"
                                    >
                                        <div class="text-h2">
                                        Slide
                                        </div>
                                    </v-row>    
                                </v-carousel-item>
                                <v-carousel-item>
                                    <v-row justify="center">
                                        <video autoplay muted>
                                            <source src="https://res.cloudinary.com/dszfwrmcq/video/upload/c_scale,w_1250/v1668646053/Videos/Carrusel/POLITICA_DE_BIENESTAR_qbq0tg.mp4" type="video/mp4">
                                        </video>
                                    </v-row>
                                    <v-row
                                        class="fill-height frente"
                                        align="center"
                                        justify="center"
                                    >
                                        <div class="text-h2">
                                        Slide
                                        </div>
                                    </v-row>    
                                </v-carousel-item>
                                <v-carousel-item>
                                    <v-row justify="center">
                                        <video autoplay muted>
                                            <source src="https://res.cloudinary.com/dszfwrmcq/video/upload/c_scale,w_1250/v1668646039/Videos/Carrusel/EDUCACION_wf3cip.mp4" type="video/mp4">
                                        </video>
                                    </v-row>
                                    <v-row
                                        class="fill-height frente"
                                        align="center"
                                        justify="center"
                                    >
                                        <div class="text-h2">
                                        Slide
                                        </div>
                                    </v-row>    
                                </v-carousel-item>
                                <v-carousel-item>
                                    <v-row justify="center">
                                        <video autoplay muted>
                                            <source src="https://res.cloudinary.com/dszfwrmcq/video/upload/c_scale,w_1250/v1668646027/Videos/Carrusel/SALUD_vgdn1g.mp4" type="video/mp4">
                                        </video>
                                    </v-row>
                                    <v-row
                                        class="fill-height frente"
                                        align="center"
                                        justify="center"
                                    >
                                        <div class="text-h2">
                                        Slide
                                        </div>
                                    </v-row>    
                                </v-carousel-item>
                            </v-carousel>
                            
                            <div class="encima">
                                <section>
                                    <v-row justify="center">
                                        <v-hover><v-btn color="primary" elevation="15" href="https://www.felipecarrillopuerto.gob.mx/carrillomovil/" target="_blank">Realizar Pago Servicios</v-btn></v-hover>
                                    </v-row>
                                </section>    
                            </div>
                            
                        </div>
                        
                        
                    </v-card>
            </v-responsive>
        </v-theme-provider>
    </v-container>
</template>
<script>
    export default {
        name:'caroucelMpal',
        data(){
            return{
                model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
            }
        },
        created(){
        },
        methods:{
        },
    }
</script>
<style scoped>
    .encima
    {
        justify-items: center;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: fixed;
        top: 400px;
        z-index: 100;
        right: 600px;
        left: 600px;
}
</style>