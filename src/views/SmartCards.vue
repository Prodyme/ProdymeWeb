<template>
    <div class="card-body">
        <div class="action">
            <a-icon type="heart" class="heartIcon" v-on:click="liked()"/>
        </div>
        <div class="item-image">
            <img alt="Item" src="https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6"/>
            <h2>Product Name ABC</h2>
        </div>
        <a-rate v-model="value" class="rating"/>
        <p class="item-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit nam at non odio vero laboriosam quaerat, laudantium nostrum rem deserunt, assumenda, asperiores amet!</p>
        <hr>
        <div class="price">
            <h3>21.58 Rupees <span>per box</span></h3>
        </div>
        <div class="quantity">
            <a-checkbox @change="onChange" class="checkbox">
              Compare
            </a-checkbox>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SmartCards',
    data() {
    return {
      value: 4,
    };
  },
}
</script>


<style lang="scss" scoped>
  .card-body{
    width: 16rem;
    padding: 0.9rem;
    background-color: white;
    margin: 2rem 1rem 2rem 0rem;
    box-shadow: 3px 3px 6px #00000029;
  }
  .card-body:hover{
    border: 1px solid #FF7A34;
  }
  .action{
    display: flex;
    justify-content: flex-end;
    font-size: 1.4rem;
    color: #FF7A34;
    cursor: pointer;
  }
  .item-image{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    margin-top: 0.5rem;
  }
  .item-image img{
    display: flex;
    width: 14rem;
    height: 9rem;
    border-radius: 0.6rem;
    align-items: center;
    justify-content: center;
  }
  .item-image h2{
      margin-bottom: unset;
      margin: 0.5rem 0rem;
  }
  .item-desc{
    margin-top: 0.3rem;
    margin-left: 0.2rem;
    color: black;
    font-size: 0.8rem;
  }
  .rating{
   font-size: 0.9rem;
  }
  hr{
    border-color: #d9d9d9;
    border-top: none;
  }
  .price{
    font-size: 1.3rem;
    font-weight: 900;
  }
  .price span{
    font-size: 0.9rem;
  }
  .quantity{
    margin: 1rem 0rem;
  }
  .checkbox{
      font-size: 1rem;
  }
</style>  