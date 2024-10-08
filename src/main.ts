import { createApp } from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import './view/style.css'
import App from './view/App.vue'
import Router from './view/router/Router';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).use(Router).mount('#app')
