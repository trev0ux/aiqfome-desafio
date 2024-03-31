<template>
  <div class="form-check custom-form-check">
      <input
          type="checkbox"
          class="form-check-input custom-form-check__input"
          :class="dataError ? 'is-invalid' : null"
          v-bind="$attrs"
          @change="toggle">
      <label
          class="form-check-label custom-form-check__label"
          :for="$attrs.id"
          v-if="label">{{ label }}</label>
      <div
          v-if="dataError"
          class="invalid-feedback">
          {{ dataError }}
      </div>
  </div>
</template>

<script>
  export default {
      name: "CustomCheckbox",
      inheritAttrs: false,
      data() {
          return {
              dataError: this.errorMessage,
          };
      },
      props: {
          label: {
              type: String,
              required:false
          },
          errorMessage: {
              type: String,
              required:false
          },
      },
      watch: {
          errorMessage() {
              this.dataError = this.errorMessage;
          }
      },
  };
</script>

<style lang="scss" scoped>
@import "./form-check.scss";
</style>