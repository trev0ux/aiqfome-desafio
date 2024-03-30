<template>
  <section class="checkout">
    <section class="checkout__order-details">
      <img src="../../../assets/images/img.png" alt="Ceviche de salmão" />
      <div class="container">
        <h1>Ceviche de salmão</h1>
        <h2>a partir de <b>R$19,90</b></h2>
        <p>salmão temperado com limão, cebola e pimenta</p>
      </div>
    </section>
    <div class="checkout__total">
      <div class="container">
        <div>
          <h3>Quantos?</h3>
          <h4>total <b>R$ 29,90</b></h4>
        </div>
        <button
          class="btn btn-secondary"
          type="button"
          v-if="order.quantity === 0"
          @click="order.quantity += 1"
        >
          adicionar
        </button>
        <quantity-control
          v-else
          id="total"
          v-bind="$attrs"
          :quantity="order.quantity"
          @update:quantity="handleFoodQuantityUpdate"
        />
      </div>
    </div>
    <fieldset>
      <div class="container">
        <legend>
          <div>
            <h3>qual o tamanho?</h3>
            <p>escolha 1</p>
          </div>
          <span>obrigatório</span>
        </legend>
        <div v-for="size in food[0].sizes" :key="size.id">
          <form-radio
            v-model="order.size"
            :error-message="validation.invalid.format"
            name="tamanho"
            :id="'size-' + size.id"
            :label="size.name"
            :options="[size]"
            inline
          />
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
        <quantity-control
          v-for="drink in drinks"
          :key="drink.id"
          :label="drink.name"
          v-bind="$attrs"
          :id="'drink-' + drink.id"
          @update:quantity="handleDrinkQuantityUpdate(drink.id, $event)"
          :quantity="drink.quantity"
        >
        </quantity-control>
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
        <div v-for="utensil in food[0].utensil" :key="utensil.id">
          <form-radio
            v-model="order.size"
            :error-message="validation.invalid.format"
            name="utensilhos"
            :id="'utensils-' + utensil.id"
            :label="utensil.name"
            :options="[utensil]"
            inline
          />
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
        <div v-for="other in food[0].others" :key="other.id">
          <form-check
            v-model="order.other"
            :error-message="validation.invalid.format"
            name="outros"
            :label="other.name"
            :id="'others-' + other.id"
            :="$attrs"
            :options="[other]"
            inline
          />
        </div>
      </div>
    </fieldset>
  </section>
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
  data() {
    return {
      food: [
        {
          sizes: [
            {
              id: 1,
              label: "médio",
              price: 19.9,
              currency: "R$",
              discount: 2.9,
            },
            {
              id: 2,
              value: "lg",
              label: "grande",
              price: 28.9,
              currency: "R$",
              discount: "",
            },
          ],
          drinks: [
            {
              id: 1,
              name: "coca-cola",
              price: 5.0,
              currency: "R$",
              quantity: 0,
            },
            {
              id: 2,
              name: "suco prats laranja",
              price: 6.0,
              currency: "R$",
              quantity: 0,
            },
            {
              id: 3,
              name: "água sem gás",
              price: 3.0,
              currency: "R$",
              quantity: 0,
            },
          ],
          utensil: [
            {
              id: 1,
              label: "hashi",
              price: 0,
              currency: "R$",
            },
            {
              id: 2,
              label: "garfo e faca descartável",
              price: 1.0,
              currency: "R$",
            },
          ],
          others: [
            {
              id: 1,
              name: "biscoito da sorte",
              price: 2.0,
              currency: "R$",
            },
            {
              id: 2,
              name: "rolinho primavera",
              price: 8.0,
              currency: "R$",
            },
          ],
        },
      ],
      drinks: [],
      order: {
        id: 0,
        quantity: 0,
        size: "",
        drinks: [
          {
            quantity: 0,
          },
        ],
        utensil: "",
        other: "",
      },
      validation: {
        invalid: {},
      },
    }; // Removed the comma here
  },
  created() {
    this.populateDrinks();
  },
  methods: {
    handleFoodQuantityUpdate(newQuantity) {
      this.order.quantity = newQuantity;
    },
    handleDrinkQuantityUpdate(id, newQuantity) {
      const drink = this.drinks.find((d) => d.id === id);
      if (drink) {
        drink.quantity = newQuantity;
      }
    },
    populateDrinks() {
      this.food[0].drinks.forEach((drink) => {
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
