<template>
  <main>
    <section class="container">
      <img src="../assets/images/img.png" alt="Ceviche de salmão" />
      <h1>Ceviche de salmão</h1>
      <h2>a partir de <b>R$19,90</b></h2>
      <p>salmão temperado com limão, cebola e pimenta</p>
    </section>
    <div>
      <h3>Quantos?</h3>
      <button type="btn btn-secondary">adicionar</button>
    </div>
    <fieldset>
      <legend>
        <div>
          <h3>qual o tamanho?</h3>
          <p>escolha 1</p>
        </div>
        <span>obrigatório</span>
      </legend>
      <div v-for="size in food[0].sizes" :key="size.id">
        <form-radio
          v-model="form.size"
          :error-message="validation.invalid.format"
          :name="size.id"
          :options="[size]"
          inline
        />
      </div>
    </fieldset>
    <fieldset>
      <legend>
        <div>
          <h3>vai querer bebida?</h3>
          <p>escolha quantos quiser</p>
        </div>
        <span>obrigatório</span>
      </legend>
      <div v-for="size in food[0].sizes" :key="size.id">
        <form-radio
          v-model="form.size"
          :error-message="validation.invalid.format"
          :name="size.id"
          :options="[size]"
          inline
        />
      </div>
    </fieldset>
  </main>
</template>

<script>
import FormRadio from "../components/molecules/form-radio/index";
import FormCheck from "../components/molecules/form-check/index";

export default {
  layout: "default",
  name: "checkout",
  data() {
    return {
      food: [
        {
          sizes: [
            {
              id: "size-1",
              value: "md",
              label: "médio",
              price: 19.90,
              currency: "R$",
              discount: 2.90,
            },
            {
              id: "size-2",
              value: "lg",
              label: "grande",
              price: "28,90",
              currency: "R$",
              discount: "",
            },
          ],
        },
      ],
      form: {
        size: "",
      },
      validation: {
        invalid: {},
      },
    }; // Removed the comma here
  },
  components: {
    FormRadio,
    FormCheck,
  },
};
</script>

<style></style>
