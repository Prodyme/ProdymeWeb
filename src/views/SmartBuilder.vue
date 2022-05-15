<template>
<section class="main">
    <a-row>
      <a-col :span="6">
        <Navbar></Navbar>
      </a-col>
      <a-col :span="12">
        <SmartMain></SmartMain>
      </a-col>
      <a-col :span="6">
        <Cart></Cart>
      </a-col>
    </a-row>
    <Footer></Footer>

</section>
</template>


<script>
import Navbar from "@/views/LeftNavbar.vue"
import SmartMain from "@/views/SmartMain.vue";
import Footer from "@/components/Global/Footer.vue";
import Cart from "@/views/Cart.vue";

export default({
    name: 'SmartBuilder',
    components: {
        Navbar,
        SmartMain,
        Cart,
        Footer,
    }
})
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .main{
      background-color: #F8F8F8;
    }
</style>
