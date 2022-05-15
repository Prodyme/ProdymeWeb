<template>
    <section class="main">
        <div class="product-card">
            <div class="recommend"> <p>Recommended</p> </div>
            <div class="card-content">
                <div class="header">
                    <h2>Product Name ABC</h2>
                    <a-icon type="heart" class="icon"/>
                    <button class="btn">Confirm</button>
                </div>
                <h3 class="sub-heading">Product Category Name (Example: Plywood)</h3>
                <div class="rating">
                    <a-rate v-model="value" class="star"/> <p>4.4 <span>(328 reviews)</span></p>
                </div>
                <div class="about-product">
                   <a-row>
                        <a-col :span="11" class="col1">
                            <div class="product-img">
                                <div class="mainImg">
                                    <img src="https://vinawoodltd.com/wp-content/uploads/2020/08/21806.jpg" alt="product-img">
                                </div>
                                <div class="otherImgs">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4hnHR2_XstI4XnDUvhqD20DBgAM-P8Vjag&usqp=CAU" alt="">
                                    <img src="https://media.istockphoto.com/photos/plywood-texture-and-background-picture-id1168040721?b=1&k=20&m=1168040721&s=170667a&w=0&h=dfQidVkusFyDWK5IWBtSTqo0wJ7qElHxCPHOHndj5FQ=" alt="">
                                    <img src="https://5.imimg.com/data5/JZ/YL/XC/ANDROID-45389141/product-jpeg-500x500.jpeg" alt="">
                                    <img src="https://5.imimg.com/data5/JZ/YL/XC/ANDROID-45389141/product-jpeg-500x500.jpeg" alt="">
                                    <img src="https://5.imimg.com/data5/JZ/YL/XC/ANDROID-45389141/product-jpeg-500x500.jpeg" alt="">
                                </div>
                            </div>
                        </a-col>
                        <a-col :span="13" class="col2">
                            <div class="price">
                                <h3>₹2110.00<span>/ sheet</span></h3>
                                <a href="">Details</a>
                            </div>
                            <hr style="margin-top: -0.5rem">
                            <div class="details">
                                <div class="colors">
                                    <h5 class="details-heading">Available Colours</h5>
                                    <button class="color-btn" style="background-color: #826556"></button>
                                    <button class="color-btn" style="background-color: #DFCCA9"></button>
                                    <button class="color-btn" style="background-color: #F8E5BC; border: 3px solid #FF7A34"></button>
                                    <button class="color-btn" style="background-color: #C2A878"></button>
                                </div>
                                <div class="quantity">
                                    <h5 class="details-heading">Quantity</h5>
                                    <div class="noOfItems">
                                        <!-- <button class="qt-btn" v-on:click="decrement(number)"><a-icon type="minus" class="icon"/></button> -->
                                        <button class="qt-btn" v-on:click="decrement(number)">-</button>
                                        <input :value="number" class="input-box">
                                        <button class="qt-btn" v-on:click="increment(number)">+</button>
                                        <!-- <button class="qt-btn" v-on:click="increment(number)"><a-icon type="plus" class="icon"/></button> -->
                                    </div>
                                    <p style="font-weight: bold">[100 sq.ft]</p>
                                </div>
                            </div>   
                            <div class="product-desc">
                                <h3>Product Description</h3>  
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>  
                            </div> 
                        </a-col>
                    </a-row>
                </div>
            </div>    
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      value: 4,
      number: 1,
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
    .product-card{
        margin: 0rem -1.2rem 0rem -2rem;
        background-color: white;
        box-shadow: 0px 3px 6px #00000029;
        padding-bottom: 0.1rem;
    }
    .recommend{
        width: 8rem;
        display: flex;
        justify-content: center;
        border-top: 30px solid #FF7A34;
        border-right: 20px solid transparent;
        position: relative;
    }
    .recommend p{
        position: absolute;
        top: -1.3rem;
        color: white;
        font-size: 0.7rem;
    }
    .card-content{
        /* border: 1px solid salmon; */
        margin: 0.8rem 0.7rem;
    }
    .header{
        display: flex;
        align-items: center;
        margin-bottom: unset;
    }
    .header h2{
        font-size: 1.7rem;
        margin-top: 0.3rem;
    }
    .icon{
        color: #FF7A34;
        font-size: 1.2rem;
        font-weight: bold;
        margin: 0rem 1rem 0rem 9rem;
    }
    .btn{
        background-color: #2A2A2A;
        color: white;
        border-radius: 20px;
        border: none;
        padding: 5px 20px;
        cursor: pointer;
    }
    .sub-heading{
        margin-top: -1rem;
        padding-top: unset;
        font-weight: normal;
        font-size: 0.8rem;
    }
    .rating{
        display: flex;
        text-align: center;
    }
    .rating p{
        font-weight: bold;
        margin-left: 1rem;
        font-size: 1rem;
        margin-top: 0.2rem;
    }
    .rating span{
        color: #BCBCBC;
        font-weight: normal;
    }
    .col1{
        padding: 0rem 1rem 1rem 1rem;
    }
    .mainImg{
        display: flex;
        justify-content: center;
        margin-bottom: 0.5rem;
    }
    .mainImg img{
        width: 14rem;
        height: 10rem;
        border-radius: 10px;
    }
    .otherImgs{
        display: flex;
        justify-content: space-between;
        overflow-x: scroll;
        width: 13rem;
    }
    .otherImgs::-webkit-scrollbar { /* WebKit */
        width: 0;
        height: 0;
    }
    .otherImgs img{
        width: 4rem;
        height: 4rem; 
        border-radius: 10px;
        margin-right: 0.8rem;
    }
    .price{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: unset;
        margin: unset;
    }
    .price h3{
        font-size: 1.6rem;
    }
    .price span{
        font-size: 0.8rem;
    }
    .price a{
        padding: 0.5rem;
        color: #FF7A34;
        text-decoration: underline;
    }
    .quantity{
        display: flex;
        flex-direction: column;
        align-items: center;
        /* border: 1px solid yellowgreen; */
        width: 5rem;
    }
    .noOfItems{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 5rem;
    }
    .qt-btn{
        background-color: white;
        display: flex;
        justify-content: center;
        outline: none;
        border: none;
        cursor: pointer;
        width: 1rem;
        font-size: 1rem;
        color: #FF7A34;
    }
    .qt-btn .icon{
        font-size: 0.8rem; 
        color: #FF7A34; 
    }
    .noOfItems span{
        font-size: 0.8rem;
    }
    .input-box{
        width: 1rem;
        text-align: center;
        border: none;
    }
    .details{
        /* border: 1px solid blue; */
        display: flex;
        justify-content: space-between;
    }
    .details-heading{
        font-size: 0.8rem;
        padding-bottom: unset;
    }
    .colors{
        width: 9rem;
    }
    .color-btn{
        padding: 0.7rem;
        border-radius: 50%;
        border: none;
        margin-right: 0.5rem;
        cursor: pointer;
    }
    .product-desc h3{
        font-size: 0.8rem;
        padding: unset;
    }
    .product-desc p{
        height: 5rem;
        font-size: 0.7rem;
        overflow-y: hidden;
    }
</style>