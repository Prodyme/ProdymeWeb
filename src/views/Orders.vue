<template>
    <section class="mainAccContainer">
        <div class="main">
            <BannerCard></BannerCard>
            <div class="account-details">
                <AccHeader></AccHeader>
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
                        <a-icon type="calendar" class="icon"/>
                        <button class="btn">Apply</button>
                        </div>
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
                        <a-col :span="4" :order="4" class="custom-col">
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
                        <a-col :span="4" :order="4" class="custom-content-col">
                           <p>₹2100.58</p>
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
                        <a-col :span="4" :order="4" class="custom-content-col">
                           <p>₹2100.58</p>
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
                        <a-col :span="4" :order="4" class="custom-content-col">
                           <p>₹2100.58</p>
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
                        <a-col :span="4" :order="4" class="custom-content-col">
                           <p>₹2100.58</p>
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
                        <a-col :span="4" :order="4" class="custom-content-col">
                           <p>₹2100.58</p>
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
                        <a-col :span="4" :order="4" class="custom-content-col">
                           <p>₹2100.58</p>
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
import BannerCard from "@/views/Banner.vue";
import AccHeader from "@/views/AccHeader.vue";

export default {
    name: 'MyOrders',
    components:{
        Footer,
        BannerCard,
        AccHeader,
    }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
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
    .custom-col{
        margin-left: 3.8rem
    }
    .custom-content-col{
        margin-left: 4rem
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
      @media (max-width: 425px) {
        .account-details{
            top: 35%;
            padding: 20px 10px;
            width: 100vw;
            left: 0%;
        }
        .Cont-heading{
            font-size: 1rem;
        }
        .filters{
            flex-direction: column;
        }
        .date-filter{
            display: flex;
            align-items: center;
        }
        .input-bar{
            padding: 5px 7px;
        }
        .orders-table-header{
            padding: 5px;
            font-size: 0.6rem;
        }
        .custom-col, .custom-content-col{
            margin-left: 1.8rem
        }
        .content-rows{
            padding: 3px;
            font-size: 0.6rem;
        }
        .status-btn {
            width: 4rem;
            padding: 3px 3px;
            font-size: 0.6rem;
        }
        .table-icon{
            font-size: 1rem;
        }
        .help{
            margin-left: unset;
            width: 23rem;
            padding: 7px;
        }
        .help h1{
            font-size: 1.5rem;
            justify-content: flex-start;
            word-wrap: break-word;
        }
        .help h3{
            font-size: 0.9rem;
            padding-right: unset;
        }
        .helpbtn{
            margin-left: unset;
        }
    }
    @media (max-width: 380px){
        .account-details{
            padding: 20px 24px;
            width: 100vw;
            left: 0%;
            top: 20%;
        }
       
        Footer{
            margin-top: 55vw;
        }
    }
    @media (max-width: 350px){
        .account-details{
            padding: 20px 24px;
            width: 100vw;
            left: 0%;
            top: 35%;
        }
    }
</style>    