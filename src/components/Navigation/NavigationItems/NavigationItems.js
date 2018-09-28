import React from 'react';
import Classes from './navigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import {Link} from 'react-router-dom'

const navigationItems =(props) =>(
    <ul className={Classes.NavigationItems}>


        <NavigationItem link="/" > Burger Builder </NavigationItem>

        {props.isAuthenticated
            ?<NavigationItem link='/orders' > CheckOut</NavigationItem>
            : null}

        {props.isAuthenticated
        ?<NavigationItem link='/logout' > Log Out</NavigationItem>
        :<NavigationItem link='/auth' > Login/Signup</NavigationItem>}

        {/*{props.isAuthenticated*/}
            {/*?<NavigationItem> {props.userEmail}</NavigationItem>*/}
            {/*:null}*/}

        {props.isAuthenticated
        ?<p className={Classes.UserEmail}>{props.userName}</p>
        :null}


        






    </ul>
);

export default navigationItems;