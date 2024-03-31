<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <checkout-template v-if="order" :order="order"></checkout-template>
  </div>
</template>

<script setup>
import CheckoutTemplate from "../../components/templates/checkout/index.vue";

const route = useRoute();
const slug = route.params.slug;

const query = gql`
          query GetOrder($id: ID!) {
            Order(id: $id) {
              id
              name
              currency
              description
              price
              size
              drink
              utensil
              other
            }
          }
`

let order = null;
const { data, error, loading } = useAsyncQuery(query, { id: slug });

try {
  if (data) {
    order = data._rawValue?.Order;
    console.log(data);
  }
} catch (error) {
  console.error('Error processing order data:', error);
}

</script>