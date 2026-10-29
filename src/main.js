/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import router from '@/router'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'


import './styles.css'; // Путь к вашему файлу стилей

const app = createApp(App)

app.config.globalProperties.$headerHeightValue = '6.5';
app.config.globalProperties.$headerHeightUnit = 'vh';

registerPlugins(app)

// Монтируем после первой навигации, иначе в mounted() у Header и WaitPls $route еще указывает на '/'
router.isReady().then(() => app.mount('#app'))
