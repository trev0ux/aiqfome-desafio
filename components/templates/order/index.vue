<template>
  <div class="order">
    <section class="order__shop-details container">
      <img
        src="../../../assets/images/logo-1.png"
        alt="Mitsuri Concept Imagem"
      />
      <h2>Mitsuri Concept</h2>
    </section>
    <form type="submit" @submit.prevent="submitForm">
      <section class="order__details container">
        <img src="../../../assets/images/img.png" alt="Ceviche de salmão" />
        <div class="container">
          <h1>{{ order.name }}</h1>
          <div>
            <h2>
              a partir de <b>{{ order.currency }} {{ order.price }}</b>
            </h2>
            <p>{{ order.description }}</p>
          </div>
          <div class="order__total">
            <div class="container">
              <div>
                <h3>Quantos?</h3>
                <h4 v-if="orderQuantity > 0">
                  total
                  <b
                    >{{ order.currency }}
                    {{ orderTotal(order.price) }}
                  </b>
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
        </div>
      </section>
      <hr />
      <fieldset>
        <div class="container">
          <legend>
            <div>
              <h3>qual o tamanho?</h3>
              <p>escolha 1</p>
            </div>
            <span>obrigatório</span>
          </legend>
          <div v-for="(size, index) in sizes" :key="index">
            <form-radio
              v-model="selectedSize"
              name="tamanho"
              v-bind="$attrs"
              :value="size.id"
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
            <h4 class="order__price--discount" v-if="size.discount > 0">
              de {{ order.currency }} {{ size.price.toFixed(2) }} por
              <b
                >{{ order.currency }}
                {{ applyDiscount(size.price, size.discount) }}</b
              >
            </h4>
            <h4 class="order__price" v-else>
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
            <h4 class="order__price">
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
          <div v-for="utensil in utensils" :key="utensil.id">
            <form-radio
              v-model="selectedUtensil"
              name="utensilhos"
              v-bind="$attrs"
              :value="utensil.id"
              :id="'utensils-' + utensil.id"
              :label="utensil.name"
              :options="[utensil]"
              inline
            />
            <h4 class="order__price" v-if="utensil.price > 0">
              + {{ order.currency }}
              {{ utensil.price.toFixed(2) }}
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
          <div v-for="other in others" :key="other.id">
            <form-check
              v-bind="$attrs"
              v-model="selectedOther"
              name="outros"
              :label="other.label"
              @change="updateSelectedOthers($event, other)"
              :id="'others-' + other.id"
              :value="other.id"
              inline
            />
            <h4 class="order__price" v-if="other">
              + {{ order.currency }} {{ other.price.toFixed(2) }}
            </h4>
          </div>
        </div>
      </fieldset>
      <footer class="order__submit" v-if="orderQuantity > 0">
        <div class="container">
          <button class="btn btn-primary" type="submit">ver ticket</button>
        </div>
      </footer>
    </form>
  </div>
</template>

<script>
import FormRadio from "../components/molecules/forms/form-radio/index.vue";
import FormCheck from "../components/molecules/forms/form-check/index";
import QuantityControl from "../components/molecules/quantity-control/index";

export default {
  name: "order",
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
      utensils: [],
      sizes: [],
      others: [],
      orderQuantity: 0,
      orderPrice: 29.9,
      totalPrice: 0,
      selectedSize: "",
      selectedUtensil: "",
      selectedOther: "",
      othersSelected: [],
      aggregatedDrinksObj: {},
    };
  },
  created() {
    this.populateDrinks();
    this.populateSize();
    this.populateUtensils();
    this.populateAdditionals();
  },
  methods: {
    orderTotal(price) {
      this.totalPrice = price * this.orderQuantity;
      return this.totalPrice.toFixed(2);
    },
    updateSelectedOthers(event, value) {
      if (event.target.checked) {
        this.others.forEach((other) => {
          if (other.id === parseInt(value.id)) {
            const alreadyExists = this.othersSelected.some(
              (selected) => selected.id === other.id
            );
            if (!alreadyExists) {
              this.othersSelected.push(other);
            }
          }
        });
      } else {
        const index = this.othersSelected.findIndex(
          (selected) => selected.id === value.id
        );
        if (index !== -1) {
          this.othersSelected.splice(index, 1);
        }
      }
    },
    aggregatedDrinks(updatedDrink) {
      if (!this.aggregatedDrinksObj) {
        this.aggregatedDrinksObj = {};
      }
      const { id, name, quantity, price } = updatedDrink;
      console.log(updatedDrink);
      if (quantity > 0) {
        if (this.aggregatedDrinksObj.hasOwnProperty(name)) {
          this.aggregatedDrinksObj[name].quantity += quantity;
          this.aggregatedDrinksObj[name].price =
            (this.aggregatedDrinksObj[name].quantity + 1) * price;
        } else {
          this.aggregatedDrinksObj[name] = {
            id,
            name,
            price: (quantity + 1) * price,
            quantity: quantity,
          };
        }
      } else {
        if (this.aggregatedDrinksObj.hasOwnProperty(name)) {
          delete this.aggregatedDrinksObj[name];
        }
      }
    },
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
        const updatedDrink = { ...drink };
        drink.quantity = newQuantity;
        updatedDrink.quantity = newQuantity;
        this.aggregatedDrinks(updatedDrink);
      }
    },
    populateDrinks() {
      this.order.drink.forEach((drink) => {
        this.drinks.push({
          name: drink.name,
          id: drink.id,
          price: drink.price,
          quantity: 0,
        });
      });
    },
    populateSize() {
      this.order.size.forEach((size) => {
        this.sizes.push({
          label: size.label,
          id: size.id,
          price: size.price,
          discount: size.discount,
        });
      });
    },
    populateUtensils() {
      this.order.utensil.forEach((utensil) => {
        this.utensils.push({
          id: utensil.id,
          label: utensil.label,
          price: utensil.price,
        });
      });
    },
    populateAdditionals() {
      this.order.other.forEach((other) => {
        this.others.push({
          id: other.id,
          label: other.label,
          price: other.price,
        });
      });
    },
    submitForm() {
      const filterSizeSelected = () => {
        return this.sizes.filter(
          (size) => size.id === parseInt(this.selectedSize)
        );
      };

      const filterUtensilSelected = () => {
        return this.utensils.filter(
          (utensil) => utensil.id === parseInt(this.selectedUtensil)
        );
      };

      let formData = {
        ticket: {
          name: this.order.name,
          quantity: this.orderQuantity,
          price: this.totalPrice.toFixed(2),
          description: this.order.description,
          currency: this.order.currency,
          size: filterSizeSelected(),
          drink: Object.values(this.aggregatedDrinksObj),
          utensil: filterUtensilSelected(),
          other: this.othersSelected,
        },
      };

      console.log(formData);
    },
  },
};
</script>

<style lang="scss">
@import "./order";
</style>
