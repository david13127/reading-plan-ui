import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Primevue from 'primevue/config'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Button from 'primevue/button'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(store).use(router).use(Primevue).use(ToastService).mount('#app')
app.component('Toast', Toast).component('Button', Button)
