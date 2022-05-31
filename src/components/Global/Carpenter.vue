<template>
<div>
    <!-- <div class="carpenter-card"> -->
    <a-col :span="16" class="carpenter-card">
        <a-row>
            <a-col :span="3">
                <img src="/assets/mountains.jpg">
            </a-col>
            <a-col :span="6" class="heading-rating">
                <!-- <a-col :span="9"> -->
                <p>Creating Living room furniture</p>
                <aside class="princeReview">
                    <a-rate :default-value="4" allow-half />
                </aside>
                <!-- </a-col> -->

            </a-col>
            <a-col :span="15" class="price">
                <span>&#8377;2100<small>/day</small></span>
            </a-col>
        </a-row>
        <div class="description">
            <p> Creating sofa set, TV unit and a coffee table combo</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
        </div>
        <div style="margin-left:20px;">
            <h4>Our Expert Carpenters:</h4>
        </div>
        <div style="background-color:#F8F8F8">
            <VueSlickCarousel v-bind="settings" :dots="false" :key="$route.fullPath">
                <div style="width: 77px;height: 77px;background-color:grey;">
                    <img src="../../assets/mountains.jpg" width="100px">
                </div>
                <div style="width: 77px;height: 77px;background-color:grey;">
                    <img src="../../assets/mountains.jpg" width="100px">
                </div>
                <div style="width: 77px;height: 77px;background-color:grey;">
                    <img src="../../assets/mountains.jpg" width="100px">
                </div>
                <div style="width: 77px;height: 77px;background-color:grey;">
                    <img src="../../assets/mountains.jpg" width="100px">
                </div>
                <div style="width: 77px;height: 77px;background-color:grey;">
                    <img src="../../assets/mountains.jpg" width="100px">
                </div>
                <div style="width: 77px;height: 77px;background-color:grey;">
                    <img src="../../assets/mountains.jpg" width="100px">
                </div>
                <div style="width: 77px;height: 77px;background-color:grey;">
                    <img src="../../assets/mountains.jpg" width="100px">
                </div>
                <div style="width: 77px;height: 77px;background-color:grey;">
                    <img src="../../assets/mountains.jpg" width="100px">
                </div>
                <div style="width: 77px;height: 77px;background-color:grey;">
                    <img src="../../assets/mountains.jpg" width="100px">
                </div>
            </VueSlickCarousel>
        </div>
        <a-row class="change-functions" >
            <a-col :span="18">
                <a href="">Less Details</a>
            </a-col>
            <a-col :span="6">
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
            </a-col>
        </a-row>
    </a-col>
</div>


    
    
    
    <!-- </div> -->
</template>
<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    export default {
        components: {
            VueSlickCarousel,
        },
        data() {
            return {
                settings: {
                    "arrows": false,
                    "focusOnSelect": true,
                    "infinite": false,
                    "speed": 500,
                    "slidesToShow": 7,
                    "slidesToScroll": 1,
                    "touchThreshold": 5,
                    "swipe": true,
                },
                number: 1,
            }
        }
    }
</script>
<style lang="scss" scoped>
    .carpenter-card {
        background-color: white;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 15px #FF7A346B;
        border: 1px solid #FF7A34;
      
    }


    .princeReview {
        .ant-rate {
            font-size: 12px;
        }
    }

    .quantities {
        display: inline;
        margin-right: 8px;

        .increase-decrease {
            border: none;
            color: #FF7A34;
            background-color: white;

        }

        .input-box {
            width: 11%;
            text-align: center;
            border: none;
            background-color: #F8F8F8;
        }
    }

    .add-button {
        display: inline;

        .ant-btn-primary {

            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #FF7A34;
            border-radius: 20px;
            opacity: 1;
            color: #FF7A34;
          
        }
    }

    .heading-rating {
        margin-top:20px;
        font-size: 16px;
        font-weight: bold;
        p{
            margin: 0px;
        }
    }

    .price {
        text-align: right;
        margin-top: 69px;
        span{
            margin-right: 14px;
        }
    }

    .description {
        font-size: 12px;
        margin-top: 10px;
        padding: 20px;
    }

    .change-functions {
        margin: 15px 20px;
    
    }

    a {
        color: #FF7A34;
        text-decoration: underline;
    }
</style>