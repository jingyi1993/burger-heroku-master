import React,{Component} from 'react';
import Input from '../../components/UI/input/input';
import Button from '../../components/UI/Button/Button';
import Classes from './Auth.css'
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import {Redirect} from 'react-router-dom';

class Auth extends Component {
    state ={
        controls:{
            email: {
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder: 'mail adress',
                },
                value: '',
                validation:{
                    required: true,
                    minLength:  3 ,
                    isEmail: true,

                },
                valid: false
            },
            password: {
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder: 'password',
                },
                value: '',
                validation:{
                    required: true,
                    minLength:  6 ,

                },
                valid: false
            },

        },
        isSignup: true,
    };

    checkValidity(value,rules){
        //value: inputValue, rules:this.state.orderForm[key].validation

        let isValid = true;

        if(rules.required) {
            isValid = value.trim !== '';
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength;
        }
        if(rules.length) {
            isValid = value.length == rules.length ;
        }

        console.log('valid的结果是：',isValid);

        return isValid
    }


    contactDataChangedHandler = (event,id) => {

        const updatedControls = {
            ...this.state.controls
        };
        const updatedControlsElement =  {
            ...updatedControls[id]
        };
        updatedControlsElement.value = event.target.value;

        updatedControlsElement.valid = this.checkValidity(updatedControlsElement.value, updatedControlsElement.validation);
        console.log('valid的结果是：',updatedControlsElement);
        updatedControls[id]=updatedControlsElement;

        this.setState({
            controls:updatedControls
        })
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    };

    // switchAuthModeHandler =() =>{
    //     this.setState(prevState=>{
    //         return{ isSignup: !prevState.isSignup}
    //     });
    //     console.log('!!!',this.state.isSignup);
    // };

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    };

    defaultSigninHandler = () =>{
        // event.preventDefault();
        this.props.onAuth('guest@qq.com', '123456', false);
    };


    render() {

        const formElementArray =[];
        for(let key in this.state.controls){
            formElementArray.push({
                id:key,
                config: this.state.controls[key],

            })
        }

        //[ {id:email, config:
        // elementType:'input',
        //                 elementConfig:{
        //                     type:'email',
        //                     placeholder: 'mail adress',
        //                 },
        //                 value: '',
        //                 validation:{
        //                     required: true,
        //                     minLength:  3 ,
        //                     isEmail: true,
        //
        //                 },
        //                 valid: false },
        // {id: password, ...}]
        let form =formElementArray.map(formElement =>(
            <Input key={formElement.id}
                   elementtype={formElement.config.elementType}
                   elementconfig={formElement.config.elementConfig}
                // placeholder={formElement.config.elementConfig.placeholder}
                   value={formElement.config.value}
                   changed={(event) => this.contactDataChangedHandler(event,formElement.id)}
                   isValid={formElement.config.valid}
            />

        ));

        if(this.props.loading){
            form = <Spinner/>
        }

        let errorMessage = null;
        console.log('111',this.props.error);


        if(this.props.error) {
            errorMessage = (

                <p> {this.props.error} </p>
            )
        }

        let authRedirect = null;
        //if isAuthenticated == true, redirect to '/',
        //if isAuthenticated == false, return
        if(this.props.isAuthenticated) {
            authRedirect = <Redirect to = '/'/>
        }

        return (
            <div style={{textAlign:'center', color: 'red'}}>
                {authRedirect}
                {errorMessage}
                <Button
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger"> {this.state.isSignup ? 'SIGNUP' : 'SIGNIN'}</Button>

                <form className={Classes.Auth} onSubmit={this.submitHandler}>

                    {form}
                    <Button btnType = 'Success' > submit</Button>
                    {/*<Button clicked = {this.switchAuthModeHandler}>SWITCH TO {this.state.isSignup?'SIGNIN':null}</Button>*/}




                </form>

                <Button btnType = 'Success' clicked={this.defaultSigninHandler}>Signin as a guest</Button>


            </div>
        );
    }
}

// const mapDispatchToProps = dispatch =>{
//     return {
//         onAuth : (email, password)=> dispatch(actions.auth(email, password))
//     }
// }
//
//
// export default connect(null, mapDispatchToProps)(Auth);

const mapStateToProps = state =>{
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);