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
    const gltfLoader = new GLTFLoader()

    gltfLoader.load(
      'static/models/camp/scene.gltf',
      model => {
        this.entity = model.scene

        this.entity.scale.set(1000, 1000, 1000)
        this.entity.position.set(-60, 0, -52)

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

  update() {

  }
}

Object.assign(Camp.prototype, emitter)

export default Camp
