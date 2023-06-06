import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
library.add(faUserSecret)
createApp(App).mount('#app')
