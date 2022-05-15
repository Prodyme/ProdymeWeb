<template>
  <section class="pt30 pb70 backBg products">
    <section class="container">
      <header class="heading textCenter">
        <p class="header-class">Products you may like</p>
      </header>
      <aside>
        <slick ref="slick" :options="slickOptions">
          <Card
              v-for="(card, i) in prods"
              :key="i"
              :card="card"
          />
        </slick>
      </aside>
    </section>
  </section>
</template>

<script>
import Slick from "vue-slick";
import Card from "@/components/Global/Card.vue";
export default {
  name: "Variants",
  components: {
    Slick,
    Card
  },
  data() {
    return {
      slickOptions: {
        infinite: false,
        slidesToScroll: 1,
        accessibility: true,
        adaptiveHeight: false,
        dots: false,
        draggable: false,
        edgeFriction: 0.3,
        swipe: false,
        cssEase: "ease",
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: false,
        mobileFirst: true,
        slidesToShow: 4,
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
      prods: [
        {
          image: "http://placehold.it/300x200",
          name: "Product Name 1",
          rating: 0,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          price: 23.65
        },
        {
          image: "http://placehold.it/200x200",
          name: "Product Name 2",
          rating: 1,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          price: 24.65
        },
        {
          image: "http://placehold.it/300x100",
          name: "Product Name 3",
          rating: 3,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Et",
          price: 25.65
        },
        {
          image: "http://placehold.it/300x200",
          name: "Product Name 4",
          rating: 2.1,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          price: 27.65
        },
        {
          image: "http://placehold.it/200x200",
          name: "Product Name 5",
          rating: 1,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          price: 24.65
        },
        {
          image: "http://placehold.it/300x100",
          name: "Product Name 6",
          rating: 3,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Et",
          price: 25.65
        },
        {
          image: "http://placehold.it/300x200",
          name: "Product Name 7",
          rating: 2.1,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          price: 27.65
        }
      ]
    }
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

<style>
/*.backBg {*/
/*  background-color: #f8f8f8;*/
/*}*/
.products{
  width:1475px
}
.container{
  border-radius: 0;
}
.header-class{
  text-align: left;
  margin-left: 5rem;
  font: normal normal bold 28px/34px Roboto;
  color: #2A2A2A;
}
.dFlex {
  display: flex;
}
.justifyBetween {
  justify-content: space-between;
}
.alignItemsCenter {
  align-items: center;
}
.textCenter {
  text-align: center;
}
.pt30 {
  padding-top: 30px;
}
.pb70 {
  padding-bottom: 70px;
}
.products .heading {
  margin-bottom: 30px;
}
.products .heading h2 {
  color: #2A2A2A;
  font-weight: bold;
  font-size: 42px;
  line-height: 62px;
}
</style>
<style lang="scss">
.products {
  .slick-slider, .slick-track {
    display: flex;
    align-items: flex-start;
    height: 100%;
  }
}
.slick-list, .slick-slide {
  overflow: hidden;
  div {
    height: 100%;
  }
}
.slick-slider {
  .slick-list {
    .slick-track {
      .slick-slide {
        div {
          .globalCard {
            width: 258px !important;
            margin-right: 24px;
          }
        }
      }
    }
  }
}
.slick-disabled {
  display: none !important;
}
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
.slick-list {
  text-align: center;
  width: 100%;
}
</style>