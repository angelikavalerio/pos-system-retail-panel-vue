import './shared/assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './shared/route'


import { faCaretDown, faCaretUp, faBarsStaggered, faEllipsisVertical, faHouse, faCartShopping, faPlus, faTableColumns, faFilter, faAngleLeft, faAnglesLeft, faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faCompass, faCircleUser, faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faCaretDown, faCaretUp, faBarsStaggered, faCompass, faCircleUser, faMoon, faSun, faEllipsisVertical, faHouse, faCartShopping, faPlus, faTableColumns, faFilter, faAngleLeft, faAnglesLeft, faAngleRight, faAnglesRight)

const app = createApp(App)

app.use(router)

app.mount('#app')
