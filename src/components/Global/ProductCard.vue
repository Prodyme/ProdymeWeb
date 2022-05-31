<template>
    <a-card :bordered="false" class="category-card">
        <font-awesome-icon icon=" fa-solid fa-heart " size="2x" />
        <center>
            <img src="../../assets/mountains.jpg" width="100px">

        </center>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit..</h4>
         <aside class="princeReview">
              <a-rate :default-value="4" allow-half />
            </aside>
        <hr class="product-hr">
        <h2 class="box-rupee">&#8377;21.58</h2><small class="product-per-box"> per box</small>
        <a-checkbox @change="onChange" class="product-checkbox">
            Add to Smart Builder
        </a-checkbox>
    </a-card>
</template>
<script>
    export default {
        name: "ProductCard"
    }
</script>
<style lang="scss" scoped>
 .princeReview {
         .ant-rate{
             font-size:16px;
         }
        }
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
         bottom: 20px;
    }

     .product-per-box {
         font-size: 106%;
        font-weight: bold;
     }

     //h3,
    // h2 {
    //     font-weight: 700
    // }

    // .product-heading {

    //     margin-top: 50px;
    // }

     .product-hr {

        /* background-color: gray; */
        border-bottom: none;
        border-top: 1px solid #D9D9D9;
     }

    // .category-card {
    //     background-color: #F8F8F8 !important;
    //     width: 257px !important;
    //     height: 297px !important;

    //     // padding: 0px 40px 0px 40px ;
    // }

    // .category-card:hover {
    //     background-color: white !important;

    //          box-shadow: 3px 3px 20px #00000029;

    //     // .fa-heart {
    //     //     padding: 10px;
    //     //     transition: 0.5s;
    //     // }
    // }
</style>