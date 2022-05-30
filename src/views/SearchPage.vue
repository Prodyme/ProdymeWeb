<template>
    <section>
        <a-row>
            <a-col :span="4" class="filter-category-part">
                <!----filter category part------>
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
            </a-col>
            <!---------products part----------->
            <a-col :span="20" class="products-part">
                <div style="padding:20px;">
                    <div class="mb-20">
                        <!-------breadcrumbs------>
                        <a-breadcrumb>
                            <a-breadcrumb-item>Home</a-breadcrumb-item>
                            <a-breadcrumb-item><a href=""><b>Search Results</b></a></a-breadcrumb-item>
                        </a-breadcrumb>
                    </div>
                    <!---page-header------->
                    <div class="mb-20">
                        <a-page-header title="Back to Home" @back="() => null" />
                    </div>
                    <div class="mb-20">
                        <h1 class="results-heading">Results for 'Kitchen,L-shape,Sustainable'</h1>
                    </div>
                    <!--------tabs---------->
                    <div class="tabs">
                        <a-tabs default-active-key="1" @change="callback">
                            <a-tab-pane key="1" tab="Products">
                            </a-tab-pane>
                            <a-tab-pane key="2" tab="Blogs" force-render>
                            </a-tab-pane>
                            <a-tab-pane key="3" tab="Services">
                            </a-tab-pane>
                        </a-tabs>
                    </div>
                    <!-----dropdown and pagination---------->
                    <article class="d-flex space-between">
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
                            <!-- <a-pagination :current="current" simple :total="50" /> -->
                            <button class="pagination-button">
                                <left-outlined /></button>
                            <a-input :value="1" style="width:31px; border:none;" /> of 45
                            <button class="pagination-button">
                                <right-outlined /></button>
                        </span>
                    </article>
                    <!----heading------->
                    <h2 class="product-heading">Category of Products</h2>
                </div>
                <!-----products------>
                <a-row type="flex" justify="space-around" style="padding:10px 20px;" >
                     <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding:10px 20px;">
                           <AddToCart />
                     </a-col >
                         <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding:10px 20px;">
                           <AddToCart />
                     </a-col>
                        <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding:10px 20px;">
                           <AddToCart />
                     </a-col>
                        <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding:10px 20px;">
                           <AddToCart />
                     </a-col>
                </a-row>
                <SearchCarousel style="margin-top:40px" />
                <SearchPageStarCarousel />
                <h2 class="product-heading" style="padding:20px;">Category of Products</h2>
                <a-row type="flex" justify="space-around" style="padding:10px 20px;" >
                     <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding:10px 20px;">
                           <AddToCart />
                     </a-col >
                         <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding:10px 20px;">
                           <AddToCart />
                     </a-col>
                        <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding:10px 20px;">
                           <AddToCart />
                     </a-col>
                        <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding:10px 20px;">
                           <AddToCart />
                     </a-col>
                </a-row>
               <a-row type="flex" justify="space-around" style="padding:10px 20px;" >
                     <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding:10px 20px;">
                           <AddToCart />
                     </a-col >
                         <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding:10px 20px;">
                           <AddToCart />
                     </a-col>
                        <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding:10px 20px;">
                           <AddToCart />
                     </a-col>
                        <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" style="padding:10px 20px;">
                           <AddToCart />
                     </a-col>
                </a-row>
            </a-col>
        </a-row>
        <Footer />
    </section>
</template>

<script>
    import {
        // DownOutlined,
        LeftOutlined,
        RightOutlined,
    } from '@ant-design/icons-vue';
    import AddToCart from "@/components/Global/AddToCart.vue";
    import SearchCarousel from "@/components/Global/SearchPageCarousel.vue";
    import SearchPageStarCarousel from "@/components/Global/SearchPageStarProducts.vue";
    import Footer from "@/components/Global/Footer.vue";
    import Accordian from "@/components/Global/Accordian.vue";
    export default {
        name: "Search",
        components: {
            LeftOutlined,
            RightOutlined,
            AddToCart,
            SearchCarousel,
            SearchPageStarCarousel,
            Footer,
            Accordian,

        },
        data() {
            return {};
        },
        methods: {
            callback(key) {
                console.log(key);
            },
        },
    }
</script>

<style lang="scss" scoped>
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

    .products-part {
        background-color: #F8F8F8;
    }

    .features {
        a {
            color: #2A2A2A;
        }
    }

    .filter-category-part {
        background-color: #2A2A2A;
        // max-height: 100%;
        height: 2270px;
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

    .pagination-button {
        border: none;
        background-color: #F4F4F4;
    }

    .product-heading {
        display: flex;
        align-items: center;
        margin: 0;
    }

    .product-heading::after {
        content: '';
        flex: 1;
        margin-left: 1rem;
        height: 1px;
        background-color: #000;
    }

    .results-heading {
        font-size: 2.25em;
    }
</style>
<style>
    .ant-page-header {
        padding: 0 !important;
    }

    .ant-page-header-back-button {
        color: #FF7A34 !important;
    }

    .ant-page-header-heading-title {
        color: #FF7A34 !important;
        font-size: 16px !important;
    }

    .ant-tabs-nav .ant-tabs-tab {
        color: #ff7a34 !important;
        padding: 10px 4px !important;

        font-size: 20px !important;

    }

    .ant-tabs-ink-bar {
        background-color: #FF7A34 !important;
    }

    .search-buttons .ant-btn-primary {
        background-color: #FF7A34 !important;
        border-color: #FF7A34 !important;
        border-radius: 16px !important;
        margin: 2px !important;
    }
</style>