<template>
    <v-container fluid>
        <v-theme-provider>
            <v-responsive>
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
                                            dense
                                            cols="2"
                                            >
                                            <vue-country-code
                                            @onSelect="onSelect"
                                            :preferredCountries="['vn', 'us', 'gb']">
                                            </vue-country-code>
                                            <v-col
                                            dense
                                            cols="10"
                                            sm="4"
                                            md="4">
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
                                            </v-col>
                                            <!--RFC-->
                                            <v-col
                                            cols="12"
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
                                            label="Seleccionar Servicio"
                                            data-vv-name="select"
                                            outlined
                                            required
                                            ></v-autocomplete>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                
                                    <v-btn
                                        @click="sendData"
                                        class="mb-2 ml-2 "
                                        type="submit"
                                        :disabled="invalid"
                                    >
                                        Enviar
                                    </v-btn>
                                </v-form>
                            </v-card>
                        </v-dialog>
                    </div>
                </template>
            </v-responsive>
        </v-theme-provider>
    </v-container>
</template>
<script>
export default {
    name:'caroucelMpal',
    valid: false,
    data: () => ({
      dialog: false,
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
            onSelect({name, iso2, dialCode}) {
       console.log(name, iso2, dialCode);
     },
        },
    }
</script>
<style scoped>
   
</style>