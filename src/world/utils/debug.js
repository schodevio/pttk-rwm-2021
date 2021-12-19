import * as DAT from 'dat.gui'

class Debug {
  constructor(world) {
    this.world = world

    if (this.isActive) {
      window.world = world

      this.ui = new DAT.GUI()
    }
  }

  get isActive() {
    return window.location.hash === '#debug'
  }
}

export default Debug
