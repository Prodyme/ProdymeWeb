<template>
  <section class="pt30 pb70 backBg offering">
    <article class="container">
      <header class="heading textCenter">
        <h2>Get the Perfect Product</h2>
      </header>
      <article class="wrapper dFlex justifyBetween alignItemsCenter">
        <section class="video">
          <iframe src="https://www.youtube.com/embed/pRpeEdMmmQ0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <article class="videoCaption">
            <em>Wall tiling process</em>
          </article>
        </section>
        <article class="content">
          <header>
            <h3>Title about a product and its installation process, etc.</h3>
          </header>
          <article>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
            </p>
          </article>
        </article>
      </article>
    </article>
  </section>
</template>

<script>
export default {
  name: "Offerings"
}
</script>

<style scoped>
.backBg {
  background-color: #f8f8f8;
}
.dFlex {
  display: flex;
}
.justifyBetween {
  justify-content: space-between;
}
.alignItemsCenter {
  align-items: center;
}
.pt30 {
  padding-top: 30px;
}
.pb70 {
  padding-bottom: 70px;
}
.textCenter {
  text-align: center;
}
.offering .heading {
  margin-bottom: 30px;
}
.offering .heading h2 {
  color: #2A2A2A;
  font-weight: bold;
  font-size: 42px;
  line-height: 62px;
}
.offering .wrapper {
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  background-color: white;
  padding: 90px 60px 70px;
  gap: 60px;
}
.offering .video, .offering .content {
  flex: 1 1 50%;
}
.offering .video iframe {
  width: 100%;
  height: 380px;
}
.offering .content header h3 {
  font-size: 28px;
  line-height: 42px;
  font-weight: bold;
  letter-spacing: 0;
  color: #2A2A2A;
}
.offering .content article p {
  font-weight: normal;
  color: #2A2A2A;
  font-size: 18px;
  line-height: 32px;
}
</style>
