<template>
  <section class="globalCard whiteBg br20 cardBorder">
    <section class="cardImage">
      <figure class="_image noMargin dFlex">
        <img :src="card.image" alt="Card Image" class="mxAuto">
      </figure>
    </section>
    <article class="cardDesc textLeft plb20 pt12">
      <header class="_heading mb6">
        <h5 class="noMargin ellipsisLine fs16">{{ card.name }}</h5>
      </header>
      <aside class="_rating mb10">
        <a-rate :default-value="card.rating" allow-half />
      </aside>
      <article class="_description">
        <p class="fs16 ellipsis2Lines">
          {{ card.description }}
        </p>
      </article>
      <section class="_separator mb16">
        <Separator></Separator>
      </section>
      <article class="_price mb24 dFlex alignItemsCenter">
        <strong class="fs28">&#8377; {{ card.price }}</strong>
        <b class="fs16 pl10">per box</b>
      </article>
      <footer class="_comparator mb20">
        <a-checkbox @change="onChange">
          Compare
        </a-checkbox>
      </footer>
    </article>
  </section>
</template>

<script>
import Separator from "@/components/Global/Separator";
export default {
  name: "Card",
  components: {Separator},
  props: {
    card: {
      type: Object,
      return: null
    }
  },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }
  }
}
</script>

<style lang="scss" scoped>
.dFlex {
  display: flex;
}
.alignItemsCenter {
  align-items: center;
}
.pt12 {
  padding-top: 12px;
}
.textLeft {
  text-align: left;
}
.dBlock {
  display: block;
}
.whiteBg {
  background-color: white;
}
.plb20 {
  padding-left: 20px;
  padding-right: 20px;
}
.noMargin {
  margin: 0;
}
.mAuto {
  margin: auto;
}
.mxAuto {
  margin: 0 auto;
}
.mb6 {
  margin-bottom: 6px;
}
.mb8 {
  margin-bottom: 8px;
}
.mb10 {
  margin-bottom: 10px;
}
.mb12 {
  margin-bottom: 12px;
}
.mb16 {
  margin-bottom: 16px;
}
.mb20 {
  margin-bottom: 20px;
}
.mb24 {
  margin-bottom: 24px;
}
.pl10 {
  padding-left: 10px;
}
.fs16 {
  font-size: 16px;
}
.fs28 {
  font-size: 28px;
}
.globalCard {
  &.cardBorder {
    border: 1px solid #D9D9D9;
  }
  &.br20 {
    border-radius: 20px;
  }
  .cardImage {
    height: 190px;
    ._image {
      height: inherit;
      img {
        max-width: 100%;
        max-height: 100%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        object-fit: contain;
        object-position: top;
      }
    }
  }
  .cardDesc {
    ._heading {
      h5 {
        color: #2A2A2A;
        text-transform: capitalize;
        font-weight: bold;
      }
    }
    ._rating {}
    ._description {
      min-height: 54px;
      p {
        line-height: 32px;
        color: #2A2A2A;
      }
    }
    ._separator {}
    ._price {
      strong, b {
        color: #2A2A2A;
        line-height: 1;
        letter-spacing: 0;
        font-weight: bold;
      }
    }
    ._comparator {}
  }
}
</style>
<style lang="scss">
.ant-rate {
  color: #FF7A34 !important;
}
.ant-checkbox-wrapper {
  span {
    color: #2A2A2A;
  }
}
</style>
