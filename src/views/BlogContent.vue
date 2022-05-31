<template>
  <section>
    <a-row>
    <a-col :span="4" class="cleft">
      <CardColumn />
    </a-col>
    <a-col :span="20" class="cright">
      <BlogContentComponent />
    </a-col>
  </a-row>
  </section>
</template>

<script>
import BlogContentComponent from "../../../ProdymeWeb/src/components/Global/BlogContentComponent.vue"
import CardColumn from "@/components/Global/CardColumn";
export default {
  name:'JournalContent',
  components:{
    CardColumn,
    BlogContentComponent
  }

}
</script>

<style>
.cleft {
  background-color: #2a2a2a;
  height:180rem;
}
.cright {
  background-color: #F8F8F8;
  height: 10rem;
}

</style>