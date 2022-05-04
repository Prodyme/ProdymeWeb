<template>
    <section class="main">
        <div class="cart">
            <div class="cart-header">
                <h2><a-icon type="shopping-cart" />Cart(4)</h2>
                <a href="" class="link">View Cart</a>
            </div>
            <div class="products">
                <div class="product-category">
                    <div class="category">
                        <h3>Plywood</h3>
                        <span>03</span>
                        <p class="link"><a-icon type="redo" />Reset To Original</p>
                    </div>
                    <div class="items">
                        <a-row>
                            <a-col :span="2">
                                <a-checkbox @change="onChange"></a-checkbox>
                            </a-col>
                            <a-col :span="5">
                                <img src="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg" alt="product-img">
                            </a-col>
                            <a-col :span="7">
                                <p class="product-desc">Product Name ABC which is a long name...</p>
                            </a-col>
                            <a-col :span="6" class="col">
                                <div class="noOfItems">
                                    <button class="btn" v-on:click="decrement(number)"><a-icon type="minus" class="icon"/></button>
                                    <input :value="number" class="input-box" placeholder="1">
                                    <button class="btn" v-on:click="increment(number)"><a-icon type="plus" class="icon"/></button>
                                </div>
                                <p>Boxes</p>
                                <span>[100 sq.ft]</span>
                            </a-col>
                            <a-col :span="3">
                                <p class="price">₹21.58</p>
                            </a-col>
                        </a-row>        
                    </div>
                    <div class="items">
                        <a-row>
                            <a-col :span="2">
                                <a-checkbox @change="onChange"></a-checkbox>
                            </a-col>
                            <a-col :span="5">
                                <img src="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg" alt="product-img">
                            </a-col>
                            <a-col :span="7">
                                <p class="product-desc">Product Name ABC which is a long name...</p>
                            </a-col>
                            <a-col :span="6" class="col">
                                <div class="noOfItems">
                                    <button class="btn" v-on:click="decrement(number)"><a-icon type="minus" class="icon"/></button>
                                    <input :value="number" class="input-box" placeholder="1">
                                    <button class="btn" v-on:click="increment(number)"><a-icon type="plus" class="icon"/></button>
                                </div>
                                <p>Boxes</p>
                                <span>[100 sq.ft]</span>
                            </a-col>
                            <a-col :span="3">
                                <p class="price">₹21.58</p>
                            </a-col>
                        </a-row>        
                    </div>
                    <div class="items">
                        <a-row>
                            <a-col :span="2">
                                <a-checkbox @change="onChange"></a-checkbox>
                            </a-col>
                            <a-col :span="5">
                                <img src="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg" alt="product-img">
                            </a-col>
                            <a-col :span="7">
                                <p class="product-desc">Product Name ABC which is a long name...</p>
                            </a-col>
                            <a-col :span="6" class="col">
                                <div class="noOfItems">
                                    <button class="btn" v-on:click="decrement(number)"><a-icon type="minus" class="icon"/></button>
                                    <input :value="number" class="input-box" placeholder="1">
                                    <button class="btn" v-on:click="increment(number)"><a-icon type="plus" class="icon"/></button>
                                </div>
                                <p>Boxes</p>
                                <span>[100 sq.ft]</span>
                            </a-col>
                            <a-col :span="3">
                                <p class="price">₹21.58</p>
                            </a-col>
                        </a-row>        
                    </div>
                </div>
                <div class="product-category">
                    <div class="category">
                        <h3>Plywood</h3>
                        <span>03</span>
                        <p class="link"><a-icon type="redo" />Reset To Original</p>
                    </div>
                    <div class="items">
                        <a-row>
                            <a-col :span="2">
                                <a-checkbox @change="onChange"></a-checkbox>
                            </a-col>
                            <a-col :span="5">
                                <img src="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg" alt="product-img">
                            </a-col>
                            <a-col :span="7">
                                <p class="product-desc">Product Name ABC which is a long name...</p>
                            </a-col>
                            <a-col :span="6" class="col">
                                <div class="noOfItems">
                                    <button class="btn" v-on:click="decrement(number)"><a-icon type="minus" class="icon"/></button>
                                    <input :value="number" class="input-box" placeholder="1">
                                    <button class="btn" v-on:click="increment(number)"><a-icon type="plus" class="icon"/></button>
                                </div>
                                <p>Boxes</p>
                                <span>[100 sq.ft]</span>
                            </a-col>
                            <a-col :span="3">
                                <p class="price">₹21.58</p>
                            </a-col>
                        </a-row>        
                    </div>
                    <div class="items">
                        <a-row>
                            <a-col :span="2">
                                <a-checkbox @change="onChange"></a-checkbox>
                            </a-col>
                            <a-col :span="5">
                                <img src="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg" alt="product-img">
                            </a-col>
                            <a-col :span="7">
                                <p class="product-desc">Product Name ABC which is a long name...</p>
                            </a-col>
                            <a-col :span="6" class="col">
                                <div class="noOfItems">
                                    <button class="btn" v-on:click="decrement(number)"><a-icon type="minus" class="icon"/></button>
                                    <input :value="number" class="input-box" placeholder="1">
                                    <button class="btn" v-on:click="increment(number)"><a-icon type="plus" class="icon"/></button>
                                </div>
                                <p>Boxes</p>
                                <span>[100 sq.ft]</span>
                            </a-col>
                            <a-col :span="3">
                                <p class="price">₹21.58</p>
                            </a-col>
                        </a-row>        
                    </div>
                    <div class="items">
                        <a-row>
                            <a-col :span="2">
                                <a-checkbox @change="onChange"></a-checkbox>
                            </a-col>
                            <a-col :span="5">
                                <img src="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg" alt="product-img">
                            </a-col>
                            <a-col :span="7">
                                <p class="product-desc">Product Name ABC which is a long name...</p>
                            </a-col>
                            <a-col :span="6" class="col">
                                <div class="noOfItems">
                                    <button class="btn" v-on:click="decrement(number)"><a-icon type="minus" class="icon"/></button>
                                    <input :value="number" class="input-box" placeholder="1">
                                    <button class="btn" v-on:click="increment(number)"><a-icon type="plus" class="icon"/></button>
                                </div>
                                <p>Boxes</p>
                                <span>[100 sq.ft]</span>
                            </a-col>
                            <a-col :span="3">
                                <p class="price">₹21.58</p>
                            </a-col>
                        </a-row>        
                    </div>
                </div>
                <div class="product-category">
                    <div class="category">
                        <h3>Laminates</h3>
                        <span>03</span>
                        <p class="link"><a-icon type="redo" />Reset To Original</p>
                    </div>
                    <div class="items">
                        <a-row>
                            <a-col :span="2">
                                <a-checkbox @change="onChange"></a-checkbox>
                            </a-col>
                            <a-col :span="5">
                                <img src="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg" alt="product-img">
                            </a-col>
                            <a-col :span="7">
                                <p class="product-desc">Product Name ABC which is a long name...</p>
                            </a-col>
                            <a-col :span="6" class="col">
                                <div class="noOfItems">
                                    <button class="btn" v-on:click="decrement(number)"><a-icon type="minus" class="icon"/></button>
                                    <input :value="number" class="input-box" placeholder="1">
                                    <button class="btn" v-on:click="increment(number)"><a-icon type="plus" class="icon"/></button>
                                </div>
                                <p>Boxes</p>
                                <span>[100 sq.ft]</span>
                            </a-col>
                            <a-col :span="3">
                                <p class="price">₹21.58</p>
                            </a-col>
                        </a-row>        
                    </div>
                    <div class="items">
                        <a-row>
                            <a-col :span="2">
                                <a-checkbox @change="onChange"></a-checkbox>
                            </a-col>
                            <a-col :span="5">
                                <img src="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg" alt="product-img">
                            </a-col>
                            <a-col :span="7">
                                <p class="product-desc">Product Name ABC which is a long name...</p>
                            </a-col>
                            <a-col :span="6" class="col">
                                <div class="noOfItems">
                                    <button class="btn" v-on:click="decrement(number)"><a-icon type="minus" class="icon"/></button>
                                    <input :value="number" class="input-box" placeholder="1">
                                    <button class="btn" v-on:click="increment(number)"><a-icon type="plus" class="icon"/></button>
                                </div>
                                <p>Boxes</p>
                                <span>[100 sq.ft]</span>
                            </a-col>
                            <a-col :span="3">
                                <p class="price">₹21.58</p>
                            </a-col>
                        </a-row>        
                    </div>
                    <div class="items">
                        <a-row>
                            <a-col :span="2">
                                <a-checkbox @change="onChange"></a-checkbox>
                            </a-col>
                            <a-col :span="5">
                                <img src="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg" alt="product-img">
                            </a-col>
                            <a-col :span="7">
                                <p class="product-desc">Product Name ABC which is a long name...</p>
                            </a-col>
                            <a-col :span="6" class="col">
                                <div class="noOfItems">
                                    <button class="btn" v-on:click="decrement(number)"><a-icon type="minus" class="icon"/></button>
                                    <input :value="number" class="input-box" placeholder="1">
                                    <button class="btn" v-on:click="increment(number)"><a-icon type="plus" class="icon"/></button>
                                </div>
                                <p>Boxes</p>
                                <span>[100 sq.ft]</span>
                            </a-col>
                            <a-col :span="3">
                                <p class="price">₹21.58</p>
                            </a-col>
                        </a-row>        
                    </div>
                </div>
            </div>
            <div class="total-price">
                <p class="subtotal">Subtotal</p>
                <p class="total">₹2145.58</p>
                <button class="btn-checkout">Checkout</button>
            </div>
        </div>
    </section>
</template>

<script>
export default({
    name: 'Cart',
    data() {
        return {
            number: 1,
        };
    },
    methods: {
        onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        },
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
})
</script>

<style scoped>
    .cart{
        margin-top: 1rem;
        padding: 10px;
        background-color: white;
        border-radius: 5px;
        position: sticky;
        top: 0px;
    }
    .cart-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 3px 0px 15px #C1C1C129;
    }
    .link{
        font-size: 0.8rem;
        color: #FF7A34;
        text-decoration: underline;
    }
    .products{
        margin-top: 0.7rem;
        padding: 2px;
        overflow-y: scroll;
        height: 38rem;
    }
    .products::-webkit-scrollbar { /* WebKit */
        width: 0;
        height: 0;
    }
    .product-category{
        margin-bottom: unset;
        padding-top: 5px;
        padding-bottom: unset;
        /* overflow-y: scroll;
        height: 20rem; */
    }
    /* .product-category::-webkit-scrollbar { 
        width: 0;
        height: 0;
    } */
    .category{
        display: flex;
        text-align: center;
        margin-bottom: unset;
        margin-left: 0.5rem;
        border-bottom: 2px solid #a7a5a529;
    }
    .category h3{
        font-size: 1rem;
    }
    .category span{
        margin-left: 0.5rem;
        font-size: 0.8rem;
    }
    .category p{
        margin-left: 3.5rem;
    }
    .items{
        padding: 2px;
        margin-top: 0.6rem;
        margin-bottom: 1rem;
    }
    .items img{
        width: 3rem;
    }
    .noOfItems{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 3rem;
    }
    .btn{
        background-color: white;
        /* padding: 0.4rem; */
        outline: none;
        border: none;
        cursor: pointer;
    }
    .btn .icon{
        font-size: 0.6rem; 
        color: #FF7A34; 
    }
    .input-box{
        width: 1rem;
        text-align: center;
        border: none;
    }
    .col p{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;
        margin-bottom: unset;
    }
    .col span{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.6rem;
        font-weight: 100;
    }
    .price{
        font-size: 0.7rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .total-price{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 0.6rem;
        box-shadow: 3px 0px 15px #C1C1C129;
        padding: 5px 10px 0px 10px;
    }
    .subtotal{
        font-size: 0.8rem;
        color: #2A2A2A;
        margin-top: 0.3rem;
    }
    .total{
        font-size: 1rem;
        font-weight: bold;
        margin-left: 1rem;
        margin-top: 0.4rem;
    }
    .btn-checkout{
        margin-left: 2rem;
        border-radius: 20px;
        background-color: #FF7A34;
        color: white;
        outline: none;
        border: none;
        padding: 5px 20px;
    }
</style>