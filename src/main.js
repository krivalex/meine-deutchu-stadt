import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import store from './store'

import App from './App.vue'

const app = createApp(App)

library.add(faUserSecret)

app.use(store)
app.mount('#app')
