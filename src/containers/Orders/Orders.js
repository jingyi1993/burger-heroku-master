import React,{Component} from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios';
import {connect} from 'react-redux';


class Orders extends Component {

    state={
        orders:[],
        loading:true
    };
    componentDidMount(){
        axios.get('/orders.json?auth='+this.props.token)
            .then(res=>{
                //turn the object res into array;

                const Orders =[];
                for(let key in res.data){
                    Orders.push ({
                        ...res.data[key],
                        id:key,
                    })
                    ///[{...},{...},{...}]
                }
                console.log(Orders);
                this.setState({
                   loading: false,
                    orders:Orders,
                })
            })
            .catch(err=>{
                this.setState({
                    loading: false,
                })
            })
        // axios.get('https://randomuser.me/api' )
        //     .then(res=>{
        //         //turn the object res into array;
        //
        //
        //         console.log('###',res);
        //
        //     })
        //     .catch(err=>{
        //         console.log(err);
        //     })
    }
    render(){
        return(
            <div>
                {this.state.orders.map(order=>{

                    return(
                        <Order key={order.id}
                               address={order.address}
                               price={order.price}
                               ingredients={order.ingredients}
                        />
                    )
                    }




                )}
            </div>

        );
    }
}

const mapStateToProps = state =>{
    return {
       token: state.auth.token
    }
};


export default connect(mapStateToProps)(Orders);