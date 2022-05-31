<template>
    <section style="background-color:#F6F3F6;">
        <a-row>
            <a-col :span="4" style="padding:20px;">
                <div style="background-color:white;  border: 1px solid #CFBBEF;border-radius:8px ">
                    <h1 style="font-size:34px;margin-left:10px;">12</h1>
                    <p style="font-weight:500;margin-left:16px;"> New Products</p>
                </div>
            </a-col>
            <a-col :span="4" style="padding:20px;">
                <div style="background-color:white;  border: 1px solid #CFBBEF;border-radius:5px; ">
                    <h1 style="font-size:34px;margin-left:10px;">12</h1>
                    <p style="font-weight:500;margin-left:10px;"> New Products</p>
                </div>
            </a-col>
            <a-col :span="4" style="padding:20px;">
                <div style="background-color:white;  border: 1px solid #CFBBEF;border-radius:5px; ">
                    <h1 style="font-size:34px;margin-left:10px;">12</h1>
                    <p style="font-weight:500;margin-left:16px;"> New Products</p>
                </div>
            </a-col>
            <a-col :span="4" style="padding:20px;">
                <div style="background-color:white;  border: 1px solid #CFBBEF;border-radius:5px;">
                    <h1 style="font-size:34px;margin-left:10px;;">12</h1>
                    <p style="font-weight:500;margin-left:16px;"> New Products</p>
                </div>
            </a-col>
            <a-col :span="4" style="padding:20px;">
                <div style="background-color:white;  border: 1px solid #CFBBEF;border-radius:5px; ">
                    <h1 style="font-size:34px;margin-left:10px;">12</h1>
                    <p style="font-weight:500;margin-left:16px;"> New Products</p>
                </div>
            </a-col>
            <a-col :span="4" style="padding:20px;">
                <div style="background-color:white;  border: 1px solid #CFBBEF;border-radius:5px; ">
                    <h1 style="font-size:34px;margin-left:10px;">12</h1>
                    <p style="font-weight:500;margin-left:16px;"> New Products</p>
                </div>
            </a-col>
        </a-row>
        <a-row>

            <a-col :span="12">
                <a-button class="search-icon" icon="search" style="width:60%;margin-left:20px;">
                    Search with Product ID
                </a-button>
            </a-col>

            <a-col :span="12">
                <a-input style="width:30%;margin-left: 23%;margin-top: 2px;" />
                <div class="download-upload-button">
                    <a-button>
                        <a-icon type="upload" />
                        Upload
                    </a-button>
                    <a-button icon="download" :size="size">
                        Download
                    </a-button>
                    <a-button style="background-color:#6F32F0;color:white!important;">
                        Create
                    </a-button>
                </div>
            </a-col>
        </a-row>

        <div class="copy-delete-button">
            <div style="display: inline-block;margin-left: 10px;">
                <a-icon type="star" style="margin-right:10px;" />Copy
            </div>
            <div style="display: inline-block;margin-left: 10px;">
                <a-icon type="delete" style="margin-right:10px;" />Delete
            </div>
            <div style="display: inline-block;margin-left: 10px;">
                <a-icon type="check" style="margin-right:10px;" />Approve
            </div>
        </div>

        <!-- <div class="details-page" style="padding:20px;">
            <a-collapse accordion expandIconPosition="right">
                <template #expandIcon="{ isActive }">
                    <up-outlined :rotate="isActive ? 0 : 180" />
                </template>
                <a-collapse-panel key="1" header="Details Page">
                    <a-row>
                        <a-col :span="12">
                            <p>Name</p>
                            <p>Product Description</p>
                            <p>Product ID</p>
                            <p>Product Type</p>
                            <p>Sub Type</p>
                            <p style="display:inline-block;margin-right:30px;">Material</p>
                            <p style="display:inline-block"> Available Variations</p> -->
                            <!-- <a-row>
                <a-col :span="12" >
                    Material
                </a-col>
                 <a-col :span="12">
                     Available Variations
                </a-col>
            </a-row> -->
<!-- 
                        </a-col>
                        <a-col :span="12">
                            <a-carousel :after-change="onChange" :dots="true">
                                <div><img></div>




                            </a-carousel> -->
                            <!-- <VueSlickCarousel v-bind="settings">
                <div>
                    <h3>1</h3>
                </div>
                 <div>
                    <h3>1</h3>
                </div>
                 <div>
                    <h3>1</h3>
                </div>
                 <div>
                    <h3>1</h3>
                </div>
            </VueSlickCarousel> -->

                        <!-- </a-col>
                    </a-row>
                </a-collapse-panel>
            </a-collapse>
        </div> -->














        
        <ProductAdminComponent />
        <ProductAdminComponent />
        <ProductAdminComponent />
        <ProductAdminComponent />

    </section>
</template>
<script>
    import ProductAdminComponent from "@/components/Global/ProductAdminComponent.vue";
    // import {
    //     UpOutlined
    // } from '@ant-design/icons-vue';
    //  import VueSlickCarousel from 'vue-slick-carousel'
    // import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // // optional style for arrows & dots
    // import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    export default {
        components: {
            ProductAdminComponent,
            // UpOutlined,
            //  VueSlickCarousel,

        },
        data() {
            return {
                settings: {
                    "dots": true,
                    "arrows": false,
                    "focusOnSelect": true,
                    "infinite": true,
                    "speed": 500,
                    "slidesToShow": 1,
                    "slidesToScroll": 1,

                },
                number: 1,
            }
        }

    }
</script>
<style lang="scss" scoped>
    .copy-delete-button {
        background-color: white;
        border: 1px solid #CFBBEF;
        border-radius: 5px;
        margin: 20px;
        padding: 6px;
        color: #6F32F0;


    }

    .download-upload-button {
        display: inline-block;
        float: right;
        margin-right: 20px;

        .ant-btn {
            margin: 5px;
            border-radius: 20px !important;
            border-color: #6F32F0;
            color: #6F32F0 !important;
        }
    }

    .check-box {
        .ant-checkbox-inner {
            padding: 12px !important;
        }
    }
</style>
<style lang="scss">
    .ant-badge-count {
        border-radius: 5px !important;
        background-color: #EADDFF !important;
        color: #6F32F0 !important;
        box-shadow: none !important;
    }

    .details-page {
        .ant-collapse {
            width: 100% !important;
            background-color: #fff;
        }

        .ant-collapse-header {
            color: black !important;
        }

        .ant-collapse-arrow {
            color: #6F32F0 !important;

        }

        .ant-collapse-content-box {
            background-color: #fff;
        }

    }
</style>