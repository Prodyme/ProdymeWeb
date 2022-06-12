<template>
  <header class="topBar">
    <section class="container justifyBetween dFlex" style="height: 44px">
      <nav class="navListWeb dFlex alignItemsCenter">
        <ul>
          <li>Builder</li>
          <li>Catalogue</li>
        </ul>
      </nav>
      <nav class="navListMob">
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            <a-icon type="menu" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <a href="/">Builder</a>
            </a-menu-item>
            <a-menu-item key="1">
              <a href="/">Catalogue</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </nav>
      <section class="form mxAuto dFlex" v-if="scrollPosition > 303">
        <header class="selectText">
          <p>
            Category :
          </p>
        </header>
        <section class="inputSelection">
          <a-input-group compact>
            <a-select style="width: 25%" default-value="all">
              <a-select-option value="all">
                All
              </a-select-option>
              <a-select-option value="handles">
                Handles
              </a-select-option>
              <a-select-option value="hinges">
                Hinges
              </a-select-option>
            </a-select>
            <a-input-search style="width: 75%" placeholder="Search Categories" @search="onSearch"/>
          </a-input-group>
        </section>
      </section>
      <section class="topBarActions dFlex alignItemsCenter positionRelative">
        <button v-on:click="isAuthHidden = !isAuthHidden">Login / Sign Up</button>
        <transition name="auth-fade">
          <aside class="positionAbsolute authWidget">
            <a-card :bordered="false" v-if="isAuthHidden">
              <section class="sign-in">
                <h4 class="heading">Sign In</h4>
                <aside class="fields">
                  <section class="email">
                    <label>Email/Mobile Number: </label>
                    <input type="email" placeholder="Email/Mobile Number" v-model="email"/>
                  </section>
                  <section class="password">
                    <label>Password: </label>
                    <input type="password" placeholder="Password" v-model="password"/>
                  </section>
                </aside>
                <p style="color: #ff7a34;">Forget Password?</p>
                <a-button class="btn" v-on:click="login()">Login</a-button>
                <footer class="new-user">
                  <p>New user: </p>
                  <a href="#" v-on:click="signup()">Create Account</a>
                </footer>
              </section>
            </a-card>
          </aside>
        </transition>
        <!--
        <template>
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click.prevent>
              <button>Login / Sign Up</button>
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu class="menu">
                <a-menu-item key="0" class="login-item">
                 <div class="sign-in">
                   <p class="heading">SIGN IN</p>
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
                   <p style="color: #ff7a34;">Forget Password?</p>
                    <a-button class="btn" v-on:click="login()">Login</a-button>
                    <div class="new-user">
                      <p>New user: </p>
                      <a href="#" v-on:click="signup()">Create Account</a>
                    </div>
                 </div>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>
        -->
      </section>
    </section>
  </header>
</template>
<script>
// import { defineComponent } from 'vue';
// import { down } from '@ant-design/icons-vue';
import axios from 'axios';
export default {
  name: "TopBar",
  data: function () {
    return {
      isAuthHidden: false,
      scrollPosition: null,
      email: "",
      password: "",
      username: "",
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    async login(){
      console.log("login is clicked");
      // console.log(this.email, this.password);

      let result = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${this.email}&username=${this.password}`)
      console.warn(result);

      if(result.status === 200 && result.data.length>0){
        alert("successful login");
        // let dropDown = document.getElementsByClassName("ant-dropdown-link");
        // let accountBtn = document.createElement("button");
        // let t = document.createTextNode("CLICK ME");
        // accountBtn.appendChild(t);
        // dropDown.appendChild(accountBtn);
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  destroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss" scoped>
@mixin fade($fadeEl, $fadeTime: null) {
  @if ($fadeTime) {
    .#{$fadeEl}-fade-enter-active {
      transition: opacity $fadeTime;
    }
    .#{$fadeEl}-fade-leave-active {
      transition: opacity $fadeTime;
    }
  } @else {
    .#{$fadeEl}-fade-enter-active {
      transition: opacity 350ms;
    }
    .#{$fadeEl}-fade-leave-active {
      transition: opacity 250ms;
    }
  }
  .#{$fadeEl}-fade-enter,
  .#{$fadeEl}-fade-leave-to {
    opacity: 0;
  }
}
@include fade(auth);
.dFlex {
  display: flex;
}
.alignItemsCenter {
  align-items: center;
}
.justifyBetween {
  justify-content: space-between;
}
.positionRelative {
  position: relative;
}
.positionAbsolute {
  position: absolute;
}
.topBar {
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: #f8f8f8;
  box-shadow: 0 1px 2px #0000001a;
}
.navListWeb ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: relative;
}
.navListWeb ul li {
  display: inline-block;
  font-size: 14px;
  color: #ff7a34;
  text-transform: capitalize;
  padding-right: 10px;
  cursor: pointer;
}
.navListMob {
  display: none;
}
.navListMob i {
  cursor: pointer;
  font-size: 14px;
  position: relative;
  top: 8px;
}
.authWidget {
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}
.form {
  width: 916px;
  padding: 6px 12px;
  background-color: white;
  border-radius: 30px;
  @media (max-width: 1619px) {
    width: 816px;
  }
  @media (max-width: 1224px) {
    width: 716px;
  }
  @media (max-width: 1023px) {
    width: 616px;
  }
  .selectText {
    width: 90px;
    p {
      margin: 0;
      text-align: left;
      font-size: 16px;
      line-height: 32px;
      font-weight: 300;
      letter-spacing: 0.3px;
      color: #666;
      text-transform: capitalize;
    }
  }
  .inputSelection {
    width: calc(100% - 90px);
  }
}
.topBarActions button {
  background-color: #ff7a34;
  color: white;
  padding: 6px 16px;
  outline: none;
  border: none;
  border-radius: 24px;
  font-weight: 600;
  letter-spacing: 0.2px;
  font-size: 14px;
  cursor: pointer;
}
@media (max-width: 1080px) {
  .topBar {
    padding: 24px 20px;
  }
}
@media (max-width: 991px) {
  .topBar {
    padding: 20px 18px;
  }
}
@media (max-width: 768px) {
  .navListWeb {
    display: none;
  }
  .navListMob {
    display: inline-block;
  }
  .topBar {
    padding: 18px 16px;
  }
}
@media (max-width: 520px) {
  .topBar {
    padding: 12px 16px;
  }
}

.sign-in {
  width: 220px;
  padding: 10px;
}

.heading {
  color: #ff7a34;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}
.fields{
  margin-bottom: 10px;
}
.email,.password{
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}

.email input{
  border: 2px solid #E1E1E1;
  padding: 5px;
}
.password input{
  border: 2px solid #E1E1E1;
  padding: 5px;
}

.email label{
  font-size: 0.8rem;
  color: black;
  font-weight:600;
}
.password label{
  font-size: 0.8rem;
  color: black;
  font-weight: 600;
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
</style>