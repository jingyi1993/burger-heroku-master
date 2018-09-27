import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';
import Classes from './SideDrawer.css';
import Logo from '../../UI/Logo/Logo';

const sideDrawer =(props)=>{

    let attachedClasses =[Classes.SideDrawer, Classes.Open];
    if (!props.open) {
        attachedClasses= [Classes.SideDrawer, Classes.Close]
    }
    console.log(!props.open);
    return (
        <Aux>
        <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>

            <Logo/>
            <nav >

                <NavigationItems isAuthenticated={props.isAuthenticated}
                                 userEmail={props.userEmail}
                />
            </nav>

        </div>
        </Aux>
    )
};



export default sideDrawer;