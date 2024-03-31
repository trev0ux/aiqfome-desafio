<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <slot></slot>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
import HeaderComponent from "../components/organisms/header/index";
import FooterComponent from "../components/organisms/footer/index";

export default {
    components: {
        HeaderComponent,
        FooterComponent
    },
    setup() {
        
    },
}
</script>