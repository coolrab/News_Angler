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
                          <!-- {{todo}}       -->
                        <v-card  :key="index" v-for="(element, index) in todo.map">
                           
                              <h3 class="primary" >{{element.key}}  </h3>  
                             
                             <v-card> 
                               
                                 <a :href="element.valueiri||element.valueiris">{{element.value}}</a>  
                               </v-card>  

                       </v-card>     
                     </div> 
                  
                  
                        </v-flex>
                       </v-layout>

                    
                </v-card>
                
            </v-flex>
            
            
            <v-flex md5>
                <v-card>
                    
                    <v-layout >
                       <v-img
         src="https://previews.123rf.com/images/ppbig/ppbig1504/ppbig150400059/38414973-people-connection-social-media-network.jpg"
          
          
          height="340"
          
          
         
        ></v-img>

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
        formId: 0,
        author:"",
        title:"",
        description:"",
        newscodes:"",
        keywords:"",
        items:[],
        image: './assets/network.jpg'
	
	}
},

methods: {
   

    resetForm: function(){
        this.author= "";
        this.title= "";
        this.description= "";
        this.newscodes= "";
        this.keywords = "";
        this.todos="";
    },
    
  },

 created() {
 axios.get("http://158.39.77.36:5000/named_entity/retrieve?userid=abcd1234fedc0987&named_entityiri=http://www.wikidata.org/entity/Q129118")
 .then(res => this.todos = res.data)
 .catch(err => alert(err));
 }



}
</script>
