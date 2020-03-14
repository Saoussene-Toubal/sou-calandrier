import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyB5k6He5A_KF_DvGXuUfEfhS7uAezQYOgY",
  authDomain: "saou-calendrier.firebaseapp.com",
  databaseURL: "https://saou-calendrier.firebaseio.com",
  projectId: "saou-calendrier",
  storageBucket: "saou-calendrier.appspot.com",
  messagingSenderId: "82010086233",
  appId: "1:82010086233:web:b5eb33566949b32de0ca48"
});

export const db = firebase.firestore();
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
