import  * as actionTypes from './actions';
import axios from 'axios';

export const authStart = () =>{
    return {
        type: actionTypes.AUTH_START,

    }
};

export const authSuccess = (idToken, userId) =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId,



    }
};
export const authFail = (error) =>{
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,

    }
};

export const auth = (email,password, isSignup)=> {
    return dispatch =>{
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url= 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCa_RaMjwiwbJ0MlPwaTI1m9WCk_n8CX_0';
        if(!isSignup){
            url ='https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCa_RaMjwiwbJ0MlPwaTI1m9WCk_n8CX_0'
        }

        axios.post(url, authData)
            .then(response=>{
                console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId))
            })
            .catch((e)=>{
                console.log(e);
                dispatch(authFail(e.Error))

            })
    }
};