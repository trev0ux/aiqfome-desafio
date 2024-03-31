<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <order-template v-if="order" :order="order"></order-template>
  </div>
</template>

<script setup>
import OrderTemplate from "../../components/templates/order/index.vue";

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
const { data, error, loading } = useAsyncQuery(query, { id: "1" });

try {
  if (data) {
    order = data._rawValue?.Order;
  }
} catch (error) {
  error
  console.error('Error processing order data:', error);
}

</script>