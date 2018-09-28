import React, {Component} from 'react';
import Aux from '../../../src/hoc/Aux';
import classes from './Layout.css';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';


class layout extends Component{

    state={
        showSideDrawer: false,

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

    // trimUserNameHandle = (arr) =>{
    //     let userNameF = [];
    //     //[M,a,g,g,i,e,@,q,q,.,c,o,m]
    //     for(let char of arr){
    //
    //         userNameF.push(char);
    //         if(char === '@'){
    //           break
    //         }
    //
    //     }
    //     return userNameF.join('');
    //
    // };






    render(){
        //zz@qq.com
        // let userEmail = this.props.userEmail;



        // this.selectUserNameHandler(userEmail);
        let userNameO = 'Maggie';

        if(this.props.userEmail){
            userNameO =this.props.userEmail.split('@')[0];


        }
        console.log('!!!!!!!',userNameO);









        return(
            <Aux>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                    isAuthenticated ={this.props.isAuthenticated}
                    userEmail={this.props.userEmail}/>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}
                isAuthenticated ={this.props.isAuthenticated}
                         userEmail={this.props.userEmail}
                         userName ={userNameO}
                />
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