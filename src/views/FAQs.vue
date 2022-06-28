<template>
    <section class="main">
        <div class="heading">
            <h1>Frequently Asked Questions</h1>
        </div>
        <div class="content">
            <p class="sub-heading">Below you'll find answers to the questions we get asked the most..</p>
            <div class="ques">
                <a-collapse style="background-color: white; margin: 0rem 2rem">
                    <a-collapse-panel key="1" header="Question 1"  class="panel">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus ipsum ex optio error maiores nam modi eveniet vel cupiditate, laboriosam odit aspernatur!</p>
                    </a-collapse-panel>
                    <a-collapse-panel key="2" header="Question 2" class="panel">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam vel nobis rerum cum labore tenetur saepe ea, deleniti reprehenderit libero quibusdam voluptatum quidem, illo facere laudantium. Laboriosam repudiandae minima aliquam explicabo atque inventore quo?</p>
                    </a-collapse-panel>
                    <a-collapse-panel key="3" header="Question 3" class="panel">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae eos quo.</p>
                    </a-collapse-panel>
                    <a-collapse-panel key="4" header="Question 4" class="panel">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae eos quo.</p>
                    </a-collapse-panel>
                    <a-collapse-panel key="5" header="Question 5" class="panel">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae eos quo.</p>
                    </a-collapse-panel>
                </a-collapse>
            </div>
        </div>
        <div class="contact">
            <h2>Still have Questions?</h2>
            <p>Reach us via our contact form and get easily redirected to the person who can help you.</p>
            <router-link to="/contact"><button>Connect with us</button></router-link>
        </div>
        <Footer/>
    </section>
</template>

<script>
import Footer from "@/components/Global/Footer.vue";
export default {
    name: 'FAQs',
    components: {
        Footer,
    }
}
</script>

<style scoped>
    .main{
        background-color: #F8F8F8;
        height: auto;
    }
    
    .heading{
        background-color: white;
        height: 5rem;
        display: flex;
        align-items: center;
        margin-top: 1rem;
        padding: 0rem 1rem;
    }
    .heading h1{
        font-size: 2.8rem;
        color: #FF7A34;
        font-family: Roboto;
        font-weight: 550;
    }
    .content{
        /* margin-top: 1rem; */
        padding: 2rem;
    }
    .sub-heading{
        font-size: 1.6rem;
        font-weight: 500;
        color: #2A2A2A;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .panel{
        padding: 0.6rem 0rem; 
        font-size: 1.2rem;
    }

    .contact{
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
    }
    .contact h2{
        text-align: left;
        font-size: 2rem;
        color: #2A2A2A;
        margin-bottom: 0.5rem;
        font-weight: bold;
    }
    .contact p{
        text-align: left;
        font-size: 1.1rem;
        color: #2A2A2A;
        margin-bottom: 1.5rem;
    }
    .contact button{
        color: white;
        background-color: #FF7A34;
        padding: 0.6rem 1.2rem;
        outline: none;
        border: none;
        border-radius: 2rem;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
    }
    .contact button:hover{
        color: #FF7A34;
        background-color: white;
        border: 2px solid #FF7A34;
    }
</style>