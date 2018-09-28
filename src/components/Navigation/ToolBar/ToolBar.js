import React from 'react';
import Classes from'./ToolBar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button'
import Logo from '../../UI/Logo/Logo';

const toolbar =(props)=>{
    return(
        <header className={Classes.ToolBar}>
            {/*<div>MENU</div>*/}
            <Button clicked={props.drawerToggleClicked}><Logo className={Classes.Logo}/></Button>


            <nav className={Classes.DeskTopOnly}>
                <NavigationItems isAuthenticated={props.isAuthenticated}
                                 userEmail={props.userEmail}
                                 userName={props.userName}
                                 />
            </nav>
        </header>
    )

};



export default toolbar