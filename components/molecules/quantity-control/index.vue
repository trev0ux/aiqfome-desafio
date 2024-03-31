<template>
  <div class="quantity-control">
    <slot name="less-button">
      <button
        :class="
          'btn quantity-control__button  ' +
          (size == 'md' ? 'quantity-control__button--md ' : '') +
          (quantity <= 0
            ? 'quantity-control__button--less-than-zero disabled'
            : '')
        "
        v-if="size == 'md' || (size == 'lg' && quantity > 1)"
        type="button"
        aria-label="Remover"
        @click="decrementQuantity"
      >
        <Icon name="Less"></Icon>
      </button>
      <button
        type="button"
        class="btn quantity-control__button quantity-control__button--lg"
        aria-label="Remover"
        @click="decrementQuantity"
        v-else-if="size === 'lg' && quantity == 1"
      >
        <Icon name="Trash"></Icon>
      </button>
    </slot>
    <span :id="id">
      {{ quantity }}
    </span>
    <button
      :class="
        'btn quantity-control__button  ' +
        (size == 'md' ? 'quantity-control__button--md' : '')
      "
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
      default: 0,
    },
    size: String,
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
