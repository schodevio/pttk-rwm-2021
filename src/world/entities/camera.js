import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

class Camera {
  constructor(world) {
    this.world = world

    this.setup()
    this.setupControls()
  }

  setup() {
    this.entity = new THREE.PerspectiveCamera(35, this.world.sizes.aspectRatio, 0.1, 2000)
    this.entity.position.set(-198, 102, 112)

    this.world.scene.add(this.entity)
  }

  setupControls() {
    this.controls = new OrbitControls(this.entity, this.world.canvas)

    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.05

    this.controls.screenSpacePanning = false

    this.controls.minDistance = 50
    this.controls.maxDistance = 250

    this.controls.maxPolarAngle = 85 * Math.PI / 180
  }

  update() {
    this.entity.aspect = this.world.sizes.aspectRatio
    this.entity.updateProjectionMatrix()
  }
}

export default Camera
