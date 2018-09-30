import React from 'react';
import Classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls =[
    { label:'Salad', type:'salad', price: 0.5},
    { label:'Bacon', type:'bacon' , price: 0.4},
    { label:'Cheese', type:'cheese', price: 1.3},
    { label:'Meat', type:'meat', price: 0.7}
];

const buildControls = (props)=> {
    console.log(props.isAuthenticated);

    return (
        <div className={Classes.BuildControls}>
            <p style={{fontFamily:'inherit'}}><strong>Current Price:</strong><strong>{props.price.toFixed(2)}</strong></p>

            {controls.map(a => (
                    <BuildControl key={a.label}

                                  label={a.label}
                                  price={a.price}
                                  ingredientAdded={() => props.ingredientAdded(a.type)}
                                  ingredientRemoved={() => props.ingredientRemoved(a.type)}
                                  disabledInfo={props.disabledInfo[a.type]}/>
                )
            )}
            <button className={Classes.OrderButton} disabled={!props.purchasable}
                    onClick={props.ordered}>{props.isAuthenticated ? 'Order Now!' : 'Sign Up To Order!'}</button>

            <p></p>
            <p></p>
            <p></p>
            <p></p>

            <p>created by @maggie</p>
        </div>

    )


}

export default buildControls;