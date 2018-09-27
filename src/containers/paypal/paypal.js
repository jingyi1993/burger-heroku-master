import React, {Component} from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import Classes from './paypal.css';


class Paypal extends Component {
    render(){
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            console.log("The payment was succeeded!", payment);
            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        };

        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        };

        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        };

        let env = 'sandbox'; // you can set here to 'production' for production
        const client = {
            sandbox:    'ASrQgjX4KBqr-VXkXY1WxJHw28AS_eG4WEJ2hQQxAY3MdCsD_xKXnGm7Ho9n9tBbiijqYj5TlWLKGh2p',


        };
        let currency = 'USD'; // or you can set this value from your props or state
        let total = 1;

        return(
            <div>
                {/*<h3>pay here</h3>*/}
                <PaypalExpressBtn env={env} client={client}  onError={onError} onSuccess={onSuccess} onCancel={onCancel}
                                  currency={currency} total={total}/>
            </div>
        )

    }}

export default Paypal;