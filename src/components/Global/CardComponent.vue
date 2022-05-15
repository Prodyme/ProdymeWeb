<template>
  <a-row style="padding-left:2rem;">
    <!-- text-align: -webkit-center; -->
      <a-card class="card-zoom" hoverable>
    <img
      slot="cover"
      alt="example"
      src="../../../../ProdymeWeb/src/assets/images.png"
     
    />
    <div class="title">   
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos sed consequuntur eum saepe facere omnis. Nisi amet similique repellat.
    </div>
    <div style="color:#888888;font-size:14px;font-weight:400;font-family='Roboto';">
        Sep 15 2021
    </div>
    <div class="content">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore...
    </div>
    <a-row style="color:#FF7A34;font-family:Roboto';font-size:12px;font-weight:bold;display:flex;padding-top:20px">
    <a-col style="padding-right:7px">
      <a href="">Read More</a>
    </a-col>
    <a-col>
      <a-icon type="arrow-right" />
    </a-col>
    </a-row>
    
  </a-card>
    </a-row>
</template>

<script>
export default {
    name: "CardComponent",

}
</script>

<style scoped>
.ant-card-body{
    background-color: #F8F8F8;
}
img{
  background-color: #f8f8f8;
  height:112px;
  object-fit: contain;
}
.ant-card-bordered {
  border: none;
}
.ant-card-cover{
  background-color: #F8F8F8;
}
.title{
  text-align: left;
  font: normal normal bold 16px/26px Roboto;
  letter-spacing: 0px;
  color: #2A2A2A;
  opacity: 1;
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
}
.content{
  height: 65px;
  font: normal normal normal 14px/24px Roboto;
  color:#2a2a2a;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;

}
</style>