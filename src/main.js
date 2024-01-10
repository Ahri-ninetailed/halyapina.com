/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'


import './styles.css'; // Путь к вашему файлу стилей

const app = createApp(App)

app.config.globalProperties.$headerHeightValue = '6.5';
app.config.globalProperties.$headerHeightUnit = 'vh';

registerPlugins(app)

app.mount('#app')
