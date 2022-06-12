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
      <section class="form whiteBg mxAuto dFlex" v-if="scrollPosition > 303">
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
          <aside class="positionAbsolute authWidget" v-if="isAuthHidden">
            <section class="sign-in whiteBg positionRelative">
              <article v-if="authSegment === 'signUp'">
                <h4 class="heading textCenter">Sign Up</h4>
                <section class="inputFeed">
                  <label>Enter Name: </label>
                  <a-input type="text" placeholder="Name" />
                </section>
                <section class="inputFeed">
                  <label>Enter Email/Mobile Number: </label>
                  <a-input type="text" placeholder="Email/Mobile Number" />
                </section>
                <section class="inputFeed">
                  <label>Enter Password: </label>
                  <a-input type="password" placeholder="Password" />
                </section>
                <a-button class="ctaBtn" v-on:click="signUp()">Create Account</a-button>
                <footer class="altCta dFlex">
                  <p>Existing user ? </p>
                  <a class="txtBtn" v-on:click="authSegment = 'signIn'">Sign in</a>
                </footer>
              </article>
              <article v-else-if="authSegment === 'forgetPassword'">
                <h4 class="heading textCenter">Forgot Password</h4>
                <section class="inputFeed">
                  <label>Enter Email/Mobile Number: </label>
                  <a-input type="text" placeholder="Email/Mobile Number" />
                </section>
                <a-button class="ctaBtn" v-on:click="forgotPassword()">Submit</a-button>
                <footer class="altCta dFlex">
                  <p>Back to Login : </p>
                  <a class="txtBtn" v-on:click="authSegment = 'signIn'">Sign in</a>
                </footer>
              </article>
              <article v-else>
                <h4 class="heading textCenter">Sign In</h4>
                <section class="inputFeed">
                  <label>Enter Email/Mobile Number: </label>
                  <a-input type="text" placeholder="Email/Mobile Number" />
                </section>
                <section class="inputFeed">
                  <label>Password: </label>
                  <a-input type="password" placeholder="Password" />
                </section>
                <aside class="textCenter mb10">
                  <a class="txtBtn" v-on:click="authSegment = 'forgetPassword'">Forget Password?</a>
                </aside>
                <a-button class="ctaBtn" v-on:click="login()">Login</a-button>
                <footer class="altCta dFlex">
                  <p>New user ? </p>
                  <a class="txtBtn" v-on:click="authSegment = 'signUp'">Create Account</a>
                </footer>
              </article>
            </section>
          </aside>
        </transition>
      </section>
    </section>
  </header>
</template>


<script>
import {mapGetters, mapActions, mapMutations} from "vuex";
export default {
  name: "TopBar",
  data: function () {
    return {
      isAuthHidden: false,
      scrollPosition: null,
      authSegment: "signIn",
      email: "",
      password: "",
      username: "",
    };
  },
  methods: {
    ...mapMutations("checkin", {
      setLogin: MUTATIONS.CheckIn.SetLoginInfo
    }),
    ...mapActions("checkin", {
      loadSkuSellerZoneCode: ACTIONS.CheckIn.LoadLoginInfo
    }),
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    onSearch: function (e) {
      alert(e);
    },
    signUp: function () {
      alert("Sing Up");
    },
    forgotPassword: function () {
      alert("Forgot Password");
    },
    login: function () {
      alert("Login")
    }
  },
  computed: {
    ...mapGetters("shazam", {
      sku: GETTERS.Shazam.GetSKU,
    }),
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
.whiteBg {
  background-color: white;
}
.mb10 {
  margin-bottom: 10px;
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
.form {
  width: 916px;
  padding: 6px 12px;
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
.authWidget {
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
}
.sign-in {
  width: 280px;
  padding: 12px 16px;
  box-shadow: 0 0 4px -2px rgba(0, 0, 0, 0.2);
  &:after {
    content:'';
    position: absolute;
    bottom: 100%;
    left: calc(50% - 20px);
    width: 0;
    height: 0;
    border-bottom: solid 20px white;
    border-left: solid 20px transparent;
    border-right: solid 20px transparent;
  }
}
.heading {
  color: #ff7a34;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 8px;
  text-transform: uppercase;
}
.textCenter {
  text-align: center;
}
.txtBtn {
  color: #ff7a34;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  transition: all ease 200ms;
  &:hover {
    font-weight: 500;
  }
}
.inputFeed {
  margin-bottom: 12px;
  label {
    font-size: 13px;
  }
}
.ctaBtn {
  background-color: #ff7a34;
  color: white;
  padding: 6px 16px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  border-radius: 24px;
  font-weight: 400;
  letter-spacing: 0.2px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
}
.altCta p {
  font-size: 14px;
  padding-right: 5px;
  font-weight: 400;
}
</style>