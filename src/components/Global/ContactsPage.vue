<template>
  <a-row :gutter="32">
    <a-col :span="14" class="contact-details-col">
      <a-row style="display: flex; margin: 30px 0px 10px 83p">
        <a-col style="padding: 7px; color: #ff7a34">
          <a-icon @click="gotoPrevious('CheckFlow')" type="arrow-left" />
        </a-col>
        <a-col>
          <h4 style="color: #ff7a34; padding: 5px 0px 0px 5px">
            Back to Shopping Cart
          </h4>
        </a-col>
      </a-row>
      <a-row style="display: flex">
        <a-col :span="20">
          <p
            style="
              text-align: left;
              padding: 20px 30px 20px 93px;
              font: normal normal bold 16px/20px Roboto;
            "
          >
            Shipping/Billing Info
          </p>
        </a-col>
        <a-col style="margin-top: 18px; margin-left: 37px">
          <a>Edit</a>
        </a-col>
      </a-row>

      <a-row style="padding: 15px 0px 15px 0px">
        <a-col>
          <p style="padding: 0px 15px 0px 93px">First Name*</p>
          <a-input class="input" placeholder="F-Name" />
        </a-col>
        <a-col>
          <p style="padding-left: 29rem">Last Name*</p>
          <a-input class="input" placeholder="L-Name" />
        </a-col>
      </a-row>
      <!-- //// -->
      <a-row style="padding: 15px 0px 15px 0px">
        <a-col>
          <p style="padding-left: 93px">Company Name</p>
          <a-input class="input" placeholder="Company Name" />
        </a-col>
        <a-col>
          <p style="padding-left: 29rem">P.O Number</p>
          <a-input class="input" placeholder="XXXXXXXXXX" />
        </a-col>
      </a-row>
      <!-- //// -->
      <a-row style="padding: 15px 0px 15px 0px">
        <a-col>
          <p style="padding-left: 93px">GST Number</p>
          <a-input class="input" placeholder="XXXXXXXXXX" />
        </a-col>
        <a-col>
          <p style="padding-left: 29rem">Email*</p>
          <a-input class="input" placeholder="E-mail" />
        </a-col>
      </a-row>
      <!-- //// -->
      <a-row style="padding: 15px 0px 15px 0px">
        <a-col>
          <p style="padding-left: 93px">Phone Number*</p>
          <a-input class="input" placeholder="XXXXXXXXXX" />
        </a-col>
        <a-col>
          <p style="padding-left: 29rem">Enter OTP</p>
          <a-row :gutter="16" style="display: flex">
            <a-col>
              <a-input style="width: 34px" class="input" placeholder="X" />
            </a-col>
            <a-col>
              <a-input style="width: 34px" class="input-box" placeholder="X" />
            </a-col>
            <a-col>
              <a-input style="width: 34px" class="input-box" placeholder="X" />
            </a-col>
            <a-col>
              <a-input style="width: 34px" class="input-box" placeholder="X" />
            </a-col>
            <a-col>
              <a-button class="verify-btn" type="primary">Verify</a-button>
            </a-col>
          </a-row>
          <a-row style="padding: 15px 0px 15px 0px">
            <a-col> </a-col>
            <a-col style="padding-left: 29rem">
              <p
                style="
                  text-align: left;
                  font: normal normal normal 12px/14px Roboto;
                  letter-spacing: 0px;
                  color: #888888;
                "
              >
                Resend OTP in 00:58
              </p>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
      <a-divider style="margin: 0px; margin-top: -27px"></a-divider>
      <a-row>
        <a-col>
          <p
            style="
              text-align: left;
              padding: 20px 30px 20px 93px;
              font: normal normal bold 16px/20px Roboto;
              color: #2a2a2a;
            "
          >
            Shipping Address
          </p>
        </a-col>
      </a-row>
      <a-row>
        <a-col>
          <a-radio
            style="
              padding: 20px 30px 20px 93px;
              font: normal normal normal 14px/17px Roboto;
            "
          >
            Your Saved Address</a-radio
          >
        </a-col>
      </a-row>
          <!-- Carousel -->
            <VueSlickCarousel v-bind="settings">
              <div>
                <a-card class="carousel-card">
                  <a-row>
                        <a-col :span="4">
                          <a-radio></a-radio>
                        </a-col>
                        <a-col :span="14">
                          <p
                            style="
                              text-align: justify;
                              font: normal normal normal 14px/17px Roboto;
                              color: #2a2a2a;
                            "
                          >
                            Rakesh Jhunjhunwala 101,Silver Oak Society
                            Copernicus Marg, Near India Gate,New Dehli
                          </p>
                        </a-col>
                      </a-row>
                      <a-row class="carousel-row2">
                        <a-col>
                          <i>Default Address</i>
                        </a-col>
                        <a-col>
                          <a>Edit</a>
                        </a-col>
                        <a-col>
                          <a>Delete</a>
                        </a-col>
                      </a-row>
                </a-card>
              </div>
              <!-- 2nd Slide -->
              <div>
                <a-card class="carousel-card">
                  <a-row>
                        <a-col :span="4">
                          <a-radio></a-radio>
                        </a-col>
                        <a-col :span="14">
                          <p
                            style="
                              text-align: justify;
                              font: normal normal normal 14px/17px Roboto;
                              color: #2a2a2a;
                            "
                          >
                            Rakesh Jhunjhunwala 101,Silver Oak Society
                            Copernicus Marg, Near India Gate,New Dehli
                          </p>
                        </a-col>
                      </a-row>
                      <a-row class="carousel-row2">
                        <a-col>
                          <i>Default Address</i>
                        </a-col>
                        <a-col>
                          <a>Edit</a>
                        </a-col>
                        <a-col>
                          <a>Delete</a>
                        </a-col>
                      </a-row>
                </a-card>
              </div>
                <!-- 3rd Slide -->
              <div>
                <a-card class="carousel-card">
                  <a-row>
                        <a-col :span="4">
                          <a-radio></a-radio>
                        </a-col>
                        <a-col :span="14">
                          <p
                            style="
                              text-align: justify;
                              font: normal normal normal 14px/17px Roboto;
                              color: #2a2a2a;
                            "
                          >
                            Rakesh Jhunjhunwala 101,Silver Oak Society
                            Copernicus Marg, Near India Gate,New Dehli
                          </p>
                        </a-col>
                      </a-row>
                      <a-row class="carousel-row2">
                        <a-col>
                          <i>Default Address</i>
                        </a-col>
                        <a-col>
                          <a>Edit</a>
                        </a-col>
                        <a-col>
                          <a>Delete</a>
                        </a-col>
                      </a-row>
                </a-card>
              </div>
                <!-- 4th Slide -->
              <div>
                <a-card class="carousel-card">
                  <a-row>
                        <a-col :span="4">
                          <a-radio></a-radio>
                        </a-col>
                        <a-col :span="14">
                          <p
                            style="
                              text-align: justify;
                              font: normal normal normal 14px/17px Roboto;
                              color: #2a2a2a;
                            "
                          >
                            Rakesh Jhunjhunwala 101,Silver Oak Society
                            Copernicus Marg, Near India Gate,New Dehli
                          </p>
                        </a-col>
                      </a-row>
                      <a-row class="carousel-row2">
                        <a-col>
                          <i>Default Address</i>
                        </a-col>
                        <a-col>
                          <a>Edit</a>
                        </a-col>
                        <a-col>
                          <a>Delete</a>
                        </a-col>
                      </a-row>
                </a-card>
              </div>


            </VueSlickCarousel>
          <hr style="background-color: #ff7a34" />
        
      <a-row class="new-address" style="padding: 1rem 1rem 1rem 6rem">
        <a-radio> New Address </a-radio>
      </a-row>
      <a-row style="padding: 15px 0px 15px 0px">
        <a-col :span="12">
          <p style="padding-left: 6rem">First Name</p>
          <a-input class="input" placeholder="First Name" />
        </a-col>
        <a-col>
          <p style="padding-left: 29rem">Last name</p>
          <a-input class="input-2" placeholder="Last name" />
        </a-col>
      </a-row>
      <!-- /// -->
      <a-row style="padding: 15px 0px 15px 0px">
        <a-col :span="12">
          <p style="padding-left: 6rem">Plot Number*</p>
          <a-input class="input" placeholder="Plot Number" />
        </a-col>
        <a-col>
          <p style="padding-left: 29rem">Street Address 1*</p>
          <a-input class="input-2" placeholder="XXXXXXXXXXX" />
        </a-col>
      </a-row>
      <!-- /// -->
      <a-row style="padding: 15px 0px 15px 0px">
        <a-col :span="12">
          <p style="padding-left: 6rem">Street Address 2*</p>
          <a-input class="input" placeholder="XXXXXXXXX" />
        </a-col>
        <a-col>
          <p style="padding-left: 29rem">Landmark*</p>
          <a-input class="input-2" placeholder="Landmark" />
        </a-col>
      </a-row>
      <!-- /// -->
      <a-row style="padding: 15px 0px 15px 0px">
        <a-col :span="12">
          <p style="padding-left: 6rem">City*</p>
          <a-input class="input" placeholder="City" />
        </a-col>
        <a-col>
          <p style="padding-left: 29rem">Pincode*</p>
          <a-input class="input-2" placeholder="Pincode" />
        </a-col>
      </a-row>
      <!-- /// -->
      <a-divider />
      <a-row>
        <a-col>
          <p
            style="
              text-align: left;
              font: normal normal bold 16px/20px Roboto;
              letter-spacing: 0px;
              color: #2a2a2a;
              padding-left: 93px;
            "
          >
            Billing Address
          </p>
        </a-col>
      </a-row>
      <a-row>
        <a-checkbox
          style="
            padding: 20px 0px 20px 93px;
            font: normal normal normal 14px/17px Roboto;
          "
          >Billing info same as Shipping Info</a-checkbox
        >
      </a-row>
      <a-divider />
      <a-row style="padding: 20px 0px 20px 93px">
        <a-col>
          <a-button @click="gotoNext('ThankYouPage')" type="primary" class="checkout-btn"
            >Proceed To Pay</a-button
          >
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="6" class="tables-col">
      <a-row style="display: flex; padding: 20px 20px">
        <ProductsCart />
      </a-row>
      <a-row style="padding: 20px 20px; display: flex">
        <ServicesOrdered />
      </a-row>
    </a-col>
  </a-row>
</template>

<script>
// import { LeftOutlined, RightOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "@vue/composition-api";
import ProductsCart from "./ProductsCart.vue";
import ServicesOrdered from "./ServicesOrdered.vue";
import VueSlickCarousel from "vue-slick-carousel";
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default defineComponent({
  name: "ContactsPage",
  components: {
    // LeftOutlined,
    // RightOutlined,
    ProductsCart,
    ServicesOrdered,
    VueSlickCarousel,
  },
  methods:{
    gotoPrevious(CheckFlow){
      this.$router.push({name:CheckFlow})
    },
    gotoNext(ThankYouPage){
      this.$router.push({name:ThankYouPage})
    }
  },
  data() {
    return{
      settings:{
        arrows:true,
        slidesToShow:2
      }
    }
  }
});
</script>

<style scoped>
.contact-details-col {
  background-color: white;
  margin: 9rem 0rem 1rem -6rem;
}
.tables-col {
  margin-top: 5rem;
}
p {
  text-align: left;
  font: normal normal normal 14px/17px Roboto;
  letter-spacing: 0px;
  color: #888888;
  opacity: 1;
  margin-bottom: 0px;
  padding-right: 35px;
}
.fa-arrow-left {
  color: #ff7a34;
  padding: 5px 10px;
}

.input {
  width: 280px;
  float: left;
  margin-left: 93px;
  text-align: left;
  font: normal normal normal 14px/17px Roboto;
  letter-spacing: 0px;
  color: #888888;
}
.input-2 {
  width: 280px;
  float: left;
  margin-left: 51px;
  text-align: left;
  font: normal normal normal 14px/17px Roboto;
  letter-spacing: 0px;
  color: #888888;
}
.verify-btn {
  background-color: white;
  padding-left: 15px;
  border-radius: 20px;
  text-align: left;
  font: normal normal normal 12px/14px Roboto;
  letter-spacing: 0px;
  color: #ff7a34;
}
.input-box {
  text-align: left;
  font: normal normal normal 14px/17px Roboto;
  letter-spacing: 0px;
  color: #888888;
}
.ant-btn-primary {
  border-color: #ff7a34;
}
.ant-radio-inner {
  border-color: #ff7a34;
}
.ant-radio-inner::after {
  background-color: #ff7a34;
}
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: white;
  overflow: hidden;
}
.carousel-row {
  display: flex;
}
.carousel-col {
  background-color: #f8f8f8;
  width: 50%;
  padding: 10px;
}
.carousel-card{
  background-color: #f8f8f8;
      width: 87%;
    margin-left: 6rem;
}
.carousel-row2 {
  display: flex;
  justify-content: space-around;
  padding: 10px 5px;
}
.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  font-weight: bold;
  color: #000000;
  /* background-color: rgba(31, 45, 61, 0.11); */
  opacity: 0.3;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
/* .ant-radio-wrapper:hover .ant-radio{
  border-color:#FF7A34;
} */
.carousel {
  width: 353px;
  display: contents;
}
.checkout-btn {
  background: #ff7a34 0% 0% no-repeat padding-box;
  border-radius: 20px;
  text-align: center;
  font: normal normal normal 12px/14px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
}
.card-div {
  background-color: #f8f8f8;
  padding: 20px 0px 20px 20px;
}
</style>
