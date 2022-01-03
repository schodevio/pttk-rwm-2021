import emitter from '@/world/utils/emitter'

class Sizes {
  constructor() {
    window.addEventListener('resize', () => this.emit('resize'))
  }

  get aspectRatio() {
    return this.height ? this.width / this.height : 0
  }

  get width() {
    return window.innerWidth
  }

  get height() {
    return window.innerHeight
  }

  get pixelRatio() {
    return Math.min(window.devicePixelRatio, 2)
  }
}

Object.assign(Sizes.prototype, emitter)

export default Sizes
