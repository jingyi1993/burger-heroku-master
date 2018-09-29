import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';
import Paypal from '../../containers/paypal/paypal';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux'
;
class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1,
        },
        price: 1,
    };

    componentWillMount() {
        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        //?salad=0&bacon=0&cheese=2&meat=0

        const ingredients = {};
        let price = null;

        for (let param of query.entries()) {
            //['salad', '0'];
            //['bacon','0'];
            //['cheese','2'];
            //['meat','0']
            //['price', '...']

            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
            //ingredients:{
            // salad: 0,
            // bacon:0,
            // cheese:2,
            // meat:0}
        }

        this.setState({
            ingredients: ingredients, price: price
        })
    }

    //new method instead of <Link> method;
    checkoutCanceledHandler = () => {

        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {

        this.props.history.replace('/checkout/contact-data');

    };

    render() {
        // console.log(this.props);

        return (
            <Aux>
                <CheckoutSummary ingredients={this.props.ingredients}
                                 checkoutCanceledHandler={this.checkoutCanceledHandler}
                                 checkoutContinuedHandler={this.checkoutContinuedHandler}
                />



                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => (<ContactData ingredients={this.props.ingredients} price={this.props.price} {...props} />)} />

            </Aux>

        )
    }

};

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.price,
    }
};

export default connect(mapStateToProps)(Checkout);