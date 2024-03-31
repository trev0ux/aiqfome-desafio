<template>
  <header class="header">
    <div class="container">
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
      <div class="header__search-bar">
        <form action="/search" method="GET">
          <input class="form-control" type="text" name="query" placeholder="busque pela loja ou culinária" />
          <button type="submit"><Icon name="Search"></Icon></button>
        </form>
      </div>
      <div class="header__button">
        <button type="button" class="btn btn-light">
          <Icon name="Saved"></Icon>
          ver ticket
        </button>
        <button type="button" class="btn btn-info">
          <Icon name="User" class="header__user"></Icon>
          entrar
        </button>
      </div>
    </div>
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
