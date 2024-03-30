<template>
  <div class="form-base-input">
    <label
      v-if="label"
      class="form-label form-base-input__label"
      :for="$attrs.id"
    >
      {{ label }}
    </label>
    <input
      ref="baseInput"
      class="form-base-input"
      :class="{ 'is-invalid ': errorMessage }"
      :value="modelValue"
      @input="updateModelValue"
      v-bind="$attrs"
    />
    <div class="invalid-feedback" v-if="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, useAttrs } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    required: false,
  },
  errorMessage: {
    type: String,
    required: false,
  },
  required: {
    type: Boolean,
    required: false,
    default: undefined,
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputType = ref("");
const baseInput = ref(null);
const attrs = useAttrs();

inputType.value = attrs.type;

const getInputRef = () => {
  return baseInput.value;
};

const incrementValue = () => {
  emit("input", null);
  emit("update:modelValue", Number(props.modelValue) + 1);
};

const decrementValue = () => {
  emit("input", null);
  emit("update:modelValue", Number(props.modelValue) - 1);
};

const updateModelValue = (event) => {
  emit("input", event);
  emit("update:modelValue", event.target.value);
};

defineExpose({
  required: props.required,
  getInputRef,
});
</script>
