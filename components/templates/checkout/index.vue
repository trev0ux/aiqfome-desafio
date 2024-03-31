<template>
  <form type="submit" class="checkout">
    <section class="checkout__order-details">
      <img src="../../../assets/images/img.png" alt="Ceviche de salmão" />
      <div class="container">
        <h1>{{ order.name }}</h1>
        <h2>a partir de <b>{{ order.currency }} {{ order.price }}</b></h2>
        <p>{{ order.description }}</p>
      </div>
    </section>
    <div class="checkout__total">
      <div class="container">
        <div>
          <h3>Quantos?</h3>
          <h4 v-if="orderQuantity > 0">
            total
            <b
              >{{ order.currency }}
              {{ (order.price * orderQuantity).toFixed(2) }}</b
            >
          </h4>
        </div>
        <button
          class="btn btn-secondary"
          type="button"
          v-if="orderQuantity === 0"
          @click="orderQuantity += 1"
        >
          adicionar
        </button>
        <quantity-control
          v-else
          id="total"
          size="lg"
          v-bind="$attrs"
          :quantity="orderQuantity"
          @update:quantity="handleFoodQuantityUpdate"
        >
        </quantity-control>
      </div>
    </div>
    <fieldset>
      <div class="container">
        <legend>
          <div>
            <h3>qual o tamanho?</h3>
            <p>escolha 1</p>
            <span v-if="orderSize.length > 0" class="invalid-feedback">
              Por favor, selecione um tamanho
            </span>
          </div>
          <span>obrigatório</span>
        </legend>
        <div v-for="(size, index) in order.size" :key="index">
          <form-radio
            v-model="orderSize"
            :error-message="validation.invalid.format"
            name="tamanho"
            v-bind="$attrs"
            required
            :id="'size-' + index"
            :label="size.name"
            :options="[size]"
            inline
          >
            <template #icon v-if="size.discount > 0">
              <Icon name="Money"></Icon>
            </template>
          </form-radio>
          <h4 class="checkout__price--discount" v-if="size.discount > 0">
            de {{ order.currency }} {{ size.price.toFixed(2) }} por
            <b
              >{{ order.currency }}
              {{ applyDiscount(size.price, size.discount) }}</b
            >
          </h4>
          <h4 class="checkout__price" v-else>
            {{ order.currency }} {{ size.price.toFixed(2) }}
          </h4>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <div class="container">
        <legend>
          <div>
            <h3>vai querer bebida?</h3>
            <p>escolha quantos quiser</p>
          </div>
        </legend>
        <div v-for="drink in drinks" :key="drink.id">
          <quantity-control
            :label="drink.name"
            v-bind="$attrs"
            size="md"
            :id="'drink-' + drink.id"
            @update:quantity="handleDrinkQuantityUpdate(drink.id, $event)"
            :quantity="drink.quantity"
          />
          <h4 class="checkout__price">
            + {{ order.currency }} {{ drink.price.toFixed(2) }}
          </h4>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <div class="container">
        <legend>
          <div>
            <h3>precisa de talher?</h3>
            <p>escolha quantos quiser</p>
          </div>
        </legend>
        <div v-for="utensil in order.utensil" :key="utensil.id">
          <form-radio
            v-model="orderUtensil"
            :error-message="validation.invalid.format"
            name="utensilhos"
            :id="'utensils-' + utensil.id"
            :label="utensil.name"
            :options="[utensil]"
            inline
          />
          <h4 class="checkout__price">
            + {{ order.currency }} {{ utensil.price.toFixed(2) }}
          </h4>
        </div>
      </div>
    </fieldset>

    <fieldset>
      <div class="container">
        <legend>
          <div>
            <h3>mais alguma coisa?</h3>
            <p>escolha até 2</p>
          </div>
        </legend>
        <div v-for="other in order.other" :key="other.id">
          <form-check
            v-model="orderAdditionals"
            :error-message="validation.invalid.format"
            name="outros"
            :label="other.name"
            :id="'others-' + other.id"
            :="$attrs"
            :options="[other]"
            inline
          />
          <h4 class="checkout__price">
            + {{ order.currency }} {{ other.price.toFixed(2) }}
          </h4>
        </div>
      </div>
    </fieldset>
    <footer class="checkout__submit" v-if="orderQuantity > 0">
      <div class="container">
        <button class="btn btn-primary" type="submit">ver ticket</button>
      </div>
    </footer>
  </form>
</template>

<script>
import FormRadio from "../components/molecules/forms/form-radio/index.vue";
import FormCheck from "../components/molecules/forms/form-check/index";
import QuantityControl from "../components/molecules/quantity-control/index";

export default {
  name: "checkout",
  components: {
    FormRadio,
    FormCheck,
    QuantityControl,
  },
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      drinks: [],
      orderQuantity: 0,
      orderPrice: 29.9,
      orderSize: [],
      orderUtensil: "",
      orderAdditionals: "",
      validation: {
        invalid: {},
      },
    };
  },
  created() {
    this.populateDrinks();
  },
  methods: {
    applyDiscount(price, discount) {
      const count = price - discount;
      return count.toFixed(2);
    },
    handleFoodQuantityUpdate(newQuantity) {
      this.orderQuantity = newQuantity;
    },
    handleDrinkQuantityUpdate(id, newQuantity) {
      const drink = this.drinks.find((d) => d.id === id);
      if (drink) {
        drink.quantity = newQuantity;
        console.log(drink)
      }
    },
    populateDrinks() {
      this.order.drink.forEach((drink) => {
        this.drinks.push({
          name: drink.name,
          id: drink.id,
          price: drink.price,
          currency: drink.currency,
          quantity: 0,
        });
      });
    },
  },
};
</script>

<style lang="scss">
@import "./checkout";
</style>
