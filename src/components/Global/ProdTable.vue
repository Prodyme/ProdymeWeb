<template>
  <div>
    <div>
      <a-row class="page-header">
        <a-col :span="6" style="display: inline; margin: 10px 15px 10px 45px">
          <h3 style="font-weight: bold">Products Cart</h3>
        </a-col>
        <a-col :span="6" style="display: inline; padding: 8px 10px 10px 0px">
          <a-input placeholder="Pincode" />
          <!-- <a-col :span="2" style="display:inline">
            <i class="fa-solid fa-location-dot"></i>
          </a-col> -->
        </a-col>
      </a-row>
    </div>
    <section>
      <a-col :span="12" class="left-table">
        <div class="prod-table-header">
          <a-row class="prod-header-row">
            <a-col
              style="
                padding: 10px 70px;
                font: normal normal bold 12px/32px Roboto;
                background-color: #f4f4f4;
              "
            >
              YOUR PRODUCTS
            </a-col>
            <a-col
              style="
                padding: 10px 20px 10px 20px;
                font: normal normal bold 12px/32px Roboto;
                background-color: #f4f4f4;
              "
              >RATE</a-col
            >
            <a-col
              style="
                padding: 10px 5px 10px 35px;
                font: normal normal bold 12px/32px Roboto;
                background-color: #f4f4f4;
              "
              >QUANTITY</a-col
            >
            <a-col
              style="
                padding: 10px 42px;
                font: normal normal bold 12px/32px Roboto;
                background-color: #f4f4f4;
              "
            >
              PRICE
            </a-col>
            <a-col
              style="
                background-color: #f4f4f4;
                padding: 7px 30px 0px 42px;
                color: #f4f4f4;
              "
            >
              <p>Hi</p>
            </a-col>
          </a-row>
        </div>
        <div id="outer" style="background-color: white; margin-left: 26px">
          <table id="feed" class="prod-table">
            <tr>
              <th>Plywood(3)</th>
            </tr>
            <a-divider />
            <tr>
              <td><a-checkbox></a-checkbox></td>
              <td style="width: 100px">Img1</td>
              <td style="width: 100px; text-align: justify">Product-descs</td>
              <td style="width: 100px">27/box</td>
              <td style="width: 100px">
                <button
                  @click="decrement(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="minus" />
                </button>
                <input :value="count" class="input-box" />
                <button
                  @click="increment(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="plus" />
                </button>
              </td>
              <td style="width: 100px">21.35</td>
              <td style="width: 100px">
                <a-icon type="delete" style="color: #ff7a34" />
              </td>
            </tr>
            <tr>
              <td><a-checkbox></a-checkbox></td>
              <td style="width: 100px">Img1</td>
              <td style="width: 100px; text-align: justify">Product-descs</td>
              <td style="width: 100px">27/box</td>
              <td style="width: 100px">
                <button
                  @click="decrement(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="minus" />
                </button>
                <input :value="count" class="input-box" />
                <button
                  @click="increment(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="plus" />
                </button>
              </td>
              <td style="width: 100px">21.35</td>
              <td style="width: 100px">
                <a-icon type="delete" style="color: #ff7a34" />
              </td>
            </tr>
            <tr>
              <td><a-checkbox></a-checkbox></td>
              <td style="width: 100px">Img1</td>
              <td style="width: 100px; text-align: justify">Product-descs</td>
              <td style="width: 100px">27/box</td>
              <td style="width: 100px">
                <button
                  @click="decrement(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="minus" />
                </button>
                <input :value="count" class="input-box" />
                <button
                  @click="increment(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="plus" />
                </button>
              </td>
              <td style="width: 100px">21.35</td>
              <td style="width: 100px">
                <a-icon type="delete" style="color: #ff7a34" />
              </td>
            </tr>
            <tr>
              <td><a-checkbox></a-checkbox></td>
              <td style="width: 100px">Img1</td>
              <td style="width: 100px; text-align: justify">Product-descs</td>
              <td style="width: 100px">27/box</td>
              <td style="width: 100px">
                <button
                  @click="decrement(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="minus" />
                </button>
                <input :value="count" class="input-box" />
                <button
                  @click="increment(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="plus" />
                </button>
              </td>
              <td style="width: 100px">21.35</td>
              <td style="width: 100px">
                <a-icon type="delete" style="color: #ff7a34" />
              </td>
            </tr>
            <tr>
              <td><a-checkbox></a-checkbox></td>
              <td style="width: 100px">Img1</td>
              <td style="width: 100px; text-align: justify">Product-descs</td>
              <td style="width: 100px">27/box</td>
              <td style="width: 100px">
                <button
                  @click="decrement(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="minus" />
                </button>
                <input :value="count" class="input-box" />
                <button
                  @click="increment(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="plus" />
                </button>
              </td>
              <td style="width: 100px">21.35</td>
              <td style="width: 100px">
                <a-icon type="delete" style="color: #ff7a34" />
              </td>
            </tr>
            <tr>
              <td><a-checkbox></a-checkbox></td>
              <td style="width: 100px">Img1</td>
              <td style="width: 100px; text-align: justify">Product-descs</td>
              <td style="width: 100px">27/box</td>
              <td style="width: 100px">
                <button
                  @click="decrement(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="minus" />
                </button>
                <input :value="count" class="input-box" />
                <button
                  @click="increment(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="plus" />
                </button>
              </td>
              <td style="width: 100px">21.35</td>
              <td style="width: 100px">
                <a-icon type="delete" style="color: #ff7a34" />
              </td>
            </tr>
            <tr>
              <td><a-checkbox></a-checkbox></td>
              <td style="width: 100px">Img1</td>
              <td style="width: 100px; text-align: justify">Product-descs</td>
              <td style="width: 100px">27/box</td>
              <td style="width: 100px">
                <button
                  @click="decrement(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="minus" />
                </button>
                <input :value="count" class="input-box" />
                <button
                  @click="increment(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="plus" />
                </button>
              </td>
              <td style="width: 100px">21.35</td>
              <td style="width: 100px">
                <a-icon type="delete" style="color: #ff7a34" />
              </td>
            </tr>
            <tr>
              <td><a-checkbox></a-checkbox></td>
              <td style="width: 100px">Img1</td>
              <td style="width: 100px; text-align: justify">Product-descs</td>
              <td style="width: 100px">27/box</td>
              <td style="width: 100px">
                <button
                  @click="decrement(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="minus" />
                </button>
                <input :value="count" class="input-box" />
                <button
                  @click="increment(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="plus" />
                </button>
              </td>
              <td style="width: 100px">21.35</td>
              <td style="width: 100px">
                <a-icon type="delete" style="color: #ff7a34" />
              </td>
            </tr>
            <tr>
              <td><a-checkbox></a-checkbox></td>
              <td style="width: 100px">Img1</td>
              <td style="width: 100px; text-align: justify">Product-descs</td>
              <td style="width: 100px">27/box</td>
              <td style="width: 100px">
                <button
                  @click="decrement(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="minus" />
                </button>
                <input :value="count" class="input-box" />
                <button
                  @click="increment(count)"
                  class="increase-decrease-prod"
                >
                  <a-icon type="plus" />
                </button>
              </td>
              <td style="width: 100px">21.35</td>
              <td style="width: 100px">
                <a-icon type="delete" style="color: #ff7a34" />
              </td>
            </tr>
            <tr>
              <td><a-checkbox></a-checkbox></td>
              <td>Img1</td>
              <td style="text-align: justify">Product-descs</td>
              <td style="width: 100px">27/box</td>
              <td>
                <button class="increase-decrease-prod">
                  <a-icon type="minus" />
                </button>
                <input :value="count" class="input-box" />
                <button class="increase-decrease-prod">
                  <a-icon type="plus" />
                </button>
              </td>
              <td style="width: 100px">21.35</td>
              <td style="width: 100px">
                <a-icon type="delete" style="color: #ff7a34" />
              </td>
            </tr>
          </table>
        </div>
        <!-- <a-divider /> -->
        <div class="prod-table-footer">
          <a-row style="width: 623px">
            <a-col :span="16">
              <p style="font: normal normal normal 12px/19px Roboto">
                Shipping Charges(<i
                  style="font: italic normal normal 12px/19px Roboto"
                  >May vary according to delivery code</i
                >)
              </p>
            </a-col>
            <a-col style="font: normal normal bold 14px/28px Roboto">
              8.00
            </a-col>
          </a-row>
          <a-divider></a-divider>
          <a-row class="footer-row" style="display: flex">
            <a-col
              :span="10"
              style="padding: 10px; font: normal normal bold 14px/18px Roboto"
            >
              Total
            </a-col>
            <a-col
              style="
                padding: 10px 40px 10px 97px;
                font: normal normal bold 14px/18px Roboto;
              "
            >
              247 items
            </a-col>
            <a-col
              style="
                padding: 10px 4px;
                font: normal normal bold 14px/18px Roboto;
              "
            >
              21200.8
            </a-col>
          </a-row>
        </div>
      </a-col>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { ref } from "@vue/composition-api";
import "ant-design-vue/dist/antd.css";
export default defineComponent({
  setup() {
    return {
      checked: ref(false),
    };
  },
  data() {
    return {
      count: 0,
    };
  },
  name: "ProdTable",
  methods:{
    increment(){
      this.count++;
    },
    decrement(){
      if(this.count <= 0){
        this.count = 0;
      }
      else{
        this.count --;
      }
    }
  }
});
</script>



<style scoped>
.prod-table-header {
  /* padding: 0px 5px 0px 60px; */
  background-color: white;
  display: inline;
}
.prod-header-row {
  width: 650px;
  display: flex;
  margin-left: 26px;
}
.ant-divider-horizontal {
  margin: 0px;
}
.prod-table {
  table-layout: fixed;
  width: 653px;
  height: 597px;
  background-color: white;
  overflow: auto;
  display: block;
  border-bottom: 1px solid #e1e1e1;
}
.page-header {
  padding: 11px;
  width: 100%;
}
th {
  display: table-header-group;
  padding-top: 40px;
}
td {
  padding: 10px;
  padding-left: 5px;
}

button {
  border-radius: 40px;
  background-color: #ff7a34;
}

.left-table {
  display: inline;
  /* padding: 15px 0px 15px 0px; */
  margin-left: 30px;
  width: 623px;
}
.prod-table-footer {
  background-color: white;
  padding: 10px;
  margin-left: 26px;
  width: 110%;
}

.increase-decrease-prod {
  border: none;
  color: #ff7a34;
  background-color: white;
  padding: 5px;
}
.input-box {
  width: 20px;
  border: none;
  background-color: #f4f4f4;
  text-align: center;
  text-overflow: ellipsis;
}
.increase-decrease-prod {
  border: none;
  color: #ff7a34;
  background-color: white;
  padding: 5px;
}
#outer {
  display: inline-flex;
  padding: 10px 15px;
}
#feed::-webkit-scrollbar {
  display: none;
}
</style>