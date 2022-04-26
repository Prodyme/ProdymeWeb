<template>
    <section class="mainAccContainer">
        <div class="main">
            <BannerCard></BannerCard>
            <div class="account-details">
                <AccHeader></AccHeader>
                <p class="info">Please note you can only view the queries sent by you and response will be sent via email.</p>

                <div class="message-status">
                    <p class="messageNum">32 Meassages</p>
                    <a-dropdown :trigger="['click']">
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                        Newest <a-icon type="down" />
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
                    <a-icon type="filter" style="font-size: 1rem; color: #FF7A34"/>
                    <div class="pages">
                        <a-icon type="left" />
                        <p>1 of 45</p>
                        <a-icon type="right" />
                    </div>
                </div>
                <div class="messages-cont">
                    <div class="message-details">
                        <p class="date">Sep 15 2021</p>
                        <p class="orderdetails">Order Details: <span>XXXXXXXX</span></p>
                        <button class="btn in-progress">In Progress</button>
                           
                    </div>
                    <div class="message-content">
                        <h2 class="message-heading">How can we help you?</h2>
                        <p class="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic magni ullam.</p>
                    </div>
                    <div class="links">
                        <a-icon type="link" style="color: #FF7A34; font-size: 1.2rem"/>
                        <a href="" class="files">Filename ABC</a>
                        <a href="" class="files">Filename ABC</a>
                        <a href="" class="files">Filename ABC</a>
                        <a href="" class="files">Filename ABC</a>
                    </div>
                    <p class="details">View Details <span><a-icon type="down" /></span></p>
                </div>
                <div class="messages-cont">
                    <div class="message-details">
                        <p class="date">Sep 15 2021</p>
                        <p class="orderdetails">Order Details: <span>XXXXXXXX</span></p>
                        <button class="btn resolved">Resolved</button>
                           
                    </div>
                    <div class="message-content">
                        <h2 class="message-heading">How can we help you?</h2>
                        <p class="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic magni ullam.</p>
                    </div>
                    <div class="links">
                        <a-icon type="link" style="color: #FF7A34; font-size: 1.2rem"/>
                        <a href="" class="files">Filename ABC</a>
                    </div>
                    <p class="details">View Details <span><a-icon type="down" /></span></p>
                </div>
                <div class="messages-cont">
                    <div class="message-details">
                        <p class="date">Sep 15 2021</p>
                        <p class="orderdetails">Order Details: <span>XXXXXXXX</span></p>
                        <button class="btn resolved">Resolved</button>
                           
                    </div>
                    <div class="message-content">
                        <h2 class="message-heading">How can we help you?</h2>
                        <p class="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic magni ullam.</p>
                    </div>
                    <div class="links">
                        <a-icon type="link" style="color: #FF7A34; font-size: 1.2rem"/>
                        <a href="" class="files">Filename ABC</a>
                    </div>
                    <p class="details">View Details <span><a-icon type="down" /></span></p>
                </div>
                <div class="messages-cont">
                    <div class="message-details">
                        <p class="date">Sep 15 2021</p>
                        <p class="orderdetails">Order Details: <span>XXXXXXXX</span></p>
                        <button class="btn unresolved">Unresolved</button>
                           
                    </div>
                    <div class="message-content">
                        <h2 class="message-heading">How can we help you?</h2>
                        <p class="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic magni ullam.</p>
                    </div>
                    <div class="links">
                        <a-icon type="link" style="color: #FF7A34; font-size: 1.2rem"/> 
                        <p style="margin-left: 0.3rem">None</p>
                    </div>
                    <p class="details">View Details <span><a-icon type="down" /></span></p>
                </div>
            </div>    
        </div>
        <Footer/>
    </section>    
</template>    

<script>
import Footer from "@/components/Global/Footer.vue";
import BannerCard from "@/views/Banner.vue";
import AccHeader from "@/views/AccHeader.vue";
export default {
    name: 'myMessages',
    components: {
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
    .info{
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        color: black;
    }
    .message-status{
        display: flex;
        align-items: center;
    }
    .messageNum{
        margin-right: 30rem;
        font-size: 1.1rem;
        font-weight: 600;
        color: black;
    }
    .ant-dropdown-link{
        color: black;
        font-size: 1rem;
        margin-right: 2rem;
    }
    .pages{
        margin-left: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .pages p{
        color: black;
        font-size: 0.9rem;
        margin: 0rem 0.2rem;
    }
    .messages-cont{
        padding: 0.9rem;
        background-color: #F8F8F8;
        margin-top: 1rem;
    }
    .message-details{
        display: flex;
        align-items: center;
    }
    .date{
        color: #888888;
        font-size: 0.9rem;
        margin-right: 24rem;
    }
    .orderdetails{
        color: black;
        font-size: 0.9rem;
        margin-right: 3rem;
    }
    .orderdetails span{
        color: #FF7A34;
        text-decoration: underline;
    }
    .btn{
        padding: 0.2rem 1.5rem;
        border: none;
        cursor: pointer;
    }
    .in-progress{
        background-color: #FFEBC4;
        color: #63612C;
    }
    .resolved{
        color: #63612C;
        background-color: #B8E6AD;
    }
    .unresolved{
        background-color: #FFD2C4;
        color: #63612C;
    }
    .message-content{
        margin-top: 0.3rem;
    }
    .message-heading{
        font-size: 1rem;
        margin-bottom: 0.2rem;
    }
    .content{
        font-size: 0.9rem;
        color: black;
        font-weight: 300;
    }
    .links{
        margin-top: 0.3rem;
        display: flex;
        align-items: center;
    }
    .files{
        margin: 0 0.5rem;
        color: #FF7A34;
        text-decoration: underline;
        font-size: 0.9rem;
    }
    .details{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #FF7A34;
        text-decoration: underline;
        margin-top: 0.7rem;
        font-size: 0.9rem;
    }
    .details span{
        margin-left: 0.3rem;
        font-size: 0.8rem;
        cursor: pointer;
    }
    Footer{
        margin-top: 60rem;
    }
   
</style>  