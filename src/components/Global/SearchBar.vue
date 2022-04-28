<template>
 <a-input-search
      class="search-bar"
      placeholder="Search for tags or keywords"
      style="width: 260px"
      @search="onSearch"
       
    />
</template>

<script>
export default {
    name:"SearchBar"

}
</script>

<style >
.search-bar .ant-input{
    border-radius: 10px;
    background-color:  #E1E1E1;
}
/* .ant-input-affix-wrapper .ant-input:not(:last-child) {
    padding-right: 30px;
    background-color: #e1e1e1;
    border-radius: 10px;
    width: 266px;
} */
/* .ant-input-search-icon{ 
position: relative;
left:80px;
 } */
</style>