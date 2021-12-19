import * as THREE from 'three'

class Box {
  constructor(options = {}) {
    this.options = options
  }

  get entity() {
    this._entity ||= new THREE.Mesh(this.geometry, this.material)

    return this._entity
  }

  get geometry() {
    const { width = 1, height = 1, depth = 1 } = this.options

    this._geometry ||= new THREE.BoxGeometry(width, height, depth)

    return this._geometry
  }

  get material() {
    const { material, color = 0x00ff00, wireframe = false } = this.options

    return material || new THREE.MeshStandardMaterial({ color, wireframe })
  }
}

export default Box
