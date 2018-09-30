import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/CheckOut/CheckOut';
import {Route, Switch} from 'react-router-dom';
import ContactData from "./containers/CheckOut/ContactData/ContactData";
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import Paypal from './containers/paypal/paypal';
import HomePage from './components/HomePage/HomePage';


class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              {/*<BurgerBuilder/>*/}
              {/*<Checkout/>*/}

              <Switch>


                  <Route path="/" exact component={BurgerBuilder} />
                  <Route path = '/auth' exact component ={Auth}/>
                  <Route path="/checkout" component={Checkout} />
                  <Route path='/orders' exact component={Orders}/>
                  <Route path='/logout' exact component={Logout}/>
                  <Route path='/Home' exact component ={HomePage}/>
                  {/*<Route path ='/paypal' exact component ={Paypal}/>*/}





              </Switch>


          </Layout>
      </div>
    );
  }
}

export default App;
