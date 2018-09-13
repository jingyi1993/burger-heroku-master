import React, {Component} from 'react';
import Aux from '../../../src/hoc/Aux';
import classes from './Layout.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';


class layout extends Component{

    state={
        showSideDrawer: false
    };

    sideDrawerClosedHandler=( )=>{
        this.setState({
            showSideDrawer: false
        })
    };

    sideDrawerToggleHandler=( )=>{
       this.setState(preState=>{
           return{
               showSideDrawer: !preState.showSideDrawer
           }
       })
        console.log(this.state.showSideDrawer)
    };




    render(){
        return(
            <Aux>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}
                isAuthenticated ={this.props.isAuthenticated}
                         userEmail={this.props.userEmail}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>

            </Aux>
        )

    }}
;

const MapStateToProps =state =>{
    return {
        isAuthenticated: state.auth.token!==null,
        userEmail: state.auth.userEmail,
    }
};

export default connect(MapStateToProps)(layout);