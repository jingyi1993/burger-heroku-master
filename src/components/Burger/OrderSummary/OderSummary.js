import React,{Component} from 'react';
import  Aux from '../../../hoc/Aux';
import Button from '../../../components/UI/Button/Button';
import {Link} from 'react-router-dom';
import Classes from './OderSummary';


class orderSummary extends Component{

    componentWillUpdate() {
        console.log('[OrderSummary] will update')
    }
    render(){
        const ingredientSummary =Object.keys(this.props.ingredients)
        //[salad,cheese,meat,bacon]
            .map(a=>{
                return <li key={a} style={{justifyContent: 'center', display:'flex',fontFamily: 'fantasy'}}>
                <span style={{textTransform:'capitalize'}}>
                    {a}
                    </span>:{this.props.ingredients[a]}
                </li>
                //[salad:1,cheese:0,meat:2,bacon:1]
            });
        return(
            <Aux >
                <h3 style={{justifyContent: 'center', display:'flex',fontFamily: 'fantasy'}}>Your Order</h3>
                <p style={{justifyContent: 'center', display:'flex',fontFamily: 'fantasy'}}>A delicious burger with the following ingredients</p>
                <ul style={{justifyContent: 'center',fontFamily: 'fantasy'}}>
                    {ingredientSummary}
                </ul>
                <p style={{justifyContent: 'center', display:'flex',fontFamily: 'fantasy'}}><strong>Total Price:{this.props.price}</strong></p>
                <p style={{justifyContent: 'center', display:'flex',fontFamily: 'fantasy'}}>Continue to check out?</p>
                <div style={{justifyContent: 'center', display:'flex',fontFamily: 'fantasy'}}>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled} >CANCEL</Button>

                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
                </div>

            </Aux>
        )
    }

}

export default orderSummary;