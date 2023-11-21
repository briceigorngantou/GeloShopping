import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { plugin,defaultConfig } from '@formkit/vue'

// import './assets/style.css'

/* Vue 2 and Vue 3 use the same icon importing syntax */

/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add some free styles */
import { faShopify  } from '@fortawesome/free-brands-svg-icons'




/* add each imported icon to the library */
library.add(faShopify )


createApp(App).use(store).use(plugin,defaultConfig).use(router).component('font-awesome.icon', FontAwesomeIcon).mount('#app')
