import * as THREE from 'three'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

import emitter from '@/world/utils/emitter'

class Stat {
  constructor(options = {}) {
    this.options = options

    this.setup()
  }

  get entity() {
    this._entity ||= new THREE.Group()
    return this._entity
  }

  get material() {
    const { material, color = 0xFFB521, wireframe = false } = this.options

    return material || new THREE.MeshStandardMaterial({ color, wireframe, side: THREE.DoubleSide })
  }

  setup() {
    const { image, loader, position } = this.options

    const svgLoader = new SVGLoader(loader.manager)

    svgLoader.load(
      `static/images/${image}`,
      image => {
        image.paths.forEach(path => {
          const shapes = SVGLoader.createShapes(path)

          shapes.forEach(shape => {
            const geometry = new THREE.ExtrudeBufferGeometry(
              shape,
              {
                depth: 4,
                bevelEnabled: false
              }
            )

            const mesh = new THREE.Mesh(geometry, this.material)
            mesh.castShadow = true

            this.entity.add(mesh)
          })
        })

        this.entity.scale.set(0.5, 0.5, 0.5)
        this.entity.position.copy(position)

        this.entity.rotation.x = Math.PI
        this.entity.rotation.y = Math.PI / 2

        this.emit('ready')
      }
    )
  }
}

Object.assign(Stat.prototype, emitter)

export default Stat
