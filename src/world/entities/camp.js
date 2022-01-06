import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import emitter from '@/world/utils/emitter'

class Camp {
  constructor(options = {}) {
    this.options = options
    this.entity = new THREE.Group()

    this.setup()
  }

  setup() {
    const { loader, position } = this.options

    const gltfLoader = new GLTFLoader(loader.manager)

    gltfLoader.load(
      'static/models/camp/scene.gltf',
      model => {
        this.entity = model.scene

        this.entity.scale.set(1000, 1000, 1000)
        this.entity.position.copy(position)

        this.entity.traverse(child => {
          if (child.isMesh) {
            if (child.name.includes('ground')) {
              child.receiveShadow = true
            } else {
              child.castShadow = true
            }

          }
        })

        this.emit('ready')
      }
    )
  }

  update() {}
}

Object.assign(Camp.prototype, emitter)

export default Camp
