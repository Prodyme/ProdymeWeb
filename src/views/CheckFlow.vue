<!-- <template>
  <a-row>
    <a-col :span="4" class="cleft"> </a-col>
    <a-col :span="20" class="cright">
      <a-col class="route">Home<b>/ Checkout</b></a-col>
       <a-row>
        <a-col :span="14">
          <ThankYou />
        </a-col>
        <a-col :span="6" class="products-table">
          <ProductsCart />
        </a-col>
      </a-row>
      <a-row>
        <a-col>
          <CreateAccount />
        </a-col>
        <a-col style="margin:27px 0px 0px 0px ">
          <ServicesOrdered />
        </a-col>
      </a-row>
      <a-divider />
    <a-row>
      <a-col :span="6">
        <p></p>
      </a-col>
    </a-row>
    </a-col>
  </a-row>
</template> -->
  <template>
  <a-row>
    <a-col :span="4" class="cleft"></a-col>
    <a-col :span="20" class="cright">
      <ShoppingCart />
       </a-col>
    </a-row>
</template> 

<script>
// import "ant-design-vue/dist/antd.css";
// import ProductsCart from "@/components/Global/ProductsCart.vue";
// import ServicesOrdered from "@/components/Global/ServicesOrdered.vue";
// import ThankYou from "@/components/Global/ThankYou.vue";
// import CreateAccount from "@/components/Global/CreateAccount.vue";
import ShoppingCart from "../../../ProdymeWeb/src/components/Global/ShoppingCart.vue";
export default {
  name: "CheckFlow",
  components: {
    // ProductsCart,
    // ServicesOrdered,
    // ThankYou,
    // CreateAccount,
    ShoppingCart,
},
};

</script>
<style scoped>
.cleft {
  background-color: #2a2a2a;
  height:1200rem;
}
.cright {
  background-color: #F8F8F8;
  height: 1200rem;
}
</style>