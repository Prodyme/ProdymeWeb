<template>
    <section class="designMain">
        <a-row>
      <a-col :span="6" class="col1">
        <h4>Key Plan</h4>
        <div class="plan">
            <img src="https://thekitchenshops.com/wp-content/uploads/2020/12/1_3.png" alt="U shape kitchen">
            <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">U-Shape
                 <a-icon type="down" />
                </a>
                <a-menu slot="overlay">
                <a-menu-item key="0">
                    <a href="">1st menu item</a>
                </a-menu-item>
                </a-menu>
            </a-dropdown>
        </div>
        <div class="placements">
            <div class="sink">
                <h5 class="sub-heading">Sink placement</h5>
                <div class="dropdown">
                    <a-dropdown :trigger="['click']">
                        <a class="ant-dropdown-link placement-dropdown" @click="e => e.preventDefault()">Z
                        <a-icon type="down" class="down"/>
                        </a>
                        <a-menu slot="overlay">
                        <a-menu-item key="0">
                            <a href="">1st menu item</a>
                        </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
                
            </div>
            <div class="stove">
                <h5 class="sub-heading">Stove placement</h5>
                <div class="dropdown">
                    <a-dropdown :trigger="['click']">
                        <a class="ant-dropdown-link placement-dropdown" @click="e => e.preventDefault()">X
                        <a-icon type="down" class="down"/>
                        </a>
                        <a-menu slot="overlay">
                        <a-menu-item key="0">
                            <a href="">1st menu item</a>
                        </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
            </div>
        </div>
        <div class="settings">
            <p><a-icon type="redo" />Reset To Original</p>
            <button class="btn randomize">Randomize</button>
            <router-link to="/Basket"><button class="btn proceed">Proceed</button></router-link>
        </div>
      </a-col>
      <a-col :span="12" class="col2">
       <div class="header">
           <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">Elevation X
                 <a-icon type="down" class="down"/>
                </a>
                <a-menu slot="overlay">
                <a-menu-item key="0">
                    <a href="">1st menu item</a>
                </a-menu-item>
                </a-menu>
            </a-dropdown>
            <div class="sub-header">
                <a href="" class="consult">Consult A Pro?</a>
                <a-icon type="share-alt" class="icons"/>
                <a-icon type="save" class="icons"/>
            </div>
            
       </div>
       <div class="plan-diagram">
           <a-icon type="left" class="icons" />
           <img src="https://i.pinimg.com/originals/53/88/c1/5388c1d750dfdebef8863e34b18eb915.png" alt="design">
           <a-icon type="right" class="icons"/>
       </div>
       <div class="partitions">
           <div class="partition-heading">
               <a-row>
                    <a-col :span="6"></a-col>
                    <a-col :span="6">Partition A</a-col>
                    <a-col :span="6">Partition B</a-col>
                    <a-col :span="6">Partition C</a-col>
                </a-row>
           </div>
           <div class="partition-content">
               <a-row>
                    <a-col :span="6">
                        <h5 class="sub-heading">Nos. of partitions</h5>
                        <div class="dropdown">
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link placement-dropdown" @click="e => e.preventDefault()">3
                                <a-icon type="down" class="down"/>
                                </a>
                                <a-menu slot="overlay">
                                <a-menu-item key="0">
                                    <a href="">1st menu item</a>
                                </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </div>
                    </a-col>
                    <a-col :span="6">
                        <h5 class="sub-heading">Nos. of Drawers</h5>
                        <div class="dropdown">
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link placement-dropdown" @click="e => e.preventDefault()">2
                                <a-icon type="down" class="down"/>
                                </a>
                                <a-menu slot="overlay">
                                <a-menu-item key="0">
                                    <a href="">1st menu item</a>
                                </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </div>
                        <h5 class="sub-heading">Drawer P</h5>
                        <div class="dropdown">
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link placement-dropdown" @click="e => e.preventDefault()">6
                                <a-icon type="down" class="down"/>
                                </a>
                                <a-menu slot="overlay">
                                <a-menu-item key="0">
                                    <a href="">1st menu item</a>
                                </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </div>
                        <h5 class="sub-heading">Drawer Q</h5>
                        <div class="dropdown">
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link placement-dropdown" @click="e => e.preventDefault()">6
                                <a-icon type="down" class="down"/>
                                </a>
                                <a-menu slot="overlay">
                                <a-menu-item key="0">
                                    <a href="">1st menu item</a>
                                </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </div>
                        <h5 class="sub-heading">Drawer R</h5>
                        <div class="dropdown">
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link placement-dropdown" @click="e => e.preventDefault()">12
                                <a-icon type="down" class="down"/>
                                </a>
                                <a-menu slot="overlay">
                                <a-menu-item key="0">
                                    <a href="">1st menu item</a>
                                </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </div>
                    </a-col>
                    <a-col :span="6">
                        <h5 class="sub-heading">Nos. of Drawers</h5>
                        <div class="dropdown">
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link placement-dropdown" @click="e => e.preventDefault()">2
                                <a-icon type="down" class="down"/>
                                </a>
                                <a-menu slot="overlay">
                                <a-menu-item key="0">
                                    <a href="">1st menu item</a>
                                </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </div>
                        <h5 class="sub-heading">Drawer D</h5>
                        <div class="dropdown">
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link placement-dropdown" @click="e => e.preventDefault()">6
                                <a-icon type="down" class="down"/>
                                </a>
                                <a-menu slot="overlay">
                                <a-menu-item key="0">
                                    <a href="">1st menu item</a>
                                </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </div>
                        <h5 class="sub-heading">Drawer E</h5>
                        <div class="dropdown">
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link placement-dropdown" @click="e => e.preventDefault()">18
                                <a-icon type="down" class="down"/>
                                </a>
                                <a-menu slot="overlay">
                                <a-menu-item key="0">
                                    <a href="">1st menu item</a>
                                </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </div>
                    </a-col>
                    <a-col :span="6">
                        <h5 class="sub-heading">Nos. of Drawers</h5>
                        <div class="dropdown">
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link placement-dropdown" @click="e => e.preventDefault()">0
                                <a-icon type="down" class="down"/>
                                </a>
                                <a-menu slot="overlay">
                                <a-menu-item key="0">
                                    <a href="">1st menu item</a>
                                </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </div>
                        <h5 class="sub-heading">Drawer D</h5>
                        <div class="dropdown">
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link placement-dropdown" @click="e => e.preventDefault()">0
                                <a-icon type="down" class="down"/>
                                </a>
                                <a-menu slot="overlay">
                                <a-menu-item key="0">
                                    <a href="">1st menu item</a>
                                </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </div>
                        <h5 class="sub-heading">Drawer E</h5>
                        <div class="dropdown">
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link placement-dropdown" @click="e => e.preventDefault()">0
                                <a-icon type="down" class="down"/>
                                </a>
                                <a-menu slot="overlay">
                                <a-menu-item key="0">
                                    <a href="">1st menu item</a>
                                </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </div>
                    </a-col>
                </a-row>
           </div>
       </div>
      </a-col>
    </a-row>
    </section>
</template>

<style scoped>
    .designMain{
        /* border: 1px solid palevioletred; */
        margin-top: 1rem;
        padding: 1rem;
        background-color: white;
        box-shadow: 3px 3px 6px #00000029;
        border-radius: 5px;
    }
    .col1{
        border-right: 2px solid #00000029;
    }
    .col1 h4{
        font-size: 1rem;
    }
    .plan{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .plan img{
        width: 7rem;
        margin-bottom: 1rem;
    }
    .ant-dropdown-link{
        color: black;
        font-size: 1rem;
        font-weight: 500;
    }
    .placements{
        margin-top: 1rem;
    }
    .sub-heading{
        color: #888888;
        font-size: 0.6rem;
        margin-bottom: unset;
    }
    .placement-dropdown{
        font-size: 0.9rem;
        font-weight: 400;
    }
    .dropdown{
        border: 1px solid #f4f4f4;
        width: 7rem;
        padding: 2px 20px;
        box-shadow: 3px 0px 6px #00000029;
    }
    .down{
        margin-left: 3rem;
        color: #FF7A34;
        font-size: 2rem;
    }
    .stove{
        margin-top: 0.7rem;
    }
    .settings{
        margin-top: 1rem;
    }
    .settings p{
        color: #FF7A34;
        font-size: 0.8rem;
        text-decoration: underline;
        margin-bottom: 0.4rem;
    }
    .btn{
        width: 7rem;
        padding: 10px;
        border-radius: 20px;
        cursor: pointer;
        border: none;
        font-size: 0.8rem;
    }
    .randomize{
        border: 1px solid #FF7A34;
        background-color: white;
        color: #FF7A34;
        margin-bottom: 0.8rem;
    }
    .randomize:hover{
        color: white;
        background-color: #FF7A34;
    }
    .proceed{
        background-color: #2A2A2A;
        color: white;
    }
    .proceed:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
    }

    .col2{
        padding: 5px;
    }
    .header{
        padding: unset;
        display: flex;
        align-items: center;
        width: 24rem;
    }
    .header .down{
        margin-left: unset;    
    }
    .sub-header{
        margin-left: 7rem;
        display: flex;
        justify-content: space-between;
        width: 10rem;
    }
    .consult{
        font-size: 0.8rem;
        text-decoration: underline;
        color: #FF7A34;
    }
    .icons{
        font-size: 1.2rem;
        color: #FF7A34;
        cursor: pointer;
    }
    .plan-diagram{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24rem;
        margin-top: 1rem;

    }
    .plan-diagram img{
        width: 22rem;
        height: 10rem;
    }
    .plan-diagram .icons{
        color: black;
    }
    .partitions{
        width: 23rem;
        margin: 1rem 0rem 0rem 1rem;
    }
    .partition-heading{
        color: black;
        font-weight: bold;
    }
    .partition-content{
        margin-top: 0.5rem;
    }
    .partition-content .dropdown{
        width: 5rem;
        padding: 2px 6px;
        /* margin-top: 0.5rem; */
    }
    .partition-content .down{
        margin: unset;
        margin-left: 2rem;
    }
</style>