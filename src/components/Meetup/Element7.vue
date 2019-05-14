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
                                    value="Rabbi"
                    
                                    required=""
                                    v-model="author">
                                    </v-text-field>
                                    <v-text-field
                                    name="story title"
                                    label="Story Title"
                                    required=""
                                    v-model="title"
                                    @click="setAfter">
                                    </v-text-field>
                                    <v-text-field
                                    name="story description"
                                    label="Story Description"
                                    multi-line=""
                                    required=""
                                    v-model="description"
                                    @keyup.enter.stop="setCurrent"
                                    @keyup.esc.stop="editKeywordsAgain">
                                    </v-text-field>
                                    <v-text-field
                                    name="newscodes"
                                    label="Newscodes"
                                    required=""
                                    v-model="newscodes"
                                    @keyup.esc.stop="setAfterTime"
                                    @click="populateNewscodes">
                                    </v-text-field>
                                    <v-text-field
                                    name="keywords"
                                    label="Keywords"
                                    required=""
                                    v-model="keywords"
                                    @click.once="populateKeywords"
                                    @keyup.enter.stop="setNext"
                                    
                                    >
                                    </v-text-field>
                                
                                </v-card-text>
                                <v-divider class="mt-1"></v-divider>
                                <v-card-action sm2 >
                                    <v-btn @click="resetForm"> Clear</v-btn>
                                    <v-space></v-space>
                                    <v-btn dark color="#02b3e4" @keyup.enter="addItems" >Submit</v-btn>
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
                    
                     <!-- This section is working with the API-2 and 3 -->

                     <!-- {{todos. named_entitites}} -->

                     <v-cards v-for="val in todos. named_entitites">
                         
                         <h3 class="primary" >{{val.type}} </h3>
                          <v-card><a :href="val.iri" target="_blank">{{val.label}}</a></v-card>
                         
                     </v-cards>
                       
                        <h3 class="primary" v-if="seen" >Concepts </h3>
                     <v-cards v-for="con in todos.concepts">
                         
                        <v-card><a :href="con.iri" target="_blank">{{con.label}}</a></v-card>
                         </v-cards>


                         
                        
                     <v-cards  v-if="show" >
                         <div v-for="date in todos.dates_times">
                            <h3 class="primary"  >Date and Time </h3>
                        
                        {{date.value}}
                         </div>
                       
                         </v-cards>


                     
                     
                     
                     <v-card v-if="visible" router to="/element8" target="_blank">
                         <h3 class="primary">Related in-house </h3>
                         <v-card color="pink"> <h4>
                             {{value.name }} {{":"}}
                             {{value.title}}
                             </h4> </v-card>
                         
                     </v-card>
                            

                    <v-cards v-for="val in value.named_entitites">
                         
                         <h3 class="primary" >{{val.type}} </h3>
                          <v-card router to="/element5" target="_blank"><a  target="_blank">{{val.label}}</a></v-card>
                         
                     </v-cards>

                     <h3 class="primary" v-if="pop" >Concepts </h3>
                     <v-cards v-for="con in value.concepts">
                         
                        <v-card><a :href="con.iri" target="_blank">{{con.label}}</a></v-card>
                         </v-cards>

                        

                        <v-card v-if="change" router to="/element8" target="_blank">
                         <h3 class="primary">Related in-house </h3>
                         <v-card > <h4>
                             {{value.name }} {{":"}}
                             {{value.title}}
                             </h4> </v-card>
                         
                     </v-card>

                        
                        
                        
                        



                    


                 

                    <!-- This section is working with the API-5 -->

                    <div :key="index" v-for="(todo, index) in items.facts"> 
                          <!-- {{todo}}       -->
                        <v-card class="headline"  :key="index" v-for="(element, index) in todo.map">
                           
                              <h4 class="primary" >{{element.key}}  </h4>  
                             
                             <h5> 
                               
                                 <a :href="element.valueiri||element.valueiris" target="_blank">{{element.value}}</a>  
                               </h5>  

                       </v-card>     
                     </div> 
                  
                  <div :key="index" v-for="(social, index) in items">
                         <h2 class="primary" >{{social.title}}</h2>  
                          
                        <v-card class="headline"  :key="index" v-for="(elem, index) in social.nodes">
                           <h5>
                                <a :href="elem.nodeiri||elem.nodeiris" target="_blank">{{elem.label}}</a> 
                               </h5>  
                            
                       </v-card> 

                       <v-card class="headline"  :key="index" v-for="(elem, index) in social.edges">
                             <h5>
                                <a :href="elem.edgeiri||elem.edgeiris" target="_blank">{{elem.from + " => "}}{{elem.to}}</a> 
                               </h5>  
                            
                       </v-card> 
                    </div>
                  
                    
                        </v-flex>
                       </v-layout>
                    <v-devider class="mt-5" ></v-devider>
                        <div >
                            
            <!-- <v-btn  left flat fab="" router to="/element2" class="primary"><v-icon center >arrow_forward</v-icon></v-btn> -->
                    </div>
                    
                </v-card>
                
            </v-flex>

            

        </v-layout>
    </v-container>
</template>

<script>
import axios from "axios";
import lodash from "lodash";
import { readlink } from 'fs';
export default {
	
data(){
	return{
        todos: [],
        value:[],
        items:[],
        formId: 0,
        author:"Arne",
        title:"",
        description:"",
        newscodes:"",
        keywords:"",
        show: false,
        seen:false,
        label:"",
        visible:false,
        pop:false,
        change: false
        
        
        
        

	
	}
},

watch: {
     keywords: function() {
        //  this.value = ""
         if (this.keywords.length >1300 && this.keywords.length <1800 ){
             this.setAfter()
         }
         else if(this.keywords.length >2000) {
            this.finalCall() 
         }
         
        },

        
        

        //  keywords: function(){
        //      if (this.keywords = "Ada Hegerberg, Ballon d'Or Féminin, football, woman football")
        //      this.setNext()
        //  },



    description: function(){
    //    this.todos = "" 
       if (this.keywords.length >100){
             this.setCurrent()
         }
    }
},

methods: {
     setCurrent: _.debounce(function() {
         this.value = ""
         this.items = ""
       axios.get("http://158.39.77.36:5000/story/refresh1?storyid=1234abcd0987fedc&userid=abcd1234fedc0987")
  .then(res => this.todos = res.data)
  .catch(err => alert(err));
  this.seen=true
//   this.newscodes = 'football woman'
     }, 2000), 
     



 setNext: _.debounce(function() {
        this.value = ""
        this.items = ""
      axios.get("http://158.39.77.36:5000/story/refresh2?storyid=1234abcd0987fedc&userid=abcd1234fedc0987")
 .then(res => this.todos = res.data)
 .catch(err => alert(err));
 this.keywords = "Ada Hegerberg, Ballon d'Or Féminin, football, woman football,"
 this.newscodes = 'Sports, football '
    }, 2000), 

    setAfter: _.debounce(function() {
        this.todos = ""
        this.items = ""
      axios.get("http://158.39.77.36:5000/story/retrieve?storyid=fedc6543dcba4321&userid=abcd1234fedc0987")
 .then(res => this.value = res.data)
 .catch(err => alert(err));
  this.visible= true
  this.show = false
  this.pop= true
  this.seen = false
this.keywords = "Ada Hegerberg, Paris, Ballon d'Or Féminin, football, woman football, prestige, 2018-12-04"
 this.newscodes = 'Sports, football,'
    }, 4500),


     setAfterTime: _.debounce(function() {
        this.todos = ""
        this.items = ""
      axios.get("http://158.39.77.36:5000/story/retrieve?storyid=fedc6543dcba4321&userid=abcd1234fedc0987")
 .then(res => this.value = res.data)
 .catch(err => alert(err));
  this.visible= false
  this.show = false
  this.pop= true
  this.change=true
this.keywords = "Ada Hegerberg, Paris, Ballon d'Or Féminin, football, woman football, prestige, 2018-12-04"
 this.newscodes = 'Sports, football,'
    }, 4500),


    finalCall: _.debounce(function() {
        this.todos = ""
        this.value = ""
      axios.get("http://158.39.77.36:5000/named_entity/retrieve?userid=abcd1234fedc0987&named_entityiri=http://www.wikidata.org/entity/Q129118")
 .then(res => this.items = res.data)
 .catch(err => alert(err));
    }, 3500),


    
    
    
    populateNewscodes: _.debounce(function(){
        this.newscodes = 'Sports, football'
        
    }, 1000), 

populateKeywords: _.debounce(function(){
        this.keywords = "Ada Hegerberg, Ballon d'or, football, woman"
    }, 1000),

    editKeywords: _.debounce(function(){
        this.keywords = "Ada Hegerberg, Ballon d'Or Féminin, football, woman football"
    }, 1000),

    editKeywordsAgain: _.debounce(function(){
        this.show= true
        this.keywords = "Ada Hegerberg, Paris, Ballon d'Or Féminin, football, woman football, prestige"
 this.newscodes = 'Sports, football'
    }, 1000),

    editKeywordsAgain: _.debounce(function() {
        this.value = ""
        this.items = ""
      axios.get("http://158.39.77.36:5000/story/refresh2?storyid=1234abcd0987fedc&userid=abcd1234fedc0987")
 .then(res => this.todos = res.data)
 .catch(err => alert(err));
 this.show= true
this.keywords = "Ada Hegerberg, Paris, Ballon d'Or Féminin, football, woman football, prestige, 2018-12-04"
 this.newscodes = 'Sports, football, '
    }, 2000), 








    resetForm: function(){
        this.author= "";
        this.title= "";
        this.description= "";
        this.newscodes= "";
        this.keywords = "";
        this.todos="";
        this.value ="";
        this.items = "";
        this.show = false;
        this.seen = false;
        this.visible= false;
    },
    addItems: function(){
        
        // this.items.push({
        //     id: this.formId++,
        //     author: this.author,
        //     title: this.title,
        //     description: this.description,
        //     newscodes: this.newscodes,
        //     keywords: this.keywords,
        // })
        // this.author= "";
        // this.title= "";
        // this.description= "";
        // this.newscodes= "";
        // this.keywords = "";


        
        // this.todos = this.value;
        
    },


  },

 
// created() {
//  axios.get("http://158.39.77.36:5000/story/refresh1?storyid=1234abcd0987fedc&userid=abcd1234fedc0987")
//  .then(res => this.value = res.data)
//  .catch(err => alert(err));
//  },

  
//   created() {
//   axios.get("http://158.39.77.36:5000/story/refresh2?storyid=1234abcd0987fedc&userid=abcd1234fedc0987")
//   .then(res => this.value1 = res.data)
//   .catch(err => alert(err));
//   },

//   created() {
//  axios.get("http://158.39.77.36:5000/story/refresh2?storyid=1234abcd0987fedc&userid=abcd1234fedc0987")
//  .then(res => this.value2 = res.data)
//  .catch(err => alert(err));
 //}

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
