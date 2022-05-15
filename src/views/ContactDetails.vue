 <template>
  <a-row>
    <a-col :span="4" class="cleft"></a-col>
    <a-col :span="20" class="cright">
      <a-row>
      <ContactsPage />
      </a-row>
       </a-col>
    </a-row>
</template> 
<script>
import { defineComponent } from '@vue/composition-api';
import ContactsPage from '../../../ProdymeWeb/src/components/Global/ContactsPage.vue';
export default defineComponent({
    name:"ContactDetails",
    components:{
        ContactsPage
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
