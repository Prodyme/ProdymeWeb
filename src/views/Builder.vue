<template>
  <section class="builder">
    <!-- Top Bar -->
    <TopBar></TopBar>
    <!-- Builder -->
    <section class="dFlex buildWrapper">
      <header class="planner dFlex">
        <section class="questioner positionRelative">
          <aside class="positionAbsolute toggleQuestioner dFlex">
            <a-icon type="left" class="toggleIcon mAuto"/>
          </aside>
          <article class="mb48 heading">
            <h3>
              Hey, let us know your requirements and we will get you the best products!
            </h3>
          </article>
          <!-- Questioner -->
          <section class="questions">
            <header>
              <h4>What is type of space are you building?</h4>
            </header>
            <!-- Options -->
            <section class="options dFlex">
              <section class="optIcon">
                <a-icon type="picture" class="baseColor"/>
              </section>
              <article class="optName">
                <p>Kitchen</p>
              </article>
            </section>
            <section class="options dFlex">
              <section class="optIcon">
                <a-icon type="book" class="baseColor"/>
              </section>
              <article class="optName">
                <p>Toilet</p>
              </article>
            </section>
            <section class="options dFlex">
              <section class="optIcon">
                <a-icon type="control" class="baseColor"/>
              </section>
              <article class="optName">
                <p>Living Room</p>
              </article>
            </section>
            <section class="options dFlex">
              <section class="optIcon">
                <a-icon type="container" class="baseColor"/>
              </section>
              <article class="optName">
                <p>Bed Room</p>
              </article>
            </section>
            <!-- End of Options -->
            <footer class="nextQuestion dFlex">
              <a-icon type="down" class="mAuto downIcon"/>
            </footer>
          </section>
          <section class="questions">
            <header>
              <h4>What is the tentative layout of your space?</h4>
            </header>
            <!-- Options -->
            <section class="options dFlex">
              <section class="optIcon">
                <a-icon type="tablet" class="baseColor"/>
              </section>
              <article class="optName">
                <p>L Shape</p>
              </article>
            </section>
            <section class="options dFlex">
              <section class="optIcon">
                <a-icon type="tag" class="baseColor"/>
              </section>
              <article class="optName">
                <p>U Shape</p>
              </article>
            </section>
            <section class="options dFlex">
              <section class="optIcon">
                <a-icon type="tool" class="baseColor"/>
              </section>
              <article class="optName">
                <p>Parallel</p>
              </article>
            </section>
            <section class="options dFlex">
              <section class="optIcon">
                <a-icon type="usb" class="baseColor"/>
              </section>
              <article class="optName">
                <p>I Shape</p>
              </article>
            </section>
            <section class="options dFlex">
              <section class="optIcon">
                <a-icon type="block" class="baseColor"/>
              </section>
              <article class="optName">
                <p>TT-Island</p>
              </article>
            </section>
            <section class="options dFlex">
              <section class="optIcon">
                <a-icon type="export" class="baseColor"/>
              </section>
              <article class="optName">
                <p>G-Shape</p>
              </article>
            </section>
            <!-- End of Options -->
            <footer class="nextQuestion dFlex">
              <a-icon type="down" class="mAuto downIcon"/>
            </footer>
          </section>
          <!-- Dimensions  -->
          <section class="questions">
            <header>
              <h4>Please enter the dimensions of the room as well as some details.</h4>
            </header>
            <header>
              <h5>Please enter dimensions referred in the diagram below</h5>
            </header>
            <aside class="layoutIcon">
              <a-icon type="border-left" />
            </aside>
            <section class="dFlex justifyBetween mb30">
              <article class="dFlex selectHead">
                <span class="mAuto">Depth<sup>*</sup></span>
              </article>
              <aside class="selectVal">
                <a-select
                    v-decorator="[
                      'unit1',
                      { rules: [{ required: true, message: 'm' }] },
                    ]"
                    placeholder="m"
                >
                  <a-select-option value="1">
                    1 m
                  </a-select-option>
                  <a-select-option value="2">
                    2 m
                  </a-select-option>
                </a-select>
              </aside>
            </section>
            <section class="dFlex justifyBetween mb20">
              <article class="dFlex selectHead">
                <span class="mAuto">Clear Bottom<sup>*</sup></span>
              </article>
              <aside class="selectVal">
                <a-select
                    v-decorator="[
                      'unit2',
                      { rules: [{ required: true, message: 'm' }] },
                    ]"
                    placeholder="m"
                >
                  <a-select-option value="1">
                    1 m
                  </a-select-option>
                  <a-select-option value="2">
                    2 m
                  </a-select-option>
                </a-select>
              </aside>
            </section>
            <hr class="lineSeparator">
            <header>
              <h5>Please enter dimensions referred in the diagram below</h5>
            </header>
            <section class="dFlex justifyBetween mb20">
              <article class="dFlex selectHead">
                <span class="mAuto">Length<sup>*</sup></span>
              </article>
              <aside class="selectVal">
                <a-select
                    v-decorator="[
                      'length',
                      { rules: [{ required: true, message: 'm' }] },
                    ]"
                    placeholder="m"
                >
                  <a-select-option value="1">
                    1 m
                  </a-select-option>
                  <a-select-option value="2">
                    2 m
                  </a-select-option>
                </a-select>
              </aside>
            </section>
            <section class="dFlex justifyBetween mb20">
              <article class="dFlex selectHead">
                <span class="mAuto">Breadth<sup>*</sup></span>
              </article>
              <aside class="selectVal">
                <a-select
                    v-decorator="[
                      'breadth',
                      { rules: [{ required: true, message: 'm' }] },
                    ]"
                    placeholder="m"
                >
                  <a-select-option value="1">
                    1 m
                  </a-select-option>
                  <a-select-option value="2">
                    2 m
                  </a-select-option>
                </a-select>
              </aside>
            </section>
            <section class="dFlex justifyBetween mb20">
              <article class="dFlex selectHead">
                <span class="mAuto">Height<sup>*</sup></span>
              </article>
              <aside class="selectVal">
                <a-select
                    v-decorator="[
                      'height',
                      { rules: [{ required: true, message: 'm' }] },
                    ]"
                    placeholder="m"
                >
                  <a-select-option value="1">
                    1 m
                  </a-select-option>
                  <a-select-option value="2">
                    2 m
                  </a-select-option>
                </a-select>
              </aside>
            </section>
            <footer class="nextQuestion dFlex">
              <a-icon type="down" class="mAuto downIcon"/>
            </footer>
          </section>
          <!-- End of Dimensions -->
          <section class="questions">
            <header>
              <h4>
                You may select from the different available grades for the
                various products available for your specifications.
              </h4>
            </header>
            <!-- Options -->
            <section class="options dFlex">
              <section class="optIcon textRight pr12">
                <span class="baseColor priceSign">$</span>
              </section>
              <article class="optName">
                <p>Specific Need</p>
              </article>
            </section>
            <section class="options dFlex">
              <section class="optIcon textRight pr12">
                <span class="baseColor priceSign">$$</span>
              </section>
              <article class="optName">
                <p>Sustainable</p>
              </article>
            </section>
            <section class="options dFlex">
              <section class="optIcon textRight pr12">
                <span class="baseColor priceSign">$$$</span>
              </section>
              <article class="optName">
                <p>Aristrocrat</p>
              </article>
            </section>
            <section class="options dFlex">
              <section class="optIcon textRight pr12">
                <span class="baseColor priceSign">$$$$</span>
              </section>
              <article class="optName">
                <p>Premium</p>
              </article>
            </section>
            <section class="options dFlex">
              <section class="optIcon textRight pr12">
                <span class="baseColor priceSign">$$$$$</span>
              </section>
              <article class="optName">
                <p>Luxury</p>
              </article>
            </section>
            <!-- End of Options -->
          </section>
        </section>
        <section class="results">
          <aside class="breadcrumbWrapper mt20 mb20">
            <a-breadcrumb>
              <a-breadcrumb-item><a href="">Home</a></a-breadcrumb-item>
              <a-breadcrumb-item><a href="">Smart Builder</a></a-breadcrumb-item>
            </a-breadcrumb>
          </aside>
          <header class="header mb30">
            <h2>Smart Builder</h2>
            <h3>Smart Builder will find the right product for your need!</h3>
          </header>
          <nav class="categories mb30 dFlex">
            <p>Plywood (18)</p>
            <p>Laminate (105)</p>
            <p>Channels (37)</p>
            <p>Category (88)</p>
          </nav>
          <article class="filters dFlex justifyBetween">
            <section class="features">
              <a-dropdown>
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                  More Relevant <a-icon type="down" />
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
            <footer class="pagination">
              <a-pagination simple :default-current="2" :total="37" />
            </footer>
          </article>
          <!-- Pivot Card -->
          <section class="principleCard">
            <header class="princeHeader dFlex justifyBetween">
              <header>
                <h3>Latte Brownie Lain</h3>
                <h5>Laminate</h5>
              </header>
              <footer>
                <a-icon type="heart" class="wishlist"/>
              </footer>
            </header>
            <aside class="princeReview">
              <a-rate :default-value="4" allow-half />
              <span class="rateValue">(328 reviews)</span>
            </aside>
            <section class="princeWrapper dFlex">
              <figure class="princeImage">
                <header class="dFlex">
                  <img :src="mainImg" alt="Card Image" class="mAuto">
                </header>
                <section class="princeImgGrid dFlex">
                  <img v-for="image in mainGridImages" :src="image.url" :alt="image.alt" :key="image.alt"/>
                </section>
              </figure>
              <article class="princeProductDescription">
                <header class="princePrice dFlex justifyBetween">
                  <article>
                    <h4>
                      ₹ 2110.00
                      <span> / sheet</span>
                    </h4>
                  </article>
                  <aside class="detailLink">
                    <p>Details</p>
                  </aside>
                </header>
                <article class="princeDesc">
                  <header>
                    <h6>Product Description</h6>
                  </header>
                  <article>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam Lorem ipsum dolor sit amet, consetetur sadipscing
                      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    </p>
                  </article>
                </article>
                <footer class="princeCTA dFlex justifyBetween">
                  <section class="qty positionRelative">
                    <span>Quantity : </span>
                    <a-input-number size="large" :min="1" :max="100000" :default-value="3"/>
                    <span class="positionAbsolute unit">[100 sq.ft]</span>
                  </section>
                  <footer class="cta">
                    <button class="btnCta">Confirm</button>
                  </footer>
                </footer>
              </article>
            </section>
          </section>
          <!-- Result Grid -->
          <section class="resultGrid justifyBetween">
            <Card
                v-for="(card, i) in prods"
                :key="i"
                :card="card"
            />
          </section>
        </section>
      </header>
      <!-- Cart -->
      <aside class="cart">
        <section class="cartCard">
          <!-- Cart Header -->
          <header class="dFlex cartHeader justifyBetween">
            <article>
              <a-icon type="shopping-cart" class="cartIcon positionRelative" />
              <h5 class="dInlineBlock">
                Cart (4)
              </h5>
            </article>
            <aside>
              <p class="checkoutLinkActions">View Cart</p>
            </aside>
          </header>
          <!-- Cart Container -->
          <aside class="cartWrapper">
            <header class="dFlex justifyBetween categoryHeaderCheckout">
              <article>
                <h6>
                  Plywood
                  <span class="pl10">03</span>
                </h6>
              </article>
              <aside>
                <span>
                  <a-icon type="reload" class="resetIcon"/>
                </span>
                <p class="dInlineBlock checkoutLinkActions pl10">Reset Quantities</p>
              </aside>
            </header>
            <!-- Sub Categories -->
            <article class="dFlex justifyBetween subCategoryCheckoutItems" v-for="product in checkoutProducts" :key="product.quantity">
              <!-- Checkbox -->
              <a-checkbox></a-checkbox>
              <!-- Product Image -->
              <figure class="itemImage">
                <img :src="product.image" alt="1">
              </figure>
              <!-- Product Description -->
              <article class="itemDetails">
                <p class="ellipsisLine">{{ product.name }}</p>
                <p class="ellipsis2Lines">{{ product.description }}</p>
              </article>
              <!-- Product Quantity -->
              <section class="itemQuantity">
                <a-input-number size="small" :min="1" :max="1000" class="quanty" :default-value="product.quantity" />
                <p class="ellipsisLine textCenter">{{ product.container }}</p>
                <p class="ellipsisLine textCenter">[ {{ product.unit }} ]</p>
              </section>
              <!-- Price -->
              <aside class="itemPrice">
                <h5>₹{{ product.price }}</h5>
              </aside>
            </article>
          </aside>
          <aside class="cartWrapper">
            <header class="dFlex justifyBetween categoryHeaderCheckout">
              <article>
                <h6>
                  Laminate
                  <span class="pl10">03</span>
                </h6>
              </article>
              <aside>
                <span>
                  <a-icon type="reload" class="resetIcon"/>
                </span>
                <p class="dInlineBlock checkoutLinkActions pl10">Reset Quantities</p>
              </aside>
            </header>
            <!-- Sub Categories -->
            <article class="dFlex justifyBetween subCategoryCheckoutItems" v-for="product in checkoutProducts1" :key="product.quantity">
              <!-- Checkbox -->
              <a-checkbox></a-checkbox>
              <!-- Product Image -->
              <figure class="itemImage">
                <img :src="product.image" alt="1">
              </figure>
              <!-- Product Description -->
              <article class="itemDetails">
                <p class="ellipsisLine">{{ product.name }}</p>
                <p class="ellipsis2Lines">{{ product.description }}</p>
              </article>
              <!-- Product Quantity -->
              <section class="itemQuantity">
                <a-input-number size="small" :min="1" :max="1000" class="quanty" :default-value="product.quantity" />
                <p class="ellipsisLine textCenter">{{ product.container }}</p>
                <p class="ellipsisLine textCenter">[ {{ product.unit }} ]</p>
              </section>
              <!-- Price -->
              <aside class="itemPrice">
                <h5>₹{{ product.price }}</h5>
              </aside>
            </article>
          </aside>
          <aside class="cartWrapper">
            <header class="dFlex justifyBetween categoryHeaderCheckout">
              <article>
                <h6>
                  Channel
                  <span class="pl10">03</span>
                </h6>
              </article>
              <aside>
                <span>
                  <a-icon type="reload" class="resetIcon"/>
                </span>
                <p class="dInlineBlock checkoutLinkActions pl10">Reset Quantities</p>
              </aside>
            </header>
            <!-- Sub Categories -->
            <article class="dFlex justifyBetween subCategoryCheckoutItems" v-for="product in checkoutProducts2" :key="product.quantity">
              <!-- Checkbox -->
              <a-checkbox></a-checkbox>
              <!-- Product Image -->
              <figure class="itemImage">
                <img :src="product.image" alt="1">
              </figure>
              <!-- Product Description -->
              <article class="itemDetails">
                <p class="ellipsisLine">{{ product.name }}</p>
                <p class="ellipsis2Lines">{{ product.description }}</p>
              </article>
              <!-- Product Quantity -->
              <section class="itemQuantity">
                <a-input-number size="small" :min="1" :max="1000" class="quanty" :default-value="product.quantity" />
                <p class="ellipsisLine textCenter">{{ product.container }}</p>
                <p class="ellipsisLine textCenter">[ {{ product.unit }} ]</p>
              </section>
              <!-- Price -->
              <aside class="itemPrice">
                <h5>₹{{ product.price }}</h5>
              </aside>
            </article>
          </aside>
          <!-- Checkout -->
          <footer class="moveToCheckout dFlex justifyBetween">
            <header>
              <span class="checkoutPreText">Subtotal</span>
              <span class="checkoutText">₹2145.58</span>
            </header>
            <footer>
              <button class="checkoutCta">Checkout</button>
            </footer>
          </footer>
        </section>
      </aside>
    </section>
    <!-- Footer -->
    <Footer></Footer>
  </section>
</template>

<script>
import TopBar from "@/components/Global/TopBar";
import Footer from "@/components/Global/Footer";
import Card from "@/components/Global/Card";
export default {
  name: "Builder",
  components: {
    TopBar,
    Footer,
    Card
  },
  data() {
    return {
      mainImg: 'http://placehold.it/300x300',
      mainGridImages: [
        {
          url: "http://placehold.it/300x300",
          alt: 1
        },
        {
          url: "http://placehold.it/400x400",
          alt: 2
        },
        {
          url: "http://placehold.it/500x500",
          alt: 3
        }
      ],
      prods: [
        {
          image: "http://placehold.it/300x300",
          name: "Product Name 1",
          rating: 3,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          price: 23.65
        },
        {
          image: "http://placehold.it/300x300",
          name: "Product Name 2",
          rating: 4,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          price: 24.65
        },
        {
          image: "http://placehold.it/300x300",
          name: "Product Name 3",
          rating: 4,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Et",
          price: 25.65
        },
        {
          image: "http://placehold.it/300x300",
          name: "Product Name 4",
          rating: 3.1,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          price: 27.65
        },
        {
          image: "http://placehold.it/200x300",
          name: "Product Name 5",
          rating: 5,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          price: 24.65
        },
        {
          image: "http://placehold.it/300x300",
          name: "Product Name 6",
          rating: 4,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Et",
          price: 25.65
        },
        {
          image: "http://placehold.it/300x300",
          name: "Product Name 7",
          rating: 3.1,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          price: 27.65
        }
      ],
      checkoutProducts: [
        {
          image: "http://placehold.it/300x300",
          name: "Product Name 1",
          quantity: 12,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          container: "Boxes",
          unit: "100 sq ft",
          price: 27.65
        },
        {
          image: "http://placehold.it/300x300",
          name: "Product Name 2",
          quantity: 12,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          container: "Boxes",
          unit: "100 sq ft",
          price: 27.65
        },
        {
          image: "http://placehold.it/300x300",
          name: "Product Name 3",
          quantity: 12,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          container: "Boxes",
          unit: "100 sq ft",
          price: 27.65
        }
      ],
      checkoutProducts1: [
        {
          image: "http://placehold.it/300x300",
          name: "Product Name 1",
          quantity: 12,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          container: "Boxes",
          unit: "100 sq ft",
          price: 27.65
        },
        {
          image: "http://placehold.it/300x300",
          name: "Product Name 2",
          quantity: 12,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          container: "Boxes",
          unit: "100 sq ft",
          price: 27.65
        },
        {
          image: "http://placehold.it/300x300",
          name: "Product Name 3",
          quantity: 12,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          container: "Boxes",
          unit: "100 sq ft",
          price: 27.65
        }
      ],
      checkoutProducts2: [
        {
          image: "http://placehold.it/300x300",
          name: "Product Name 1",
          quantity: 12,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          container: "Boxes",
          unit: "100 sq ft",
          price: 27.65
        },
        {
          image: "http://placehold.it/300x300",
          name: "Product Name 2",
          quantity: 12,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          container: "Boxes",
          unit: "100 sq ft",
          price: 27.65
        },
        {
          image: "http://placehold.it/300x300",
          name: "Product Name 3",
          quantity: 12,
          description: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore",
          container: "Boxes",
          unit: "100 sq ft",
          price: 27.65
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.dFlex {
  display: flex;
}
.dInlineBlock {
  display: inline-block;
}
.justifyBetween {
  justify-content: space-between;
}
.positionRelative {
  position: relative;
}
.positionAbsolute {
  position: absolute;
}
.mAuto {
  margin: auto;
}
.textRight {
  text-align: right;
}
.textCenter {
  text-align: center;
}
.pr12 {
  padding-right: 12px;
}
.mb30 {
  margin-bottom: 30px;
}
.mt20 {
  margin-top: 20px;
}
.mb20 {
  margin-bottom: 20px;
}
.pl10 {
  padding-left: 10px;
}
.buildWrapper {
  background-color: #f6f6f6;
  .planner {
    flex: 1;
    .toggleQuestioner {
      cursor: pointer;
      left: 100%;
      top: 160px;
      background-color: #2A2A2A;
      width: 14px;
      height: 80px;
      clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
      .toggleIcon {
        color: #fff;
        font-size: 10px;
      }
    }
    .questioner {
      width: 40%;
      margin-right: 24px;
      padding: 65px 57px 65px 80px;
      background-color: #2A2A2A;
      .mb48 {
        margin-bottom: 48px;
      }
      h3 {
        letter-spacing: 0;
        color: #F4F4F4;
        margin: 0;
        font-size: 30px;
        line-height: 36px;
        font-weight: 300;
      }
      .lineSeparator {
        margin: 20px 0;
        border-bottom: 0.5px solid #afafaf;
      }
      .questions {
        padding-right: 22px;
        h5 {
          margin: 30px 0 20px;
          color: #FFF;
          font-weight: 300;
          font-size: 16px;
          line-height: 20px;
          font-style: italic;
        }
        h4 {
          font-size: 16px;
          line-height: 20px;
          margin: 0 0 20px 0;
          color: #FFF;
          letter-spacing: 0;
        }
        .layoutIcon {
          font-size: 126px;
          color: #c5c5c5;
        }
        .selectHead {
          border: 1px solid #646464;
          border-radius: 5px;
          padding: 12px 24px;
          width: 134px;
          span {
            color: #c5c5c5;
          }
        }
        .options {
          width: 100%;
          border: 1px solid #646464;
          border-radius: 5px;
          padding: 12px 40px;
          margin-bottom: 10px;
          align-items: center;
          cursor: pointer;
          transition: all 240ms ease;
          .optIcon {
            width: 76px;
            .baseColor {
              color: #c5c5c5;
              font-size: 36px;
            }
            span.priceSign {
              font-size: 20px;
            }
          }
          .optName {
            p {
              margin: 0;
              color: #c5c5c5;
              text-transform: capitalize;
            }
          }
          &:hover {
            background-color: #f4f4f4;
            border-color: #f4f4f4;
            .optIcon {
              .baseColor {
                color: #000;
              }
            }
            .optName {
              p {
                color: #000;
              }
            }
          }
        }
        .nextQuestion {
          margin-top: 20px;
          margin-bottom: 30px;
          .downIcon {
            font-size: 16px;
            color: white;
            cursor: pointer;
          }
        }
      }
    }
    .results {
      margin-right: 20px;
      .header {
        h2 {
          font-size: 42px;
          line-height: 62px;
          color: #2A2A2A;
          font-weight: normal;
          margin: 0;
          text-transform: capitalize;
        }
        h3 {
          font-size: 14px;
          line-height: 20px;
          color: #2A2A2A;
        }
      }
      .categories {
        p {
          cursor: pointer;
          margin: 0 20px 0 0;
          font-size: 16px;
          line-height: 20px;
          font-weight: 300;
          color: #2A2A2A;
          text-transform: capitalize;
        }
      }
      .filters {
        .features {
          a {
            color: #2A2A2A;
          }
        }
      }
      .principleCard {
        background-color: white;
        margin: 24px 0 36px;
        padding: 20px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.29);
        .princeHeader {
          align-items: center;
          header {
            h3 {
              font-size: 30px;
              line-height: 62px;
              font-weight: normal;
              letter-spacing: 0;
              color: #2A2A2A;
              text-transform: capitalize;
              margin: 0;
            }
            h5 {
              font-size: 14px;
              line-height: 14px;
              font-weight: 300;
              color: #2A2A2A;
              margin: 0;
            }
          }
          footer {
            .wishlist {
              font-size: 30px;
              color: #FF7A34;
              font-weight: bolder;
              cursor: pointer;
            }
          }
        }
        .princeReview {
          .rateValue {
            font-size: 14px;
            line-height: 14px;
            color: #BCBCBC;
            padding-left: 8px;
          }
        }
        .princeWrapper {
          margin-top: 18px;
          figure {
            width: 50%;
            margin: 0;
            &.princeImage {
              img {
                max-width: 100%;
                max-height: 100%;
                border-radius: 20px;
                -o-object-fit: contain;
                object-fit: contain;
                -o-object-position: center;
                object-position: center;
              }
              .princeImgGrid {
                margin-top: 8px;
                overflow: scroll;
                img {
                  max-width: 62px;
                  max-height: 62px;
                  border-radius: 10px;
                  -o-object-fit: contain;
                  object-fit: contain;
                  -o-object-position: center;
                  object-position: center;
                  margin-right: 8px;
                }
              }
            }
          }
          .princeProductDescription {
            padding-left: 20px;
            width: 50%;
            .princePrice {
              margin-bottom: 16px;
              h4 {
                margin: 0;
                font-weight: bold;
                font-size: 24px;
                letter-spacing: 0;
                line-height: 36px;
                color: #2A2A2A;
                span {
                  font-size: 14px;
                  color: #2A2A2A;
                }
              }
              .detailLink {
                p {
                  margin: 0;
                  text-align: right;
                  text-decoration: underline;
                  font-weight: 300;
                  font-size: 16px;
                  line-height: 36px;
                  color: #FF7A34;
                  text-transform: capitalize;
                  cursor: pointer;
                  letter-spacing: 0.3px;
                }
              }
            }
            .princeDesc {
              h6 {
                margin: 0;
                font-size: 14px;
                line-height: 32px;
                letter-spacing: 0;
                color: #2A2A2A;
              }
              p {
                margin: 0;
                font-weight: normal;
                font-size: 12px;
                line-height: 20px;
                letter-spacing: 0;
                color: #2A2A2A;
                opacity: 1;
              }
            }
            .princeCTA {
              margin-top: 20px;
              .qty {
                .unit {
                  top: 100%;
                  left: 90px;
                  width: 120px;
                  font-size: 12px;
                  line-height: 12px;
                  font-weight: bold;
                  color: #2A2A2A;
                }
              }
              .cta {
                .btnCta {
                  cursor: pointer;
                  padding: 14px 24px;
                  background-color: #2A2A2A;
                  border-radius: 20px;
                  font-size: 12px;
                  line-height: 14px;
                  letter-spacing: 0;
                  color: #FFFFFF;
                }
              }
            }
          }
        }
      }
      .resultGrid {
        margin-bottom: 24px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;
      }
    }
  }
  .cart {
    width: 28.3%;
    margin-top: 24px;
    margin-right: 24px;
    position: -webkit-sticky;
    position: sticky;
    p.checkoutLinkActions {
      margin: 0;
      text-align: right;
      text-decoration: underline;
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      color: #FF7A34;
      text-transform: capitalize;
      cursor: pointer;
    }
    .cartCard {
      background-color: white;
      box-shadow: 0 3px 15px #C1C1C129;
      align-items: center;
      padding-bottom: 20px;
      .cartHeader {
        padding: 20px;
        box-shadow: 0 3px 15px #C1C1C129;
        article {
          .cartIcon {
            color: #000;
            font-size: 20px;
            top: 2px;
          }
          h5 {
            padding-left: 16px;
            font-size: 16px;
            line-height: 20px;
            color: #2A2A2A;
            text-transform: capitalize;
            margin: 0;
          }
        }
      }
      .cartWrapper {
        padding: 0 20px;
        margin-top: 20px;
        margin-bottom: 40px;
        align-items: center;
        .categoryHeaderCheckout {
          align-items: center;
          padding-bottom: 13px;
          border-bottom: 1px solid #e5e5e5;
          article {
            padding-left: 20px;
            h6 {
              font-size: 16px;
              line-height: 20px;
              letter-spacing: 0;
              font-weight: normal;
              margin: 0;
              color: #2A2A2A;
              text-transform: capitalize;
              span {
                font-weight: 300;
                font-size: 12px;
                line-height: 20px;
              }
            }
          }
          aside {
            .resetIcon {
              cursor: pointer;
              color: #FF7A34;
              font-size: 12px;
            }
          }
        }
        .subCategoryCheckoutItems {
          margin-top: 10px;
          margin-bottom: 30px;
          align-items: center;
          figure.itemImage {
            margin: 0;
            padding: 0 10px;
            img {
              max-width: 65px;
              max-height: 45px;
              -o-object-fit: contain;
              object-fit: contain;
              -o-object-position: center;
              object-position: center;
            }
          }
          .itemDetails {
            padding-right: 8px;
            p {
              font-size: 12px;
              line-height: 16px;
              letter-spacing: 0;
              color: #2A2A2A;
              margin-bottom: 4px;
            }
          }
          .itemQuantity {
            padding-right: 10px;
            .quanty {
              width: 72px;
              input.ant-input-number-input {
                text-align: center;
              }
            }
            p {
              margin: 0;
              color: #2A2A2A;
              font-weight: normal;
              font-size: 10px;
              line-height: 12px;
              & + p {
                font-weight: 300;
              }
            }
          }
          .itemPrice {
            h5 {
              font-weight: bold;
              font-size: 14px;
              line-height: 18px;
              letter-spacing: 0;
              color: #2A2A2A;
              margin: 0;
            }
          }
        }
      }
      .moveToCheckout {
        margin: 20px 0;
        align-items: center;
        padding: 0 20px;
        header {
          .checkoutPreText {
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0;
            color: #2A2A2A;
          }
          .checkoutText {
            padding-left: 10px;
            font-weight: bold;
            font-size: 18px;
            line-height: 18px;
            letter-spacing: 0;
            color: #2A2A2A;
          }
        }
        footer {
          .checkoutCta {
            background-color: #FF7A34;
            padding: 13px 26px;
            border-radius: 20px;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0;
            color: white;
            border: none;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.buildWrapper {
  .selectVal {
    .ant-select-selection--single {
      height: 47px !important;
      width: 70px;
    }
    .ant-select-selection__rendered {
      margin-top: 5px;
      div {
        color: #c5c5c5;
        font-size: 16px;
      }
    }
    .ant-select-selection-selected-value {
      color: #c5c5c5;
      font-size: 16px;
      line-height: 31px;
    }
    .ant-select-selection {
      background-color: transparent !important;
      border: 1px solid #646464 !important;
      .ant-select-arrow {
        .anticon.anticon-down.ant-select-arrow-icon {
          svg {
            fill: #FF7A34;
          }
        }
      }
    }
  }
  .itemQuantity {
    .quanty {
      input.ant-input-number-input {
        text-align: center;
      }
    }
  }
}
</style>