<template>
    <v-container fluid grid-list-md >
        <v-layout row wrap>
            <v-flex md8>
                <v-card>
                    <v-toolbar card color="#02b3e4" dark>
                        <v-icon left dark>border_color</v-icon>
                        <v-toolbar-title>Story</v-toolbar-title>
                    </v-toolbar>
                    <v-layout justify-center>
                        <v-flex sx12 sm12 md12 lg12>
                            <v-form>
                                <v-card-text>
                                    <v-text-field
                                    prepend-inner-icon="account_circle"
                                    name="agent"
                                    label="Agent"
                                    required=""
                                    v-model="agent">
                                    </v-text-field>
                                    <v-text-field
                                    name="story title"
                                    label="Story Title"
                                    required=""
                                    v-model="title">
                                    </v-text-field>
                                    <v-text-field
                                    name="story description"
                                    label="Story Description"
                                    multi-line=""
                                    required=""
                                    v-model="description">
                                    </v-text-field>
                                    <v-text-field
                                    name="newscodes"
                                    label="Newscodes"
                                    required=""
                                    v-model="newscodes">
                                    </v-text-field>
                                    <v-text-field
                                    name="keywords"
                                    label="Keywords"
                                    required=""
                                    v-model="keywords">
                                    </v-text-field>
                                
                                </v-card-text>
                                
                                
                            </v-form>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
            
            
             <v-flex md4 >
                
                    <v-card >
                    <v-toolbar color="#02b3e4" dark >
                        <v-toolbar-side-icon></v-toolbar-side-icon>
                        <v-toolbar-title>Elements</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon="">
                            <v-icon>search</v-icon>
                        </v-btn>
                    </v-toolbar>
                    
                    <v-layout row >

                        <v-flex xs12 sm12 md12 >
                    
                    <v-card>
                        <h2 class="primary">{{"People:"}}</h2>
                        <v-card>
                            <h3>{{"Ada Hegerberg"}}</h3>
                            
                            <h3>{{"Martin Solveig"}}</h3>

                        </v-card>
                    </v-card>

                    <v-card>
                        <h2 class="primary" dark>{{"Events:"}}</h2>
                        <v-card>
                            <h3>{{"Ballon d'Or"}}</h3>
                           

                        </v-card>
                    </v-card>


                    <v-card>
                        <h2 class="primary">{{"Concepts:"}}</h2>
                        <v-card>
                            <h3>{{"broadcast"}}</h3>
                            
                            <h3>{{"broadcast host"}}</h3>
                            
                            <h3>{{"football"}}</h3>
                            
                            <h3>{{"scandal"}}</h3>
                            
                            <h3>{{"twerk"}}</h3>

                        </v-card>
                    </v-card>
                  
                    
                        </v-flex>
                       </v-layout>

                    
                </v-card>
                
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
	
data(){
	return{
        todos: [],
        value:[],
        agent:"Bjarte",
        title:"Ballon d'Or twerking scandal",
        description:"Scandal ensued at the Ballon d'Or when Ada Hegerberg was asked by broadcast host Martin Solveig to twerk on stage",
        newscodes:"Sport, soccer",
        keywords:"Ada Hegerberg, Martin Solveig, Ballon d'Or, broadcast, football, scandal, twerk"
	
	}
},

methods: {
    setCurrent: function() {
      this.todos = this.value;
    }
  },



// created(){
// 	{
//   // GET /someUrl
// 	this.$http.get('http://158.39.77.36:5000/named_entity/retrieve?userid=abcd1234fedc0987&named_entityiri=http://www.wikidata.org/entity/Q129118')
// 	.then(response => {
// 		console.log(response.data);
//     // get body data
//     this.todos = response.data;

//   }, response => {
//     alert ('response')
//   });
// }
// }

}
</script>
