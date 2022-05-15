<template>
    <div class="card-body">
        <div class="action">
            <a-icon type="heart" class="heartIcon" v-on:click="liked()"/>
        </div>
        <div class="item-image">
            <img alt="Item" src="https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <a-rate v-model="value" class="rating"/>
        <hr>
        <div class="price">
            <h3>₹21.58 <span>per box</span></h3>
        </div>
        <div class="quantity">
          <div class="noOfItems">
            <button class="btn" v-on:click="decrement(number)"><a-icon type="minus" class="icon"/></button>
            <input :value="number" class="input-box">
            <button class="btn" v-on:click="increment(number)"><a-icon type="plus" class="icon"/></button>
          </div>
          <div class="addToCart">
            <a-checkbox @change="onChange" class="checkbox">
              Add to Cart
            </a-checkbox>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value: 4,
      number: 1,
    };
  },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    liked(){
      console.log("Heart button is clicked");
      // heartIcon.style.color = '#FF7A34';
    },
    increment(){
      this.number++;
    },
    decrement(){
      if(this.number <= 0){
        this.number = 0;
      }else{
        this.number--;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .card-body{
    width: 14rem;
    padding: 0.7rem;
    /* border-radius: 1rem; */
    transition: transform 1s;
    margin: 2rem 0rem;
  }
  .card-body:hover{
    transform: scale(1.1);
    box-shadow: 3px 3px 20px #00000029;
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
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
  }
  .item-image img{
    width: 13rem;
    height: 8.5rem;
    border-radius: 0.6rem;
  }
  .item-image p{
    margin-top: 0.3rem;
    margin-left: 0.2rem;
    font-weight: 600;
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
    font-size: 1rem;
  }
  .price span{
    font-size: 0.9rem;
  }
  .quantity{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .noOfItems{
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid red; */
    width: 5rem;
  }
  .btn{
    background-color: white;
    padding: 0.4rem;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .btn .icon{
    font-size: 0.8rem; 
    color: #FF7A34; 
  }
  .noOfItems span{
    font-size: 0.8rem;
  }
  .input-box{
    width: 17%;
    text-align: center;
    border: none;
  }
  @media (max-width: 425px) {
    .card-body{
      width: 9rem;
      height: 18rem;
      padding: 6px;
      margin: 1rem 0rem;
    }
    .action{
      font-size: 0.9rem;
    }
    .item-image{
      margin-top: 0.2rem;
    }
    .item-image img{
      width: 8rem;
      height: 6rem;
    }
    .item-image p{
      margin-left: 0rem;
      font-size: 0.6rem;
    }
    .rating{
      font-size: 0.6rem;
    }
    .price{
      font-size: 0.7rem;
    }
    .price span{
      font-size: 0.6rem;
    }
    .btn .icon{
      font-size: 0.5rem;  
    }
    .quantity{
      flex-direction: column;
    }
    .input-box{
      width: 16%;
    }
    .checkbox{
      font-size: 0.7rem;
    }
  }
  @media (max-width: 380px){
    .card-body{
      margin: 0rem 0.1ren;
   }
  }
  
</style>

