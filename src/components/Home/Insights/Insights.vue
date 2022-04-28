<template>
  <section class="inSights whiteBg">
    <aside class="container">
      <section class="dFlex justifyBetween gap80">
        <article class="highlights">
          <header>
            <h4 class="mb32">Highlights</h4>
            <h3>New Innovative Plastering solution</h3>
          </header>
          <article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </article>
          <footer>
            <button>Learn More</button>
          </footer>
        </article>
        <section class="slider positionRelative">
          <aside class="positionAbsolute zIndex1 fullCover">
            <section class="bgBorder"></section>
          </aside>
          <section class="positionAbsolute zIndex2 insightSlide fullWidth">
            <section class="fullWidth insightWrapper">
              <slick ref="slick" :options="slickOptions">
                <img src="http://placehold.it/500x400" alt="">
                <img src="http://placehold.it/400x300" alt="">
                <img src="http://placehold.it/600x400" alt="">
              </slick>
            </section>
          </section>
        </section>
      </section>
    </aside>
  </section>
</template>

<script>
import Slick from 'vue-slick';
export default {
  name: "Insights",
  components: { Slick },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        accessibility: true,
        adaptiveHeight: false,
        dots: true,
        draggable: false,
        edgeFriction: 0.3,
        swipe: false,
        cssEase: "ease",
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        mobileFirst: true
      }
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
};
</script>

<style>
.insightSlide .slick-track,
.insightSlide .slick-slider {
  display: flex;
  align-items: center;
  height: 100%;
}
.insightSlide .slick-list,
.insightSlide .slick-slide {
  overflow: hidden;
}
.insightSlide .slick-list .slick-slide div {
  height: 100%;
}
.insightSlide .slick-list .slick-slide img {
  width: unset !important;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  object-fit: scale-down;
}
.insightSlide .slick-list {
  text-align: center;
  width: 100%;
}
.insightSlide .slick-dotted {
  flex-direction: column;
}
.insightSlide .slick-dotted .slick-dots {
  padding: 0;
  margin: 8px 0 0;
}
.insightSlide .slick-dotted .slick-dots li {
  position: relative;
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 0 7px;
  padding: 0;
  cursor: pointer;
}
.insightSlide .slick-dotted .slick-dots li button {
  font-size: 0;
  line-height: 0;
  display: block;
  width: 14px;
  height: 14px;
  padding: 7px;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
}
.insightSlide .slick-dotted .slick-dots li button:hover {
  outline: none;
}
.insightSlide .slick-dotted .slick-dots li button:hover:before {
  opacity: 1;
}
.insightSlide .slick-dotted .slick-dots li button:focus {
  outline: none;
}
.insightSlide .slick-dotted .slick-dots li button:focus:before {
  opacity: 1;
}
.insightSlide .slick-dotted .slick-dots li button:before {
  position: absolute;
  top: 0;
  left: 3px;
  width: 7px;
  height: 7px;
  border-radius: 5px;
  content: " ";
  background-color: #C8C8C8;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all ease 200ms;
}
.insightSlide .slick-dotted .slick-dots li.slick-active button:before {
  left: -3px;
  width: 20px;
  background-color: #FF7A34;
}
</style>

<style scoped>
.mb32 {
  margin-bottom: 32px;
}
.gap80 {
  gap: 80px;
}
.positionRelative {
  position: relative;
}
.positionAbsolute {
  position: absolute;
}
.zIndex1 {
  z-index: 1;
}
.zIndex2 {
  z-index: 2;
}
.fullCover {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.bgBorder {
  border: 2px solid #FF7A34;
  height: inherit;
  max-width: 400px;
  margin: 0 auto;
}
.whiteBg {
  background-color: white;
  padding-top: 70px;
  padding-bottom: 100px;
}
.textCenter {
  text-align: center;
}
.dFlex {
  display: flex;
}
.justifyBetween {
  justify-content: space-between;
}
.inSights .highlights {
  flex: 1 1 36%;
}
.inSights .slider {
  flex: 1 1 64%;
}
.inSights .highlights header h4 {
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0;
  color: #FF7A34;
  margin-top: 0;
  margin-bottom: 32px;
  text-transform: uppercase;
}
.inSights .highlights header h3 {
  font-weight: bold;
  font-size: 28px;
  line-height: 42px;
  letter-spacing: 0;
  color: #2A2A2A;
  margin-top: 0;
  margin-bottom: 20px;
}
.inSights .highlights article p {
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0;
  color: #2A2A2A;
  margin-bottom: 32px;
}
.inSights .highlights footer button {
  outline: none;
  border: none;
  background-color: #FF7A34;
  padding: 16px 48px;
  font-size: 16px;
  line-height: 16px;
  border-radius: 2px;
  font-weight: bold;
  letter-spacing: 0;
  color: #FFFFFF;
  text-transform: capitalize;
  cursor: pointer;
}
.fullWidth {
  width: 100%;
}
.insightSlide {
  background-color: white;
  height: calc(100% - 60px);
  top: 30px;
  bottom: 30px;
  display: flex;
}
.insightWrapper {
  margin: auto;
  height: 100%;
}
</style>