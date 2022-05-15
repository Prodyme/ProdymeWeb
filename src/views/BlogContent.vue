<template>
  <section>
    <a-row>
    <a-col :span="4" class="cleft">
      <Tree />
    </a-col>
    <a-col :span="20" class="cright">
      <BlogContentComponent />
    </a-col>
  </a-row>
  </section>
</template>

<script>
import Tree from "../../../ProdymeWeb/src/components/Global/Tree.vue"
import BlogContentComponent from "../../../ProdymeWeb/src/components/Global/BlogContentComponent.vue"
export default {
  name:'JournalContent',
  components:{
    Tree,
    BlogContentComponent
  }

}
</script>

<style>
.cleft {
  background-color: #2a2a2a;
  height:150rem;
}
.cright {
  background-color: #F8F8F8;
  height: 150rem;
}

</style>