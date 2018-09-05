import React,{Component} from 'react';
import Input from '../../components/UI/input/input';
import Button from '../../components/UI/Button/Button';
import Classes from './Auth.css'
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

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
    }


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
        const form =formElementArray.map(formElement =>(
            <Input key={formElement.id}
                   elementtype={formElement.config.elementType}
                   elementconfig={formElement.config.elementConfig}
                // placeholder={formElement.config.elementConfig.placeholder}
                   value={formElement.config.value}
                   changed={(event) => this.contactDataChangedHandler(event,formElement.id)}
                   isValid={formElement.config.valid}
            />

        ));

        return (
            <div>
                <form className={Classes.Auth} onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType = 'Success' > submit</Button>
                    {/*<Button clicked = {this.switchAuthModeHandler}>SWITCH TO {this.state.isSignup?'SIGNIN':null}</Button>*/}



                </form>
                <Button
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>


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
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
    };
};

export default connect(null, mapDispatchToProps)(Auth);