<template>
   <v-container>
       <v-layout row wrap>
           <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
               <v-card class="info">
                   <v-container fluid>
                       <v-layout row>
                           <v-flex xs5 sm4 md3>
                               <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    height="125px"
                    
                  ></v-img>
                           </v-flex>
                        <v-flex xs7 sm8 md9>
                            <v-card-title primary-title>
                    <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                      <div>(2014)</div>
                    </div>
                  </v-card-title>
                    <v-card-action>
                        <v-btn flat to="/meetups/1">
                            <v-icon left >arrow_forward</v-icon>
                            View Meetup</v-btn>
                    </v-card-action>
                        </v-flex>
                       </v-layout>
                   </v-container>
               </v-card>
           </v-flex>
       </v-layout>
   </v-container>
</template>