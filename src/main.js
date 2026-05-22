import { createApp } from 'vue'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'
import App from './App.vue'
import store from './store'
import '@/assets/sass/kodata.scss'

import router from './router'
// import { callGet, callPost } from '@/axios/axios.util.js'

const app = createApp(App)
// menu router set
app.use(router)
app.use(store)
app.use(FloatingVue)

app.mount('#app')
