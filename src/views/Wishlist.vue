<template>
    <section class="mainAccContainer">
        <div class="main">
            <BannerCard></BannerCard>
            <div class="account-details">
                <AccHeader></AccHeader>
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
                <div class="wishlist-cards">
                    <WishlistCard/>
                    <WishlistCard/>
                    <WishlistCard/>
                    <WishlistCard/>
                    <WishlistCard/>
                    <WishlistCard/>
                </div>
            </div>    
        </div>
        <Footer/>
    </section>    
</template>    

<script>
import WishlistCard from "@/views/WishlistCard.vue";
import Footer from "@/components/Global/Footer.vue";
import BannerCard from "@/views/Banner.vue";
import AccHeader from "@/views/AccHeader.vue";

export default {
    name: 'Wishlist',
    components: {
        WishlistCard,
        Footer,
        BannerCard,
        AccHeader,
    },
    methods:{
        onSearch(value) {
            console.log(value);
        },
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
    .design-header{
        margin-top: 1.9rem;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
    }
    .input-bar{
        outline: none;
        border: none;
        font-size: 1rem;
        color: black;
    }
    .wishlist-cards{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    Footer{
        margin-top: 60rem;
    }
</style>    