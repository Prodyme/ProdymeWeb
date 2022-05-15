<template>
  <a-row class="create-acc-row">
        <a-col>
          <div class="create-acc">
            <p style="margin-left: 39px;font: normal normal bold 16px/19px Roboto;">
              Create your account<br />
              It helps you to....
            </p>
            <ul class="list">
              <li style="  font: normal normal normal 12px/14px Roboto; justify-content:space-around">Save your preferences for easy checkout</li>
              <li style="  font: normal normal normal 12px/14px Roboto;">Access your order history</li>
              <li style="  font: normal normal normal 12px/14px Roboto;">
                Get the data you need with exclusive newsletters, tips and
                tricks
              </li>
              <li style="  font: normal normal normal 12px/14px Roboto;">Recieve notification for promotions</li>
            </ul>
          </div>
        </a-col>
        <a-col>
          <div class="col-right1">
            <p>It only takes a few minutes</p>
            <a-button type="primary" style="background-color:#ff7a34;font: normal normal normal 12px/14px Roboto;border-radius:40px">Create Account</a-button>
          </div>
        </a-col>
        <a-col class="serv-table" :span="12">
          <ServicesOrdered />
        </a-col>
      </a-row>
</template>

<script>
export default {
    name:"CreateAccount"

}
</script>

<style>
.create-acc {
  background-color: #ff7a34;
  text-align: left;
  color: #ffffff;
  width: 460px;
  padding: 15px 0px 40px 45px;
  margin-top:10px;
}
.col-right1 {

  background-color: white;
  width: 183%;
  height: 96%;
  padding: 55px 25px 55px 35px;
  margin-top:10px;
  text-align: center;
}
li{
  padding: 5px;
}
.serv-table{
  margin-left:46px ;
}
.create-acc-row{
  display: flex;
}

</style>