<template>
  <section class="mainBg">
    <!-- Top Bar -->
    <TopBar></TopBar>
    <!-- Banner -->
    <Banner></Banner>
    <!-- Offerings -->
    <Offerings></Offerings>
    <!-- Insights / Highlights -->
    <Insights></Insights>
    <!-- Product Variants -->
    <Products></Products>
    <!-- Connect Component -->
    <Connect></Connect>
    <!-- Footer Component -->
    <FootNote></FootNote>
  </section>
</template>

<script>
// @ is an alias to /src
import Connect from "@/components/Home/Connect/Connect";
import FootNote from "@/components/Home/Footnote/FootNote";
import TopBar from "@/components/Home/TopBar/TopBar";
import Banner from "@/components/Home/Banner/Banner";
import Offerings from "@/components/Home/Offerings/Offerings";
import Insights from "@/components/Home/Insights/Insights";
import Products from "@/components/Home/Products/Products";
export default {
  name: 'Blog',
  components: {
    Products,
    Insights,
    Offerings,
    Banner,
    TopBar,
    Connect,
    FootNote
  }
}
</script>
<style lang="scss">
.mainBg {
  background-color: #f8f8f8;
}
</style>
