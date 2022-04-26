<template>
    <section class="main">
        <BannerCard></BannerCard>
        <div class="content-cont">
            <AccHeader></AccHeader>
            <div class="details">
                <form action="" class="test-form">
                    <label for="">Name</label>
                    <input type="text">
                    <label for="password">Password</label>
                    <input type="password">
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import BannerCard from "@/views/Banner.vue";
import AccHeader from "@/views/AccHeader.vue";

export default{
    name: 'Test',
    components: {
        BannerCard,
        AccHeader,
    }
}
</script>

<style scoped>
    .content-cont{
        background-color: white;
        position: absolute;
        top: 30%;
        left: 10%;
        width: 80vw;
        box-shadow: 3px 3px 3px rgb(202, 202, 202);
        border-radius: 5px;
        padding: 40px 80px;
        border: 1px solid rgb(202, 202, 202);
    }
</style>
