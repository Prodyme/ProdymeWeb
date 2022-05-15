<template>
    <section class="nav">
        <div class="nav-heading">
            <h2>Hey, let us know your requirements and we will get you the best products!</h2>
        </div>
        <div class="space">
            <h2 class="heading">What is type of space are you building?</h2>
            <div class="categories">
                <button class="type active"><a-icon type="coffee" class="demoIcon"/>Kitchen</button>
               <button class="type"><a-icon type="coffee" class="demoIcon"/>Toilet</button>
               <button class="type"><a-icon type="coffee" class="demoIcon"/>Living Room</button>
               <button class="type"><a-icon type="coffee" class="demoIcon"/>Bed Room</button>
            </div>
            <a-icon type="down" class="down"/>
        </div>
        <div class="layout">
            <h2 class="heading">What is the tentative layout of your space?</h2>
            <div class="categories">
               <button class="type active"><a-icon type="coffee" class="demoIcon"/>L - Shape</button>
               <button class="type"><a-icon type="coffee" class="demoIcon"/>U - Shape</button>
               <button class="type"><a-icon type="coffee" class="demoIcon"/>Parallel</button>
               <button class="type"><a-icon type="coffee" class="demoIcon"/>I - Shape</button>
               <button class="type"><a-icon type="coffee" class="demoIcon"/>T T - Island</button>
               <button class="type"><a-icon type="coffee" class="demoIcon"/>G - Shape</button>
            </div>
            <a-icon type="down" class="down"/>
        </div>
        <div class="dimension-cont">
            <h3 class="heading">Please enter the dimensions of the room as well as some details.</h3>
            <div class="dimension-diagram">
                <h4 class="sub-heading">Please enter dimensions referred in the diagram below</h4>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikPN9n3SOhZqIMldRkHYICwyzERPSe5GOtA&usqp=CAU" alt="how to measure your room">
            </div>
            <div class="dimensions">
                <div class="units">
                    <input type="text" placeholder="Depth*">
                    <a-dropdown :trigger="['click']" class="dropdown">
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                        m <a-icon type="down" style="color: #FF7A34" />
                        </a>
                        <a-menu slot="overlay">
                        <a-menu-item key="0">
                            <p>ft</p>
                        </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
                <div class="units">
                    <input type="text" placeholder="Clear Bottom*">
                    <a-dropdown :trigger="['click']" class="dropdown">
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                        m <a-icon type="down" style="color: #FF7A34" />
                        </a>
                        <a-menu slot="overlay">
                        <a-menu-item key="0">
                            <p>ft</p>
                        </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
                <hr>
                <div class="room-dimensions">
                    <h4 class="sub-heading">Please enter your room dimensions selecting the relevant unit</h4>
                    <div class="units">
                        <input type="text" placeholder="Length*">
                        <a-dropdown :trigger="['click']" class="dropdown">
                            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                            m <a-icon type="down" style="color: #FF7A34" />
                            </a>
                            <a-menu slot="overlay">
                            <a-menu-item key="0">
                                <p>ft</p>
                            </a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </div>
                    <div class="units">
                        <input type="text" placeholder="Breadth*">
                        <a-dropdown :trigger="['click']" class="dropdown">
                            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                            m <a-icon type="down" style="color: #FF7A34"/>
                            </a>
                            <a-menu slot="overlay">
                            <a-menu-item key="0">
                                <p>ft</p>
                            </a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </div>
                    <div class="units">
                        <input type="text" placeholder="Height*">
                        <a-dropdown :trigger="['click']" class="dropdown">
                            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                            m <a-icon type="down" style="color: #FF7A34"/>
                            </a>
                            <a-menu slot="overlay">
                            <a-menu-item key="0">
                                <p>ft</p>
                            </a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </div>

                </div>
            </div>
            <a-icon type="down" class="down"/>
        </div>
        <div class="specifications">
            <h2 class="heading">You may select from the different available grades for the various products available for your specifications.</h2>
            <div class="categories">
               <button class="type active"><a-icon type="dollar" class="demoIcon"/>Specific Need</button>
               <button class="type"><a-icon type="dollar" class="demoIcon"/>Sustainable</button>
               <button class="type"><a-icon type="dollar" class="demoIcon"/>Aristrocrat</button>
               <button class="type"><a-icon type="dollar" class="demoIcon"/>Premium</button>
               <button class="type"><a-icon type="dollar" class="demoIcon"/>Luxury</button>
            </div>
            <a-icon type="down" class="down"/>
        </div>
    </section>
</template>

<script>
export default({
    name: 'Navbar',
})
</script>

<style scoped>
    .nav{
        background-color: #2A2A2A;
        width: 20rem;
        height: auto;
        padding: 3rem;
    }
    .nav-heading{
        padding-bottom: 1rem;
    }
    .nav-heading h2{
        font-size: 1.6rem;
        font-weight: 300;
        color: white;
    }
    .space{
        margin: 1rem 0rem;
    }
    .heading{
        font-size: 1rem;
        color: white;
        font-weight: 400;
        margin-bottom: 1rem;
    }
    .categories{
        margin-left: 1rem;
    }
    .type{
        display: flex;
        border: 1px solid #646464;
        width: 12rem;
        height: 3rem;
        margin-bottom: 0.7rem;
        padding: 5px;
        align-items: center;
        border-radius: 5px;
        background-color: transparent;
        color: white;
        font-weight: 400;
        cursor: pointer;
    }
    .type:hover{
        background-color: white;
        color: black;
    }
    .active{
        background-color: white;
        color: black;
    }
    .demoIcon{
        font-size: 1.4rem;
        margin-left: 2.5rem;
        margin-right: 1rem;
    }
    .down{
        font-size: 0.7rem;
        color: white;
        margin-left: 6.5rem;
        cursor: pointer;
    }
    .dimension-cont{
        margin-top: 1rem;
    }
    .dimension-diagram{
        margin-top: 1.5rem;
    }
    .sub-heading{
        font-size: 1rem;
        font-weight: 100;
        color: white;
        margin-bottom: 1rem;
        font-style: italic;
    }
    .dimensions{
        margin-top: 1.5rem;
    }
    .units input{
        width: 9rem;
        border-radius: 5px;
        background-color: transparent;
        outline: none;
        border: 1px solid #646464;
        padding: 0.6rem;
        margin-bottom: 1.5rem;
        color: #C5C5C5;
    }
    ::placeholder{
        font-size: 0.8rem;
        color: #C5C5C5;
    }
    .dropdown{
        border: 1px solid #646464;
        padding: 0.6rem;
        margin-left: 1rem;
        border-radius: 5px;
        color: #C5C5C5;
    }
    hr{
        background-color: #2A2A2A;
    }
    .specifications{
        margin-top: 2rem;
    }
</style>