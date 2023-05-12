import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

//FIREBASE
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVGtg8_hRAB1S6I-AO1Rd9dGX4ZkK9Uzg",
  authDomain: "ejemploandroid-5d728.firebaseapp.com",
  databaseURL: "https://ejemploandroid-5d728-default-rtdb.firebaseio.com",
  projectId: "ejemploandroid-5d728",
  storageBucket: "ejemploandroid-5d728.appspot.com",
  messagingSenderId: "160355558532",
  appId: "1:160355558532:web:48f8809a42c3968c2bced1"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
//Firebase

const app = createApp(App)
  .use(IonicVue)
  .use(appFirebase)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});