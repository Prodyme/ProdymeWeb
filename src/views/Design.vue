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
                    <!-- <h1>MY PROFILE</h1> -->
                    <router-link to="/myMessages"><h1>MY MESSAGES</h1></router-link>
                    <router-link to="/myOrders"><h1>MY ORDERS</h1></router-link>
                    <router-link to="/myDesigns"><h1 class="active">MY DESIGNS</h1></router-link>
                    <router-link to="/myWishlist"><h1>WISHLIST</h1></router-link>
                </div>
                <hr class="line-color">
                <div class="design-header">
                    <a-dropdown :trigger="['click']">
                        <a class="ant-dropdown-link input-bar" @click="e => e.preventDefault()">
                        Most Recent <a-icon type="down" />
                        </a>
                        <a-menu slot="overlay">
                        <a-menu-item key="0">
                            <a href="http://www.alipay.com/">1st menu item</a>
                        </a-menu-item>
                        <a-menu-item key="1">
                            <a href="http://www.taobao.com/">2nd menu item</a>
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="3">
                            3rd menu item
                        </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                    <div class="search-filter">
                            <a-input-search placeholder="Search for tags or keywords" style="width: 300px; background-color: #E1E1E1" @search="onSearch" />
                    </div>
                </div>
                <div class="design-cards">
                    <DesignCard/>
                    <DesignCard/>
                    <DesignCard/>
                    <DesignCard/>
                    <DesignCard/>
                    <DesignCard/>
                    <DesignCard/>
                    <DesignCard/>
                    <DesignCard/>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
</template>                
<script>
import Footer from "@/components/Global/Footer.vue";
import DesignCard from "@/views/DesignCard.vue";

export default {
    name: 'MyDesigns',
    components: {
        DesignCard,
        Footer,
    }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
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
    .design-header{
        margin-top: 1.9rem;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
    }
    .input-bar{
        font-size: 1rem;
        color: black;
    }
    /* .search-bar{
        outline: none;
        background-color: #E1E1E1;
        border: 1px solid #E1E1E1;
        border-radius: 10px;
        padding: 10px;
        width: 20vw;
    } */
    .design-cards{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    Footer{
        margin-top: 80rem;
    }
</style>    