<template>
     <div style="width: 352px; height: 468px;background-color:white">
                        <div class="cart-header" style="background-color:#E1E1E1;width: 352px;height: 49px;">
                            <span>Services Cart (43)</span>
                        </div>
                        <div class="cart-table">
                            <table id="feed" class="services-table">
                                <tr>
                                    <td> Carpenter work</td>
                                    <td>12 days</td>
                                    <td>&#8377;2,100</td>
                                </tr>
                                <tr>
                                    <td> Carpenter work</td>
                                    <td>12 days</td>
                                    <td>&#8377;2,100</td>
                                </tr>
                                <tr>
                                    <td> Carpenter work</td>
                                    <td>12 days</td>
                                    <td>&#8377;2,100</td>
                                </tr>
                                <tr>
                                    <td> Carpenter work</td>
                                    <td>12 days</td>
                                    <td>&#8377;2,100</td>
                                </tr>
                                <tr>
                                    <td> Carpenter work</td>
                                    <td>12 days</td>
                                    <td>&#8377;2,100</td>
                                </tr>
                                <tr>
                                    <td> Carpenter work</td>
                                    <td>12 days</td>
                                    <td>&#8377;2,100</td>
                                </tr>
                                <tr>
                                    <td> Carpenter work</td>
                                    <td>12 days</td>
                                    <td>&#8377;2,100</td>
                                </tr>
                            </table>
                        </div>
                        <div class="cart-footer">
                            <table>
                                <tr>
                                    <td style=" padding-right:9.8em;"> Days <span style="font-size:18px;">43</span>
                                    </td>
                                    <td>Subtotal</td>
                                    <td>&#8377;2,145.58</td>
                                </tr>
                            </table>
                            <a-button type="primary" block>
                                Checkout
                            </a-button>
                        </div>
                    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
table {
        border-collapse: separate;
        border-spacing: 0px 10px;
    }

    .services-table {
        margin-top: 11px;
    }

    .cart-header {
        span {
            font-size: 16px;

            font-weight: bold;
        }
    }

    .cart-table {

        table td:nth-child(1) {
            font-size: 12px;
            width: 100%;
           padding-left: 14px;
        }

        table td:nth-child(2) {
            font-size: 10px;
            padding-right: 40px;

        }

        table td:nth-child(3) {
            font-weight: bold;
            font-size: 18px;
            padding-right: 17px;

        }
    }

    .cart-footer {
        padding: 4px;
        border-top: 1px solid #D9D9D9;
        box-shadow: 0px 3px 15px #C1C1C129;

        .ant-btn-primary {
            background: #FF7A34 0% 0% no-repeat padding-box;
            border: 1px solid #FF7A34;
            border-radius: 20px;


        }

        table td:nth-child(2) {
            font-size: 10px;
            padding-right: 24px;

        }

        table td:nth-child(3) {
            font-weight: bold;
            font-size: 18px;
        }
    }
</style>
