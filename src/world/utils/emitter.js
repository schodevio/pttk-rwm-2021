import mitt from 'mitt'

export default {
  _emitter: mitt(),

  off(...args) {
    this._emitter.off(...args)
  },

  on(...args) {
    this._emitter.on(...args)
  },

  emit(...args) {
    this._emitter.emit(...args)
  }
}
