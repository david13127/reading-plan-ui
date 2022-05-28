import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Primevue from 'primevue/config'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Button from 'primevue/button'
import TerminalService from 'primevue/terminalservice'
import Dialog from 'primevue/dialog'
import Galleria from 'primevue/galleria'
import Tree from 'primevue/tree'
import Terminal from 'primevue/terminal'
import Menubar from 'primevue/menubar'
import Dock from 'primevue/dock'
import Tooltip from 'primevue/tooltip'
import element from 'element-plus'
import 'element-plus/dist/index.css'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(store).use(router).use(Primevue).use(ToastService)
app.use(element)
app.component('Toast', Toast).component('Button', Button).component('TerminalService', TerminalService)
  .component('Dialog', Dialog).component('Galleria', Galleria).component('Tree', Tree)
  .component('Terminal', Terminal).component('Menubar', Menubar).component('Dock', Dock)
app.directive('Tooltip', Tooltip)

app.mount('#app')
