<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap >
            <v-flex md8 >
                <v-card>
    <v-toolbar
      card
      color="pink"
      dark
    >
      <v-icon>arrow_back</v-icon>
      <v-toolbar-title>Compose Story</v-toolbar-title>
      <!-- <v-spacer></v-spacer>
      <v-icon>send</v-icon> -->
    </v-toolbar>
    <v-form>
      <v-layout row>
        <v-flex xs12 sm12>
            <v-autocomplete
        v-model="selected"
        :items="['Arne']"
        chips
        label="Agent"
        full-width
        hide-details
        hide-no-data
        hide-selected
        multiple
        single-line
      ></v-autocomplete>
        </v-flex>
      </v-layout>
    <v-divider></v-divider>
      <v-layout row>
        <v-flex xs12 sm12 >
            <v-text-field
        label="Title"
        value=""
        single-line
        full-width
        hide-details
      ></v-text-field>  
            </v-flex>
        </v-layout>
      <v-divider></v-divider>
      <v-textarea
        v-model="title"
        label="Message"
        counter
        maxlength="1200"
        full-width
        single-line
      ></v-textarea>
      <v-divider></v-divider>
      <v-text-field
        label="Newscodes"
        value=""
        single-line
        full-width
        hide-details
      ></v-text-field>
      <v-divider></v-divider>
      <v-text-field
        label="Keywords"
        value=""
        single-line
        full-width
        hide-details
      ></v-text-field>
      <v-divider></v-divider>
      <v-btn @click="clear">clear</v-btn>
      <v-btn @click="setCurrent">submit</v-btn>
    
    </v-form>
  </v-card>
            </v-flex>
            <v-flex md4>
                <v-card color="pink">
                   <v-container fluid>
                       <v-layout row>

                        <v-flex xs7 sm8 md9>
                            <v-card-title primary-title>
                    <div :key="index" v-for="(todo, index) in todos.facts">
                        
                       <div class="headline" :key="index" v-for="(element, index) in todo.map">
                           
                           {{element.key }} {{":"}}
                           <div>
                               <!-- {{element.value}} -->
                               <v-icon left dark>account_circle</v-icon>
                                <a :href="element.valuetype||element.valueiri">{{element.value}}</a>
                               </div> 
                           <!-- <a :href="element.keyiri">{{element.key}}</a> -->
                       </div>
                      
                      <!-- <div><a :href="element.valuetype||element.valueiri">{{element.value}}</a></div>  -->
                    </div>
                  </v-card-title>
                    
                        </v-flex>
                       </v-layout>
                   </v-container>
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
 }

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

