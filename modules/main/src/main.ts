
import microApp from '@micro-zoe/micro-app'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
microApp.start({
    'disable-memory-router': true
})
app.use(router)

app.mount('#app')
