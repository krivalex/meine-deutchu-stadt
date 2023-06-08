import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import store from './store'
import router from '@/router'

import YmapPlugin from 'vue-yandex-maps'

import App from './App.vue'

const app = createApp(App)

const settings = {
  apiKey: '42963587-b265-4607-8248-bae0207f7b14',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1',
}

library.add(faUserSecret)

app.use(YmapPlugin, settings)
app.use(store)
app.use(router)
app.mount('#app')
