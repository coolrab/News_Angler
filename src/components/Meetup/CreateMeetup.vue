<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h2 class="primary--text">Create a new Meetup</h2>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form >
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field 
                            name="title" 
                            label= "Title"
                            id="title"
                            required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field 
                            name="location" 
                            label= "Location"
                            id="location"
                            required></v-text-field>
                        </v-flex>
                    </v-layout> 
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field 
                            name="imageUrl" 
                            label= "Image URL"
                            id="image-url"
                            required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field 
                            name="description" 
                            label= "Description"
                            id="description"
                            multi-line
                            required></v-text-field>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>