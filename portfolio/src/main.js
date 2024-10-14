import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // GitHub icon
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCircleDown, faEnvelope, faBars, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})    

library.add(faGithub, faLinkedin, faEnvelope, faCircleDown, faBars, faArrowLeft, faArrowRight);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App)

app.use(router).use(vuetify).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
