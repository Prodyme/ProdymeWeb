<template>
    <section class="main">
        <a-row style="margin-top: 5rem; margin-bottom: 6rem">
            <a-col :span="7" class="columns col1">
                <div class="sidebar-heading">
                    <h6><router-link to="/" style="color: black; text-decoration: none">Home / </router-link> <span> Product Detail Page</span></h6>
                </div>
                <div class="tags">
                    <h4>Tags: </h4>
                    <div class="text-center">
                        <v-btn v-if="!chip1 && !chip2 && !chip3 && !chip4" close color="#FFFFFF" @click="chip1 = true, chip2 = true, chip3 = true, chip4= true">
                        Reset Chips
                        </v-btn>

                        <v-chip v-if="chip1" class="ma-2 chips" close color="#FFFFFF" @click:close="chip1 = false" contenteditable>
                        Kitchen
                        </v-chip>
                        <v-chip v-if="chip2" class="ma-2 chips" close color="#FFFFFF" @click:close="chip2 = false" contenteditable>
                        L-Shape
                        </v-chip>
                        <v-chip v-if="chip3" class="ma-2 chips" close color="#FFFFFF" @click:close="chip3 = false" contenteditable>
                        Sustainable
                        </v-chip>
                    </div>
                </div>
                <div class="samples">
                    <div class="carousel">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7zztpLc-JFO9JOfZopKlq9xIAMJQVyVXeg&usqp=CAU" alt="" class="side-img" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7zztpLc-JFO9JOfZopKlq9xIAMJQVyVXeg&usqp=CAU" alt="" class="side-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7zztpLc-JFO9JOfZopKlq9xIAMJQVyVXeg&usqp=CAU" alt="" class="side-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7zztpLc-JFO9JOfZopKlq9xIAMJQVyVXeg&usqp=CAU" alt="" class="side-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7zztpLc-JFO9JOfZopKlq9xIAMJQVyVXeg&usqp=CAU" alt="" class="side-img">
                    </div>   
                    <a-icon type="down" class="icon"/>
                    <div class="enlarged-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpshaLLhZ9MNOwp9K0fL6r6xhxiMoyeshYaA&usqp=CAU" alt="" class="main-img">
                    </div>
                </div>
            </a-col>
            <a-col :span="17" class="columns col2">
                <div class="col2-header">
                     <a-dropdown :trigger="['click']">
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                        Navigation Category A <a-icon type="down" />
                        </a>
                        <a-menu slot="overlay">
                        <a-menu-item key="0">
                            <a href="http://www.alipay.com/">1st menu item</a>
                        </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                    <h4>Navigation Category A</h4>
                </div>
                <div class="about-product">
                    <div class="name">
                        <h1 contenteditable>Product Name ABC</h1>
                        <h3 contenteditable>Product Category Name</h3>
                        <a-icon type="heart" class="heart"/>
                    </div>
                    <div class="details">
                        <div class="reviews">
                            <a-rate v-model="value" class="rating"/>
                            <h5 contenteditable>4.4</h5>
                            <span contenteditable>(328 reviews)</span>
                        </div>
                        <a href="/SmartBuilder">Build My Project</a>
                        <h4 class="price" contenteditable>₹2110.00 <span contenteditable = "false">per sheet</span></h4>
                    </div>
                </div>
                <ProductDescAdmin/>
            </a-col>
        </a-row>
        <Footer/>
    </section>
</template>

<script>
// import TopBar from "@/components/Home/TopBar/TopBar";
import ProductDescAdmin from './ProductDescAdmin.vue';
import Footer from "@/components/Global/Footer.vue";

export default{
    name: 'ProductDetailsAdmin',
    data () {
      return {
        chip1: true,
        chip2: true,
        chip3: true,
        value: 4,
      }
    },
    components: {
        // TopBar
        ProductDescAdmin, 
        Footer,
    }
}
</script>

<style scoped>
    .col1{
        background-color: #DDE8EA;
        padding: 1rem 1.5rem;
        border-bottom-right-radius: 1rem;
        height: 40rem;
        /* width: 389px; */
    }
    .sidebar-heading{
        display: flex;
        justify-content: center;
    }
    .sidebar-heading h6{
        font-size: 0.9rem;
        font-weight: 400;
    }
    .sidebar-heading span{
        font-weight: bold;
    }
    .tags{
        margin: 3rem 1rem 1rem 4.5rem;
    }
    .tags h4{
        font-size: 1.3rem;
        font-weight: 400;
        font-family: Roboto;
    }
    .chips{
        margin: 0rem 0.7rem 0.7rem 0rem;
        padding: 18px;
    }
    .samples{
        margin-bottom: 1rem;
    }
    .carousel{
        display: flex;
        flex-direction: column;
        /* border: 1px solid red; */
        width: 7rem;
        justify-content: center;
        align-items: center;
        margin-left: 3rem;
        height: 20rem;
        overflow-y: scroll;
        /* margin-top: 3rem; */
        position: absolute;
        top: 42%;
    }
    .carousel::-webkit-scrollbar { /* WebKit */
        width: 0;
        height: 0;
    }
    .side-img{
        width: 5rem;
        height: 5rem;
        margin-bottom: 0.5rem;
        border-radius: 1rem;
        border: 1px solid white;
    }
    .icon{
        cursor: pointer;
        position: absolute;
        top: 93%;
        left: 30%;
    }
    .enlarged-img{
        position: absolute;
        top: 41%;
        left: 50%;
        z-index: 1;
    }
    .main-img{
        height: 22rem;
        width: 23rem;
        border-radius: 1rem;
        border: 1px solid white;
        box-shadow: 3px 3px 6px rgb(168, 167, 167);
    }

    .col2{
        background-color: #F8F8F8;
        padding: 1rem 1.8rem;
        height: 40rem;
        border-bottom: 1px solid black;
    }
    .col2-header{
        display: flex;
        /* z-index: -1; */
    }
    .col2-header h4{
        margin-left: 7rem;
        font-weight: 400;
        font-size: 1rem;
    }
    .ant-dropdown-link{
        font-weight: 400;
        font-size: 1rem;
        color: black;
    }
    .about-product{
        margin-top: 2.5rem;
    }
    .name h1{
        font-size: 2.7rem;
        font-weight: 400;
        margin-bottom: unset;
    }
    .name h3{
        font-weight: 300;
        margin-top: -0.5rem;
        font-size: 1.1rem;
    }
    .heart{
        font-size: 1.8rem;
        color: #FF7A34;
        position: absolute;
        top: 18%;
        left: 90%;
        cursor: pointer;
    }
    .details{
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        align-items: center;
    }
    .reviews{
        display: flex;
        width: 18rem;
        align-items: center;
    }
    .rating{
        font-size: 1.1rem;
    }
    .reviews h5{
        font-size: 1rem;
        margin: 0.2rem 0.8rem 0rem 1.5rem;
        font-weight: 700;
    }
    .reviews span{
        font-size: 1rem;
        color: #888888;
    }
    .details a{
        font-size: 1rem;
        color: #FF7A34;
        text-decoration: underline;
    }
    .price{
        font-size: 1.7rem;
        font-weight: 700;
    }
    .price span{
        font-size: 1rem;
        font-weight: 500;
        margin-right: 0.4rem;
    }
</style>