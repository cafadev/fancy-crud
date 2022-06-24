import { createApp } from 'vue'
import axios from 'axios'

import App from './App.vue'
// import { http } from '@/composables'
import '@mdi/font/css/materialdesignicons.css'
import './styles/main.sass'
import 'flowbite';

// import FancyCrud from './index'

axios.defaults.baseURL = 'http://localhost:9000/api/'

// Object.assign(http, { axios })

const app = createApp(App)
// app.use(FancyCrud)

app.mount('#app')