
import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Meetups from './components/Meetup/Meetups.vue'
import CreateMeetup from './components/Meetup/CreateMeetup.vue'
 import Profile from './components/User/Profile.vue'
  import Signin from './components/User/Signin.vue'
 import Signup from './components/User/Signup.vue'
 import Meetup from './components/Meetup/Meetup.vue'
 import Element1 from './components/Meetup/Element1.vue'
 import Element2 from './components/Meetup/Element2.vue'
 import Element3 from './components/Meetup/Element3.vue'
 import Element4 from './components/Meetup/Element4.vue'
 import Element5 from './components/Meetup/Element5.vue'
 import Element6 from './components/Meetup/Element6.vue'
 import Element7 from './components/Meetup/Element7.vue'
 import Element8 from './components/Meetup/Element8.vue'




Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
     {
       path: '/meetups',
       name: 'Meetups',
       component: Meetups
     },
      {
        path: '/meetup/new',
        name: 'CreateMeetup',
        component: CreateMeetup
      },
      {
        path: '/meetups/:id',
        name: 'Meetup',
        component: Meetup
      },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
     },
     {
       path: '/signup',
       name: 'Signup',
      component: Signup
     },
    {
      path: '/signin',
       name: 'Signin',
       component: Signin
    },
    {
      path: '/element1',
       name: 'Element1',
       component: Element1
    },
    {
      path: '/element2',
       name: 'Element2',
       component: Element2
    },
    {
      path: '/element3',
       name: 'Element3',
       component: Element3
    },
    {
      path: '/element4',
       name: 'Element4',
       component: Element4
    },
    {
      path: '/element5',
       name: 'Element5',
       component: Element5
    },
    {
      path: '/element6',
       name: 'Element6',
       component: Element6
    },
    {
      path: '/element7',
       name: 'Element7',
       component: Element7
    },
    {
      path: '/element8',
       name: 'Element8',
       component: Element8
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
