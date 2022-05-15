<template>
<section>
  <a-row >
    <a-col :span="12" class="prod-table-col">
      <ProdTable />
    </a-col>
    <a-col :span="8" class="services-table-col">
      <ServicesTable />
    </a-col>
  </a-row>
  <a-row style="margin-top:8rem;margin-left:-5rem;">
    <Products />
  </a-row>
  </section>
</template>

<script>
// import 'ant-design-vue/dist/antd.css'
import ProdTable from './ProdTable.vue'
import ServicesTable from './ServicesTable.vue'
// import Carousel from './Carousel.vue'
import Products from '../Home/Products/Products.vue'
export default{
  components:{
    ProdTable,
    ServicesTable,
    // Carousel
    Products
  }
}
</script>
<style scoped>
.prod-table-col{
  background-color:white;
  margin-top:13%;
  margin-left: -7%;
}
.services-table-col{
  display:flex;margin-left:-35px;
  margin-top:13%;
}
</style>
 