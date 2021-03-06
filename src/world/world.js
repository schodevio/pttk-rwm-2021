import * as THREE from 'three'

import Debug from '@/world/utils/debug'
import Loader from '@/world/utils/loader'
import Sizes from '@/world/utils/sizes'
import Time from '@/world/utils/time'

import Camera from '@/world/entities/camera'
import Renderer from '@/world/entities/renderer'
import Space from '@/world/entities/space'

class World {
  constructor(options) {
    this.canvas = options.canvas

    // Loader
    this.loader = new Loader()

    // Sizes
    this.sizes = new Sizes()
    this.sizes.on('resize', () => this.resize())

    // Time
    this.time = new Time()
    this.time.on('tick', () => this.update())

    // Scene
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0xDAEFF9)
    this.scene.fog = new THREE.FogExp2(0xcccccc, 0.0016)

    // Space
    this.space = new Space(this)

    // Camera
    this.camera = new Camera(this)

    // Renderer
    this.renderer = new Renderer(this)

    // Debug
    this.debug = new Debug(this)
  }

  resize() {
    this.camera.update()
    this.renderer.update()
  }

  update() {
    this.camera.controls.update()
    this.renderer.render()

    this.space.update()
  }
}

export default World
