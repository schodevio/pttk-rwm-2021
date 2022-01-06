import * as THREE from 'three'

class Loader {
  constructor() {
    this.manager = new THREE.LoadingManager()
    this.progress = 0

    this.manager.onProgress = (_items, loaded, total) => {
      this.progress = Math.round(loaded / total * 100)

      if (this.progress === 100) {
        document.getElementById('canvas-loader').style.display = 'none'
      }
    }
  }
}

export default Loader
