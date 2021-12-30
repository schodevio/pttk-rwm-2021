import * as THREE from 'three'

class Loader {
  constructor() {
    this.manager = new THREE.LoadingManager()
    this.progress = 0

    this.manager.onProgress = (_, loaded, total) => {
      this.progress = Math.round(loaded / total * 100)
    }
  }
}

export default Loader
