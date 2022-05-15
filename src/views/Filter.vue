<template>
    <section>
        <a-row>
            <a-col :span="4" class="filter-category-part">
                <div class="filter-option ml-20 mt-20">
                    <font-awesome-icon icon="fa-solid fa-filter" />
                    <p class="filters-heading  ml-12">Filters</p>
                    <Accordian />
                    <br>
                    <Accordian />
                    <br>
                    <Accordian />
                    <br>
                    <Accordian />
                </div>

            </a-col>

            <a-col :span="20" class="products-part">
                <div class="banner-card">
                    <img src="https://www.accruent.com/static/b3c4e13c979e79696ed8a9b9ca6d5bc1/7d7d1/accruent_resources_blog-entries_what-are-the-five-phases-of-the-construction-life-cycle-_hero.jpg"
                        alt="Image" style="height: 50vh; width: 100vw">
                </div>
                <article class="d-flex">
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
                    <span style="margin-left:55%">
                        <SearchBar style="margin-right:50px;" />
                        <!-- <a-pagination :current="current" simple :total="50" /> -->
                        <button class="pagination-button">
                            <left-outlined /></button>
                        <a-input :value="1" style="width:31px; border:none;" /> of 45
                        <button class="pagination-button">
                            <right-outlined /></button>
                    </span>

                </article>



                <div class="mt-60 d-flex content-justify">
                    <div>
                        <AddToCart />
                    </div>
                    <div>
                        <AddToCart />
                    </div>
                    <div>
                        <AddToCart />
                    </div>
                    <div>
                        <AddToCart />
                    </div>
                </div>




                <!---------------2nd row------------------>
                <div class="mt-60 d-flex content-justify">
                    <div>
                        <AddToCart />
                    </div>
                    <div>
                        <AddToCart />
                    </div>
                    <div>
                        <AddToCart />
                    </div>
                    <div>
                        <AddToCart />
                    </div>
                </div>
                <!----------3rd row-------->
                <div class="mt-60 d-flex content-justify">
                    <div>
                        <AddToCart />
                    </div>
                    <div>
                        <AddToCart />
                    </div>
                    <div>
                        <AddToCart />
                    </div>
                    <div>
                        <AddToCart />
                    </div>
                </div>
                <!-------------4th row----------->
                <div class="mt-60 d-flex content-justify">
                    <div>
                        <AddToCart />
                    </div>
                    <div>
                        <AddToCart />
                    </div>
                    <div>
                        <AddToCart />
                    </div>
                    <div>
                        <AddToCart />
                    </div>
                </div>
                <!------------5th row------------->
                <div class="mt-60 d-flex content-justify">
                    <div>
                        <AddToCart />
                    </div>
                    <div>
                        <AddToCart />
                    </div>
                    <div>
                        <AddToCart />
                    </div>
                    <div>
                        <AddToCart />
                    </div>
                </div>
                <span style="float:right;margin-top:30px;">

                    <!-- <a-pagination :current="current" simple :total="50" /> -->
                    <button class="pagination-button">
                        <left-outlined /></button>
                    <a-input :value="1" style="width:31px; border:none;" /> of 45
                    <button class="pagination-button">
                        <right-outlined /></button>
                </span>
            </a-col>

        </a-row>
        <Footer />
    </section>
</template>

<script>
    import {
        // DownOutlined,
        LeftOutlined,
        RightOutlined
    } from '@ant-design/icons-vue';
    import Footer from "@/components/Global/Footer.vue";
    import AddToCart from "@/components/Global/AddToCart.vue";
    //   import SearchBar from "@/components/Global/AddToCart.vue";

    import Accordian from "@/components/Global/Accordian.vue";
    //  import Select from "@/components/Global/Select.vue";


    import SearchBar from "@/components/Global/SearchBar.vue";
    //   import Collapse from "@/components/Global/Collapse.vue";

    export default ({
        components: {
            Footer,
            Accordian,
            // DownOutlined,
            AddToCart,
            LeftOutlined,
            RightOutlined,
            //  SearchBar,
            //    Select,
            SearchBar,
            // Collapse,
        }
    });
</script>

<style lang="scss" scoped>
    .mt-60 {
        margin-top: 60px;
    }

    .ml-12 {
        margin-left: 12px;
    }

    .ml-20 {
        margin-left: 20px;
    }

    .mt-20 {
        margin-top: 20px;
    }

    .d-flex {
        display: flex;
    }

    .content-justify {
        justify-content: space-around;
    }

    .space-between {
        justify-content: space-between;
    }

    .filter-category-part {
        background-color: #2A2A2A;
        // max-height: 100%;
        height: 2350px;
    }

    .banner-card {
        position: relative;
        background-color: black;
        margin-bottom: 30px;
    }

    .banner-card img {
        max-height: 50vh;
        max-width: 100%;
        // /* width: 100vw; */
        opacity: 0.3; 
      
    }

  
    .products-part {
        background-color: #F8F8F8;
        padding: 20px;
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