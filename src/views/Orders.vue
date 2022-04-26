<template>
    <section class="mainAccContainer">
        <div class="main">
            <div class="banner-card">
                <img src="https://www.accruent.com/static/b3c4e13c979e79696ed8a9b9ca6d5bc1/7d7d1/accruent_resources_blog-entries_what-are-the-five-phases-of-the-construction-life-cycle-_hero.jpg" alt="Image" style="height: 50vh; width: 100vw">
                <div class="banner-text">
                    <h6>Home / <span>My Account</span></h6>
                    <h1>My Account</h1>
                </div> 
            </div>
            <div class="account-details">
                <div class="acc-heading">
                    <router-link to="/myAccount"><h1>MY PROFILE</h1></router-link>
                    <router-link to="/myMessages"><h1>MY MESSAGES</h1></router-link>
                    <h1 class="active">MY ORDERS</h1>
                    <router-link to="/myDesigns"><h1>MY DESIGNS</h1></router-link>
                    <router-link to="/myWishlist"><h1>WISHLIST</h1></router-link>
                </div>
                <hr class="line-color">
                <div class="header">
                    <div class="Cont-heading">
                        <h2>Your Last Orders</h2>
                    </div>
                    <div class="filters">
                        <div class="search-filter">
                             <a-input-search placeholder="Search for tags or keywords" style="width: 300px; background-color: #E1E1E1;" @search="onSearch" />
                        </div>
                        <p>-OR-</p>
                        <div class="date-filter">
                            <a-dropdown :trigger="['click']">
                                 <a class="ant-dropdown-link input-bar" @click="e => e.preventDefault()" >
                                Date Range <span><a-icon type="down" /></span>
                            </a>
                                <template #overlay>
                                <a-menu>
                                    <a-menu-item key="0">
                                    <a href="http://www.alipay.com/">Last 10 Days</a>
                                    </a-menu-item>
                                    <a-menu-item key="1">
                                    <a href="http://www.taobao.com/">Last 15 Days</a>
                                    </a-menu-item>
                                    <a-menu-item key="3">Last Month</a-menu-item>
                                </a-menu>
                                </template>
                            </a-dropdown>
                        </div>
                        <a-icon type="calendar" class="icon"/>
                        <button class="btn">Apply</button>
                    </div>
                </div>
                <div class="orders-table">
                    <div class="orders-table-header">
                        <a-row type="flex">
                        <a-col :span="4" :order="1">
                            Order Date
                        </a-col>
                        <a-col :span="4" :order="2">
                            Order No.
                        </a-col>
                        <a-col :span="3" :order="3">
                            Estimated Delivery Date
                        </a-col>
                        <a-col :span="4" :order="4" style="margin-left: 3.8rem">
                           Order Total
                        </a-col>
                        <a-col :span="5" :order="5">
                            Order Status
                        </a-col>
                        <a-col :span="1" :order="6">
                        </a-col>
                        </a-row>
                    </div>
                    <div class="orders-table-content">
                        <div class="content-rows" style="align-items: center">
                            <a-row type="flex">
                        <a-col :span="4" :order="1">
                            MM-DD-YYYY
                        </a-col>
                        <a-col :span="4" :order="2">
                            <p class="order">XXXXXXXXX</p>
                        </a-col>
                        <a-col :span="3" :order="3">
                            MM-DD-YYYY
                        </a-col>
                        <a-col :span="4" :order="4" style="margin-left: 4rem; display: flex; align-items: center">
                           <p>Rs.2100.58</p>
                        </a-col>
                        <a-col :span="5" :order="5">
                            <button class="status-btn in-progress">In Progress</button>
                        </a-col>
                        <a-col :span="1" :order="6">
                            <a-icon type="message" class="table-icon"/>
                        </a-col>
                        </a-row>
                        </div>
                        <div class="content-rows" style="background-color:#F4F4F4 ">
                            <a-row type="flex">
                        <a-col :span="4" :order="1">
                            MM-DD-YYYY
                        </a-col>
                        <a-col :span="4" :order="2">
                            <p class="order">XXXXXXXXX</p>
                        </a-col>
                        <a-col :span="3" :order="3">
                            MM-DD-YYYY
                        </a-col>
                        <a-col :span="4" :order="4" style="margin-left: 4rem">
                           <p>Rs.2100.58</p>
                        </a-col>
                        <a-col :span="5" :order="5">
                            <button class="status-btn cancelled">Cancelled</button>
                        </a-col>
                        <a-col :span="1" :order="6">
                            
                        </a-col>
                        </a-row>
                        </div>
                        <div class="content-rows">
                            <a-row type="flex">
                        <a-col :span="4" :order="1">
                            MM-DD-YYYY
                        </a-col>
                        <a-col :span="4" :order="2">
                            <p class="order">XXXXXXXXX</p>
                        </a-col>
                        <a-col :span="3" :order="3">
                            MM-DD-YYYY
                        </a-col>
                        <a-col :span="4" :order="4" style="margin-left: 4rem">
                           <p>Rs.2100.58</p>
                        </a-col>
                        <a-col :span="5" :order="5">
                            <button class="status-btn in-progress">In Progress</button>
                        </a-col>
                        <a-col :span="1" :order="6">
                            <a-icon type="message" class="table-icon"/>
                        </a-col>
                        </a-row>
                        </div>
                        <div class="content-rows" style="background-color:#F4F4F4 ">
                            <a-row type="flex">
                        <a-col :span="4" :order="1">
                            MM-DD-YYYY
                        </a-col>
                        <a-col :span="4" :order="2">
                            <p class="order">XXXXXXXXX</p>
                        </a-col>
                        <a-col :span="3" :order="3">
                            MM-DD-YYYY
                        </a-col>
                        <a-col :span="4" :order="4" style="margin-left: 4rem">
                           <p>Rs.2100.58</p>
                        </a-col>
                        <a-col :span="5" :order="5">
                            <button class="status-btn shipped">Shipped</button>
                        </a-col>
                        <a-col :span="1" :order="6">
                        </a-col>
                        </a-row>
                        </div>
                        <div class="content-rows" >
                            <a-row type="flex">
                        <a-col :span="4" :order="1">
                            MM-DD-YYYY
                        </a-col>
                        <a-col :span="4" :order="2">
                            <p class="order">XXXXXXXXX</p>
                        </a-col>
                        <a-col :span="3" :order="3">
                            MM-DD-YYYY
                        </a-col>
                        <a-col :span="4" :order="4" style="margin-left: 4rem">
                           <p>Rs.2100.58</p>
                        </a-col>
                        <a-col :span="5" :order="5">
                            <button class="status-btn in-progress">In Progress</button>
                        </a-col>
                        <a-col :span="1" :order="6">
                            <a-icon type="message" class="table-icon"/>
                        </a-col>
                        </a-row>
                        </div>
                        <div class="content-rows" style="background-color:#F4F4F4 ">
                            <a-row type="flex">
                        <a-col :span="4" :order="1">
                            MM-DD-YYYY
                        </a-col>
                        <a-col :span="4" :order="2">
                            <p class="order">XXXXXXXXX</p>
                        </a-col>
                        <a-col :span="3" :order="3">
                            MM-DD-YYYY
                        </a-col>
                        <a-col :span="4" :order="4" style="margin-left: 4rem">
                           <p>Rs.2100.58</p>
                        </a-col>
                        <a-col :span="5" :order="5">
                            <button class="status-btn shipped">Shipped</button>
                        </a-col>
                        <a-col :span="1" :order="6">
                        </a-col>
                        </a-row>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
       <div class="help">
            <h1>Haven't found what you are looking for?</h1>
            <h3>Reach us via our contact form and get easily redirected to the person who can help you.</h3>
             <router-link to="/contact"><button class="helpbtn">Connect with an expert</button></router-link>
        </div>   
        <Footer/>
    </section> 
             
</template>

<script>
import Footer from "@/components/Global/Footer.vue";
export default {
    name: 'MyOrders',
    components:{
        Footer,
    }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        background-color: #F8F8F8;
        overflow-x: hidden;
    }
    .banner-card{
        position: relative;
        background-color: black;
    }
    .banner-card img{
        height: 50vh;
        /* width: 100vw; */
        opacity: 0.3;
    }
    .banner-text{
        position: absolute;
        top: 15%;
        left: 18%;
        padding: 20px;
    }
    .banner-text h6,.banner-text h1{
        color: white;
    }
    .banner-text h6{
        font-size: 0.8rem;
        font-weight:300;
    }
    .banner-text span{
        font-weight: bold;
    }
    .banner-text h1{
        font-size: 3rem;
        font-weight: 300;
    }
    .account-details{
        background-color: white;
        position: absolute;
        top: 30%;
        left: 10%;
        width: 80vw;
        box-shadow: 3px 3px 3px rgb(202, 202, 202);
        border-radius: 5px;
        padding: 40px 80px;
        border: 1px solid rgb(202, 202, 202);
    }
    .acc-heading{
        display: flex;
       width: 60vw;
       justify-content: space-between;
    }
    /* .acc-heading:after{
        content: '';
        height: 0.2rem;
        width: 6rem;
        background-color: #FF7A34;
        border-radius: 60px 60px 0 0;
        position: absolute;
        bottom: 104vw;
        left: 6vw;
    } */
    .acc-heading h1{
        font-size: 1rem;
        padding-bottom: 12px;
        cursor: pointer;
        transition: 0.3s ease;
    }
    .acc-heading .active{
        color: #FF7A34;
        font-weight: bold;
    }
    .acc-heading h1:hover{
        color: #FF7A34;
    }
    .line-color {
        border-color: #FF7A34;
        border-top: none;
    }
    hr{
        border-color: #d9d9d9;
        border-top: none;
    }
    .Cont-heading{
        display: flex;
        justify-content: space-between;
        font-size: 1rem;
    }
    .header{
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }
    .filters{
        display: flex;
        margin-top: 1rem;
        align-items: center;
        /* border: 1px solid red; */
    }
    .search-filter{
        margin-right: 3rem;
    }
    .input-bar{
        padding: 7px 50px;
        border: 1px solid #d9d9d9;
        outline: none;
        /* width: 20rem; */
        color: black;
    }
    .input-bar span{
        margin-left: 0.3rem;
    }
    .filters p{
        font-size: 1rem;
        margin-right: 3rem;
    }
    .icon{
        margin-left: 0.8rem;
        margin-right: 7rem;
        color: #FF7A34;
        font-size: 1.6rem;
    }
    .btn{
        padding: 0.4rem 2rem;
        border: 1px solid #FF7A34;
        border-radius: 1.5rem;
        background-color: white;
        color: #FF7A34;
        cursor: pointer;
    }
    .btn:hover{
        background-color: #FF7A34;
        color: white;
    }
    .orders-table-header{
        margin-top: 1.2rem;
        padding: 10px;
        background-color: #BCBCBC;
        color: white;
        font-weight: 700;
        font-size: 0.9rem;
    }
    .orders-table-content{
        /* border: 1px solid blueviolet; */
        margin-top: 0.5rem;
    }
    .content-rows{
        padding: 10px;
    }
    .status-btn {
        width: 8rem;
        padding: 3px 5px;
        border: none;
        font-size: 0.9rem;
        color: #63612C;
    }
    .in-progress{
        background-color: #FFEBC4;
    }
    .cancelled{
        background-color: #FFD2C4;
    }
    .shipped{
        background-color: #B8E6AD;
    }
    .table-icon{
        font-size: 1.3rem;
        color: #FF7A34;
    }
    .order{
        color: #FF7A34;
        text-decoration: underline;
    }
    .help{
        margin-top: 32rem;
        margin-left: 7rem;
        width: 60rem;
        padding: 10px;
    }
    .help h1{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 2.5rem;
    }
    .help h3{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 1.1rem;
        margin-top: 1rem;
        padding-right: 25px;
    }
    .helpbtn{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FF7A34;
        color: white;
        width: 11rem;
        border-radius: 5rem;
        border: none;
        padding: 10px 20px;
        margin-top: 4rem;
        margin-left: 13rem;
        cursor: pointer;
    }
    .helpbtn:hover{
        background: white;
        border: 1px solid #FF7A34;
        color: #FF7A34;
    }
    Footer{
        margin-top: 8rem;
    }
</style>    