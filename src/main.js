import { createApp } from 'vue'
import App from './App.vue'

import World from '@/world/world'

import '@/assets/styles/main.scss'

createApp(App).mount('#app')

const canvas = document.querySelector('canvas')
new World({ canvas })
