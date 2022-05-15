<template>
  <a-row>
    <a-col :span="4" class="cleft">
      <Tree />
    </a-col>
    <a-col :span="20" class="cright">
      <BlogComponent />
    </a-col>
  </a-row>
</template>

<script>
import BlogComponent from "../../../ProdymeWeb/src/components/Global/BlogComponent.vue";
import Tree from "../../../ProdymeWeb/src/components/Global/Tree.vue";
export default {
  components: { BlogComponent,
    Tree }
}
</script>

<style scoped>
.cleft {
  background-color: #2a2a2a;
  height:150rem;
}
.cright {
  background-color: #F8F8F8;
  height: 150rem;
}
</style>