<template>
    <section class="main">
        <div class="banner-text">
            <h6><router-link to="/" style="color: black; text-decoration: none">Home / </router-link> <span style="font-weight: bold;"> Smart Builder</span></h6>
            <h1>Smart Builder</h1>
            <h2>Smart Builder will find the right product for your need!</h2>
        </div> 
        <div class="categories">
            <ul>
                <li class="item">Basket(18)</li>
                <li class="item">Laminate(105)</li>
                <li class="item">Channels(37)</li>
                <li class="item">Plywood(88)</li>
                <li class="item">Category(88)</li>
                <li class="item">Category(88)</li>
            </ul>
        </div>
        <div class="design-plan">
            <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                Most Relevant <a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                <a-menu-item key="0">
                    <a href="">1st menu item</a>
                </a-menu-item>
                </a-menu>
            </a-dropdown>
            <div class="pages">
                <a-icon type="left" />
                <p>1 of 45</p>
                <a-icon type="right" />
            </div>
        </div>
        <SmartDesign></SmartDesign>
        <div class="smart-card">
            <SmartCards></SmartCards>
            <SmartCards></SmartCards>
            <SmartCards></SmartCards>
            <SmartCards></SmartCards>
            <SmartCards></SmartCards>
            <SmartCards></SmartCards>
        </div>
        
    </section>
</template>

<script>
import SmartDesign from "@/views/SmartDesign.vue";
import SmartCards from "@/views/SmartCards.vue";
export default {
    name: 'SmartMain',
    components: {
        SmartDesign,
        SmartCards,
    }
}
</script>


<style scoped>
    .main{
        /* border: 2px solid red; */
        margin-left: 1.2rem;
        padding: 1rem;
    }
    .banner-text h6{
        font-size: 0.8rem;
    }
    .banner-text h1{
        margin-top: 1rem;
        font-size: 2.5rem;
        margin-bottom: unset;
        color: #2A2A2A;
    }
    .banner-text h2{
        font-size: 1.1rem;
    }
    .categories ul{
        display: flex;
        list-style: none;
        padding: unset;
        /* justify-content: space-between; */
        /* border: 2px solid blue; */
        overflow-x: scroll;
        width: 34rem;
    }
    .categories::-webkit-scrollbar { /* WebKit */
        width: 0;
        height: 0;
    }
    .item{
        padding: 5px 0px;
        font-size: 1rem;
        margin-right: 2rem;
        color: #2A2A2A;
        cursor: pointer;
    }
    .item:hover{
        font-weight: bold;
    }
    .design-plan{
        display: flex;
        margin-top: 3rem;
        align-items: center;
    }
    .ant-dropdown-link{
        color: #2A2A2A;
        font-size: 0.9rem;
    }
    .pages{
        margin-left: 21rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .pages p{
        color: black;
        font-size: 0.9rem;
        margin: 0rem 0.9rem;
    }
    .smart-card{
        display: flex;
        flex-wrap: wrap;
    }
</style>