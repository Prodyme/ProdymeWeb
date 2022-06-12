<template>
  <section class="wrappper">
    <main class="banner">
      <section class="container">
        <header class="head">
          <h1>
            Welcome to <strong>Prodyme</strong>, <br />your all-in-one
            construction solution.
          </h1>
        </header>
        <section
          class="form mxAuto dFlex"
        >
          <!--
            :class="{
            classA: scrollPosition < 100,
            classB: scrollPosition > 100,
          }"
          -->
          <header class="selectText">
            <p>Category :</p>
          </header>
          <section class="inputSelection">
            <a-input-group compact>
              <a-select style="width: 25%" default-value="all">
                <a-select-option value="all"> All </a-select-option>
                <a-select-option value="handles"> Handles </a-select-option>
                <a-select-option value="hinges"> Hinges </a-select-option>
              </a-select>
              <a-input-search
                style="width: 75%"
                placeholder="Search Categories"
                @search="onSearch"
              />
            </a-input-group>
          </section>
        </section>
      </section>
    </main>
    <section class="productCards">
      <nav class="cardGrid container">
        <!--<section v-for="aman in options" :key="aman.index">
            <a href="#">{{ aman.url }}</a>
            <h4>{{ aman.title }}</h4>
            <ol>
              <li v-for="sandeep in aman.optsList" :key="sandeep.index">
                {{ sandeep }}
              </li>
            </ol>
            <p>{{ aman.link }}</p>
          </section>-->
        
        <figure v-for="option in options" :key="option.title" class="noMargin">
          <header class="cardVisual">
            <lottie-animation
              ref="anim"
              :animationData="require('@/assets/json/' + option.icon + '.json')"
              :loop="true"
              :autoPlay="true"
              :speed="1"
            />
          </header>
          <figcaption class="cardContent p20">
            <header>
              <h4>{{option.title}}</h4>
            </header>
            <section class="listNone">
              <ul class="listNone">
                <li v-for="opt in option.optsList" :key="opt.index">
                  {{ opt }}
                </li>
              </ul>
              <p>More ...</p>
            </section>
          </figcaption>
        </figure>
        
        <!--
        <figure class="noMargin">
          <header class="cardVisual">
            <lottie-animation
              ref="anim"
              :animationData="require('@/assets/json/products.json')"
              :loop="true"
              :autoPlay="true"
              :speed="1"
            />
          </header>
          <figcaption class="cardContent p20">
            <header>
              <h4>Browse Products</h4>
            </header>
            <section class="listNone">
              <ul class="listNone">
                <li>Kitchen Baskets</li>
                <li>Plywood</li>
                <li>Pain & Wallpaper</li>
                <li>Tiles</li>
              </ul>
              <p>More ...</p>
            </section>
          </figcaption>
        </figure>
         <figure class="noMargin">
          <header class="cardVisual">
            <lottie-animation
              ref="anim"
              :animationData="require('@/assets/json/help.json')"
              :loop="true"
              :autoPlay="true"
              :speed="1"
            />
          </header>
          <figcaption class="cardContent p20">
            <header>
              <h4>Explore our Services</h4>
            </header>
            <section class="listNone">
              <ul class="listNone">
                <li>Carpenter</li>
                <li>Painter</li>
                <li>Plumber</li>
                <li>Electrician</li>
              </ul>
              <p>More ...</p>
            </section>
          </figcaption>
        </figure>-->
      </nav>
    </section>
  </section>
</template>

<script>
import LottieAnimation from "lottie-web-vue";
export default {
  name: "Banner",
  data() {
    return {
      options:[
        {
            icon:"builder",
            title:"Try our Smart Builder",
            optsList:[
              "Kitchen",
              "Bedroom",
              "Living Room",
              "Toilet",
              "Wardrobe"
            ],
            link:"more..."
        },
        {
            icon:"products",
            title:"Browse Products",
            optsList:[
              "Kitchen Baskets",
              "Hinges & Drawers",
              "Plywood",
              "Paint & Wallpaper",
              "Tiles and Flooring"
            ],
            link:"more..."
        },
        {
            icon:"help",
            title:"Explore our Services",
            optsList:[
              "Carpenter",
              "Painter",
              "Plumber",
              "Electrician",
              "Upholstery"
            ],
            link:"more..."
        }
      ]
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LottieAnimation,
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
};
/*items = ref{ "url":"@/assets/json/builder.json", "title":"Try our Smart Builder", "optsList":[ "Kitchen", "Bedroom", "Living Room", "Toilet", "Wardrobe"], "link":"more..." }, { "url":"@/assets/json/products.json", "title":"Browse Products", "optsList":[ "Kitchen Baskets", "Hinges & Drawers", "Plywood", "Paint & Wallpaper", "Tiles and Flooring" ], "link":"more..." }, {"url":"@/assets/json/help.json", "title":"Explore our Services", "optsList":["Carpenter", "Painter", "Plumber", "Electrician", "Upholstery" ],"link":"more..." :}]
          <section v-for="aman in options">
            <a href="#"> {{ aman.url }}</a>
            <h4>{{ aman.title }}</h4>
            <ol>
              <li v-for="sandeep in aman.optsList">
                {{ sandeep }}
              </li>
            </ol>
            <p>{{ aman.link }}</p>
          </section>
*/
</script>

<style lang="scss">
.form {
  .ant-select-selection-selected-value {
    color: #ff7a34;
    font-weight: 600;
    font-size: 16px;
  }
  .anticon.anticon-search.ant-input-search-icon {
    color: #ff7a34;
  }
  .ant-select-selection {
    border-left: none;
    border-top: none;
    border-bottom: none;
    border-right: 1px solid #d9d9d9;
  }
  .ant-select-open {
    .ant-select-selection {
      border: none;
      box-shadow: none;
      &:hover {
        border: none;
      }
    }
    .ant-select-focused {
      border: none;
      box-shadow: none;
      .ant-select-selection {
        border: none;
        box-shadow: none;
      }
    }
  }
  .ant-select-focused {
    .ant-select-selection {
      border: none;
      box-shadow: none;
    }
  }
  .ant-select-selection:focus {
    border: none;
    box-shadow: none;
  }
  .ant-input {
    border: none;
    &:focus {
      border: none;
      box-shadow: none;
    }
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #ff7a34;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #ff7a34;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      color: #ff7a34;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      color: #ff7a34;
    }
  }
}
</style>
<style lang="scss" scoped>
.mlb {
  margin-left: 12px;
  margin-bottom: 10px;
}
.wrappper {
  background-color: #f8f8f8;
  margin-top: 92px;
}
.banner {
  padding-top: 50px;
  padding-bottom: 120px;
  background: url("../../../../src/assets/main-bg.png");
}
main header.head h1 {
  font-weight: 300;
  font-size: 42px;
  line-height: 62px;
  color: white;
}
.form {
  max-width: 916px;
  margin: 60px auto 0;
  padding: 12px 24px;
  background-color: white;
  border-radius: 30px;
  .selectText {
    width: 90px;
    p {
      margin: 0;
      text-align: left;
      font-size: 16px;
      line-height: 32px;
      font-weight: 300;
      letter-spacing: 0.3px;
      color: #666;
      text-transform: capitalize;
    }
  }
  .inputSelection {
    width: calc(100% - 90px);
  }
}
.dFlex {
  display: flex;
}
.justifyBetween {
  justify-content: space-between;
}
.noMargin {
  margin: 0;
}
.p20 {
  padding: 20px;
}
figure.noMargin {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
.productCards {
  margin: 0 auto;
  position: relative;
  top: -60px;
  @media (max-width: 791px) {
    top: 0;
    padding-top: 40px;
  }
  figure {
    background-color: white;
  }
  .cardGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 24px;
    row-gap: 24px;
    @media (max-width: 1023px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 791px) {
      grid-template-columns: 1fr;
    }
  }
  .cardContent {
    height: 260px;
  }
  .cardVisual {
    height: 220px;
    & > div {
      width: 100%;
      height: 100%;
    }
  }
}
.productCards h4 {
  margin-bottom: 16px;
  color: #2a2a2a;
  font-size: 28px;
  font-weight: bold;
}
.productCards ul li,
.productCards p {
  font-size: 16px;
  color: #2a2a2a;
  text-transform: capitalize;
}
.listNone ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.listNone ul li {
  margin-bottom: 12px;
  &:hover {
    cursor: pointer;
    color: #ff7a34;
  }
}
@media (max-width: 1080px) {
  form {
    display: none;
  }
}
</style>
