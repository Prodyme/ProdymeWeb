<template>
    <section style="background-color:#F8F8F8">
        <div class=" pt-30 d-flex content-justify">
            <div class="category-name-abc">
                <span class="category-name-title"> Category Name ABC</span>
            </div>
            <div class="category-name-abc">
                <span class="category-name-title"> Category Name ABC</span>
            </div>
            <div class="category-name-abc">
                <span class="category-name-title"> Category Name ABC</span>
            </div>
            <div class="category-name-abc">
                <span class="category-name-title"> Category Name ABC</span>
            </div>
            <div class="category-name-abc">
                <span class="category-name-title"> Category Name ABC</span>
            </div>
            <div class="category-name-abc">
                <span class="category-name-title"> Category Name ABC</span>
            </div>
            <div class="category-name-abc">
                <span class="category-name-title"> Category Name ABC</span>
            </div>


        </div>
        <div style="margin-top: 50px;" class=" d-flex content-justify">
            <div class="category-name-abc">
                <span class="category-name-title"> Category Name ABC</span>
            </div>
            <div class="category-name-abc">
                <span class="category-name-title"> Category Name ABC</span>
            </div>
            <div class="category-name-abc">
                <span class="category-name-title"> Category Name ABC</span>
            </div>
            <div class="category-name-abc">
                <span class="category-name-title"> Category Name ABC</span>
            </div>
            <div class="category-name-abc">
                <span class="category-name-title"> Category Name ABC</span>
            </div>
            <div class="category-name-abc">
                <span class="category-name-title"> Category Name ABC</span>
            </div>
            <div class="category-name-abc">
                <span class="category-name-title"> Category Name ABC</span>
            </div>


        </div>

 <div style="margin-top:50px;margin-left:40px" class="d-flex">
                    <section class="features">
                        <a-dropdown>
                            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                                Most Bought
                                <a-icon type="down" />
                            </a>
                            <a-menu slot="overlay">
                                <a-menu-item>
                                    Price : Low to High
                                </a-menu-item>
                                <a-menu-item>
                                    Price : High to Low
                                </a-menu-item>
                                <a-menu-item>
                                    Ratings
                                </a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </section>
                    <span style="margin-left:62%">
                        <SearchBar style="margin-right:50px;" />
                        <!-- <a-pagination :current="current" simple :total="50" /> -->
                        <button class="pagination-button">
                            <left-outlined /></button>
                        <a-input :value="1" style="width:31px; border:none;" /> of 45
                        <button class="pagination-button">
                            <right-outlined /></button>
                    </span>

                </div>
        <div style="background-color:#F8F8F8; margin: 0 40px 30px 40px;">
            <h2 class="product-heading">Category of Products</h2>
            <a-row :gutter="16" class="card-p20">
                <a-col :span="4">
                <AddToCart />
                </a-col>
                <a-col :span="4">
                    <AddToCart />
                </a-col>
                <a-col :span="4">
                  <AddToCart />
                </a-col>
                <a-col :span="4">
                   <AddToCart />
                </a-col>
                <a-col :span="4">
                   <AddToCart />
                </a-col>
            </a-row>
        </div>
        <!--------main-carousel----------->
        <div>
            <MyCarousel />
        </div>
        <!-----------------5 star product carousel---------------->
        <div>
            <StarCarousel />
        </div>
        <!-----------category of products------->
        <div style="background-color:#F8F8F8; margin: 0px 40px">
            <h2 class="product-heading">Category of Products</h2>
             <a-row :gutter="16" class="card-p20">
                <a-col :span="4">
                <AddToCart />
                </a-col>
                <a-col :span="4">
                    <AddToCart />
                </a-col>
                <a-col :span="4">
                  <AddToCart />
                </a-col>
                <a-col :span="4">
                   <AddToCart />
                </a-col>
                <a-col :span="4">
                   <AddToCart />
                </a-col>
            </a-row>
        </div>
        <!-----------2nd part cop------------->
        <div style="background-color:#F8F8F8; padding: 40px;">
             <a-row :gutter="16" class="card-p20">
                <a-col :span="4">
                <AddToCart />
                </a-col>
                <a-col :span="4">
                    <AddToCart />
                </a-col>
                <a-col :span="4">
                  <AddToCart />
                </a-col>
                <a-col :span="4">
                   <AddToCart />
                </a-col>
                <a-col :span="4">
                   <AddToCart />
                </a-col>
            </a-row>
        </div>
        <Footer />
    </section>
</template>

<script>
    // import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    // @ is an alias to /src
    import Footer from "@/components/Global/Footer.vue";
    import MyCarousel from "@/components/Global/Carousel.vue";
    import StarCarousel from "@/components/Global/StarProductCarousel.vue";
    // import ProductCard from "@/components/Global/ProductCard.vue";
    import AddToCart from "@/components/Global/AddToCart.vue";
    
    import SearchBar from "@/components/Global/SearchBar.vue";
      import {
        // DownOutlined,
        LeftOutlined,
        RightOutlined
    } from '@ant-design/icons-vue';
    export default {
        name: 'MyComponent',
        components: {
            Footer,
            MyCarousel,
            StarCarousel,
            // ProductCard,
            AddToCart,
              LeftOutlined,
        RightOutlined,
        SearchBar,
        },
    }
</script>

<style lang="scss" scoped>
    .pt-30 {
        padding-top: 30px;
    }

    .d-flex {
        display: flex;
    }

    .content-justify {
        justify-content: space-around;
    }

    .category-name-abc {
        width: 150px;
        height: 150px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        opacity: 1;
    }

    .category-name-title {
        position: relative;
        top: 150px;
        left: 3px;
        font-size: 1.09em;
        font-weight: 700;
    }

    .product-heading {
        display: flex;
        align-items: center;
        margin-top: 50px;
    }

    .product-heading::after {
        content: '';
        flex: 1;
        margin-left: 1rem;
        height: 1px;
        background-color: #000;
    }

    .features {
        a {
            color: #2A2A2A;
        }
    }

    .pagination-button {
        border: none;
        background-color: #F4F4F4;
    }
</style>
<style>
    /* .slick-prev:before {
        content: "<";
        color:black;
        font-size: 20px;
        font-weight: bold;
    }

    .slick-next:before {
        content: ">";
        color: black;
        font-size: 20px;
        font-weight: bold;
    } */
</style>