<template>
    <section>
        <a-row>
            <a-col :span="4" class="left-part">
            </a-col>
            <a-col :span="20" class="service-provider-part">
                <section style="margin-left:20px;">
                    <div class="breadcrumb">
                        <a-breadcrumb>
                            <a-breadcrumb-item>Home</a-breadcrumb-item>
                            <a-breadcrumb-item><a href="" style="font-weight:bold;">Hire Service Provider</a>
                            </a-breadcrumb-item>
                        </a-breadcrumb>
                    </div>
                    <div class="service-header">
                        <h1>Hire Service Provider</h1>
                        <p>Hire from our top-class professionals!</p>
                    </div>
                    <div class="d-flex " style="flex-wrap: wrap;">
                        <a-card class="service-card" hoverable>
                            <img slot="cover" alt="plumber" src="" />
                            <a-card-meta title="Plumber">
                            </a-card-meta>
                        </a-card>
                        <a-card class="service-card" hoverable>
                            <img slot="cover" alt="carpenter" src="" />
                            <a-card-meta title="Carpenter">
                            </a-card-meta>
                        </a-card>
                        <a-card class="service-card" hoverable>
                            <img slot="cover" alt="Electrician" src="" />
                            <a-card-meta title="Electrician">
                            </a-card-meta>
                        </a-card>
                        <a-card class="service-card" hoverable>
                            <img slot="cover" alt="plumber" src="" />
                            <a-card-meta title="Plumber">
                            </a-card-meta>
                        </a-card>
                        <a-card class="service-card" hoverable>
                            <img slot="cover" alt="Painter" src="" />
                            <a-card-meta title="Painter">
                            </a-card-meta>
                        </a-card>
                        <a-card class="service-card" hoverable>
                            <img slot="cover" alt="P.O.P. Work" src="" />
                            <a-card-meta title="P.O.P. Work">
                            </a-card-meta>
                        </a-card>
                    </div>
                    <div class="hire-alternative">
                        <p>Not sure whom to hire? </p>
                        <h3> Let us know what you want to be done?</h3>
                    </div>
                    <div class="popular-services-heading">
                        <h2>Or choose from our most popular services for hire</h2>
                    </div>
                </section>

                <!-- <HireCard/> -->
                <a-row >
                    <a-col  :md="8" :xs="24" :sm="24" >
                         <HireCard/>
                    </a-col>
                     <a-col  :span="8">
                              <HireCard/>
                    </a-col>
                     <a-col :span="8">
                              <HireCard/>
                    </a-col>
                </a-row>
                 <a-row class="mt-30">
                    <a-col  :md="8" :xs="24" :sm="24" >
                         <HireCard/>
                    </a-col>
                     <a-col  :span="8">
                              <HireCard/>
                    </a-col>
                     <a-col :span="8">
                              <HireCard/>
                    </a-col>
                </a-row>
                   <a-row class="mt-30">
                    <a-col  :md="8" :xs="24" :sm="24" >
                         <HireCard/>
                    </a-col>
                     <a-col  :span="8">
                              <HireCard/>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
        <Footer />
    </section>
</template>
<script>
    import Footer from "@/components/Global/Footer.vue";
      import HireCard from "@/components/Global/HireCard.vue";
    export default {
        name: "Service",
        components: {
            Footer,
            HireCard,

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

    }
</script>
<style lang="scss" scoped>
 .mt-60 {
        margin-top: 60px;
    }

    .mt-30 {
        margin-top: 30px;
    }
    .d-flex {
        display: flex;
    }

    .content-justify {
        justify-content: space-around;
    }

    .space-between {
        justify-content: space-between;
    }

    .left-part {
        background-color: #2A2A2A;
        height: 1227px;
    }

    .service-provider-part {
        background-color: #E4E4E4;
    }

    .breadcrumb {
        margin-top: 10px;
    }

    .service-header {
        h1 {
            font-size: 42px;
            color: #2A2A2A;
            margin-top: 10px;
            margin-bottom: 2px;
            font-weight:400
        }

        p {
            font-size: 20px;
            position: relative;
            bottom: 12px;
              font-weight:400

        }

    }

    .service-card {
        width: 163px;
        height: 191px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 15px #61616129;
        margin-right: 30px;
    

    }

    .hire-alternative {
        margin-top: 80px;

        p {
            font-size: 20px;
            margin-bottom: 0px;
        }

        h3 {
            font-size: 26px;
        }
    }

    .popular-services-heading {
        h2 {
            font-size: 26px;
        }
    }

   
</style>
