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
                                        <v-hover>
                                            <template>   <!--FROMULARIO-->
                                                <div class="text-center">
                                                    <v-dialog
                                                    v-model="dialog"
                                                    width="900"
                                                    >
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn
                                                        color="primary"
                                                        dark
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        >
                                                        Realizar Pago
                                                        </v-btn>
                                                    </template>
                                                        <v-toolbar
                                                        dark
                                                        color="primary">
                                                        <v-btn
                                                        icon
                                                        dark
                                                        color="white"
                                                        @click="dialog = false"
                                                        >
                                                        <v-icon>mdi-close</v-icon>
                                                        </v-btn>
                                                        <v-toolbar-title>Servicio</v-toolbar-title>
                                                        </v-toolbar>
                                                        <v-card>
                                                            <v-form v-model="valid"> 
                                                                <v-container>
                                                                    <v-row>
                                                                        <!-- nombre -->
                                                                        <v-col 
                                                                        cols="10"
                                                                        sm="12"
                                                                        md="12"
                                                                        >
                                                                        <v-text-field
                                                                        v-model="nombre"
                                                                        :rules="nameRules"
                                                                        :counter="30"
                                                                        label="Nombres"
                                                                        outlined
                                                                        required
                                                                        ></v-text-field>
                                                                        </v-col>
                                                                        <!-- Apellido Paterno -->
                                                                        <v-col
                                                                        cols="10"
                                                                        sm="6"
                                                                        md="6"
                                                                        >
                                                                        <v-text-field
                                                                        v-model="apellidoP"
                                                                        :rules="nameRules"
                                                                        :counter="30"
                                                                        label="Apellido Paterno"
                                                                        outlined
                                                                        required
                                                                        ></v-text-field>
                                                                        </v-col>
                                                                        <!-- Apellido Materno -->
                                                                        <v-col
                                                                        cols="10"
                                                                        sm="6"
                                                                        md="6"
                                                                        >
                                                                        <v-text-field
                                                                        v-model="apellidoM"
                                                                        :rules="nameRules"
                                                                        :counter="30"
                                                                        label="Apellido Materno "
                                                                        outlined
                                                                        required
                                                                        ></v-text-field>
                                                                        </v-col>
                                                                        <!-- numero -->
                                                                        <v-col
                                                                        cols="10"
                                                                        sm="6"
                                                                        md="6">
                                                                        <v-text-field
                                                                        v-mask="'(###) ###-####'"
                                                                        v-model="numeroTel"
                                                                        :rules="phoneRules"
                                                                        :counter="14"
                                                                        label="Número de télefono"
                                                                        outlined
                                                                        required
                                                                        ></v-text-field>
                                                                        </v-col>
                                                                        <!--RFC-->
                                                                        <v-col
                                                                        cols="10"
                                                                        sm="6"
                                                                        md="6"
                                                                        >
                                                                        <v-text-field
                                                                        v-model="rfc"
                                                                        :rules="rfcRules"
                                                                        :counter="13"
                                                                        label="Escriba su RFC"
                                                                        outlined
                                                                        required
                                                                        ></v-text-field> 
                                                                        </v-col> 
                                                                        <!-- folio -->
                                                                        <v-col
                                                                        cols="10"
                                                                        sm="6"
                                                                        md="6"
                                                                        >
                                                                        <v-text-field
                                                                        v-model="folio"
                                                                        :rules="folioRules"
                                                                        :counter="10"
                                                                        label="Folio"
                                                                        outlined
                                                                        required
                                                                        ></v-text-field> 
                                                                        </v-col> 
                                                                        <!--Servicios-->
                                                                        <v-col
                                                                        cols="10"
                                                                        sm="6"
                                                                        md="6">
                                                                        <v-autocomplete
                                                                        auto-select-first
                                                                        v-model="select"
                                                                        :items="items"
                                                                        :error-messages="errors"
                                                                        label="Seleccionar Servicio"
                                                                        data-vv-name="select"
                                                                        outlined
                                                                        required
                                                                        ></v-autocomplete>
                                                                        </v-col>
                                                                    </v-row>
                                                                </v-container>
                                                            
                                                                <template>
                                                                <div class="text-center">
                                                                    <v-dialog
                                                                    v-model="dialog2"
                                                                    width="500"
                                                                    >
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-btn
                                                                        color="primary"
                                                                        v-bind="attrs"
                                                                        v-on="on"

                                                                        >
                                                                        Enviar
                                                                        </v-btn>
                                                                    </template>

                                                                    <v-card>
                                                                        <v-card-title class="text-h5 grey lighten-2">
                                                                        PServico
                                                                        </v-card-title>
                                                                        <img src="../assets/logom2.png" alt="">

                                                                        <v-card-text>
                                                                        Folio Generado
                                                                        </v-card-text>

                                                                        <v-divider></v-divider>

                                                                        <v-card-actions>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn
                                                                            color="primary"
                                                                            text
                                                                            @click="dialog2 = false"
                                                                            onclick="printData()"
                                                                        >
                                                                            Imprimir
                                                                        </v-btn>
                                                                        </v-card-actions>
                                                                    </v-card>
                                                                    </v-dialog>
                                                                </div>
                                                                </template>
                                                            </v-form>
                                                        </v-card>
                                                    </v-dialog>
                                                </div>
                                            </template>
                                        </v-hover>
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
    
    const {ipcRenderer} = require('electron');
    const data = [
            {type: 'text', value:'Comprobante Folio', style: "font-size: 16px; color: #3CAF50"
            },
            {
            type: 'text', value:'../assets/logo.png', 
            }

    ];
    function printData(){
        ipcRenderer.send('print', JSON.stringify(data));
    }
import { text } from 'body-parser';
    import {requestPost} from '../globals/getAxios'
    export default {
        name:'caroucelMpal',
        data: () => ({
            dialog:false,
            dialog2: false,
            nombre: '',
            apellidoP: '',
            apellidoM: '',
            nameRules: [
            v => !!v || 'Este campo es requerido',
            v => (v && v.length <= 30) || 'Este campo debe de tener menos de 30 caracteristicas',
            ],
            numeroTel: '',
            phoneRules:[
            v => !!v || 'Este campo es requerido',  
            v => /^(\(?\d{3}\)?[\s-])?\d{3}[\s-]\d{4}$/.test(v) || "Este campo solo acepta números"
            ],

            rfc:'',
            rfcRules:[
            v => !!v || 'El RFC es requerido',
            v => /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z\d]{3}))?$/.test(v) || 'El rfc no existe ',
            ],
            folio:'',
            folioRules:[
            v => v.length > 0 || 'campo requerido',
            v => v.length <= 8 || 'Mayor de 8 caracteristicas'
            ],
            select: null,
            items: [
                'TRAMITE DE RENOVACION DE LICENCIAS DE CONDUCIR',
                'LICENCIA DE CONDUCIR CHOFER',
                'DIVORCIO ADMINISTRATIVO',
                'TRASLADO DE CADAVER DE UN MUNICIPIO AL EXTRANJERO',
            ],
    }),
    created(){
        },
        methods:{
            async sendData(){
                const datos={
                    nombre: this.nombre,
                    ap_Pat: this.apellidoP,
                    ap_Mat: this.apellidoM,
                    telefono: this.numeroTel,
                    rfc: this.rfc,
                    folio: this.folio,
                    id_servicio: this.select
                }
                const lpago= await requestPost("/landing/serviciosPost", datos)
                console.log(lpago)
            }
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