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
       </div>
    </section>
</template>

<script>
export default{
    name: 'AdminOrders',
    
}
</script>

<style scoped>
    .orders-body{
        background-color: white;
        border: 1px solid black;
        width: 82rem;
        position: absolute;
        left: 1rem;
        top: 6rem;
        border-radius: 0.7rem;
        padding: 1rem;
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
        margin-top: 2rem;
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
</style>