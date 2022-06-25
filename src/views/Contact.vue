<template>
  <section class="mainHome">
    <div class="contact-us">
      <div class="contact-main">
        <div class="input-part">
          <a-row>
            <a-col :span="24">
              <h2>Get in touch with Prodyme</h2>
            </a-col>
          </a-row>
          <hr class="line-color">
          <h3>Your Personal Details</h3>
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
          <!------2nd row------------->
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
          <!--------3rd row----------->
          <a-row>
            <a-col :span="12" class="p-r-1p">
              <small>Zipcode*</small>
              <a-input />
            </a-col>
            <a-col :span="12" class="p-l-1p">
              <small>State*</small>
              <div>
                <a-select default-value="New Delhi" class="state-option" style="width: 100%" @change="handleChange">
                  <a-select-option value="New Delhi">
                    New Delhi
                  </a-select-option>
                  <a-select-option value="Mumbai">
                    Mumbai
                  </a-select-option>
                </a-select>
                <!-- <a-select default-value="lucy" style="width: 120px" disabled>
                  <a-select-option value="lucy">
                    Lucy
                  </a-select-option>
                </a-select>
                <a-select default-value="lucy" style="width: 120px" loading>
                  <a-select-option value="lucy">
                    Lucy
                  </a-select-option>
                </a-select> -->
              </div>
            </a-col>
          </a-row>
          <hr>
          <div class="message-part m-t30">
            <h4>Your message to us</h4>
            <!--------------4th row---------->
            <a-row>
              <a-col :span="12" class="p-r-1p">
                <small>How can we help you?*</small>
                <a-input placeholder="Subject" />
              </a-col>
              <a-col :span="12" class="p-l-1p">
                <small>Existing order number</small>
                <a-input placeholder="Please enter your order number for us to fetch the details" />
              </a-col>
            </a-row>
          </div>
          <a-row>
            <a-col :span="24">
              <small>Description*</small>
              <a-textarea placeholder="Please describe the topic that you want us to help you in" :rows="4" />
              <!-- <small class="move-right">Max 750 characters</small> -->
            </a-col>
          </a-row>
          <hr>
          <div class="upload-part m-t30">
            <h3>Upload Attachments</h3>
            <a-row>
              <a-col :span="12" class="p-r-1p custom-upload-btn">
                <small>Your files</small>
                <a-upload name="file" :multiple="true"
                          action="#" :headers="headers" @change="handleChange">
                  <a-button>
                    <span class="place-holder">File name will appeare here...</span>
                    <a-icon type="upload" class="upload-icon" />
                  </a-button>
                </a-upload>
              </a-col>
              <a-col :span="12" class="p-l-1p files-format">
                <br>
                <p class="file">
                  File Type supported: .pdf, .png, .docx, .jpg, .txt, .mp4, .HEIC</p>
                <p>
                  Size: less than 5MB</p>
                <p>
                  Max: up to 5 files
                </p>
              </a-col>
            </a-row>
          </div>
          <hr>
          <div class="product-info-part m-t30">
            <h3>Can you give us some additional information?</h3>
            <a-row>
              <a-col :span="12" class="p-r-1p">
                <small>Product type</small>
                <a-input placeholder="Plywood,fixtures etc..." />
              </a-col>
              <a-col :span="12" class="p-l-1p">
                <small>Brand</small>
                <a-input placeholder="Brand Name" />
              </a-col>
            </a-row>
          </div>
          <hr>
          <a-row>
            <a-button type="primary">
              Submit
            </a-button>
          </a-row>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Global/Footer.vue";

export default {
  name: 'Contact',
  components: {
    Footer,
  }
}
</script>
<style lang="scss" scoped>
template {
  background-color: #F8F8F8;
}

.contact-us {
  margin: 20px;
  margin-top: 0px;
  background-color: #F8F8F8;
}

.contact-main {
  background-color: #fff;
  margin: 100px;
}

.input-part {
  padding: 80px;
}

.line-color {
  border-color: #FF7A34;
  border-top: none;
}

hr {
  border-color: #d9d9d9;
  border-top: none;
}

.move-right {
  float: right;
}

textarea.ant-input {
  resize: none;
}

.ant-input:placeholder-shown {
  font-style: italic;
}

.ant-btn-primary {
  color: #fff;
  background-color: #FF7A34;
  border-color: #FF7A34;
  border-radius: 20px;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
  padding: 14px 64px 30px 68px;
  margin-top: 30px;
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

.m-t30 {
  margin-top: 30px;
}

.p-l-1p {
  padding-left: 1%;
}

.p-r-1p {
  padding-right: 1%;
}

.files-format{
  font-size: 12px;
  color: black!important;
  font-weight: 500;
  line-height: 0.5;
}

.ant-upload.ant-upload-select {
  display: none;
}

.custom-upload-btn {

  display: block;
  color:#FF7A34;

  .ant-upload.ant-upload-select {
    display: block;
    position: relative;
  }

  button {
    width: 100%;
  }

  .place-holder {
    float: left;
  }

  .upload-icon {
    float: right;
  }
}

@media (max-width: 1024px){
  .files-format{
    font-size: 10px;
    padding-bottom: 2px;
    line-height: 1;
  } 
}

@media (max-width: 868px) {
  .contact-main {
    margin: 39px;
    width: 90%;
  }
  .input-part{
    padding: 80px 75px;
  }
  .p-l-1p {
    /* padding-left: 0%; */
    width: 50%;
  }

  .p-r-1p {
    /* padding-right: 0%; */
    width: 48%;
  }
  .custom-upload-btn{
    button {
      width: 90%;
    }

    .place-holder {
      font-size: 11px;
    }

    .upload-icon {
      font-size: 11px;
    }
  }
}

@media (max-width: 708px){
  .custom-upload-btn{
    button {
      width: 95%;
    }

    .place-holder {
      font-size: 11px;
    }

    .upload-icon {
      font-size: 11px;
    }
  }
}

@media (max-width: 684px){
  .custom-upload-btn{
    button {
      width: 97%;
    }
  }
}
@media (max-width: 578px){
  .state-option{
    font-size: 12px;
  }
  .input-part{
    padding: 80px 60px;
  }
  .custom-upload-btn{
    button {
      width: 95%;
      padding: 6px;
    }

    .place-holder {
      font-size: 10px;
    }

    .upload-icon {
      font-size: 10px;
    }
  }
}

@media (max-width: 425px){
  .state-option{
    font-size: 12px;
  }
  .input-part{
    padding: 80px 27px;
  }
  .contact-main {
    margin: auto;
    width: 91%;
  }
  .custom-upload-btn{
    button {
      width: 100%;
      padding: 6px;
    }

    .place-holder {
      font-size: 7px;
    }

    .upload-icon {
      font-size: 7px;
    }
  }
  .files-format{
    font-size: 8px;
  } 
  .ant-btn-primary{
    margin-left: 40px;
  }
  .ant-input{
    font-size: 10px;
  }
}

@media (max-width: 375px){
  .state-option{
    font-size: 12px;
  }
  .input-part{
    padding: 80px 20px;
  }
  .contact-main {
    margin: auto;
    width: 95%;
  }
}
@media (max-width: 320px){
  .state-option{
    font-size: 12px;
  }
  .input-part{
    padding: 80px 8px;
  }
  .contact-main {
    margin: auto;
    width: 100%;
  }
}

@media (max-width: 280px){
  .state-option{
    font-size: 12px;
  }
  .input-part{
    padding: 80px 3px;
  }
  .contact-us{
    margin: 15px;
  }
  .contact-main {
    margin: auto;
    width: 100%;
  }
}

</style>
<style>
.ant-upload.ant-upload-select {
  display: block !important;
}
</style>
