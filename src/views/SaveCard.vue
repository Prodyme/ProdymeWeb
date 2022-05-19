<template>
    <section class="main">
        <div class="save-card">
            <a-icon type="close" class="icon"/>
            <h3>Save Design</h3>

            <div class="design-name">
                <label >Name of Design</label>
                <input type="text" placeholder="Kitchen Design 29th December">
            </div>

            <div class="options">
                <button class="btn">Save</button>
                <p>Cancel</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SaveCard',
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .main{
        z-index: 99;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .save-card{
        width: 33rem;
        height: 13rem;
        border: 1px solid #E1E1E1;
        position: absolute;
        top: 8%;
        padding: 1rem 1rem 1rem 5rem;
        z-index: 3;
        background-color: white;
        box-shadow: 1px 1px 6px #adadad;
    }
    .icon{
        display: flex;
        justify-content: flex-end;
        font-size: 1rem;
        color: #FF7A34;
        cursor: pointer;
    }
    .save-card h3{
        font-size: 1rem;
        font-weight: bold;
        /* margin-top: 1rem; */
    }
    .design-name{
        display: flex;
        flex-direction: column;
        margin-top: 1.5rem;
    }
    .design-name label{
        font-size: 0.7rem;
        color: #888888;
    }
    .design-name input{
        width: 20rem;
        border:  1px solid #E1E1E1;
        background-color: white;
        padding: 5px 8px;
    }
    ::placeholder{
        color: #888888;
        font-size: 0.8rem;
    }
    .options{
        display: flex;
        align-items: center;
        margin-top: 1rem;
    }
    .btn{
        padding: 0.5rem 4rem;
        background-color: #FF7A34;
        color: white;
        border: none;
        border-radius: 20px;
        font-size: 0.7rem;
        cursor: pointer;
    }
    .options p{
        margin-left: 1rem;
        color: #FF7A34;
        text-decoration: underline;
        font-size: 0.7rem;
        cursor: pointer;
    }
</style>