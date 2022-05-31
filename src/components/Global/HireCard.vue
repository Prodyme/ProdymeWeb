<template>
    <div class="hire-card" >
        <a-row>
            <a-col :span="8">
                <img src="" alt="">
            </a-col>
            <a-col :span="16" style="padding:15px">
                <h4>Creating Living room furniture</h4>
                <a-row>
                    <a-col :span="14">
                        <aside class="princeReview">
                            <a-rate :default-value="5" allow-half />
                        </aside>
                    </a-col>
                    <a-col :span="10">
                        <span>&#8377;2100<small>/day</small></span>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
        <div class="description">
            <p>Creating sofa set, TV unit and a coffee table combo</p>
        </div>
        <a-row style="padding:20px">
            <a-col :span="10">
                <div class="view-details">
                    <a href="">View Details</a>
                </div>
            </a-col>
            <a-col :span="14">
                <a-row>
                    <a-col :span="12">
                        <div class="quantities">
                            <button @click="decrement(number)" class="increase-decrease">
                                <a-icon type="minus" /></button>
                            <input :value="number" class="input-box">
                            <button @click="increment(number)" class="increase-decrease">
                                <a-icon type="plus" /></button>
                        </div>
                    </a-col>
                    <a-col :span="12">
                        <div class="add-button">
                            <a-button type="primary">
                                Add
                            </a-button>
                        </div>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                number: 1,
            };
        },
        methods: {
            increment() {
                this.number++;
            },
            decrement() {
                if (this.number <= 0) {
                    this.number = 0;
                } else {
                    this.number--;
                }
            }
        },

    }
</script>
<style lang="scss" scoped>

.hire-card{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 15px #61616129;
    width:80%;
}
    .princeReview {
        .ant-rate {
            font-size: 11px;
        }
    }
    .description{
        margin-left: 20px;
        p{
            font-size:12px;
        }
    }
    .view-details {

        a {
            color: #FF7A34;
            font-size: 12px;
            text-decoration: underline;

        }
    }

    .increase-decrease {
        border: none;
        color: #FF7A34;
        background-color: white;

    }

    .input-box {
        width: 23%;
        text-align: center;
        border: none;
        background-color: #F8F8F8;
    }

    .add-button {

        .ant-btn-primary {
            margin-left: 20px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #FF7A34;
            border-radius: 20px;
            opacity: 1;
            color: #FF7A34;
            margin-right: 20px;

        }
    }
</style>
<style lang="scss">
    .hire-card {
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 15px #61616129;
        opacity: 1;
    }
   

    .hire-card:hover {
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 15px #FF7A346B;
        // border: 1px solid #FF7A34;
        opacity: 1;
    }
</style>