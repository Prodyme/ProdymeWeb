<template>
    <section class="main">
        <div class="desc">
            <h2 contenteditable>Product Description</h2>
            <p contenteditable>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
        </div>
        <div class="stock-details">
            <h5>Available Online <span contenteditable>189</span></h5>
            <div class="quantity">
                <p>Quantity</p>
                <div class="noOfItems">
                    <button class="btn" v-on:click="decrement(number)"><a-icon type="minus" class="icon"/></button>
                    <input :value="number" class="input-box">
                    <button class="btn" v-on:click="increment(number)"><a-icon type="plus" class="icon"/></button>
                </div>
            </div>    
            <button class="btn1">Add to Cart</button>
        </div>
        <div id="app" contenteditable = "false">
            <v-app id="inspire" style="height: 10rem">
                <v-card elevation="0">
                    <v-tabs background-color="rgb(248,248,248)">
                        <v-tabs-slider color="#FF7A34"></v-tabs-slider>
                        <v-tab  style="margin-right: 6rem; color: #FF7A34" active-class>Product Specifications</v-tab>
                        <v-tab style="margin-right: 8rem;color: #FF7A34">Reviews</v-tab>
                        <v-tab style="color: #FF7A34">FAQs</v-tab>
                
                        <v-tab-item >
                            <v-card flat style="background-color: rgb(248,248,248)">
                                <v-card-text>
                                    <div class="specs" contenteditable>
                                        <h2 class="heading">Category title A</h2>
                                        <hr class="line">
                                        <a-row class="specs-row">
                                        <a-col :span="12">
                                            <h4 class="sub-heading">Field Name</h4>
                                        </a-col>
                                        <a-col :span="12">
                                            <h4 class="sub-heading">Field values</h4>
                                        </a-col>
                                        </a-row>
                                        <hr class="line">
                                        <a-row class="specs-row">
                                        <a-col :span="12">
                                           <h4 class="sub-heading">Field Name</h4>
                                        </a-col>
                                        <a-col :span="12">
                                            <h4 class="sub-heading">Field values</h4>
                                        </a-col>
                                        </a-row >
                                        <hr class="line">
                                        <a-row class="specs-row">
                                        <a-col :span="12">
                                            <h4 class="sub-heading">Field Name</h4>
                                        </a-col>
                                        <a-col :span="12">
                                            <h4 class="sub-heading">Field values</h4>
                                        </a-col>
                                        </a-row>
                                        <hr class="line">
                                        <h2 class="heading">Category title B</h2>
                                        <hr class="line">
                                        <a-row class="specs-row">
                                        <a-col :span="12">
                                            <h4 class="sub-heading">Field Name</h4>
                                        </a-col>
                                        <a-col :span="12">
                                            <h4 class="sub-heading">Field values</h4>
                                        </a-col>
                                        </a-row>
                                        <hr class="line">
                                        <a-row class="specs-row">
                                        <a-col :span="12">
                                           <h4 class="sub-heading">Field Name</h4>
                                        </a-col>
                                        <a-col :span="12">
                                            <h4 class="sub-heading">Field values</h4>
                                        </a-col>
                                        </a-row >
                                        <hr class="line">
                                        <a-row class="specs-row">
                                        <a-col :span="12">
                                            <h4 class="sub-heading">Field Name</h4>
                                        </a-col>
                                        <a-col :span="12">
                                            <h4 class="sub-heading">Field values</h4>
                                        </a-col>
                                        </a-row>
                                        <hr class="line">
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <v-card
                                    max-width="644"
                                    elevation="0"
                                    outlined
                                >
                                <v-list-item three-line>
                                  <v-list-item-avatar
                                    tile
                                    size="30"
                                    color="grey" style="border-radius: 50%"
                                ></v-list-item-avatar> 
                                <v-list-item-content>
                                    <v-list-item-title class="text-h6" style="margin-bottom: unset">
                                    User Name
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        <a-rate v-model="value" class="rating" style="margin-left: -1.4rem;margin-bottom: 1rem; font-size: 0.8rem"/>
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo animi dicta temporibus fugit ducimus. Odit, sint sapiente fugit quisquam quam debitis rerum temporibus earum sed nam assumenda sequi veniam est dolores dolor omnis.</v-list-item-subtitle>
                                </v-list-item-content>
                                
                                
                                </v-list-item>
                            </v-card>
                        </v-card-text>
                    </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>
                                <div>
                                    <a-collapse v-model="activeKey">
                                    <a-collapse-panel key="1" header="Some Question 1" contenteditable>
                                        <p contenteditable>Answer 1</p>
                                    </a-collapse-panel>
                                    <a-collapse-panel key="2" header="Some Question 2" contenteditable>
                                        <p contenteditable>Answer 2</p>
                                    </a-collapse-panel>
                                    <a-collapse-panel key="3" header="Some Question 3" contenteditable>
                                        <p contenteditable>Answer 3</p>
                                    </a-collapse-panel>
                                    </a-collapse>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
                </v-card>
            </v-app>
        </div>
    </section>
<!-- expansion panel for faqs -->
</template>

<script>
export default {
    name: 'ProductDescAdmin',
    data() {
        return {
            number: 1,
            value: 4,
        };
    },
  methods: {
    increment(){
      this.number++;
    },
    decrement(){
      if(this.number <= 0){
        this.number = 0;
      }else{
        this.number--;
      }
    }
  }
}
</script>

<style scoped>
    .main{
        margin-top: 1.3rem;
        margin-left: 12rem;
        padding: 0.5rem;
        /* border: 1px solid salmon; */
        /* padding-right: 3rem; */
        width: 43rem;
        height: 23rem;
        overflow-y: scroll;
    }
    .main::-webkit-scrollbar { /* WebKit */
        width: 0;
        height: 0;
    }
    .desc h2{
        font-size: 1.3rem;
        font-family: Roboto;
        font-weight: bold;
    }
    .desc p{
        margin-top: 1rem;
        font-size: 0.8rem;
        font-family: roboto;
        font-weight: light;
    }
    .stock-details{
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* border: 1px solid black; */
        margin-top: 2.2rem;
    }
    .stock-details h5{
        font-size: 1rem;
        font-weight: 400;
    }
    .stock-details span{
        font-weight: bold;
    }
    .quantity{
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
    }
    .quantity p{
        margin-right: 0.8rem;
        margin-top: 0.5rem;
        font-weight: 600;
        color: black;
        font-size: 1rem;
    }
    .noOfItems{
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* border: 1px solid red; */
        width: 5rem;
    }
    .btn{
        background-color: transparent;
        padding: 0.4rem;
        outline: none;
        border: none;
        cursor: pointer;
    }
    .btn .icon{
        font-size: 0.8rem; 
        color: #FF7A34; 
    }
    .noOfItems span{
        font-size: 0.8rem;
    }
    .input-box{
        width: 17%;
        text-align: center;
        border: none;
    }
    .btn1{
        background-color: #FF7A34;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        font-family: Roboto;
        width: 8rem;
        border-radius: 1rem;
        padding: 0.3rem 0rem;
    }

    #app{
        margin-top: 1.3rem;
    }
    .heading{
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
        margin-top: 1rem;
    }
    .sub-heading{
        font-weight: 400;
    }
    .specs-row{
        padding: 1rem 0rem;
    }
</style>