import React from 'react';
import Classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls =[
    { label:'Salad', type:'salad'},
    { label:'Bacon', type:'bacon'},
    { label:'Cheese', type:'cheese'},
    { label:'Meat', type:'meat'}
];

const buildControls = (props)=> {
    console.log(props.isAuthenticated);

    return (
        <div className={Classes.BuildControls}>
            <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>

            {controls.map(a => (
                    <BuildControl key={a.label}
                                  label={a.label}
                                  ingredientAdded={() => props.ingredientAdded(a.type)}
                                  ingredientRemoved={() => props.ingredientRemoved(a.type)}
                                  disabledInfo={props.disabledInfo[a.type]}/>
                )
            )}
            <button className={Classes.OrderButton} disabled={!props.purchasable}
                    onClick={props.ordered}>{props.isAuthenticated ? 'Order Now!' : 'Sign Up To Order!'}</button>
        </div>

    )


}

export default buildControls;