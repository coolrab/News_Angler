<template>
    <v-container fluid grid-list-md >
        <v-layout row wrap>

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
                    
                    <div :key="index" v-for="(todo, index) in todos.facts">
                         <!-- {{todo}}  -->
                       <v-card class="headline"  :key="index" v-for="(element, index) in todo.map">
                             <h4 >{{element.key}}  {{":"}}</h4>
                             
                           <h5>
                               <!-- {{element.value}} -->
                               
                                <a :href="element.valuetype||element.valueiri">{{element.value}}</a> 
                               </h5> 

                       </v-card>
                      
                      
                    </div>
                  
                    
                        </v-flex>
                       </v-layout>

                    
                </v-card>
                
            </v-flex>


            <v-flex md8>
                <v-card>
                    <v-toolbar card color="pink" dark>
                        <v-icon left dark>border_color</v-icon>
                        <v-toolbar-title>Compose Story</v-toolbar-title>
                    </v-toolbar>
                    <v-layout justify-center>
                        <v-flex sx12 sm12 md12 lg12>
                            <v-form>
                                <v-card-text>
                                    <v-text-field
                                    prepend-inner-icon="account_circle"
                                    name="agent"
                                    label="Agent"
                                    required="">
                                    </v-text-field>
                                    <v-text-field
                                    name="story title"
                                    label="Story Title"
                                    required="">
                                    </v-text-field>
                                    <v-text-field
                                    name="story description"
                                    label="Story Description"
                                    multi-line=""
                                    required="">
                                    </v-text-field>
                                    <v-text-field
                                    name="newscodes"
                                    label="Newscodes"
                                    required="">
                                    </v-text-field>
                                    <v-text-field
                                    name="keywords"
                                    label="Keywords"
                                    required="">
                                    </v-text-field>
                                
                                </v-card-text>
                                
                            </v-form>
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
        value:[]
	
	}
},

methods: {
    setCurrent: function() {
      this.todos = this.value;
    }
  },

 created() {
 axios.get("http://158.39.77.36:5000/named_entity/retrieve?userid=abcd1234fedc0987&named_entityiri=http://www.wikidata.org/entity/Q129118")
 .then(res => this.value = res.data)
 .catch(err => alert(err));
 },

finalCall: _.debounce(function() {
        this.todos = ""
        this.value = ""
      axios.get("http://158.39.77.36:5000/named_entity/retrieve?userid=abcd1234fedc0987&named_entityiri=http://www.wikidata.org/entity/Q129118")
 .then(res => this.items = res.data)
 .catch(err => alert(err));
    }, 3500),

}
</script>
