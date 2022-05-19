<template>
    <section class="main">
        <div>
        <a-collapse default-active-key="1" :bordered="false" class="collapse">
            <template #expandIcon="props">
                <a-icon type="caret-down" :rotate="props.isActive ? 180 : 0" />
            </template>
            <a-collapse-panel key="1" header="Login/Signup" :style="customStyle">
            <!-- v-bind:style = "{display: ['none']}" -->
            <div v-bind:class = "{active : isActive}"  >
                <h4 class="heading">If you have an account, Sign in with your Email address</h4>
               <div class="fields">
                    <div class="email">
                      <label>Email/Mobile Number: </label>
                      <input type="email" placeholder="Email/Mobile Number" v-model="email"/>
                    </div>
                    <div class="password">
                      <label>Password: </label>
                      <input type="password" placeholder="Password" v-model="password"/>
                    </div>
                </div>
                <h5 class="heading" style="color: #ff7a34;">Forget Password ?</h5>
                <a-button class="btn" v-on:click="login()">Login</a-button>
                <div class="new-user">
                      <p>New user: </p>
                      <a href="#" v-on:click="signup()">Create Account</a>
                </div>
            </div>
            <div class="signup" v-if="togglesignup">
                <h4 class="heading" style="font-size: 1rem">Create Account</h4>
                <div class="fields">
                    <div class="email">
                      <label>Your Mobile Number/Email ID: </label>
                      <input type="email" placeholder="Email/Mobile Number" v-model="email"/>
                    </div>
                </div>
                <a-button class="btn" style="margin-bottom: 1rem">Generate OTP</a-button>
                <h4 class="heading" style="font-weight: normal">An OTP will be sent to your entered phone number / email id</h4>
                <div class="new-user">
                      <p>Already a user: </p>
                      <a href="#">Sign In</a>
                </div>
            </div>     
            </a-collapse-panel>
            <a-collapse-panel key="2" header="Signup" :style="customStyle" v-if="togglesignup">
                <h4 class="heading" style="font-size: 1rem">Create Account</h4>
                <div class="fields">
                    <div class="email">
                      <label>Your Mobile Number/Email ID: </label>
                      <input type="email" placeholder="Email/Mobile Number" v-model="email"/>
                    </div>
                </div>
                <a-button class="btn" style="margin-bottom: 1rem">Generate OTP</a-button>
                <h4 class="heading" style="font-weight: normal">An OTP will be sent to your entered phone number / email id</h4>
                <div class="new-user">
                      <p>Already a user: </p>
                      <a href="#">Sign In</a>
                </div>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="Signup2" :style="customStyle">
                <h4 class="heading" style="font-size: 1rem;text-decoration: none">Create Account</h4>
                <div class="fields">
                    <div class="email">
                      <label>Your Mobile Number/Email ID: </label>
                      <input type="email" placeholder="Email/Mobile Number" v-model="email"/>
                    </div>
                     <div class="password">
                      <label>OTP: </label>
                      <input type="password" placeholder="Enter OTP" v-model="password"/>
                    </div>
                </div>
                <h6 class="heading" style="color: #ff7a34; text-decoration: underline">Resend OTP</h6>
                <div class="checkboxes">
                    <a-checkbox @change="onChange" style="margin-bottom: 0.6rem">I accept the <span style="color: #ff7a34; text-decoration: underline">conditions of use</span></a-checkbox>
                    <a-checkbox @change="onChange">I would like to receive communication from Prodyme</a-checkbox>
                </div>
                <a-button class="btn" style="margin-bottom: 1rem">Verify and Register</a-button>
                <div class="new-user">
                      <p>Already a user: </p>
                      <a href="#">Sign In</a>
                </div>
            </a-collapse-panel>
            <a-collapse-panel key="4" header="User Info" :style="customStyle">
                <div class="location">
                    <p>Location: <span style="font-weight: 500">Bangalore, 560098</span> </p>
                    <a href="">Edit</a>
                </div>
                <div class="account">
                    <a-collapse accordion style="border: none; ">
                        <a-collapse-panel key="1" header="My Account" style="border: none;" class="collapse-inner">
                            <div>
                                <router-link to="/myAccount"><h3>My Profile</h3></router-link>
                                <router-link to="/myMessages"><h3>My Messages</h3></router-link>
                                <router-link to="/myOrders"><h3>My Orders</h3></router-link>
                                <router-link to="/myDesigns"><h3>My Designs</h3></router-link>
                                <router-link to="/myWishlist"><h3>My Wishlist</h3></router-link>
                            </div>
                             
                        </a-collapse-panel>
                    </a-collapse>
                </div>
                <button class="btn btn-out">Sign Out</button>
            </a-collapse-panel>    
        </a-collapse>
  </div>
    </section>
</template>

<script>
import axios from 'axios';
export default{
    name: 'Test',
    data() {
        return {
            expandIconPosition: 'left',
            email: "",
            password: "",
            username: "",
            togglesignup: false,
            isActive: true,
        };
    },
    
    methods: {
        async login(){
            console.log("login is clicked");
            // console.log(this.email, this.password);

            let result = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${this.email}&username=${this.password}`)
            console.warn(result);

            if(result.status == 200 && result.data.length>0){
                alert("successful login");
            }
        },
        onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        },

        signup(){
            this.togglesignup = !this.togglesignup;
            // login.style.display = 'none'
        }
    }
}
</script>

<style scoped>
   .main{
       margin-left: 15rem;
       margin-top: 5rem;
   }
   .collapse{
       border: 1px solid #FF7A34;
       /* background-color: #FF7A34; */
       width: 15rem;
       background-color: white;
   }
   .heading{
        display: flex;
        font-size: 0.8rem;
        font-weight: 500;
    }
    .fields{
        margin-bottom: 10px;
    }
    .email,.password{
        display: flex;
        flex-direction: column;
        padding-bottom: 10px;
    }

    .email input,.password input{
        border: 1px solid #E1E1E1;
        padding: 5px;
    }
    .btn{
        background-color: #ff7a34;
        color: white;
        padding: 6px 16px;
        outline: none;
        border: none;
        border-radius: 24px;
        font-weight: 600;
        letter-spacing: 0.2px;
        font-size: 0.8rem;
        cursor: pointer;
        width: 100%;
    }
    .btn:hover{
        background-color: #ff7a34;
        color: white;
    }
    .new-user{
        display: flex;
        margin-top: 10px;
    }
    .new-user p{
        font-size: 0.8rem;
        font-weight: 600;
        padding: 0px 5px;
    }
    .new-user a{
        color: #ff7a34;
        text-decoration: underline;
    }
    .checkboxes{
        margin: 1rem 0rem 1rem 0rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .location{
        display: flex;
        justify-content: space-between;
    }
    .location a{
        color: #FF7A34;
        text-decoration: underline;
    }
    .collapse-inner h3{
       font-weight: normal;
       display: flex;
       justify-content: center;
       align-items: center;
    }
    .collapse-inner h3:hover{
        color: #FF7A34;
    }
    .btn-out{
        margin-top: 1rem;
        background: white;
        color: #FF7A34;
        border: 1px solid #FF7A34;
    }
    .btn-out:hover{
        background-color: #FF7A34;
        color: white;
    }
</style>
