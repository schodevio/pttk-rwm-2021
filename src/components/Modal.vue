<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div v-if="$slots.header" class="modal-header">
          <slot name="header" />
        </div>

        <div v-if="$slots.body" class="modal-body">
          <slot name="body" />
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <div class="modal-actions">
              <button class="btn" @click="$emit('close')">Close</button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
