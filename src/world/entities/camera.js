import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

class Camera {
  constructor(world) {
    this.world = world

    this.setup()
    this.setupControls()
  }

  setup() {
    this.entity = new THREE.PerspectiveCamera(35, this.world.sizes.aspectRatio, 0.1, 100)
    this.entity.position.set(6, 4, 8)

    this.world.scene.add(this.entity)
  }

  setupControls() {
    this.controls = new OrbitControls(this.entity, this.world.canvas)
    this.controls.enableDamping = true
  }

  update() {
    this.entity.aspect = this.world.sizes.aspectRatio
    this.entity.updateProjectionMatrix()
  }
}

export default Camera
