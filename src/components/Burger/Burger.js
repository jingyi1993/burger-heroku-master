import React from 'react';
import Classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger =(props)=>{
    console.log(props.ingredients);
    //bacon
    // :
    // 0
    // cheese
    // :
    // 0
    // meat
    // :
    // 0
    // salad
    // :
    // 1

    let transformedIngredients=Object.keys(props.ingredients)
    //[salad,bacon,cheese,meat]
    .map(igKey=>{

        return[...Array(props.ingredients[igKey])]

        //[,]
            .map((_,i)=>
            <BurgerIngredient key={igKey+i} type={igKey}/>)
    })
        .reduce((a,b)=>{
            return a.concat(b)
        });
    // console.log(transformedIngredients);
    if(transformedIngredients.length===0){
        transformedIngredients=<p>add!</p>

    }
    return(
        <div className={Classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}

            <BurgerIngredient type='bread-buttom'/>

        </div>
    );

};

export default burger;