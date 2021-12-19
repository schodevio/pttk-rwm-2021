import * as THREE from 'three'

import Debug from '@/world/utils/debug'
import Sizes from '@/world/utils/sizes'
import Time from '@/world/utils/time'

import Camera from '@/world/entities/camera'
import Renderer from '@/world/entities/renderer'
import Space from '@/world/entities/space'

class World {
  constructor(options) {
    this.canvas = options.canvas

    // Sizes
    this.sizes = new Sizes()
    this.sizes.on('resize', () => this.resize())

    // Time
    this.time = new Time()
    this.time.on('tick', () => this.update())

    // Scene
    this.scene = new THREE.Scene()

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
