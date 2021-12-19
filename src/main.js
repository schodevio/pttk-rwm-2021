// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import '@/assets/styles/main.scss'

import World from '@/world/world'

const canvas = document.querySelector('canvas')

new World({ canvas })
