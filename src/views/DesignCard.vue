<template>
    <div class="card-body">
        <div class="card-img">
            <img alt="Design" src="https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6"/>
        </div>
        <div class="card-content">
            <h2 class="design-name">Design Name ABC</h2>
            <h1 class="price">210.58 Rupees</h1>
        </div>
        <div class="card-btn">
            <button class="btn">Continue Design</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card-body{
        width: 13rem;
        height: 20rem;
        box-shadow: 3px 3px 20px #00000029;
        padding: 11px;
        transition: transform 1s;
        margin: 2rem 0rem;
    }
    .card-body:hover{
        transform: scale(1.1);
    }
    .card-img{
        display: flex;
        align-items: center;
    }
    .card-img img{
        width: 11.5rem;
        height: 11rem;
        border-radius: 5px;
    }
    .card-content{
        margin-top: 0.6rem;
        margin-bottom: 0.6rem;
    }
    .design-name{
        font-size: 1.1rem;
        color: black;
        margin-bottom: 0px;
    }
    .price{
        font-size: 1.5rem;
        font-weight: 500;
        color: black;
        margin-bottom: 0px;
    }
    .btn{
        padding: 5px;
        width: 10rem;
        background-color: white;
        border: 1px solid #FF7A34;
        color: #FF7A34;
        border-radius: 20rem;
        cursor: pointer;
    }
    .btn:hover{
        background-color: #FF7A34;
        color: white;
    }
    @media (max-width: 425px) {
        .card-body{
            width: 9rem;
            height: 15rem;
            padding: 8px;
            margin: 1rem 0rem;
        }
        .card-img img{
            width: 8rem;
            height: 8rem;
        }
        .design-name{
            font-size: 0.8rem;
        }
        .price{
            font-size: 0.9rem;
        }
        .btn{
            padding: 5px;
            width: 8rem;
        }
    }
    @media (max-width: 380px){
        .card-body{
            margin: 0rem 0.1ren;
        }
    }
</style>