import * as THREE from 'three'

import Camp from '@/world/entities/camp'
import Logo from '@/world/entities/logo'
import Stat from '@/world/entities/stat'

class Space {
  constructor(world) {
    this.world = world

    // Lights
    this.world.scene.add(this.ambientLight)
    this.world.scene.add(this.sunLight)

    // Objects
    this.setup()

    this.world.scene.add(this.group)

    // Debug
    // this.enableHelpers()
  }

  get ambientLight() {
    this._ambientLight||= new THREE.AmbientLight(0xffffff, 0.4)
    return this._ambientLight
  }

  get sunLight() {
    this._sunLight ||= new THREE.DirectionalLight(0xffffff, 2)
    return this._sunLight
  }

  get group() {
    this._group ||= new THREE.Group()
    return this._group
  }

  get camp() {
    this._camp ||= new Camp({ name: 'camp' })
    return this._camp
  }

  get logo() {
    this._logo ||= new Logo({
      name: 'logo',
      image: 'logo.svg',
      position: new THREE.Vector3(-5, 41, -102)
    })

    return this._logo
  }

  get tripsCount() {
    this._tripsCount ||= new Stat({
      name: 'trips',
      image: 'trips_count.svg',
      color: 0x1B62BF,
      position: new THREE.Vector3(2, 19, 46)
    })

    return this._tripsCount
  }

  get peopleCount() {
    this._peopleCount ||= new Stat({
      name: 'people',
      image: 'people_count.svg',
      color: 0xF2620F,
      position: new THREE.Vector3(22, 19, 80)
    })

    return this._peopleCount
  }

  get dogsCount() {
    this._dogsCount ||= new Stat({
      name: 'dogs',
      image: 'dogs_count.svg',
      color: 0x000000,
      position: new THREE.Vector3(64, 19, 84)
    })

    return this._dogsCount
  }

  get carDistance() {
    this._carDistance ||= new Stat({
      name: 'car',
      image: 'car_distance.svg',
      color: 0x5259D9,
      position: new THREE.Vector3(-18, 19, 66)
    })

    return this._carDistance
  }

  get kayakDistance() {
    this._kayakDistance ||= new Stat({
      name: 'kayak',
      image: 'kayak_distance.svg',
      color: 0xF23838,
      position: new THREE.Vector3(-40, 19, 38)
    })

    return this._kayakDistance
  }

  get footDistance() {
    this._footDistance ||= new Stat({
      name: 'foot',
      image: 'foot_distance.svg',
      color: 0x37A647,
      position: new THREE.Vector3(-60, 19, -2)
    })

    return this._footDistance
  }

  get peaksCount() {
    this._peaksCount ||= new Stat({
      name: 'peaks',
      image: 'peaks_count.svg',
      color: 0x666666,
      position: new THREE.Vector3(-80, 21, -52)
    })

    return this._peaksCount
  }

  setup() {
    // Sun Light
    this.sunLight.position.set(200, 250, 200)
    this.sunLight.castShadow = true

    this.sunLight.shadow.mapSize.set(1024, 1024)

    this.sunLight.shadow.camera.near = 200
    this.sunLight.shadow.camera.far = 500

    this.sunLight.shadow.camera.left = -180
    this.sunLight.shadow.camera.right = 180
    this.sunLight.shadow.camera.top = 180
    this.sunLight.shadow.camera.bottom = -180

    // Group
    this.group.position.y = -22

    this.camp.on('ready', () => {
      this.group.add(this.camp.entity)
    });

    [this.logo, this.tripsCount, this.peopleCount, this.dogsCount, this.carDistance, this.kayakDistance, this.footDistance, this.peaksCount].map(item => {
      item.on('ready', () => {
        this.group.add(item.entity)

        if (this.world.debug.isActive) {
          const folder = this.world.debug.ui.addFolder(item.options.name)

          folder
            .add(item.entity.position, 'x')
            .name('posX')
            .min(-200)
            .max(200)
            .step(1)

          folder
            .add(item.entity.position, 'y')
            .name('posY')
            .min(-200)
            .max(200)
            .step(1)

          folder
            .add(item.entity.position, 'z')
            .name('posZ')
            .min(-200)
            .max(200)
            .step(1)
        }
      })
    })
  }

  update() {
  }

  enableHelpers() {

    this.group.add(
      new THREE.DirectionalLightHelper(this.sunLight, 5),
      new THREE.CameraHelper(this.sunLight.shadow.camera),
      new THREE.AxesHelper(300)
    )
  }
}

export default Space
