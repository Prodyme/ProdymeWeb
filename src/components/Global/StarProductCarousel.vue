<template>
  <a-row>
            <a-col :span="10">
                <div class="product-main-carousel" style="margin:40px;">
                    <h2>5 Star Products!</h2>
                    <VueSlickCarousel v-bind="five_star_settings" :dots="false" :key="$route.fullPath">

                        <a-card :bordered="false">
                            <center>
                                <img src="mountains.jpg" width="100px">
                            </center>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" class="empty-star" />
                            <hr class="product-hr">
                            <h2 class="box-rupee">&#8377;21.58</h2><small class="product-per-box"> per box</small>
                            <a-checkbox @change="onChange" class="product-checkbox">
                                Add to Smart Builder
                            </a-checkbox>
                        </a-card>
                        <a-card :bordered="false">
                            <center>
                                <img src="mountains.jpg" width="100px">
                            </center>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" class="empty-star" />
                            <hr class="product-hr">
                            <h2 class="box-rupee">&#8377;21.58</h2><small class="product-per-box"> per box</small>
                            <a-checkbox @change="onChange" class="product-checkbox">
                                Add to Smart Builder
                            </a-checkbox>
                        </a-card>
                        <div>
                            <a-card :bordered="false">
                                <center>
                                    <img src="mountains.jpg" width="100px">
                                </center>
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" class="empty-star" />
                                <hr class="product-hr">
                                <h2 class="box-rupee">&#8377;21.58</h2><small class="product-per-box"> per box</small>
                                <a-checkbox @change="onChange" class="product-checkbox">
                                    Add to Smart Builder
                                </a-checkbox>
                            </a-card>
                        </div>
                    </VueSlickCarousel>
                </div>
            </a-col>
            <!-------------3 STAR PRODUCTS CAROUSEL------------->
            <a-col :span="14">
                <div class="product-main-carousel" style="margin:40px;">
                    <h2>3 Star Products!</h2>
                    <VueSlickCarousel v-bind="three_star_settings" :dots="false" :key="$route.fullPath">
                        <a-card :bordered="false">
                            <center>
                                <img src="mountains.jpg" width="100px">
                            </center>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" class="empty-star" />
                            <hr class="product-hr">
                            <h2 class="box-rupee">&#8377;21.58</h2><small class="product-per-box"> per box</small>
                            <a-checkbox @change="onChange" class="product-checkbox">
                                Add to Smart Builder
                            </a-checkbox>
                        </a-card>
                        <a-card :bordered="false">
                            <center>
                                <img src="mountains.jpg" width="100px">
                            </center>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" class="empty-star" />
                            <hr class="product-hr">
                            <h2 class="box-rupee">&#8377;21.58</h2><small class="product-per-box"> per box</small>
                            <a-checkbox @change="onChange" class="product-checkbox">
                                Add to Smart Builder
                            </a-checkbox>
                        </a-card>
                        <a-card :bordered="false">
                            <center>
                                <img src="mountains.jpg" width="100px">
                            </center>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" class="empty-star" />
                            <hr class="product-hr">
                            <h2 class="box-rupee">&#8377;21.58</h2><small class="product-per-box"> per box</small>
                            <a-checkbox @change="onChange" class="product-checkbox">
                                Add to Smart Builder
                            </a-checkbox>
                        </a-card>
                        <a-card :bordered="false">
                            <center>
                                <img src="mountains.jpg" width="100px">
                            </center>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <font-awesome-icon icon="fa-solid fa-star" class="empty-star" />
                            <hr class="product-hr">
                            <h2 class="box-rupee">&#8377;21.58</h2><small class="product-per-box"> per box</small>
                            <a-checkbox @change="onChange" class="product-checkbox">
                                Add to Smart Builder
                            </a-checkbox>
                        </a-card>
                        <div>
                            <a-card :bordered="false">
                                <center>
                                    <img src="mountains.jpg" width="100px">
                                </center>
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" class="empty-star" />
                                <hr class="product-hr">
                                <h2 class="box-rupee">&#8377;21.58</h2><small class="product-per-box"> per box</small>
                                <a-checkbox @change="onChange" class="product-checkbox">
                                    Add to Smart Builder
                                </a-checkbox>
                            </a-card>
                        </div>
                    </VueSlickCarousel>
                </div>
            </a-col>
        </a-row>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    // @ is an alias to /src
  

    export default {
        name: 'StarCarousel',
        components: {
            VueSlickCarousel,
            
        },
        data() {
            return {
                five_star_settings: {
                    "arrows": true,
                    "focusOnSelect": true,
                    "infinite": true,
                    "speed": 500,
                    "slidesToShow": 2,
                    "slidesToScroll": 2,
                    "touchThreshold": 5

                },
                three_star_settings: {
                    "arrows": true,
                    "focusOnSelect": true,
                    "infinite": true,
                    "speed": 500,
                    "slidesToShow": 3,
                    "slidesToScroll": 3,
                    "touchThreshold": 5
                }
            }
        }
    }
                
</script>

<style lang="scss" scoped>
 .box-rupee {
        display: inline;
        font-size: 28px;
    }

    .product-checkbox {
        margin-top: 10px;
    }

    .fa-star {
        color: #FF7A34;
        margin: 3px;
    }

    .empty-star {
        color: #BCBCBC;
    }

    .fa-heart {
        color: #FF7A34;
        float: right;
        position: relative;
        left: 20px;
        bottom:20px;
    }
    

    .product-per-box {
        font-size: 106%;
        font-weight: bold;
    }

    h3,
    h2 {
        font-weight: 700
    }
     .product-hr {

        /* background-color: gray; */
        border-bottom: none;
        border-top: 1px solid #D9D9D9;
    }
    .product-main-carousel {
            padding: 40px;
            // box-shadow: 0
            box-shadow: 3px 3px 20px #00000029;
            background-color: white;
        }

</style>