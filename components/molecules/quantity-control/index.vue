<template>
  <div class="quantity-control">
    <button
      :class="
        'btn quantity-control__button ' +
        (quantity <= 0 ? 'quantity-control__button--less-than-zero disabled' : '')
      "
      type="button"
      aria-label="Remover"
      @click="decrementQuantity"
    >
      <Icon name="Less"></Icon>
    </button>
    <span :id="id">
      {{ quantity }}
    </span>
    <button
      class="btn quantity-control__button"
      type="button"
      aria-label="Adicionar"
      @click="incrementQuantity"
    >
      <Icon name="Plus"></Icon>
    </button>

    <label :for="id" v-if="label">
      {{ label }}
    </label>
  </div>
</template>

<script>
import { Icon } from "#components";

export default {
  name: "QuantityControl",
  props: {
    id: String,
    label: String,
    quantity: {
      type: Number,
      default: 0
    },
  },
  components: {
    Icon,
  },
  methods: {
    incrementQuantity() {
      this.$emit("update:quantity", this.quantity + 1);
    },
    decrementQuantity() {
      if (this.quantity > 0) {
        this.$emit("update:quantity", this.quantity - 1);
      }
    },
  },
};
</script>

<style lang="scss">
@import "./quantity-control.scss";
</style>
