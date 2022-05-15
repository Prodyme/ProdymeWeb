<template>
<section>
  <a-row>
    <a-col :span="14" style="margin: 9rem 1rem 2rem -6rem;">
      <ThankYouCard />
    </a-col>
    <a-col :span="6" style="margin:9rem 1rem 2rem 0rem;">
      <ProductsCart />
    </a-col>
  </a-row>
  <a-row style="display:flex">
    <a-col style="margin:0rem 6rem 3rem -6rem">
      <CreateAccount />
    </a-col>
    <a-col>
      <ServicesOrdered />
    </a-col>
  </a-row>
  </section>
</template>

<script>
import ProductsCart from "./ProductsCart.vue";
import ServicesOrdered from "./ServicesOrdered.vue";
import ThankYouCard from "./ThankYou.vue";
import CreateAccount from "./CreateAccount.vue";

export default{
    name: "FinalPage",
    components:{
        ProductsCart,
        ServicesOrdered,
        ThankYouCard,
        CreateAccount
    }
}

</script>
