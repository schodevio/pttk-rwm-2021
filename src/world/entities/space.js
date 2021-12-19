import * as THREE from 'three'

import Box from '@/world/entities/box'

class Space {
  constructor(world) {
    this.world = world

    // Lights
    this.world.scene.add(this.ambientLight)
    this.world.scene.add(this.sunLight)

    // Objects
    this.setup()

    this.group.add(
      this.boxA,
      this.boxB
    )

    this.world.scene.add(this.group)
  }

  get ambientLight() {
    this._ambientLight||= new THREE.AmbientLight(0xffffff, 0.5)
    return this._ambientLight
  }

  get sunLight() {
    this._sunLight ||= new THREE.DirectionalLight(0xffffff, 4)
    this._sunLight.position.set(3, 3, -3)

    return this._sunLight
  }

  get group() {
    this._group ||= new THREE.Group()
    return this._group
  }

  get boxA() {
    this._boxA ||= new Box({ color: 0xff0000 })
    return this._boxA.entity
  }

  get boxB() {
    this._boxB ||= new Box({ color: 0x00ff00 })
    return this._boxB.entity
  }

  setup() {
    this.boxA.position.set(-2, 0, 0)
    this.boxB.position.set(2, 0, 0)
  }

  update() {
    this.boxA.rotation.x = this.world.time.elapsedTime
    this.boxB.rotation.y = this.world.time.elapsedTime

    this.group.rotation.z += 0.01
  }
}

export default Space
