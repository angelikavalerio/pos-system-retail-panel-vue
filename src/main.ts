import './shared/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './shared/router'


import { faCaretDown, faCaretUp, faBarsStaggered, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faCompass, faCircleUser, faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faCaretDown, faCaretUp, faBarsStaggered, faCompass, faCircleUser, faMoon, faSun, faEllipsisVertical)

const app = createApp(App)

app.use(router)

app.mount('#app')
