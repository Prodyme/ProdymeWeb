<template>
  <div class="card" style="width: 95%;">
          <div>
            <p class="p-msg">Thank you for you Order!<br/></p>
            <p class="p-msg2">
              We have sent you a confirmation email and are now starting to
              prepare your order. As soon as your package is on its way to you,
              you will recieve a track and trace link.
            </p>
            <!-- <hr style="width: 70%; margin-top: 20; margin-left: 65" /> -->
            <a-divider />
            <a-row class="row">
              <a-col class="col1" :span="8">
                <h6 style="font-weight: bold; font-size: 14px">Order Number</h6>
              </a-col>
              <a-col class="col2" :span="8">
                <h6 style="font-weight: 100px; font-size: 14px">XXXXXXXXXX</h6>
              </a-col>
            </a-row>
            <a-row class="row">
              <a-col class="col1" :span="8">
                <h6 style="font-weight: bold; font-size: 14px">Order Total</h6>
              </a-col>
              <a-col class="col2" :span="8">
                <h6 style="font-weight: 100px; font-size: 14px">XXXXXXXXXX</h6>
              </a-col>
            </a-row>
            <a-row class="row">
              <a-col class="col1" :span="8">
                <h6 style="font-weight: bold; font-size: 14px">
                  Estimated Shipping Date
                </h6>
              </a-col>
              <a-col class="col2" :span="8">
                <h6 style="font-weight: 100px; font-size: 14px">16/08/2022</h6>
              </a-col>
            </a-row>
            <a-divider />
            <a-row>
              <a-col :span="8" class="p-msg3">
                <h5 class="p-msg3-header">Shipping Address</h5>
                <p>Rakesh Jhunjhunwala
                  101, Silver Oak society,
                  Copernicus Marg
                  New India Gate
                </p>
              </a-col>
              <a-col :span="8" class="p-msg3">
                <h5 class="p-msg3-header">Billing Address</h5>
                <p>Rakesh Jhunjhunwala
                  101, Silver Oak society,
                  Copernicus Marg
                  New India Gate
                </p>
              </a-col>
            </a-row>
          </div>
        </div>
</template>

<script>
export default {
    name:"ThankYou"
}
</script>

<style>
.card{
    background-color: white;
    /* margin-left: -41px; */
  padding: 30px 94px 20px 94px;
}
.p-msg {
  text-align: justify;
  /* padding: 20px 20px 10px 30px; */
  font: normal normal bold 20px/20px Roboto;
}
.p-msg2 {
  text-align: justify;
  font:normal normal normal 14px/17px Roboto;
  /* padding: 21px 115px 20px 20px */
}
.p-msg3{
  margin:0px 90px 10px 0px;

  text-align: left;
  font: normal normal normal 14px/17px Roboto;
}
.p-msg3-header{
  font: normal normal bold 16px/20px Roboto;
  color: #2A2A2A;
}
.row{
  text-align: justify;
}

</style>