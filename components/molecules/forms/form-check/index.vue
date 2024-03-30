<template>
  <div class="form-radio">
      <label
          v-if="label"
          class="form-label d-block">{{ label }}</label>
      <div
          v-for="option in options"
          :class="{'form-check-inline': inline}"
          :key="option.id"
          class="form-check">
          <input
              @input="$emit('update:modelValue', $event.target.value)"
              :checked="modelValue === option.value"
              type="radio"
              :class="{'is-invalid': errorMessage}"
              class="form-check-input"
              :disabled="option.disabled"
              :value="option.value"
              :id="option.id"
              :="$attrs">
          <label
              :for="option.id"
              class="form-check-label">{{ option.label }}</label>
      </div>
      <div v-if="errorMessage">
          <input
              type="hidden"
              class="is-invalid"
              id="errorMessage"
              name="errorMessage">
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
          modelValue: {
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