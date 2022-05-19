<template>
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
      Login / Sign Up <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item key="0">
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
                    <!-- <a-alert message="Successful Login" type="success" show-icon /> -->
                    <div class="new-user">
                      <p>New user: </p>
                      <a href="#" v-on:click="signup()">Create Account</a>
                    </div>
              </div>
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
</template>
