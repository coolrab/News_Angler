<template>
    <div>
        <v-container>
          <v-layout row wrap md8 justify-center="" mt-5>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
              <v-btn block router to="/element7" color= "#02b3e4" dark>Create a Story</v-btn>
            </v-flex>
            <!-- <v-flex xs12 sm6 class="text-xs-center text-sm-left">
              <v-btn large router to="/element2" color= "#02b3e4" dark>Explore Event-2</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
              <v-btn large router to="/element3" color= "#02b3e4" dark>Explore Event-3</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
              <v-btn large router to="/element4" color= "#02b3e4" dark>Explore Event-4</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
              <v-btn large router to="/element5" color= "#02b3e4" dark>Explore Event-5</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
              <v-btn large router to="/meetup/new" color= "#02b3e4" dark>Explore Event-6</v-btn>
            </v-flex> -->
            <!-- <v-flex xs12 sm6 class="text-xs-center text-sm-right">
              <v-btn large router to="/meetups" class="primary">Explore Event-7</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
              <v-btn large router to="/meetup/new" class="primary">Explore Event-8</v-btn>
            </v-flex> -->
          </v-layout>
          <!-- <v-layout row wrap>
            <v-flex xs12>
              
                <v-carousel>
                    <v-carousel-item
                        v-for="meetup in meetups"
                        :key="meetup.id"
                        :src="meetup.imageUrl">
                        <div class="title">
                          {{meetup.title}}
                        </div>
                    </v-carousel-item>
                  </v-carousel>
              
            </v-flex>
          </v-layout>
          <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
              <p>Join our awesome meetups!</p>
            </v-flex>
            
          </v-layout> -->
        </v-container>
    </div>
</template>
 <script>
    export default {
      data () {
        return {
          meetups: [
            {imageUrl: 'https://no.wikipedia.org/wiki/Fil:Bergen_by_night.jpg', id: '1a2b3c4d5e', title: 'Meetup in Bergen'},
            {imageUrl: 'https://pixabay.com/photos/paris-france-eiffel-tower-night-1836415/', id: '5a4b3c2d1e', title: 'Meetup in Paris'}
          ]
        }
      }
    }


//   import App from '../App'

//   export default {
//     components: {
//       App
//     }
//   }
 </script>

 <style scoped>
 .title {
   position: absolute;
   bottom: 50px;
   padding: 20px;
   font-size: 2em;
 }

 </style>
 