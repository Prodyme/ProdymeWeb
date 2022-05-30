<template>
    <section>
        <a-row>
            <a-col :span="4" class="service-sidebar-part">
                <!----filter category part------>
                <!-- <a-layout-sider style="max-height:100%"> -->
                <div class="filter-option ml-20 mt-20">
                    <font-awesome-icon icon="fa-solid fa-filter" />
                    <p class="filters-heading  ml-12">Filters</p>
                    <!------search button----->
                    <a-input-search placeholder="Search keywords" style="width: 157px;margin:7px;" @search="onSearch" />
                    <div class=" search-buttons" style="margin-bottom:20px;">
                        <a-button type="primary">
                            steel
                            <a-icon type="close" />
                        </a-button>
                        <a-button type="primary">
                            key
                            <a-icon type="close" />
                        </a-button>
                        <a-button style="padding-right:22px;" type="primary">
                            carbon fibre mat
                            <a-icon type="close" style="position:relative;left:12px;" />
                        </a-button>
                    </div>
                    <!-----------accordians------->
                    <Accordian />
                    <br>
                    <Accordian />
                    <br>
                    <Accordian />
                    <br>
                    <Accordian />
                </div>
                <!-- </a-layout-sider> -->
            </a-col>
            <a-col :span="20" style="background-color:#F8F8F8">
                <section style="margin-left:20px;">
                    <a-breadcrumb>
                        <a-breadcrumb-item>Home</a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">Hire Service Provider</a></a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">Carpenter</a></a-breadcrumb-item>
                    </a-breadcrumb>
                    <div class="carpenter-service-heading">
                        <h3>Carpenter</h3>
                        <p>Select a type of work that you need to be done.</p>
                    </div>
                    <a-row>
                        <a-col :span="16">
                            <a-row class="card-col-8">
                                <a-col :span="8">
                                    <a-card class="hire-card" style="width: 352px;height: 222px; padding:0px;">
                                        <div class="d-flex ">
                                            <div>
                                                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                                    alt="img" style="width: 107px;height: 107px;">
                                            </div>
                                            <div class="title-rating">
                                                <h5>Creating Living room furniture</h5>
                                                <aside class="princeReview">
                                                    <a-rate :default-value="4" allow-half />
                                                </aside>
                                            </div>
                                            <div class="price" style="margin-right:20px">
                                                <span>&#8377;2100<small>/day</small></span>
                                            </div>
                                        </div>
                                        <div class="combo-description">
                                            <p>Creating sofa set, TV unit and a coffee table combo</p>
                                        </div>
                                        <div class="d-flex">
                                            <div class="view-details">
                                                <a href="">View Details</a>
                                            </div>
                                            <div class="quantities">
                                                <button @click="decrement(number)" class="increase-decrease">
                                                    <a-icon type="minus" /></button>
                                                <input :value="number" class="input-box">
                                                <button @click="increment(number)" class="increase-decrease">
                                                    <a-icon type="plus" /></button>
                                            </div>
                                            <div class="add-button">
                                                <a-button type="primary">
                                                    Add
                                                </a-button>
                                            </div>
                                        </div>
                                    </a-card>
                                </a-col>
                                <a-col :span="8">
                                    <a-card class="hire-card" style="width: 352px;height: 222px; padding:0px;">
                                        <div class="d-flex ">
                                            <div>
                                                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                                    alt="img" style="width: 107px;height: 107px;">
                                            </div>
                                            <div class="title-rating">
                                                <h5>Creating Living room furniture</h5>
                                                <aside class="princeReview">
                                                    <a-rate :default-value="4" allow-half />
                                                </aside>
                                            </div>
                                            <div class="price" style="margin-right:20px">
                                                <span>&#8377;2100<small>/day</small></span>
                                            </div>
                                        </div>
                                        <div class="combo-description">
                                            <p>Creating sofa set, TV unit and a coffee table combo</p>
                                        </div>
                                        <div class="d-flex">
                                            <div class="view-details">
                                                <a href="">View Details</a>
                                            </div>
                                            <div class="quantities">
                                                <button @click="decrement(number)" class="increase-decrease">
                                                    <a-icon type="minus" /></button>
                                                <input :value="number" class="input-box">
                                                <button @click="increment(number)" class="increase-decrease">
                                                    <a-icon type="plus" /></button>
                                            </div>
                                            <div class="add-button">
                                                <a-button type="primary">
                                                    Add
                                                </a-button>
                                            </div>
                                        </div>
                                    </a-card>
                                </a-col>
                            </a-row>
                            <a-row class="card-col-8">
                                <a-col :span="8">
                                    <a-card class="hire-card" style="width: 352px;height: 222px; padding:0px;">
                                        <div class="d-flex ">
                                            <div>
                                                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                                    alt="img" style="width: 107px;height: 107px;">
                                            </div>
                                            <div class="title-rating">
                                                <h5>Creating Living room furniture</h5>
                                                <aside class="princeReview">
                                                    <a-rate :default-value="4" allow-half />
                                                </aside>
                                            </div>
                                            <div class="price" style="margin-right:20px">
                                                <span>&#8377;2100<small>/day</small></span>
                                            </div>
                                        </div>
                                        <div class="combo-description">
                                            <p>Creating sofa set, TV unit and a coffee table combo</p>
                                        </div>
                                        <div class="d-flex">
                                            <div class="view-details">
                                                <a href="">View Details</a>
                                            </div>
                                            <div class="quantities">
                                                <button @click="decrement(number)" class="increase-decrease">
                                                    <a-icon type="minus" /></button>
                                                <input :value="number" class="input-box">
                                                <button @click="increment(number)" class="increase-decrease">
                                                    <a-icon type="plus" /></button>
                                            </div>
                                            <div class="add-button">
                                                <a-button type="primary">
                                                    Add
                                                </a-button>
                                            </div>
                                        </div>
                                    </a-card>
                                </a-col>
                                <a-col :span="8">
                                    <a-card class="hire-card" style="width: 352px;height: 222px; padding:0px;">
                                        <div class="d-flex ">
                                            <div>
                                                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                                    alt="img" style="width: 107px;height: 107px;">
                                            </div>
                                            <div class="title-rating">
                                                <h5>Creating Living room furniture</h5>
                                                <aside class="princeReview">
                                                    <a-rate :default-value="4" allow-half />
                                                </aside>
                                            </div>
                                            <div class="price" style="margin-right:20px">
                                                <span>&#8377;2100<small>/day</small></span>
                                            </div>
                                        </div>
                                        <div class="combo-description">
                                            <p>Creating sofa set, TV unit and a coffee table combo</p>
                                        </div>
                                        <div class="d-flex">
                                            <div class="view-details">
                                                <a href="">View Details</a>
                                            </div>
                                            <div class="quantities">
                                                <button @click="decrement(number)" class="increase-decrease">
                                                    <a-icon type="minus" /></button>
                                                <input :value="number" class="input-box">
                                                <button @click="increment(number)" class="increase-decrease">
                                                    <a-icon type="plus" /></button>
                                            </div>
                                            <div class="add-button">
                                                <a-button type="primary">
                                                    Add
                                                </a-button>
                                            </div>
                                        </div>
                                    </a-card>
                                </a-col>
                            </a-row>
                            <a-row class="card-col-8">
                                <a-col :span="8">
                                    <a-card class="hire-card" style="width: 352px;height: 222px; padding:0px;">
                                        <div class="d-flex ">
                                            <div>
                                                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                                    alt="img" style="width: 107px;height: 107px;">
                                            </div>
                                            <div class="title-rating">
                                                <h5>Creating Living room furniture</h5>
                                                <aside class="princeReview">
                                                    <a-rate :default-value="4" allow-half />
                                                </aside>
                                            </div>
                                            <div class="price" style="margin-right:20px">
                                                <span>&#8377;2100<small>/day</small></span>
                                            </div>
                                        </div>
                                        <div class="combo-description">
                                            <p>Creating sofa set, TV unit and a coffee table combo</p>
                                        </div>
                                        <div class="d-flex">
                                            <div class="view-details">
                                                <a href="">View Details</a>
                                            </div>
                                            <div class="quantities">
                                                <button @click="decrement(number)" class="increase-decrease">
                                                    <a-icon type="minus" /></button>
                                                <input :value="number" class="input-box">
                                                <button @click="increment(number)" class="increase-decrease">
                                                    <a-icon type="plus" /></button>
                                            </div>
                                            <div class="add-button">
                                                <a-button type="primary">
                                                    Add
                                                </a-button>
                                            </div>
                                        </div>
                                    </a-card>
                                </a-col>
                                <a-col :span="8" xs="{ span: 5, offset: 1 }"> 
                                    <a-card class="hire-card" style="width: 100%;height:100%; padding:0px;">
                                        <div class="d-flex ">
                                            <div class="w-30 img-parent d-flex">
                                                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                                    alt="img" class="card-responsive-img">
                                            </div>
                                            <div class="title-rating" style="padding:16px;">
                                                <h5>Creating Living room furniture</h5>
                                                <div class="d-flex" style="justify-content:space-between;">
                                                <aside class="princeReview">
                                                    <a-rate :default-value="4" allow-half />
                                                </aside>
                                                <div class="price" style="margin-right:20px">
                                                    <span>&#8377;2100<small>/day</small></span>
                                                </div>
                                                </div>
                                            </div>
                                            <!-- <div class="price" style="margin-right:20px">
                                                <span>&#8377;2100<small>/day</small></span>
                                            </div> -->
                                        </div>
                                        <div class="combo-description">
                                            <p>Creating sofa set, TV unit and a coffee table combo</p>
                                        </div>
                                        <div class="d-flex">
                                            <div class="view-details">
                                                <a href="">View Details</a>
                                            </div>
                                            <div class="quantities">
                                                <button @click="decrement(number)" class="increase-decrease">
                                                    <a-icon type="minus" /></button>
                                                <input :value="number" class="input-box">
                                                <button @click="increment(number)" class="increase-decrease">
                                                    <a-icon type="plus" /></button>
                                            </div>
                                            <div class="add-button">
                                                <a-button type="primary">
                                                    Add
                                                </a-button>
                                            </div>
                                        </div>
                                    </a-card>
                                </a-col>
                            </a-row>
                        </a-col>

                        <!---------------service cart--------------->
                        <a-col :span="4">
                            <div style="width: 352px; height: 509px;background-color:white">
                                <div class="cart-header" style="width: 352px;height: 49px;background-color:#E1E1E1">
                                    <span>Services Cart (43)</span>
                                </div>
                                <div class="cart-table">
                                    <table id="feed" class="services-table">
                                        <tr>
                                            <td> Carpenter work</td>
                                            <td>12 days</td>
                                            <td>&#8377;2,100</td>
                                        </tr>
                                        <tr>
                                            <td> Carpenter work</td>
                                            <td>12 days</td>
                                            <td>&#8377;2,100</td>
                                        </tr>
                                        <tr>
                                            <td> Carpenter work</td>
                                            <td>12 days</td>
                                            <td>&#8377;2,100</td>
                                        </tr>
                                        <tr>
                                            <td> Carpenter work</td>
                                            <td>12 days</td>
                                            <td>&#8377;2,100</td>
                                        </tr>
                                        <tr>
                                            <td> Carpenter work</td>
                                            <td>12 days</td>
                                            <td>&#8377;2,100</td>
                                        </tr>
                                        <tr>
                                            <td> Carpenter work</td>
                                            <td>12 days</td>
                                            <td>&#8377;2,100</td>
                                        </tr>
                                        <tr>
                                            <td> Carpenter work</td>
                                            <td>12 days</td>
                                            <td>&#8377;2,100</td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="cart-footer">
                                    <table>
                                        <tr>
                                            <td style=" padding-right:9.8em;"> Days <span
                                                    style="font-size:18px;">43</span>
                                            </td>
                                            <td>Subtotal</td>
                                            <td>&#8377;2,145.58</td>
                                        </tr>
                                    </table>
                                    <a-button type="primary">
                                        Checkout
                                    </a-button>
                                </div>
                            </div>
                        </a-col>
                    </a-row>


                    <!-- <div class="d-flex " style=" flex-wrap: wrap; ">
                        <a-card class="hire-card" style="width: 352px;height: 222px; padding:0px;">
                            <div class="d-flex ">
                                <div>
                                    <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        alt="img" style="width: 107px;height: 107px;">
                                </div>
                                <div class="title-rating">
                                    <h5>Creating Living room furniture</h5>
                                    <aside class="princeReview">
                                        <a-rate :default-value="4" allow-half />
                                    </aside>
                                </div>
                                <div class="price" style="margin-right:20px">
                                    <span>&#8377;2100<small>/day</small></span>
                                </div>
                            </div>
                            <div class="combo-description">
                                <p>Creating sofa set, TV unit and a coffee table combo</p>
                            </div>
                            <div class="d-flex">
                                <div class="view-details">
                                    <a href="">View Details</a>
                                </div>
                                <div class="quantities">
                                    <button @click="decrement(number)" class="increase-decrease">
                                        <a-icon type="minus" /></button>
                                    <input :value="number" class="input-box">
                                    <button @click="increment(number)" class="increase-decrease">
                                        <a-icon type="plus" /></button>
                                </div>
                                <div class="add-button">
                                    <a-button type="primary">
                                        Add
                                    </a-button>
                                </div>
                            </div>
                        </a-card>

                        <a-card class="hire-card" style="width: 352px;height: 222px; padding:0px;">
                            <div class="d-flex ">
                                <div>
                                    <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        alt="img" style="width: 107px;height: 107px;">
                                </div>
                                <div class="title-rating">
                                    <h5>Creating Living room furniture</h5>
                                    <aside class="princeReview">
                                        <a-rate :default-value="4" allow-half />
                                    </aside>
                                </div>
                                <div class="price" style="margin-right:20px">
                                    <span>&#8377;2100<small>/day</small></span>
                                </div>
                            </div>
                            <div class="combo-description">
                                <p>Creating sofa set, TV unit and a coffee table combo</p>
                            </div>
                            <div class="d-flex">
                                <div class="view-details">
                                    <a href="">View Details</a>
                                </div>
                                <div class="quantities">
                                    <button @click="decrement(number)" class="increase-decrease">
                                        <a-icon type="minus" /></button>
                                    <input :value="number" class="input-box">
                                    <button @click="increment(number)" class="increase-decrease">
                                        <a-icon type="plus" /></button>
                                </div>
                                <div class="add-button">
                                    <a-button type="primary">
                                        Add
                                    </a-button>
                                </div>
                            </div>
                        </a-card>
                    </div>
 -->

                    <!-------------------service cart------------------------->

                    <!-- <div style="width: 352px; height: 509px;background-color:#FFFFFF">
                        <div class="cart-header" style="width: 352px;height: 49px;background-color:#E1E1E1">
                            <span>Services Cart (43)</span>
                        </div>
                        <div class="cart-table">
                            <table id="feed" class="services-table">
                                <tr>
                                    <td> Carpenter work</td>
                                    <td>12 days</td>
                                    <td>&#8377;2,100</td>
                                </tr>
                                <tr>
                                    <td> Carpenter work</td>
                                    <td>12 days</td>
                                    <td>&#8377;2,100</td>
                                </tr>
                                <tr>
                                    <td> Carpenter work</td>
                                    <td>12 days</td>
                                    <td>&#8377;2,100</td>
                                </tr>
                                <tr>
                                    <td> Carpenter work</td>
                                    <td>12 days</td>
                                    <td>&#8377;2,100</td>
                                </tr>
                                <tr>
                                    <td> Carpenter work</td>
                                    <td>12 days</td>
                                    <td>&#8377;2,100</td>
                                </tr>
                                <tr>
                                    <td> Carpenter work</td>
                                    <td>12 days</td>
                                    <td>&#8377;2,100</td>
                                </tr>
                                <tr>
                                    <td> Carpenter work</td>
                                    <td>12 days</td>
                                    <td>&#8377;2,100</td>
                                </tr>
                            </table>
                        </div>
                        <div class="cart-footer">
                            <table>
                                <tr>
                                    <td style=" padding-right:9.8em;"> Days <span style="font-size:18px;">43</span>
                                    </td>
                                    <td>Subtotal</td>
                                    <td>&#8377;2,145.58</td>
                                </tr>
                            </table>
                            <a-button type="primary">
                                Checkout
                            </a-button>
                        </div>
                    </div> -->
                </section>
            </a-col>
        </a-row>
        <Footer />
    </section>
</template>
<script>
    import Accordian from "@/components/Global/Accordian.vue";
    import Footer from "@/components/Global/Footer.vue";

    export default {
        components: {

            Accordian,
            Footer,

        },
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
    .w-30 {
        width: 30%;
    }

    .img-parent {
        height: 110px;

    }

    .card-responsive-img {
        max-width: 100%;
        max-height: 100%;
        margin: auto;
    }

    .ml-20 {
        margin-left: 20px;
    }

    .mt-20 {
        margin-top: 20px;
    }

    .mt-60 {
        margin-top: 60px;
    }

    .mt-30 {
        margin-top: 30px;
    }

    .ml-12 {
        margin-left: 12px;
    }

    .mb-20 {
        margin-bottom: 20px;
    }

    .d-flex {
        display: flex;
    }

    .space-between {
        justify-content: space-between;
    }

    .content-justify {
        justify-content: space-around;
    }


    .service-sidebar-part {
        background-color: #2A2A2A;
        height: 1287px;
    }

    .filter-option {
        color: #F4F4F4;
    }

    .filters-heading {
        display: inline-block;
    }


    .fa-filter {
        color: #FF7A34;
    }

    .carpenter-service-heading {
        font-family: 'Roboto';
        font-weight: 400;

        h3 {

            font-size: 42px;
        }

        p {
            font-size: 20px;
        }
    }

    .title-rating {
     
        h5 {
            font-family: 'Roboto';
            font-weight: bold;
            font-size: 16px;
            width: 100%;


        }
    }

    .price {

        span {
            font-size: 16px;
        }

        small {
            font-size: 12px;
        }
    }

    .combo-description {
        font-size: 12px;

        p {
            margin-left: 20px;
            margin-top: 20px;
        }
    }

    .view-details {
        width: 100%;
        margin-top: 10px;

        a {
            color: #FF7A34;
            font-size: 12px;
            margin-left: 20px;
            text-decoration: underline;
            padding: 10px;
        }
    }

    .princeReview {
        .ant-rate {
            font-size: 12px;
        }
    }

    .increase-decrease {
        border: none;
        color: #FF7A34;
        background-color: white;

    }

    .input-box {
        width: 23%;
        text-align: center;
        border: none;
        background-color: #F8F8F8;
    }

    .quantities {
        margin-top: 10px;
    }

    .add-button {
        .ant-btn-primary {
            width: 90px;
            height: 40px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #FF7A34;
            border-radius: 20px;
            opacity: 1;
            color: #FF7A34;
            margin-right: 20px;
        }
    }

    table {
        border-collapse: separate;
        border-spacing: 0px 10px;
    }

    .services-table {
        margin-top: 11px;
    }

    .cart-header {
        span {
            font-size: 16px;
            font-family: 'Roboto';
            font-weight: bold;
        }
    }

    .cart-table {

        table td:nth-child(1) {
            font-size: 12px;
            width: 30px;
            height: 30px;
            font-family: 'Roboto';
            font-weight: 400;
            padding-right: 12.8em;
            padding-left: 10px;


        }

        table td:nth-child(2) {
            font-size: 10px;
            width: 12px;
            height: 13px;
            padding-right: 40px;

        }

        table td:nth-child(3) {
            font-weight: bold;
            font-size: 18px;

        }
    }

    .cart-footer {
        padding: 4px;
        border-top: 1px solid #D9D9D9;
        box-shadow: 0px 3px 15px #C1C1C129;

        .ant-btn-primary {
            width: 324px;
            height: 40px;
            background: #FF7A34 0% 0% no-repeat padding-box;
            border: 1px solid #FF7A34;
            border-radius: 20px;
            margin-left: 13px;
            padding: 10px;
        }

        table td:nth-child(2) {
            font-size: 10px;
            width: 12px;
            height: 13px;
            padding-right: 24px;

        }

        table td:nth-child(3) {
            font-weight: bold;
            font-size: 18px;

        }

    }
</style>

<style lang="scss">
    .search-buttons .ant-btn-primary {
        background-color: #FF7A34 !important;
        border-color: #FF7A34 !important;
        border-radius: 16px !important;
        margin: 2px !important;
    }

    // .hire-card {
    //     background: #FFFFFF 0% 0% no-repeat padding-box;
    //     box-shadow: 0px 3px 15px #61616129;
    //     opacity: 1;
    //     margin-right: 30px !important;
    //     margin-bottom: 20px !important;

    //     .ant-card-body {
    //         padding: 0px !important;
    //     }

    // }

    // .hire-card:hover {
    //     background: #FFFFFF 0% 0% no-repeat padding-box;
    //     box-shadow: 0px 3px 15px #FF7A346B;
    //     border: 1px solid #FF7A34;
    //     opacity: 1;
    // }

    .card-col-8 .ant-col {
        width: 45.333333% !important;

    }
</style>