<template>
    <section class="main">
        <div class="banner-text">
            <h6><router-link to="/" style="color: black; text-decoration: none">Home / </router-link> <span style="font-weight: bold;"> SmartBuilder</span></h6>
            <h1>Smart <span style="color: #FF7A34">Kitchen</span> Builder</h1>
            <h2>Smart Builder will find the right product for your need!</h2>
        </div> 
        <div class="progress">
            <div class="steps">
                <a-steps :current="1">
                    <a-popover slot="progressDot" slot-scope="{ index, status,}">
                        <template slot="content">
                        <span>step {{ index }} status: {{ status }}</span>
                        </template>
                        <!-- <span :class="`${prefixCls}-icon-dot`" /> -->
                    </a-popover>
                    <a-step title="Structure" />
                    <a-step title="Hardware"  />
                    <a-step title="Finishes" />
                    <a-step title="Details"  />
                    <a-step title="Lighting"  />
                    <a-step title="Appliance & Fittings"  />
                </a-steps>
            </div>
            <div class="preferences">
                <div class="header">
                    <button class="count"><span>1</span>/3</button>
                    <p><strong>13m Ply:</strong> The main carcass that is adding strength to the carcass is made of this plywood thickness. These are the bones.</p>
                </div>
                <div class="boxes">
                    <div class="box">
                        <div class="color"></div>
                        <div class="content"></div>
                    </div>
                    <div class="box">
                        <div class="color"></div>
                        <div class="content">
                            <p>Commercial grade Good for dry area</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="color"></div>
                        <div class="content">
                            <p>Boiling water resistant Termite resistant Indigenous brand</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="color"></div>
                        <div class="content">
                            <p>Zero emissions Boiling water proof Termite proof Fire resistant Indigenous brands</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="color"></div>
                        <div class="content">
                            <p>Zero emissions Boiling water proof Termite proof Fire resistant Top brands</p>
                        </div>
                    </div>
                </div>
                <div class="slider">
                    <a-slider :default-value="30" :tooltip-visible="false" style="color: #FF7A34" />
                    <div class="heading">
                        <h3>Entry Level</h3>
                        <h3>Luxury Choice</h3>
                    </div>
                </div>
            </div>
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
        <div class="products">
            <div class="first-filter">
                <a-input placeholder="Search Baskets.." style="width: 200px" @search="onSearch" />
                <div class="pages">
                    <a-icon type="left" />
                    <p>1 of 45</p>
                    <a-icon type="right" />
                </div>
            </div>
            <div class="second-filters">
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
                <div class="links">
                    <a-icon type="smile" class="icon"/> <a href="">Expert Opinion</a>
                    <a-icon type="form" class="icon" style="margin-left: 1.5rem"/> <a> <router-link to="/SmartBuilder">Basket Dim.</router-link></a>
                </div>
            </div>
        </div>
        <div class="card">
            <ProductDesc></ProductDesc>
        </div>
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
import ProductDesc from "@/views/ProductDesc.vue";    
import SmartCards from "@/views/SmartCards.vue";
    export default {
        name: 'SmartMain',
        components: {
            ProductDesc,
            SmartCards,
        },
        methods: {
            onSearch(value) {
                console.log(value);
            },
        },
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
        font-weight: 490;
    }
    .banner-text h2{
        font-size: 1.1rem;
        font-weight:normal;
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
    .smart-card{
        display: flex;
        flex-wrap: wrap;
    }
    .progress{
        /* border: 1px solid salmon; */
        width: 35rem;
        padding: unset;
        background-color: #E1E1E1;
        padding: 1rem 0.2rem;
        margin-bottom: 0.5rem;
    }
    .steps{
        overflow-x: scroll;
        /* border: 1px solid blue; */
    }
    .steps::-webkit-scrollbar { /* WebKit */
        width: 0;
        height: 0;
    }
    .preferences{
        margin: 0.6rem 0.8rem;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0px 3px 6px #00000029;
        
    }
    .header{
        display: flex;
        padding: 0.5rem 0.8rem;
    }
    .count{
        height: 2.1rem;
        padding: 10px;
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        background-color: #FF7A34;
        border-radius: 4px;
        border: none;
        color: white;
    }
    .count span{
        font-size: 1.5rem;
    }
    .header p{
        margin-left: 0.8rem;
        font-size: 0.7rem;
        color: black;
    }
    .boxes{
        display: flex;
        justify-content: space-between;
        padding: 0rem 0.3rem;
    }
    .color{
        height: 50%;
        background-color: #FFDECC;
    }
    .box{
        width: 6.3rem;
        height: 8rem;
    }
    .content{
        padding: 0.3rem;
        font-size: 0.5rem;
        color: black;
    }
    .slider{
        padding-bottom: 0.8rem;
    }
    .heading{
        display: flex;
        padding: 0rem 0.4rem;
        justify-content: space-between;
    }
    .products{
        margin: 1rem 0rem;
    }
    .first-filter{
        display: flex;
        justify-content: space-between;
    }
    .pages{
        margin-left: 15rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .pages p{
        color: black;
        font-size: 0.9rem;
        margin: 0rem 0.9rem;
    }
    .second-filters{
        display: flex;
        margin-top: 1rem;
    }
    .ant-dropdown-link{
        color: #2A2A2A;
        font-size: 0.9rem;
    }
    .links{
        margin-left: 12rem;
        display: flex;
        justify-content: space-between;
    }
    .links a{
        color: #FF7A34;
        text-decoration: underline;
        font-size: 0.9rem;
    }
    .icon{
        font-size: 1.2rem;
        color: #FF7A34;
    }
</style>