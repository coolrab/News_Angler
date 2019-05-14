<template>
    <v-container fluid grid-list-md >
        <v-layout row wrap>
            <v-flex md8>
                <v-card>
                    <v-toolbar card color="#02b3e4" dark>
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
                                    required=""
                                    v-model="author">
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
                                <v-divider class="mt-1"></v-divider>
                                <v-card-action sm2 mdy2>
                                    <v-btn @click="resetForm"> Clear</v-btn>
                                    <v-space></v-space>
                                    <v-btn dark color="#02b3e4" @click="addItems" >Submit</v-btn>
                                </v-card-action>
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
                    
                    <div :key="index" v-for="(todo, index) in todos">
                          <!-- {{todo}}     -->
                       <v-card class="headline"  :key="index" v-for="(element, index) in todo">
                              <h4 >{{element.type}}  </h4> 
                             
                            <h5>
                                {{element.value}} 
                               
                                <a :href="element.iri||element.iris">{{element.label}}</a> 
                               </h5> 

                       
                       </v-card>
                      
                      
                    </div>
                  
                    
                        </v-flex>
                       </v-layout>

                    <v-devider class="mt-5" ></v-devider>
                        <div >
                            
            <v-btn  left flat fab="" router to="/element3" class="primary"><v-icon center >arrow_forward</v-icon></v-btn>
                    </div>
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
        formId: 0,
        author:"",
        title:"",
        description:"",
        newscodes:"",
        keywords:"",
        items:[]
	
	}
},

methods: {
    setCurrent: function() {
      this.todos = this.value;
    },

    resetForm: function(){
        this.author= "";
        this.title= "";
        this.description= "";
        this.newscodes= "";
        this.keywords = "";
        this.todos="";
    },
    addItems: function(){
        
        this.items.push({
            id: this.formId++,
            author: this.author,
            title: this.title,
            description: this.description,
            newscodes: this.newscodes,
            keywords: this.keywords,
        })
        this.author= "";
        this.title= "";
        this.description= "";
        this.newscodes= "";
        this.keywords = "";
        this.todos = this.value;
    }
  },

 created() {
 axios.get("http://158.39.77.36:5000/story/refresh2?storyid=1234abcd0987fedc&userid=abcd1234fedc0987")
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
