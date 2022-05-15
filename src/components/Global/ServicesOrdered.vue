<template>
  <section style="width:352px">
    <div>
      <a-row  class="services-ordered-header">
        <a-col  style="  background: #E1E1E1 0% 0% no-repeat padding-box;padding: 10px 20px 10px 20px;">
          <img class="worker-icon" src="../../../../ProdymeWeb/src/assets/worker.png">
        </a-col>
        <a-col  style="padding: 10px 10px 10px 5px;background: #E1E1E1 0% 0% no-repeat padding-box;">
          <p class="h3-heading">Services Ordered(20)</p>
        </a-col>
        <a-col  style="background: #E1E1E1 0% 0% no-repeat padding-box;padding: 10px 36px 10px 5px;">
          <a style="padding: 0px 7px 0px 8px">Edit cart</a>
          <a-icon type="down" style="padding-top:4px" />
        </a-col>
      </a-row>
      </div>
    
    <div id="outer">
      <table id="feed"  class="services-table">
        <tr>
          <td>Carpenter</td>
          <td>12 days</td>
          <td>21.35</td>
        </tr>
         <tr>
          <td>Carpenter</td>
          <td>12 days</td>
          <td>21.35</td>
        </tr>
          <tr>
          <td>Carpenter</td>
          <td>12 days</td>
          <td>21.35</td>
        </tr>
         <tr>
          <td>Carpenter</td>
          <td>12 days</td>
          <td>21.35</td>
        </tr>
        <tr>
          <td>Carpenter</td>
          <td>12 days</td>
          <td>21.35</td>
        </tr>
         <tr>
          <td>Carpenter</td>
          <td>12 days</td>
          <td>21.35</td>
        </tr>
      </table>
    </div>
    <div>
    <a-row class="services-ordered-footer">
      <a-col :span="12">
        <a-row>
          <a-col style="padding: 5px;font: normal normal normal 14px/16px Roboto;">Days</a-col>
          <a-col style="padding:5px;font: normal normal bold 16px/18px Roboto;;">43</a-col>
        </a-row> 
      </a-col>
      <a-col :span="12">
        <a-row>
          <a-col style="padding: 5px;font: normal normal normal 14px/16px Roboto;">Subtotal</a-col>
          <a-col style="padding:5px;font: normal normal bold 16px/18px Roboto;">21200.8</a-col>
        </a-row> 
      </a-col>
    </a-row>
    </div>
    </section>
</template>

<script>
export default{
    name:"ServicesOrdered",
}
</script>

<style>
.services-table{
  width: 352px;
  /* background-color: #C1C1C129; */
  opacity: 1;
  border-top: 4px solid #C1C1C129;
  border-bottom: 4px solid #C1C1C129;
  table-layout: fixed;
  display: block;
  overflow: auto;
  height: 183px;
  /* margin-top: 10px; */
}

th,td{
    padding: 5px 20px 5px 20px;
  background-color: #FFFFFF;
}
.services-ordered-header{
    box-shadow: 0px 3px 15px #C1C1C129;
    display: flex;
    
}
.worker-icon{
  width: 20px;
  margin-right: 15px;
}
#feed::-webkit-scrollbar{
    display:none;
}

#outer{
    overflow:hidden;
}
.services-ordered-footer{
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 15px #C1C1C129;
padding:11px;
width: 352px;
}



</style>
