<template>

  <a-collapse accordion expandIconPosition="right" class="filter-category" >
    <template #expandIcon="{ isActive }">
      <up-outlined :rotate="isActive ? 0 : 180"  />
    </template>
    <a-collapse-panel key="1" header="Filter Category" >
   <a-checkbox @change="onChange">
          Filter option
        </a-checkbox>
    </a-collapse-panel>
    <!-- <a-collapse-panel key="2" header="Filter Category" :disabled="false" >
     <a-checkbox @change="onChange">
          Filter option
        </a-checkbox>
    </a-collapse-panel>
     <a-collapse-panel key="3" header="Filter Category" :disabled="false" >
      <a-checkbox @change="onChange">
          Filter option
        </a-checkbox>
    </a-collapse-panel>
     <a-collapse-panel key="4" header="Filter Category" :disabled="false" >
      <a-checkbox @change="onChange">
          Filter option
        </a-checkbox>
    </a-collapse-panel> -->
  </a-collapse>

</template>
<script>
import { UpOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, watch, } from '@vue/composition-api';

export default defineComponent ({
  components: {
    UpOutlined,
  },
  setup() {
    const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
    const activeKey = ref(['1']);
    watch(activeKey, val => {
      console.log(val);
    });
    return {
      text,
      activeKey,
           checked: ref(false),
    };
  },
  
});
</script>
<style lang="scss"  >

</style>