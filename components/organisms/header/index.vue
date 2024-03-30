<template>
  <header class="header container">
    <div class="header__content">
      <span class="header__logo">
        <Icon name="AiqBranding"></Icon>
      </span>
      <section class="header__address">
        <Icon name="Pin"></Icon>
        <div>
          <p>
            entregando em
            <b>Rua Mandaguari, 198</b>
          </p>
          <Icon name="Chevron"></Icon>
        </div>
      </section>
    </div>
    <Icon name="User" class="header__user"></Icon>
  </header>
</template>

<script>
import { Icon } from "#components";

export default {
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
@import "./header";
</style>
