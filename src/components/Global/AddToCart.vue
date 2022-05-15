<template>
    <a-card :bordered="false" class="category-card">
        <a-icon type="heart" class="wishlist" />
        <center>
            <img src="../../assets/mountains.jpg" width="100px">
        </center>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
        <aside class="princeReview">
            <a-rate :default-value="4" allow-half />
        </aside>
        <hr class="product-hr">
        <h2 class="box-rupee">&#8377;21.58</h2><small class="product-per-box"> per box</small>
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
</template>
<script>
    export default {
        name: "AddToCart",
        data() {
            return {
                number: 1,
            };
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
    }
</script>

<style lang="scss" scoped>
    .add-to-cart {
        float: right;
        position: relative;
        top: 10px;
        left: 17px;
    }

    .category-card:hover {
        background-color: white !important;
        box-shadow: 3px 3px 20px #00000029;

        .fa-heart {
            padding: 10px;
            transition: 0.5s;
        }

        .increase-decrease {
            background-color: white;

        }
        .input-box{
            background-color: #f4f4f4;
        }
    }

    .increase-decrease {
        border: none;
        color: #FF7A34;
        background-color: #F8F8F8;
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