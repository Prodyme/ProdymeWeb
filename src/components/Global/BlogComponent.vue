<template>
  <section>
    <div class="bg-row">
      <a-breadcrumb>
        <a-breadcrumb-item><a style="font: normal normal bold 12px/16px Roboto;color:#FFFFFF"  href="">Home</a></a-breadcrumb-item>
        <a-breadcrumb-item><a style="font: normal normal bold 12px/16px Roboto;color:#FFFFFF" href="">Knowledge Center</a></a-breadcrumb-item>
        <a-breadcrumb-item style="font: normal normal bold 12px/16px Roboto;color:#FFFFFF">Blogs &amp; articles</a-breadcrumb-item>
      </a-breadcrumb>
      <h2 style="padding-top: 10rem;font: normal normal normal 42px/62px Roboto;color:#FFFFFF">Blogs &amp; Articles</h2>
      <h3 style="font: normal normal normal 20px/14px Roboto;color:#FFFFFF">
        You can find the most read blogs which would help you find the right set
        of products
      </h3>
    </div>
    <div>
      <a-row style="display: flex">
        <a-col>
          <a-row style="display: flex; padding: 1rem 2rem">
            <a-col style="margin-right: 10px">
              <p style="font: normal normal normal 12px/14px Roboto">
                Most read
              </p>
            </a-col>
            <a-col>
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                  <a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item key="0">
                    <a href="http://www.alipay.com/">1st menu item</a>
                  </a-menu-item>
                  <a-menu-item key="1">
                    <a href="http://www.taobao.com/">2nd menu item</a>
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item key="3"> 3rd menu item </a-menu-item>
                </a-menu>
              </a-dropdown>
            </a-col>
          </a-row>
        </a-col>
        <a-col style="padding: 1rem 1rem 1rem 44rem">
          <a-input style="width:125%"
            class="search-input"
            placeholder="Search for tags or keywords.."
          />
        </a-col>
        <a-col style="padding: 1rem 1rem 1rem 2rem">
          <a-pagination simple :default-current="1" :total="50" />
        </a-col>
      </a-row>
    </div>
    <a-row style="display: flex">
      <a-col style="padding:10px 30px">
        <p
          style="
            text-align: left;
            font: normal normal bold 20px/24px Roboto;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
          "
        >
          Category Of Blogs &amp; Articles
        </p>
      </a-col>
      <a-col style="width:77%;padding: 13px 0px 10px 1px;">
        <hr/>
      </a-col>
    </a-row>
    <div>
      <a-row type="flex">
        <a-col :span="6" :order="4">
        <CardComponent />
      </a-col>
      <a-col :span="6" :order="3">
        <CardComponent />
      </a-col>
      <a-col :span="6" :order="2">
        <CardComponent />
      </a-col>
      <a-col :span="6" :order="1">
        <CardComponent />
      </a-col>
      </a-row>
    </div>
    <div style="padding-top:20px">
      <a-row>
        <a-col :span="6" :order="4">
        <CardComponent />
      </a-col>
      <a-col :span="6" :order="3">
        <CardComponent />
      </a-col>
      <a-col :span="6" :order="2">
        <CardComponent />
      </a-col>
      <a-col :span="6" :order="1">
        <CardComponent />
      </a-col>
      </a-row>
    </div>


    <!--2nd Part -->
    <div style="padding-top:20px">
      <a-row style="display: flex">
      <a-col style="padding:10px 30px">
        <p
          style="
            text-align: left;
            font: normal normal bold 20px/24px Roboto;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
          "
        >
          Category Of Blogs &amp; Articles
        </p>
      </a-col>
      <a-col style="width:77%;padding: 13px 0px 10px 1px;">
        <hr/>
      </a-col>
    </a-row>
    </div>
    <div>
      <a-row type="flex">
        <a-col :span="16" :order="1">
        <CardComponent />
      </a-col>
      <a-col :span="8" :order="2">
        <CardComponent />
      </a-col>
      </a-row>
    </div>

    <!--3rd part -->
    <div style="padding-top:20px">
      <a-row style="display: flex">
      <a-col style="padding:10px 30px">
        <p
          style="
            text-align: left;
            font: normal normal bold 20px/24px Roboto;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
          "
        >
          Category Of Blogs &amp; Articles
        </p>
      </a-col>
      <a-col style="width:77%;padding: 13px 0px 10px 1px;">
        <hr/>
      </a-col>
    </a-row>
    </div>
    <div>
      <a-row type="flex">
        <a-col :span="24" :order="1">
        <CardComponent />
      </a-col>
      </a-row>
      <a-row type="flex" style="padding-top:20px">
        <a-col :span="6" :order="4">
        <CardComponent />
      </a-col>
      <a-col :span="6" :order="3">
        <CardComponent />
      </a-col>
      <a-col :span="6" :order="2">
        <CardComponent />
      </a-col>
      <a-col :span="6" :order="1">
        <CardComponent />
      </a-col>
      </a-row>
      
    </div>


  </section>
</template>

<script>
import CardComponent from "./CardComponent.vue";

export default {
    components: { CardComponent }
};
</script>

<style>
.bg-row {
  background-image: url(../../assets/youtube.png);
  background: transparent linear-gradient(180deg, #ffffff00 0%, #000000 100%) 0%
    0% no-repeat padding-box;
  opacity: 0.6;
  padding: 10px 20px;
}
/* .input{
  width: 45px;
  height: 22px;
} */

.search-input {
  background-color: #e1e1e1;
  text-align: left;
  font: italic normal normal 12px/16px Roboto;
  letter-spacing: 0.72px;
  color: #2a2a2a;
  opacity: 1;
  width: 18rem;
}
.card-zoom:hover img{
  transform: scale(1.1);
  
  width: 100%;

}
</style>