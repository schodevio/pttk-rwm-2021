<template>
  <button class="btn fill" @click="showModal = true">about me</button>

  <transition name="modal">
    <Modal v-if="showModal" @close="showModal = false">
      <template #header>
        <h2 class="page-title text-center">PTTK RWM Activity in 2021</h2>
      </template>

      <template #body>
        <div class="content">
          <div class="author">
            <h4>Author</h4>

            <p>
              Made with
              <i class="fas fa-heart" style="color: crimson" />
              by
              <a href="https://github.com/schodevio" target="_blank">schodevio</a>
            </p>

            <p>
              <a href="https://github.com/schodevio" target="_blank" class="link link-icon">
                <i class="fab fa-github" />
              </a>

              <a href="https://www.linkedin.com/in/szymonchodzidlo" target="_blank" class="link link-icon">
                <i class="fab fa-linkedin" />
              </a>
            </p>
          </div>

          <div class="credits">
            <h4>Credits:</h4>

            <ul>
              <li>
                <a href="https://sketchfab.com/3d-models/low-poly-3d-game-scene-d4d357a35ca54aab9a78b4718c809600" target="_blank">Low Poly 3d Game Scene</a>
                by
                <a href="https://sketchfab.com/pariniojha" target="_blank">pariniojha</a>
              </li>

              <li>
                PTTK RWM Logo by
                <a href="https://www.behance.net/sforysinska" target="_blank">Sylwia</a>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </Modal>
  </transition>
</template>

<script>
import { ref } from 'vue'

import Modal from '@/components/Modal'

export default {
  name: 'App',
  components: { Modal },
  setup() {
    const showModal = ref(false)

    return {
      showModal
    }
  }
}
</script>
