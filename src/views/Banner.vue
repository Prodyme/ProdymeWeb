<template>
    <div class="banner-card">
        <img src="https://www.accruent.com/static/b3c4e13c979e79696ed8a9b9ca6d5bc1/7d7d1/accruent_resources_blog-entries_what-are-the-five-phases-of-the-construction-life-cycle-_hero.jpg" alt="Image" style="height: 50vh; width: 100vw">
        <div class="banner-text">
            <h6><router-link to="/" style="color: white; text-decoration: none">Home / </router-link> <span> My Account</span></h6>
            <h1>My Account</h1>
        </div> 
    </div>
</template>

<script>
export default{
    name: 'BannerCard',
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .banner-card{
        position: relative;
        background-color: black;
    }
    .banner-card img{
        max-height: 50vh;
        max-width: 100%;
        /* width: 100vw; */
        opacity: 0.3;
    }
    .banner-text{
        position: absolute;
        top: 15%;
        left: 18%;
        padding: 20px;
    }
    .banner-text h6,.banner-text h1{
        color: white;
    }
    .banner-text h6{
        font-size: 0.8rem;
        font-weight:300;
    }
    .banner-text span{
        font-weight: bold;
    }
    .banner-text h1{
        font-size: 3rem;
        font-weight: 300;
    }
    @media (max-width: 425px) {
        .banner-img{
            max-width: 100%;
            max-height: 40vh;
        }
        .banner-text{
            top: 5%;
        }
        .banner-text h6{
            font-size: 0.5rem;
        }
        .banner-text h1{
            font-size: 2rem;
        }
    }
    @media (max-width: 350px){
        .banner-img{
           width: 200%;
        }
    }
</style>
