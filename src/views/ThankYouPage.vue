<template>
  <a-row>
    <a-col :span="4" class="cleft"></a-col>
    <a-col :span="20" class="cright">
      <FinalPage />
       </a-col>
    </a-row>
</template> 

<script>
import { defineComponent } from '@vue/composition-api'
import FinalPage from '../../../ProdymeWeb/src/components/Global/FinalPage.vue'


export default defineComponent({
    name:"ThankYouPage",
    components:{
        FinalPage
    }
})
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
