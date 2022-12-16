import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import list from './list'

const Vue = createApp(App)
Vue.use(router)
Vue.use(list)
Vue.mount('#app')
