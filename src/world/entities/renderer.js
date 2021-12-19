import * as THREE from 'three'

class Renderer {
  constructor(world) {
    this.world = world

    this.setup()
  }

  setup() {
    this.entity = new THREE.WebGL1Renderer({
      canvas: this.world.canvas,
      antialias: true
    })

    this.update()
  }

  update() {
    this.entity.setSize(this.world.sizes.width, this.world.sizes.height)
    this.entity.setPixelRatio(this.world.sizes.pixelRatio)
  }

  render() {
    this.entity.render(this.world.scene, this.world.camera.entity)
  }
}

export default Renderer
