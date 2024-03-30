<template>
  <div class="quantity-input" >
    <button class="btn" type="button" aria-label="Adicionar" @click="incrementQuantity">
      <Icon name="Plus"></Icon>
    </button>
    <form-base-input
      name="Quantidade"
      id="quantidade"
      $attrs="$attrs"
      v-model="quantity"
    ></form-base-input>
    <button
      class="btn"
      type="button"
      aria-label="Remover"
      @click="decrementQuantity"
    >
      <Icon name="Less"></Icon>
    </button>
  </div>
</template>

<script>
import FormBaseInput from "../forms/form-base-input/index.vue";
import { Icon } from "#components";

export default {
  name: "quantityInput",
  data() {
    return {
        quantity: 0
    }
  },
  components: {
    Icon,
    FormBaseInput,
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
      this.emitQuantity();
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
        this.emitQuantity();
      }
    },
    emitQuantity() {
      this.$emit("updateOrder");
    },
  },
};
</script>

<style></style>
