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
      <section class="topBarActions dFlex alignItemsCenter">
        <button>Login / Sign Up</button>
      </section>
    </section>
  </header>
</template>

<script>
export default {
  name: "TopBar",
  data: function() {
    return {
      scrollPosition: null
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>

<style lang="scss" scoped>
.dFlex {
  display: flex;
}
.alignItemsCenter {
  align-items: center;
}
.justifyBetween {
  justify-content: space-between;
}
.topBar {
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: #FFF;
  box-shadow: 0 1px 2px #0000001A;
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
  color: #FF7A34;
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
  width: 882px;
  padding: 6px 12px;
  background-color: white;
  border-radius: 30px;
  @media (max-width: 1619px) {
    width: 800px;
  }
  @media (max-width: 1224px) {
    width: 676px;
  }
  @media (max-width: 1023px) {
    width: 546px;
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
  background-color: #FF7A34;
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
</style>
