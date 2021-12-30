import * as THREE from 'three'

class Ground {
  constructor(options = {}) {
    this.options = options

    this.setup()
  }

  get entity() {
    this._entity ||= new THREE.Mesh(this.geometry, this.material)

    return this._entity
  }

  get geometry() {
    const { radius = 500, segments = 500 } = this.options

    this._geometry ||= new THREE.CircleGeometry(radius, segments)

    return this._geometry
  }

  get material() {
    const { material, color = 0x656565, wireframe = false } = this.options

    return material || new THREE.MeshStandardMaterial({ color, wireframe, side: THREE.DoubleSide })
  }

  setup() {
    this.entity.rotation.x = -0.5 * Math.PI
    this.entity.receiveShadow = true
  }
}

export default Ground
