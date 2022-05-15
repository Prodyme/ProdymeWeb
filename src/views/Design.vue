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
import BannerCard from "@/views/Banner.vue";
import AccHeader from "@/views/AccHeader.vue";

export default {
    name: 'MyDesigns',
    components: {
        DesignCard,
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
    @media (max-width: 425px) {
        .account-details{
            top: 35%;
            padding: 20px 15px;
            width: 94vw;
            left: 3%;
        }
        .input-bar{
            font-size: 0.7rem;
        }
        Footer{
            margin-top: 100rem;
        }
    }
    @media (max-width: 380px){
        .account-details{
            padding: 20px;
            width: 100%;
            left: 0%;
            top: 40%;
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