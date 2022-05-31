<template>
  <div class="product-main-carousel" style="margin:0px 40px 0px 40px">
    <h2>Products on Sale!</h2>

    <VueSlickCarousel v-bind="settings" :dots="false" :key="$route.fullPath">


      <a-card :bordered="false">
        <center>
          <img src="../../assets/mountains.jpg" width="100px">
        </center>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
        <aside class="princeReview">
          <a-rate :default-value="4" allow-half />
        </aside>
        <hr class="product-hr">
        <h2 class="display-inline fs-28">&#8377;21.58</h2><small class="fs-106 fw-bold"> per box</small>
        <br>
        <div class="quantity">
          <button @click="decrement(number)" class="increase-decrease">
            <font-awesome-icon icon="fa-solid fa-minus" /></button>
          <input :value="number" class="input-box">
          <button @click="increment(number)" class="increase-decrease">
            <font-awesome-icon icon="fa-solid fa-plus" /></button>
        </div>
        <a-checkbox @change="onChange" class="add-to-cart">
          Add to cart
        </a-checkbox>
      </a-card>


      <a-card :bordered="false">
        <center>
          <img src="../../assets/mountains.jpg" width="100px">
        </center>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
        <aside class="princeReview">
          <a-rate :default-value="4" allow-half />
        </aside>
        <hr class="product-hr">
        <h2 class="display-inline fs-28">&#8377;21.58</h2><small class="fs-106 fw-bold"> per box</small>
        <br>
        <div class="quantity">
          <button @click="decrement(number)" class="increase-decrease">
            <font-awesome-icon icon="fa-solid fa-minus" /></button>
          <input :value="number" class="input-box">
          <button @click="increment(number)" class="increase-decrease">
            <font-awesome-icon icon="fa-solid fa-plus" /></button>
        </div>
        <a-checkbox @change="onChange" class="add-to-cart">
          Add to cart
        </a-checkbox>
      </a-card>

      <a-card :bordered="false">
        <center>
          <img src="../../assets/mountains.jpg" width="100px">
        </center>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
        <aside class="princeReview">
          <a-rate :default-value="4" allow-half />
        </aside>
        <hr class="product-hr">
        <h2 class="display-inline fs-28">&#8377;21.58</h2><small class="fs-106 fw-bold"> per box</small>
        <br>
        <div class="quantity">
          <button @click="decrement(number)" class="increase-decrease">
            <font-awesome-icon icon="fa-solid fa-minus" /></button>
          <input :value="number" class="input-box">
          <button @click="increment(number)" class="increase-decrease">
            <font-awesome-icon icon="fa-solid fa-plus" /></button>
        </div>
        <a-checkbox @change="onChange" class="add-to-cart">
          Add to cart
        </a-checkbox>
      </a-card>

      <a-card :bordered="false">
        <center>
          <img src="../../assets/mountains.jpg" width="100px">
        </center>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
        <aside class="princeReview">
          <a-rate :default-value="4" allow-half />
        </aside>
        <hr class="product-hr">
        <h2 class="display-inline fs-28">&#8377;21.58</h2><small class="fs-106 fw-bold"> per box</small>
        <br>
        <div class="quantity">
          <button @click="decrement(number)" class="increase-decrease">
            <font-awesome-icon icon="fa-solid fa-minus" /></button>
          <input :value="number" class="input-box">
          <button @click="increment(number)" class="increase-decrease">
            <font-awesome-icon icon="fa-solid fa-plus" /></button>
        </div>
        <a-checkbox @change="onChange" class="add-to-cart">
          Add to cart
        </a-checkbox>
      </a-card>

      <a-card :bordered="false">
        <center>
          <img src="../../assets/mountains.jpg" width="100px">
        </center>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
        <aside class="princeReview">
          <a-rate :default-value="4" allow-half />
        </aside>
        <hr class="product-hr">
        <h2 class="display-inline fs-28">&#8377;21.58</h2><small class="fs-106 fw-bold"> per box</small>
        <br>
        <div class="quantity">
          <button @click="decrement(number)" class="increase-decrease">
            <font-awesome-icon icon="fa-solid fa-minus" /></button>
          <input :value="number" class="input-box">
          <button @click="increment(number)" class="increase-decrease">
            <font-awesome-icon icon="fa-solid fa-plus" /></button>
        </div>
        <a-checkbox @change="onChange" class="add-to-cart">
          Add to cart
        </a-checkbox>
      </a-card>

      <a-card :bordered="false">
        <center>
          <img src="../../assets/mountains.jpg" width="100px">
        </center>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
        <aside class="princeReview">
          <a-rate :default-value="4" allow-half />
        </aside>
        <hr class="product-hr">
        <h2 class="display-inline fs-28">&#8377;21.58</h2><small class="fs-106 fw-bold"> per box</small>
        <br>
        <div class="quantity">
          <button @click="decrement(number)" class="increase-decrease">
            <font-awesome-icon icon="fa-solid fa-minus" /></button>
          <input :value="number" class="input-box">
          <button @click="increment(number)" class="increase-decrease">
            <font-awesome-icon icon="fa-solid fa-plus" /></button>
        </div>
        <a-checkbox @change="onChange" class="add-to-cart">
          Add to cart
        </a-checkbox>
      </a-card>

      <a-card :bordered="false">
        <center>
          <img src="../../assets/mountains.jpg" width="100px">
        </center>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
        <aside class="princeReview">
          <a-rate :default-value="4" allow-half />
        </aside>
        <hr class="product-hr">
        <h2 class="display-inline fs-28">&#8377;21.58</h2><small class="fs-106 fw-bold"> per box</small>
        <br>
        <div class="quantity">
          <button @click="decrement(number)" class="increase-decrease">
            <font-awesome-icon icon="fa-solid fa-minus" /></button>
          <input :value="number" class="input-box">
          <button @click="increment(number)" class="increase-decrease">
            <font-awesome-icon icon="fa-solid fa-plus" /></button>
        </div>
        <a-checkbox @change="onChange" class="add-to-cart">
          Add to cart
        </a-checkbox>
      </a-card>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default ({
  name: 'MyCarousel',
  components: {
    VueSlickCarousel,


  },
  data() {
    return {
      settings: {
        "arrows": true,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 5,
        "slidesToScroll": 5,
        "touchThreshold": 5
      },
      number: 1,
    }
  },
  methods: {
    increment() {
      this.number++;
    },
    decrement() {
      if (this.number <= 0) {
        this.number = 0;
      } else {
        this.number--;
      }
    }
  },



});
</script>

<style lang="scss" scoped>
.mt-10 {
  margin-top: 10px;
}

.fs-106 {
  font-size: 106%;
}

.fw-bold {
  font-weight: bold;
}

.display-inline {
  display: inline;
}

.fs-28 {
  font-size: 28px;
}

.add-to-cart {
  float: right;
  position: relative;
  top: 10px;
  left: 17px;
}

.product-hr {

  /* background-color: gray; */
  border-bottom: none;
  border-top: 1px solid #D9D9D9;
}

.increase-decrease {
  border: none;
  color: #FF7A34;
}

.input-box {
  width: 12%;
  text-align: center;
  border: none;
}

.quantity {
  display: inline !important;
  position: relative;
  top: 8px;
  right: 11px;
}

.wishlist {
  font-size: 30px;
  color: #FF7A34;
  font-weight: bolder;
  cursor: pointer;
  float: right;
  position: relative;
  bottom: 16px;
  left: 8px;
}

.princeReview {
  .ant-rate {
    font-size: 16px;
  }
}
</style>
<style>
.slick-list div,
.slick-slide div {
  text-align: left !important;
}
</style>