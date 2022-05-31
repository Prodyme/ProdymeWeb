<template>
    <section>
        <a-row>
            <a-col :span="4" class="service-sidebar-part">
                <!----filter category part------>
                <!-- <a-layout-sider style="max-height:100%"> -->
                <div class="filter-option ml-20 mt-20">
                    <font-awesome-icon icon="fa-solid fa-filter" />
                    <p class="filters-heading  ml-12">Filters</p>
                    <!------search button----->
                    <a-input-search placeholder="Search keywords" style="width: 157px;margin:7px;" @search="onSearch" />
                    <div class=" search-buttons" style="margin-bottom:20px;">
                        <a-button type="primary">
                            steel
                            <a-icon type="close" />
                        </a-button>
                        <a-button type="primary">
                            key
                            <a-icon type="close" />
                        </a-button>
                        <a-button style="padding-right:22px;" type="primary">
                            carbon fibre mat
                            <a-icon type="close" style="position:relative;left:12px;" />
                        </a-button>
                    </div>
                    <!-----------accordians------->
                    <Accordian />
                    <br>
                    <Accordian />
                    <br>
                    <Accordian />
                    <br>
                    <Accordian />
                </div>
                <!-- </a-layout-sider> -->
            </a-col>
            <a-col :span="20" class="carpenter-details-side">
                <a-breadcrumb>
                    <a-breadcrumb-item>Home</a-breadcrumb-item>
                    <a-breadcrumb-item><a href="">Hire Service Provider</a></a-breadcrumb-item>
                    <a-breadcrumb-item><a href="">Carpenter</a></a-breadcrumb-item>
                </a-breadcrumb>
                <div class="carpenter-service-heading">
                    <h1>Carpenter</h1>
                    <p>Select a type of work that you need to be done.</p>
                </div>
                <a-col :span="16">
                    <a-row>
                        <a-col :xs="24" :sm="24" :md="12">
                            <HireCard />
                        </a-col>
                        <a-col :span="12">
                            <HireCard />
                        </a-col>
                    </a-row>
                    <a-row class="mt-30">
                        <a-col :span="12">
                            <HireCard />
                        </a-col>
                        <a-col :span="12">
                            <HireCard />
                        </a-col>
                    </a-row>
                    <a-row class="mt-30">
                        <a-col :span="12">
                            <HireCard />
                        </a-col>
                        <a-col :span="12">
                            <HireCard />
                        </a-col>
                    </a-row>
                    <a-row class="mt-30">
                        <a-col :span="12">
                            <HireCard />
                        </a-col>
                        <a-col :span="12">
                            <HireCard />
                        </a-col>
                    </a-row>
                </a-col>













                <!-- <Carpenter/> -->


                <a-col :span="4">
                    <ServicesCart />
                </a-col>
            </a-col>
        </a-row>
        <Footer />
    </section>
</template>
<script>
    //  import Carpenter from "@/components/Global/Carpenter.vue";
    import Accordian from "@/components/Global/Accordian.vue";
    import Footer from "@/components/Global/Footer.vue";
    import HireCard from "@/components/Global/HireCard.vue";
    import ServicesCart from "@/components/Global/ServicesCart.vue"

    // optional style for arrows & dots
    export default ({
        components: {
            // Carpenter,
            Accordian,
            HireCard,
            Footer,
            ServicesCart

        },
        data() {
            return {
                number: 1,
            };
        },
        methods: {
            increment() {
                this.number++;
            },
            decrement() {
                if (this.number <= 0) {
                    this.number = 0;
                } else {
                    this.number--;
                }
            }
        },
    });
</script>
<style lang="scss" scoped>
    .w-30 {
        width: 30%;
    }

    .img-parent {
        height: 110px;

    }

    .card-responsive-img {
        max-width: 100%;
        max-height: 100%;
        margin: auto;
    }

    .ml-20 {
        margin-left: 20px;
    }

    .mt-20 {
        margin-top: 20px;
    }

    .mt-60 {
        margin-top: 60px;
    }

    .mt-30 {
        margin-top: 30px;
    }

    .ml-12 {
        margin-left: 12px;
    }

    .mb-20 {
        margin-bottom: 20px;
    }

    .d-flex {
        display: flex;
    }

    .space-between {
        justify-content: space-between;
    }

    .content-justify {
        justify-content: space-around;
    }

    .service-sidebar-part {
        background-color: #2A2A2A;
        height: 1075px;
    }

    .filter-option {
        color: #F8F8F8;
    }

    .filters-heading {
        display: inline-block;
    }


    .fa-filter {
        color: #FF7A34;
    }

    .carpenter-details-side {
        background-color: #D9D9D9;
        padding: 20px;
    }

    .carpenter-service-heading {
        h1 {
            font-size: 42px;
            margin: 0px;
        }

        p {
            font-size: 20px;
        }
    }

    
</style>
<style>
    .card-col-size .ant-col {
        width: 45.333333% !important;
    }
</style>