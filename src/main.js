import { createApp } from 'vue'
import App from './App.vue'

import World from '@/world/world'

import '@/assets/styles/main.scss'
import '@fortawesome/fontawesome-free/js/all.min'

createApp(App).mount('#app')

const canvas = document.querySelector('canvas')
new World({ canvas })
