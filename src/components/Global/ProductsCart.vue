<template>
  <section style="width:352px">
    <div>
      <a-row class="prod-summary-header">
        <a-col :span="4"><img src="../../../../ProdymeWeb/src/assets/shopping-cart-icon.jpg"  style="width:26px"/></a-col>
        <a-col :span="10">
          <h3 class="h3-heading">Products Ordered()</h3>
        </a-col>
        <a-col :span="6" style="display:flex;justify-content:space-evenly">
          <a style="padding: 0px 7px 0px 8px">Edit cart</a>
          <a-icon type="down" style="padding-top:4px" />
        </a-col>
      </a-row>
      </div>
    
    <div id="outer">
      <table  id="feed" class="prod-table">
        <tr>
          <th class="table-header">Plywood(3)</th>
        </tr>
        <a-divider style="margin: 0px -49px 0px 15px;width: 290px;" />
        <tr>
          <td>Img1</td>
          <td>Product-descs</td>
          <td>3</td>
          <td>21.35</td>
        </tr>
        <tr>
          <td>Img2</td>
          <td>Product-descg</td>
          <td>3</td>
          <td>21.35</td>
        </tr>
         <tr>
          <td>Img3</td>
          <td>Product-desc</td>
          <td>3</td>
          <td>21.35</td>
        </tr>
        <tr>
          <td>Img3</td>
          <td>Product-desc</td>
          <td>3</td>
          <td>21.35</td>
        </tr>
        <tr>
          <td>Img3</td>
          <td>Product-desc</td>
          <td>3</td>
          <td>21.35</td>
        </tr>
        <tr>
          <td>Img3</td>
          <td>Product-desc</td>
          <td>3</td>
          <td>21.35</td>
        </tr>
      </table>
    </div>
    <div>
    <a-row class="prod-summary-footer">
      <!-- <a-col :span="12">Days: 43</a-col>
      <a-col :span="12">SubTotal</a-col> -->
      <a-col :span="12">
        <a-row>
          <a-col style="padding: 5px;font: normal normal normal 12px/16px Roboto;">Quantity</a-col>
          <a-col style="font-size: 14px;">43</a-col>
        </a-row> 
      </a-col>
      <a-col :span="12">
        <a-row>
          <a-col  style="padding: 5px;font: normal normal normal 12px/16px Roboto;">Subtotal</a-col>
          <a-col style="font-size: 14px;">21200.8</a-col>
        </a-row> 
      </a-col>
    </a-row>
    </div>
    </section>
</template>

<script>
export default {};
</script>

<style>
.prod-table{
  width: 352px;
  /* background-color: #C1C1C129; */
  opacity: 1;
  border-top: 4px solid #C1C1C129;
  border-bottom: 4px solid #C1C1C129;
  table-layout: fixed;
  display: block;
  overflow: auto;
  height: 183px;
  /* overflow-y:hidden ; */
  /* margin-right:-30px; */

}
th, td {
  padding: 5px 20px 5px 20px;
  background-color: #FFFFFF;
}
.table-header{
  font: normal normal normal 12px/20px Roboto;
}
#feed::-webkit-scrollbar{
    display:none;
}

#outer{
    overflow:hidden;
    background-color: #FFFFFF;
}
.prod-summary-header{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 15px #C1C1C129;
    padding: 15px 5px 15px 15px;
}
.prod-summary-footer{
  background-color: white;
  padding: 15px 5px 15px 15px;
}
.h3-heading{
  font: normal normal bold 12px/20px Roboto;
  text-align: left;
  padding: 2px 8px 0px 12px;
}
.prod-summary-header{
  margin-top: 45px;
}

</style>