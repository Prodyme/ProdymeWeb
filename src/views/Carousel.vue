<template>
    <div style="margin: 1rem; padding: 0.8rem">
        <!-- :arrows="true" :dots="true" v-bind="settings" class="carousel" -->
    <slick  :options="slickOptions" ref="slick">
        <div class="address-cont">
        <a-radio-group name="radioGroup" :default-value="1" class="address-grp">
        <div>
            <!-- <h1>Hello</h1> --> 
            <div class="address">
                <div class="address-value">
                    <a-radio :value="1"></a-radio>
                    <p>Rakesh Jhunjhunwala 101, Silver oak society, Copernicus marg, Near India Gate, New Delhi 100001</p>
                </div>
                <div class="address-changes">
                    <h4><a>Edit</a></h4>
                    <h4><a>Delete</a></h4>
                </div>
            </div>
          <!-- </a-radio-group>   -->
        </div>
        <div>
            <!-- <h1>2nd slide</h1> -->
            <!-- <a-radio-group name="radioGroup" :default-value="1" class="address-grp"> -->
            <div class="address">
                <div class="address-value">
                    <a-radio :value="2"></a-radio>
                    <p>Rakesh Jhunjhunwala 101, Silver oak society, Copernicus marg, Near India Gate, New Delhi 100001</p>
                </div>
                <div class="address-changes">
                    <h4><a>Edit</a></h4>
                    <h4><a>Delete</a></h4>
                </div>
            </div>
            <!-- </a-radio-group> -->
        </div>
        <div>
            <!-- <h1>3rd slide</h1> -->
            <!-- <a-radio-group name="radioGroup" :default-value="1" class="address-grp"> -->
            <div class="address">
                <div class="address-value">
                    <a-radio :value="3"></a-radio>
                    <p>Rakesh Jhunjhunwala 101, Silver oak society, Copernicus marg, Near India Gate, New Delhi 100001</p>
                </div>
                <div class="address-changes">
                    <h4><a>Edit</a></h4>
                    <h4><a>Delete</a></h4>
                </div>
            </div>
            <!-- </a-radio-group> -->
        </div>
        <div>
            <!-- <h1>4th slide</h1> -->
            <!-- <a-radio-group name="radioGroup" :default-value="1" class="address-grp"> -->
            <div class="address">
                <div class="address-value">
                    <a-radio :value="4"></a-radio>
                    <p>Rakesh Jhunjhunwala 101, Silver oak society, Copernicus marg, Near India Gate, New Delhi 100001</p>
                </div>
                <div class="address-changes">
                    <h4><a>Edit</a></h4>
                    <h4><a>Delete</a></h4>
                </div>
            </div>
        </div>                        
            </a-radio-group>
        </div>    
    </slick>
    </div>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Slick from "vue-slick";

  export default {
    data() {
      return {
        // settings: {
        //     // "dots": true,
        //     "focusOnSelect": true,
        //     "infinite": true,
        //     "speed": 500,
        //     "slidesToShow": 3,
        //     "slidesToScroll": 3,
        //     "touchThreshold": 5,
        //     "arrows" : true,
        // },
        slickOptions: {
            infinite: false,
            slidesToScroll: 1,
            accessibility: true,
            adaptiveHeight: false,
            dots: true,
            draggable: false,
            edgeFriction: 0.3,
            swipe: false,
            cssEase: "ease",
            autoplay: false,
            autoplaySpeed: 4000,
            arrows: true,
            mobileFirst: true,
            slidesToShow: 5,
            centerMode: false,
            prevArrow: "<button type='button' :disabled='(currentSlide === 1) ? true : false' class='carouselSideArrow leftSide'><span class='dirIcon'>&#8735;</span></button>",
            nextArrow: "<button type='button' class='carouselSideArrow rightSide'><span class='dirIcon'>&#8735;</span></button>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 5
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                    }
                }
            ]
        },
      }
    },
    components: {
        // VueSlickCarousel,
        Slick,
    },
    methods: {
        next() {
            this.$refs.slick.next();
        },
        prev() {
            this.$refs.slick.prev();
        },
        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$refs.slick.reSlick()
        }
    }
  }
</script>

<style lang="scss" scoped>
    .carouselSideArrow {
        background-color: #FF7A34;
        height: 40px;
        width: 40px;
        box-shadow: none;
        cursor: pointer;
        transition: all 300ms ease;
        align-self: center;
        border: none;
        border-radius: 50%;
        &:hover {
            box-shadow: 0 3px 10px #FF7A34;
        }
        .dirIcon {
            color: white;
            display: inline-block;
        }
        &.leftSide {
            padding: 1px 0 1px 6px;
            .dirIcon {
            transform: rotate(45deg);
            }
        }
        &.rightSide {
            padding: 1px 5px 1px 1px;
            .dirIcon {
            transform: rotate(225deg);
            }
        }
}
    .slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: blue;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
    .carousel{
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 1px solid black; */
        height: 12rem;
        /* margin: 0rem 1rem; */
    }
    .address-cont{
        display: flex;
        
    }
    .address{
        width: 15rem;
        height: 8rem;
        padding: 10px;
        background-color: #f1f1f1d5;
        margin: 0rem 1rem;
    }
    .address-grp{
        display: flex;
        margin-top: 1rem;
    }
    .address-value{
        display: flex;
        margin-bottom: 0rem;
    }
    .address-changes{
        display: flex;
        justify-content: flex-end;
        margin-top: -1rem;
    }
    .address-changes a{
        color: #FF7A34;
        padding: 8px;
        text-decoration: underline;
    }
    .icon-btn{
        background-color: white;
        outline: none;
        border: none;
        font-size: 1.9rem;
        cursor: pointer;
    }
    .icon :hover{
        background-color: white;
        color: #FF7A34;
    }
</style>