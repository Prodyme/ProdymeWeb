<template>
    <section class="main">
       <div class="orders-body">
           <header class="header">
               <h2>All Orders</h2>
               <div class="filters">
                   <a-input-search placeholder="input search text" style="width: 200px; margin-right: 2rem; border-radius: 10px" @search="onSearch" />
                   <a-month-picker placeholder="Select month" @change="onChange" />
               </div>
           </header>
           <div class="sub-header">
               <div class="order-details">
                   <h6>Orders Recieved</h6>
                    <h4>88</h4>
               </div>
               <div class="order-details">
                   <h6>Shipped</h6>
                    <h4>88</h4>
               </div>
               <div class="order-details">
                   <h6>In Transit</h6>
                    <h4>88</h4>
               </div>
               <div class="order-details">
                   <h6>Completed</h6>
                    <h4>88</h4>
               </div>
               <div class="order-details">
                   <h6>Returns / Exchange</h6>
                    <h4>88</h4>
               </div>
               <div class="order-details">
                   <h6>In Dispute</h6>
                    <h4>88</h4>
               </div>
               <div class="order-details">
                   <h6>Cancelled</h6>
                    <h4>88</h4>
               </div>
           </div>
           <div class="order-filter">
               <div class="type" style="width: 18rem">
                   <h4>Order Type</h4>
                   <div class="dropdown">
                        <button class="btn">All</button>
                        <a-icon type="caret-down" style="font-size: 1.1rem; color: black"/>  
                   </div>   
               </div>
               <div class="type">
                   <h4>Label</h4>
                   <div class="dropdown">
                        <button class="btn">All</button>
                        <a-icon type="caret-down" style="font-size: 1.1rem; color: black"/>  
                   </div>   
               </div>
               <div class="type">
                   <h4>Label</h4>
                   <div class="dropdown">
                        <button class="btn">All</button>
                        <a-icon type="caret-down" style="font-size: 1.1rem; color: black"/>  
                   </div>   
               </div>
               <div class="type">
                   <h4>Label</h4>
                   <div class="dropdown">
                        <button class="btn">All</button>
                        <a-icon type="caret-down" style="font-size: 1.1rem; color: black"/>  
                   </div>   
               </div>
               <div class="type">
                   <h4>Label</h4>
                   <div class="dropdown">
                        <button class="btn">All</button>
                        <a-icon type="caret-down" style="font-size: 1.1rem; color: black"/>  
                   </div>   
               </div>
               <h3>Apply</h3>       
           </div>
           <div class="orders-list">
               <div class="orders-header row-color">
                   <a-row>
                    <a-col :span="1" >
                        <a-checkbox @change="onChange" style="display: flex; justify-content: center; align-items: center; margin-top: 0.6rem"></a-checkbox>
                    </a-col>
                    <a-col :span="2" >
                        <h3 class="heading">Order ID</h3>
                    </a-col>
                    <a-col :span="3" >
                        <h3 class="heading">Seller Name</h3>
                    </a-col>
                    <a-col :span="3" >
                        <h3 class="heading">Product Type</h3>
                    </a-col>
                    <a-col :span="6" >
                        <h3 class="heading">Description</h3>
                    </a-col>
                    <a-col :span="2">
                        <h3 class="heading">Quantity</h3>
                    </a-col>
                    <a-col :span="3">
                        <h3 class="heading">Total Cost</h3>
                    </a-col>
                    <a-col :span="3" >
                        <h3 class="heading">Status</h3>
                    </a-col>
                    <a-col :span="1">
                    </a-col>
                </a-row>
               </div>
               <div class="content">
                  <a-row class="order-row">
                    <a-col :span="1" style="display: flex; justify-content: center">
                        <a-checkbox @change="onChange"></a-checkbox>
                    </a-col>
                    <a-col :span="2">
                        <p class="content-heading" style="font-weight: 500">V001</p>
                    </a-col>
                    <a-col :span="3">
                        <p class="content-heading">ABC Enterprise</p>
                    </a-col>
                    <a-col :span="3">
                        <p class="content-heading">Fixtures ABC</p>
                    </a-col>
                    <a-col :span="6" >
                        <p class="content-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </a-col>
                    <a-col :span="2">
                        <p class="content-heading">12</p>
                    </a-col>
                    <a-col :span="3">
                       <p class="content-heading"> ₹20000</p>
                    </a-col>
                    <a-col :span="3" style="display: flex;justify-content: center">
                        <button class="content-btn green">Completed</button>
                    </a-col>
                    <a-col :span="1">
                        <a-icon type="edit" class="content-heading" style="font-size: 1.5rem; cursor: pointer"/>
                    </a-col>
                </a-row>  
                  <a-row class="row-color order-row">
                    <a-col :span="1" style="display: flex; justify-content: center">
                        <a-checkbox @change="onChange"></a-checkbox>
                    </a-col>
                    <a-col :span="2">
                        <p class="content-heading" style="font-weight: 500">V002</p>
                    </a-col>
                    <a-col :span="3">
                        <p class="content-heading">ABC Enterprise</p>
                    </a-col>
                    <a-col :span="3">
                        <p class="content-heading">Plywood ABC</p>
                    </a-col>
                    <a-col :span="6">
                        <p class="content-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </a-col>
                    <a-col :span="2">
                        <p class="content-heading">23</p>
                    </a-col>
                    <a-col :span="3">
                       <p class="content-heading"> ₹20000</p>
                    </a-col>
                    <a-col :span="3" style="display: flex;justify-content: center">
                        <button class="content-btn yellow">In Progress</button>
                    </a-col>
                    <a-col :span="1">
                        <a-icon type="edit" class="content-heading" style="font-size: 1.5rem; cursor: pointer"/>
                    </a-col>
                </a-row>  
                  <a-row class="order-row">
                    <a-col :span="1" style="display: flex; justify-content: center">
                        <a-checkbox @change="onChange"></a-checkbox>
                    </a-col>
                    <a-col :span="2">
                        <p class="content-heading" style="font-weight: 500">V003</p>
                    </a-col>
                    <a-col :span="3">
                        <p class="content-heading">ABC Enterprise</p>
                    </a-col>
                    <a-col :span="3">
                        <p class="content-heading">Goods ABC</p>
                    </a-col>
                    <a-col :span="6">
                        <p class="content-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </a-col>
                    <a-col :span="2">
                        <p class="content-heading">34</p>
                    </a-col>
                    <a-col :span="3">
                       <p class="content-heading"> ₹20000</p>
                    </a-col>
                    <a-col :span="3" style="display: flex;justify-content: center">
                        <button class="content-btn red">Cancelled</button>
                    </a-col>
                    <a-col :span="1">
                        <a-icon type="edit" class="content-heading" style="font-size: 1.5rem; cursor: pointer"/>
                    </a-col>
                </a-row>  
               </div>              
           </div>
           <div class="other-options">
               <button class="delete button">Delete</button>
               <a-icon type="delete" class="icon"/>

               <button class="download button">Download</button>
               <a-icon type="arrow-down" class="icon"/>
           </div>
       </div>
    </section>
</template>

<script>
export default{
    name: 'AdminOrders',
    data() {
      return {
        ex4: 'indigo',
      }
    },
    methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
  },
}
</script>

<style scoped>
    .orders-body{
        background-color: white;
        /* border: 1px solid black; */
        width: 82rem;
        position: absolute;
        left: 1rem;
        top: 6rem;
        border-radius: 0.7rem;
        padding: 1rem;
        box-shadow: 5px 5px 10px #989898;
    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header h2{
        font-size: 1.1rem;
        font-weight: 600;
        color: #6750A4;
        font-family: Poppins;
    }
    ::placeholder{
        background-color: #F6F8FA;
    }
    .sub-header{
        display: flex;
        justify-content: space-between;
        margin-top: 1.5rem;
    }
    .order-details{
        /* border: 1px solid rgba(0, 0, 0, 0.24); */
        background-color: rgba(0, 0, 0, 0.03);
        width: 10rem;
        height: 7rem;
        padding: 0.8rem;
        box-shadow: 6px 6px 18px rgba(0, 0, 0, 0.03);
        border-radius: 12px;
    }
    .order-details h6{
        font-family: 'Montserrat';
        font-size: 0.9rem;
        color: black;
        font-weight: 400;
        margin-bottom: unset;
    }
    .order-details h4{
        font-size: 3.6rem;
        margin-left: 4rem;
        color: #989898;
        font-weight: 700;
    }
    .order-filter{
        margin-top: 3rem;
        display: flex;
    }
    .order-filter h3{
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        color: #6750A4;
        margin-left: 2rem;
        cursor: pointer;
    }
    .type{
        border-right: 1px solid #C4C4C4;
        width: 14rem;
        padding: 0.4rem;
    }
    .type h4{
        font-size: 1rem;
        color: #1F384C;
        font-family: 'Poppins';
    }
    .btn{
        font-size: 1.1rem;
        font-weight: 600;
        font-weight: Poppins;
        color: black;
    }
    .dropdown{
        display: flex;
        justify-content: space-between;
        text-align: center;
    }
    .orders-list{
        margin-top: 2rem;
    }
    .row-color{
        background-color: #EADDFF;
    }
    .orders-header{
        padding: 3px 0px;
    }
    .heading{
        font-size: 1rem;
        display: flex; 
        justify-content: center;
        align-items: center;
        color: black;
    }
    .content-heading{
        display: flex;
        text-align: center;
        justify-content: center;
        font-size: 0.9rem;
        color: black;
    }
    .content-btn{
        padding: 5px 10px;
        border-radius: 5px;
        color: black;
        font-family: Poppins;
        font-size: 0.9rem;
    }
    .green{
        background-color: #B2DF8A;
    }
    .yellow{
        background-color: #FFF7CC;
    }
    .red{
        background-color: #FBAAAA;
    }
    .order-row{
        display: flex;
        align-items: center;
    }
    .other-options{
        display:  flex;
        justify-content: flex-end;
        text-align: center;
        margin-top: 1.5rem;
    }
    .download{
        margin-left: 3rem;
    }
    .button{
        font-family: Roboto;
        font-size: 0.9rem;
        font-weight: 500;
        color: #6750A4;
    }
    .icon{
        margin-left: 0.4rem;
        font-size: 0.9rem;
        margin-top: 0.2rem;
        color: #6750A4;
    }
</style>