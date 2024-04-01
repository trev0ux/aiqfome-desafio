<template>
  <div class="form-radio custom-form-radio">
      <div
          v-for="option in options"
          :class="{'form-check-inline': inline}"
          :key="option.id"
          class="form-check">
          <input
              @input="$emit('update:modelValue', $event.target.value)"
              type="radio"
              :class="{'is-invalid': errorMessage}"
              class="form-check-input custom-form-radio__input"
              :disabled="option.disabled"
              v-bind="$attrs"
              :id="id"
              >
          <label
              :for="id"
              class="form-check-label custom-form-radio__label">
                <slot name="icon">
                </slot>
              {{ option.label }}</label>
      </div>
      <div v-if="errorMessage">
          <div class="invalid-feedback">
              {{ errorMessage }}
          </div>
      </div>
  </div>
</template>

<script>
  export default {
      name: "FormRadio",
      inheritAttrs: false,
      props: {
          id: {
            type: String,
            required: true
          },
          options: {
              type: Array,
              required: true
          },
          label: {
              type: String,
              required: false
          },
          errorMessage: {
              type: String,
              required: false
          },
          inline: {
              type: Boolean,
              required: false
          }
      }
  };
</script>
  <style lang="scss">
  @import "./form-radio.scss";
  </style>