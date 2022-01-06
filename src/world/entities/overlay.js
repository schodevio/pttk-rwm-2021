import * as THREE from 'three'
import { gsap } from 'gsap'

class Overlay {
  constructor(options = {}) {
    this.options = options

    this.setup()
  }

  get entity() {
    this._entity ||= new THREE.Group()
    return this._entity
  }

  get geometry() {
    this._geometry ||= new THREE.PlaneBufferGeometry(2, 2, 1, 1)
    return this._geometry
  }

  get material() {
    this._material ||= new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uAlpha: { value: 1 }
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uAlpha;

        void main() {
          gl_FragColor = vec4(1.0, 1.0, 1.0, uAlpha);
        }
      `
    })

    return this._material
  }

  setup() {
    const { loader } = this.options

    const plane = new THREE.Mesh(this.geometry, this.material)
    this.entity.add(plane)

    loader.manager.onLoad = () => {
      gsap.to(this.material.uniforms.uAlpha, { duration: 2, value: 0 })
    }
  }
}

export default Overlay
