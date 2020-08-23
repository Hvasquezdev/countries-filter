import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import './index.css'

import { router } from './router/index'

const app = createApp(App)
app.use(router)

router.isReady().then(() => app.mount('#app'))
