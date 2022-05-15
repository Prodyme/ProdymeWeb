<template>
  <section
    style="background-color: #e1e1e1; width: 450px;"
  >
    <div class="right-div">
      <a-row class="right-header">
        <a-col class="col1"> Services Cart</a-col>
        <a-col class="col2"><b>Total cost :</b> 21200.8</a-col>
        <a-col class="col3">
          <a-button class="checkout-btn" type="primary" id="checkoutBtnId"
          @click="gotoNext('ContactDetails')"
            >CheckOut</a-button
          ></a-col
        >
      </a-row>
    </div>
    <div class="services-cart">
      <a-row style="background-color: #f4f4f4; display: flex">
        <a-col style="padding: 10px 20px">
          <a-checkbox style="text-align: center; padding: "></a-checkbox>
        </a-col>
        <a-col
          style="
            font: normal normal bold 12px/32px Roboto;
            text-align: left;
            padding: 10px 36px;
          "
        >
          TYPE
        </a-col>
        <a-col
          style="
            font: normal normal bold 12px/32px Roboto;
            text-align: left;
            padding: 10px 39px;
          "
        >
          RATE
        </a-col>
        <a-col
          style="
            font: normal normal bold 12px/32px Roboto;
            text-align: left;
            padding: 10px 18px;
          "
        >
          PERIOD
        </a-col>
        <a-col
          style="
            font: normal normal bold 12px/32px Roboto;
            text-align: left;
            padding: 10px 20px;
          "
        >
          PRICE
        </a-col>
      </a-row>
    </div>

    <a-col :span="12" class="right-table" style="display: inline">
      <div id="outer" style="background-color: #e1e1e1">
        <table id="feed" class="services-table">
          <!-- <tr>
            <th>Plywood(3)</th>
          </tr> -->
          <tr>
            <td><a-checkbox class="checkbox"></a-checkbox></td>
            <td>Carpenter</td>
            <td>&#8377;5000/day</td>
            <td>
              <button @click="decrement()" class="increase-decrease">
                <a-icon type="minus" />
              </button>
              <input id="input" value="0" class="input-box" />
              <button @click="increment()" class="increase-decrease">
                <a-icon type="plus" />
              </button>
            </td>
            <td>21.35</td>
            <td>
              <i class="fa-solid fa-trash-can" style="color: #ff7a34"></i>
            </td>
          </tr>
          <tr>
            <td><a-checkbox class="checkbox"></a-checkbox></td>
            <td>Carpenter</td>
            <td>&#8377;5000/day</td>
            <td>
              <button @click="decrement()" class="increase-decrease">
                <a-icon type="minus" />
              </button>
              <input id="input" value="0" class="input-box" />
              <button @click="increment()" class="increase-decrease">
                <a-icon type="plus" />
              </button>
            </td>
            <td>21.35</td>
            <td>
              <i class="fa-solid fa-trash-can" style="color: #ff7a34"></i>
            </td>
          </tr>
          <tr>
            <td><a-checkbox class="checkbox"></a-checkbox></td>
            <td>Carpenter</td>
            <td>&#8377;5000/day</td>
            <td>
              <button @click="decrement()" class="increase-decrease">
                <a-icon type="minus" />
              </button>
              <input id="input" value="0" class="input-box" />
              <button @click="increment()" class="increase-decrease">
                <a-icon type="plus" />
              </button>
            </td>
            <td>21.35</td>
            <td>
              <i class="fa-solid fa-trash-can" style="color: #ff7a34"></i>
            </td>
          </tr>
          <tr>
            <td><a-checkbox class="checkbox"></a-checkbox></td>
            <td>Carpenter</td>
            <td>&#8377;5000/day</td>
            <td>
              <button @click="decrement()" class="increase-decrease">
                <a-icon type="minus" />
              </button>
              <input id="input" value="0" class="input-box" />
              <button @click="increment()" class="increase-decrease">
                <a-icon type="plus" />
              </button>
            </td>
            <td>21.35</td>
            <td>
              <i class="fa-solid fa-trash-can" style="color: #ff7a34"></i>
            </td>
          </tr>
          <tr>
            <td><a-checkbox class="checkbox"></a-checkbox></td>
            <td>Carpenter</td>
            <td>&#8377;5000/day</td>
            <td>
              <button @click="decrement()" class="increase-decrease">
                <a-icon type="minus" />
              </button>
              <input id="input" value="0" class="input-box" />
              <button @click="increment()" class="increase-decrease">
                <a-icon type="plus" />
              </button>
            </td>
            <td>21.35</td>
            <td>
              <i class="fa-solid fa-trash-can" style="color: #ff7a34"></i>
            </td>
          </tr>
          <tr>
            <td><a-checkbox class="checkbox"></a-checkbox></td>
            <td>Carpenter</td>
            <td>&#8377;5000/day</td>
            <td>
              <button @click="decrement()" class="increase-decrease">
                <a-icon type="minus" />
              </button>
              <input id="input" value="0" class="input-box" />
              <button @click="increment()" class="increase-decrease">
                <a-icon type="plus" />
              </button>
            </td>
            <td>21.35</td>
            <td>
              <i class="fa-solid fa-trash-can" style="color: #ff7a34"></i>
            </td>
          </tr>
          <tr>
            <td><a-checkbox class="checkbox"></a-checkbox></td>
            <td>Carpenter</td>
            <td>&#8377;5000/day</td>
            <td>
              <button @click="decrement()" class="increase-decrease">
                <a-icon type="minus" />
              </button>
              <input id="input" value="0" class="input-box" />
              <button @click="increment()" class="increase-decrease">
                <a-icon type="plus" />
              </button>
            </td>
            <td>21.35</td>
            <td>
              <i class="fa-solid fa-trash-can" style="color: #ff7a34"></i>
            </td>
          </tr>
          <tr>
            <td><a-checkbox class="checkbox"></a-checkbox></td>
            <td>Carpenter</td>
            <td>&#8377;5000/day</td>
            <td>
              <button @click="decrement()" class="increase-decrease">
               <a-icon type="minus" />
              </button>
              <input id="input" value="0" class="input-box" />
              <button @click="increment()" class="increase-decrease">
                <a-icon type="plus" />
              </button>
            </td>
            <td>21.35</td>
            <td>
              <i class="fa-solid fa-trash-can" style="color: #ff7a34"></i>
            </td>
          </tr>
          <tr>
            <td><a-checkbox class="checkbox"></a-checkbox></td>
            <td>Carpenter</td>
            <td>&#8377;5000/day</td>
            <td>
              <button @click="decrement()" class="increase-decrease">
               <a-icon type="minus" />
              </button>
              <input id="input" value="0" class="input-box" />
              <button @click="increment()" class="increase-decrease">
                <a-icon type="plus" />
              </button>
            </td>
            <td>21.35</td>
            <td>
              <i class="fa-solid fa-trash-can" style="color: #ff7a34"></i>
            </td>
          </tr>
          <tr>
            <td><a-checkbox class="checkbox"></a-checkbox></td>
            <td>Carpenter</td>
            <td>&#8377;5000/day</td>
            <td>
              <button @click="decrement()" class="increase-decrease">
                <a-icon type="minus" />
              </button>
              <input id="input" value="0" class="input-box" />
              <button @click="increment()" class="increase-decrease">
               <a-icon type="plus" />
              </button>
            </td>
            <td>21.35</td>
            <td>
              <i class="fa-solid fa-trash-can" style="color: #ff7a34"></i>
            </td>
          </tr>
          <tr>
            <td><a-checkbox class="checkbox"></a-checkbox></td>
            <td>Carpenter</td>
            <td>&#8377;5000/day</td>
            <td>
              <button @click="decrement()" class="increase-decrease">
                <a-icon type="minus" />
              </button>
              <input id="input" value="0" class="input-box" />
              <button @click="increment()" class="increase-decrease">
               <a-icon type="plus" />
              </button>
            </td>
            <td>21.35</td>
            <td>
              <i class="fa-solid fa-trash-can" style="color: #ff7a34"></i>
            </td>
          </tr>
          <tr>
            <td><a-checkbox class="checkbox"></a-checkbox></td>
            <td>Carpenter</td>
            <td>&#8377;5000/day</td>
            <td>
              <button @click="decrement()" class="increase-decrease">
                <a-icon type="minus" />
              </button>
              <input id="input" value="0" class="input-box" />
              <button @click="increment()" class="increase-decrease">
                <a-icon type="plus" />
              </button>
            </td>
            <td>21.35</td>
            <td>
              <i class="fa-solid fa-trash-can" style="color: #ff7a34"></i>
            </td>
          </tr>
          <tr>
            <td><a-checkbox class="checkbox"></a-checkbox></td>
            <td>Carpenter</td>
            <td>&#8377;5000/day</td>
            <td>
              <button @click="decrement()" class="increase-decrease">
                <a-icon type="minus" />
              </button>
              <input id="input" value="0" class="input-box" />
              <button @click="increment()" class="increase-decrease">
               <a-icon type="plus" />
              </button>
            </td>
            <td>21.35</td>
            <td>
              <i class="fa-solid fa-trash-can" style="color: #ff7a34"></i>
            </td>
          </tr>
          <tr>
            <td><a-checkbox class="checkbox"></a-checkbox></td>
            <td>Carpenter</td>
            <td>&#8377;5000/day</td>
            <td>
              <button @click="decrement()" class="increase-decrease">
                <a-icon type="minus" />
              </button>
              <input id="input" value="0" class="input-box" />
              <button @click="increment()" class="increase-decrease">
                <a-icon type="plus" />
              </button>
            </td>
            <td>21.35</td>
            <td>
              <i class="fa-solid fa-trash-can" style="color: #ff7a34"></i>
            </td>
          </tr>
        </table>
      </div>

      <div class="services-table-footer">
        <a-row style="display: flex">
          <a-col :span="12"> </a-col>
          <a-col
            style="
              font: normal normal normal 12px/12px Roboto;
              padding: 10px 20px 0px 50px;
            "
          >
            28 Days</a-col
          >
          <a-col
            style="
              font: normal normal bold 14px/18px Roboto;
              padding: 10px 30px;
            "
            >&#8377;21200</a-col
          >
        </a-row>
        <a-row style="display: flex">
          <a-col :span="6"></a-col>
          <a-col style="padding: 10px 20px 10px 66px">
            Total Cost : 21200.8
          </a-col>
          <a-col style="padding: 10px 50px">
            <a-button type="primary" class="checkout-btn">CheckOut</a-button>
          </a-col>
        </a-row>
      </div>
    </a-col>
  </section>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { ref } from "@vue/composition-api";
import "ant-design-vue/dist/antd.css";
export default defineComponent({
  setup() {
    const value = ref("");
    return {
      value,
      checked: ref(false),
    };
  },
  name: "ServicesTable",
  methods:{
    gotoNext(ContactDetails) {
      this.$router.push({name:ContactDetails})
    } 
  }
});
// var count = 0;
// document.getElementById("input").innerText = count;
// function increment(){
//   count = count+1;
//   document.getElementById("input").innerText = count;
// }
// function decrement(){
//   count = count-1;
//   document.getElementById("input").innerText = count;
// }

// var checkoutBtnId = new Vue({
//   methods:{
//     gotoContacts: function(event){

//     }

//   }

// })
</script>

<style scoped>
.checkout-btn {
  background-color: #ff7a34;
  border-radius: 40px;
  width: 90px;
  font: normal normal normal 12px/14px Roboto;
}
.services-table {
  opacity: 1;
  /* border-top: 4px solid #c1c1c129; */
  border-bottom: 4px solid #c1c1c129;
  display: block;
  overflow: auto;
  width: 550px;
  height: 598px;
  margin-top:10px;
  /* overflow-y:hidden ; */
}
#feed::-webkit-scrollbar {
  display: none;
}
#outer {
  overflow: hidden;
  background-color: #e1e1e1;
  margin-top: -19px;
  display: inline-flex;
}
.right-div {
  padding: 20px 20px 10px 5px;
  background-color: #e1e1e1;
  width: 550px;
}
.right-header {
  display: flex;
}
.right-table {
  width: 103%;
}
.increase-decrease {
  border: none;
  color: #ff7a34;
  background-color: #e1e1e1;
}
.input-box {
  width: 15px;
  border: none;
  background-color: #f4f4f4;
  text-align: center;
}
.services-cart {
  padding: 7px 0px 20px 0px;
  display: grid;
  width: 550px;
  background-color: #e1e1e1;
}
.col1 {
  font: normal normal bold 16px/20px Roboto;
  text-align: left;
  margin: 10px 7px 0px 10px;
}
.col2 {
  margin: 10px 15px 0px 30px;
}
.col3 {
  margin: 5px 0px 0px 45px;
}
.services-table-footer {
  background: #e1e1e1 0% 0% no-repeat padding-box;
  width: 550px;
  padding-bottom: 10px;
}
td {
  background-color: #e1e1e1;
  display: inline-flex;
  padding: 20px;
}
/* .checkbox {
  outline: 1px solid #ff7a34;
  padding: 0px;
} */
</style>
<style>
.ant-checkbox {
  border-radius: 3px;
  border: 1px solid #ff7a34;
}
.ant-checkbox-wrapper:hover .ant-checkbox-inner,
.ant-checkbox:hover,
.ant-checkbox-inner,
.ant-checkbox-input:focus + .ant-checkbox-inner {
  border-color: none;
}
.ant-checkbox-inner {
  border: none;
}
.ant-checkbox-inner {
  border: none;
}
.ant-checkbox-checked .ant-checkbox-inner {
  background-color: #ff7a34;
  border-color: #ff7a34;
}
</style>