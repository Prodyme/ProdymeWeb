<template>
<section class="main">
    <div class="acc-heading">
        <router-link to="/myAccount"><h1>MY PROFILE</h1></router-link>
        <router-link to="/myMessages"><h1>MY MESSAGES</h1></router-link>
        <router-link to="/myOrders"><h1>MY ORDERS</h1></router-link>
        <router-link to="/myDesigns"><h1>MY DESIGNS</h1></router-link>
        <router-link to="/myWishlist"><h1>WISHLIST</h1></router-link>
    </div>
    <hr class="line-color">

</section>
    
</template>

<script>
export default{
    name: 'AccHeader',
}
</script>

<style scoped>
    .acc-heading{
        display: flex;
       width: 60vw;
       justify-content: space-between;
    }
    .acc-heading h1{
        font-size: 1rem;
        padding-bottom: 12px;
        cursor: pointer;
        transition: 0.3s ease;
    }
    .line-color {
        border-color: #FF7A34;
        border-top: none;
    }
    hr{
        border-color: #d9d9d9;
        border-top: none;
    }
    .acc-heading .active{
        color: #FF7A34;
        font-weight: bold;
    }
    .acc-heading h1:hover{
        color: #FF7A34;
    }

    @media (max-width: 500px) {
        .acc-heading h1{
            font-size: 0.6rem;
            justify-content: space-around;
            margin-right: 1rem;
            padding-bottom: 8px;
            display: flex;
        }
    }
</style>
