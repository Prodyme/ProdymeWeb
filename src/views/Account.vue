<template>
    <section class="mainAccContainer">
        <div class="main">
            <BannerCard></BannerCard>
            <div class="account-details">
                <AccHeader></AccHeader>
                <div class="personal-details-cont">
                    <div class="Cont-heading">
                        <h2>Your Personal Details</h2>
                        <h2><a>Edit</a></h2>
                    </div>
                    <div class="details">
                        <a-row>
                            <a-col :span="12" class="p-r-1p">
                            <small>First Name*</small>
                            <a-input />
                            </a-col>
                            <a-col :span="12" class="p-l-1p">
                            <small>Last Name*</small>
                            <a-input />
                            </a-col>
                        </a-row>
                        <a-row>
                            <a-col :span="12" class="p-r-1p">
                            <small>Role*</small>
                            <a-input />
                            </a-col>
                            <a-col :span="12" class="p-l-1p">
                            <small>Zipcode*</small>
                            <a-input />
                            </a-col>
                        </a-row>
                        <a-row>
                            <a-col :span="12" class="p-r-1p">
                            <small>Phone Number*</small>
                            <a-input />
                            </a-col>
                            <a-col :span="12" class="p-l-1p">
                            <small>Email*</small>
                            <a-input />
                            </a-col>
                        </a-row>
                    </div>
                </div>
                <hr>
                <div class="address-details">
                    <div class="Cont-heading">
                        <h2>Your Addresses</h2>
                        <h2><a>Add Address</a></h2>
                    </div>
<!--
                    <div class="address-cont">
                             <a-radio-group>
                                <button class="left"><LeftOutlined /></button>
                                <div class="address">
                                    <div class="address-value">
                                        <a-radio :value="1"></a-radio>
-->
                    <!-- <div class="address-cont"> -->
                            <!-- <button class="icon-btn"><a-icon type="left-circle" class="icon"/></button>
                            <a-radio-group name="radioGroup" :default-value="1" class="address-grp">
                                <div class="address">
                                    <div class="address-value">
                                         <a-radio :value="1"></a-radio>
>>>>>>> myAccount
                                        <p>Rakesh Jhunjhunwala 101, Silver oak society, Copernicus marg, Near India Gate, New Delhi 100001</p>
                                    </div>
                                    <div class="address-changes">
                                        <h4><a>Edit</a></h4>
                                        <h4><a>Delete</a></h4>
                                    </div>
                                </div>
                                <div class="address">
                                    <div class="address-value">
                                         <a-radio :value="2"></a-radio>
                                        <p>Rakesh Jhunjhunwala 101, Silver oak society, Copernicus marg, Near India Gate, New Delhi 100001</p>
                                    </div>
                                    <div class="address-changes">
                                        <h4><a>Edit</a></h4>
                                        <h4><a>Delete</a></h4>
                                    </div>
                                </div>
                                <div class="address">
                                    <div class="address-value">
                                         <a-radio :value="3"></a-radio>
                                        <p>Rakesh Jhunjhunwala 101, Silver oak society, Copernicus marg, Near India Gate, New Delhi 100001</p>
                                    </div>
                                    <div class="address-changes">
                                        <h4><a>Edit</a></h4>
                                        <h4><a>Delete</a></h4>
                                    </div>
                                </div>
                                <div class="address">
                                    <div class="address-value">
                                         <a-radio :value="4"></a-radio>
                                        <p>Rakesh Jhunjhunwala 101, Silver oak society, Copernicus marg, Near India Gate, New Delhi 100001</p>
                                    </div>
                                    <div class="address-changes">
                                        <h4><a>Edit</a></h4>
                                        <h4><a>Delete</a></h4>
                                    </div>
                                </div>
                            </a-radio-group>
                            <button class="icon-btn"><a-icon type="right-circle" class="icon"/></button> -->
                        <!-- </div> -->
                        <Carousel/>
                </div>
                <hr>
                <div class="communication">
                    <div class="Cont-heading">
                        <h2>Communication Perferences</h2>
                    </div>
                    <div class="updates">
                        <a-checkbox  @change="onChange">
                            I would like to receive communication from ProDyme
                        </a-checkbox>

                    </div>
                </div>
                <hr>
                <div class="change-password">
                    <div class="Cont-heading">
                        <h2>Change Password</h2>
                    </div>
                    <p class="instruct">Please set a strong password by referring to the below guidelines.</p>
                    <div class="password-fields">
                        <div class="passwords">
                            <input type="text" placeholder="New Password">
                            <input type="text" placeholder="Confirm Password">
                        </div>
                        <div class="instructions">
                            <p class="instruct">Passwords should contain at least :</p>
                            <ul>
                                <li class="item">8 Characters</li>
                                <li class="item">One uppercase</li>
                                <li class="item">One lowercase</li>
                                <li class="item">One numeric character</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button class="btn">Create New Password</button>
                <hr>

                <div class="order-details">

                </div>
            </div>
        </div>
        <Footer></Footer>
    </section>
</template>
<script type ="ts">
import Footer from "@/components/Global/Footer.vue";
import Carousel from "@/views/Carousel.vue";
import BannerCard from "@/views/Banner.vue";
import AccHeader from "@/views/AccHeader.vue";


export default {
    name:'MyAccount',
    components:{
        Footer,
        Carousel,
        BannerCard,
        AccHeader,
    },
    methods: {
        onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        },
    }
}
</script>

<style lang="scss" scoped>
        /* body{
            overflow-x: hidden;
        } */
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
    .personal-details-cont{
        margin-top: 1rem;
    }
    .Cont-heading{
        display: flex;
        justify-content: space-between;
        font-size: 1rem;
    }
    .Cont-heading a{
        color: #FF7A34;
        text-decoration: underline;
        font-size: 0.8rem;
    }
    .p-r-1p {
        padding-right: 1%;
    }
    .p-l-1p {
        padding-left: 1%;
    }
    small {
        display: block;
        margin: 2px;
    }
    .ant-input {
        box-sizing: border-box;
        margin: 0;
        font-variant: tabular-nums;
        list-style: none;
        font-feature-settings: 'tnum';
        position: relative;
        display: inline-block;
        width: 100%;
        // height: 32px;
        padding: 4px 11px;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        line-height: 1.5;
        background-color: #fff;
        background-image: none;
        border: 1px solid #d9d9d9;
        border-radius: 0px;
        transition: all 0.3s;
        margin-bottom: 20px;
    }
    .address-details{
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }
    .address-cont{
        display: flex;
        justify-content: space-evenly;
        margin-top: 2rem;
        align-items: center;
        height: 0rem;
    }
    .address{
        width: 15rem;
        height: 8rem;
        padding: 10px;
        background-color: #f1f1f1d5;
        margin: 0rem 1rem;
    }
    .address-grp{
        display: flex;
    }
    .address-value{
        display: flex;
    }
    .address-changes{
        display: flex;
        justify-content: flex-end;
        margin-top: 1.8rem;
    }
    .address-changes a{
        color: #FF7A34;
        padding: 8px;
        text-decoration: underline;
    }
    .icon-btn{
        background-color: white;
        outline: none;
        border: none;
        font-size: 1.9rem;
        cursor: pointer;
    }
    .icon :hover{
        background-color: white;
        color: #FF7A34;
    }
    .communication{
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }
    .updates{
        margin-top: 1rem;
    }
    .updates input{
        margin-right: 0.7rem;
        width: 0.8rem;
        height: 0.8rem;
        border: 2px solid #FF7A34;
    }
    .updates label{
        font-size: 1rem;
        color: black;
    }
    /* .updates input:checked{
        background-color:  #FF7A34;
    } */
    .change-password{
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }
    .instruct{
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 1rem;
    }
    .password-fields{
        display: flex;
        align-items: center;
    }
    .passwords{
        display: flex;
        flex-direction: column;
        width: 40vw;
    }
    .passwords input{
        width: 30vw;
        padding: 8px;
        margin: 0.7rem 0rem;
        outline: none;
        border: 2px solid #d9d9d9;
    }
    .instructions p{
        margin-top: 0.7rem;
        margin-bottom: 00.7rem;
    }
    .instructions li{
        list-style-type: none;
    }
    .btn{
        font-size: 0.8rem;
        border-radius: 1rem;
        padding: 10px;
        border: 2px solid #d9d9d9;
        cursor: pointer;
        margin-bottom: 1.5rem;
    }
    .btn:hover{
        background-color: #FF7A34;
        border: 2px solid #FF7A34;
        color: white;
    }
    Footer{
        margin-top: 70rem;
    }
    @media (max-width: 425px) {
        .account-details{
            top: 35%;
            padding: 20px 15px;
            width: 94vw;
            left: 3%;
        }
        .Cont-heading h2{
            font-size: 1.1rem;
        }
        .Cont-heading a{
            font-size: 0.6rem;
        }
        .updates label{
            font-size: 0.6rem;
        }
        .instruct{
            font-size: 0.6rem;
        }
        .passwords input{
            width: 35vw;
            padding: 5px;
        }
        .passwords{
            width: 50vw;
        }
        .instructions li{
            font-size: 0.6rem;
        }
        .btn{
            padding: 8px;
        }
        Footer{
            margin-top: 60rem;
        }
    }
    @media (max-width: 380px){
        .account-details{
            padding: 20px 24px;
            width: 100%;
            left: 0%;
            top: 20%;
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

    /* doubts */
    /* 1. arrows of carousel , how to change the color of ant checkbox and radio buttons*/
    /* 2.overflow-x not working , pagination how to implement*/
    /* 3.quantity function how to write  */
    /* 4. login/signup page  */
    
    
</style>

