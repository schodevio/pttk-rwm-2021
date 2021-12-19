import * as THREE from 'three'

import emitter from '@/world/utils/emitter'

class Time {
  constructor() {
    this._clock = new THREE.Clock()

    window.requestAnimationFrame(() => this.tick())
  }

  get elapsedTime() {
    return this._clock.getElapsedTime()
  }

  tick() {
    this.emit('tick')

    window.requestAnimationFrame(() => this.tick())
  }
}

Object.assign(Time.prototype, emitter)

export default Time
