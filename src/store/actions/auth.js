import  * as actionTypes from './actions';
import axios from 'axios';

export const authStart = () =>{
    return {
        type: actionTypes.AUTH_START,

    }
};

export const authSuccess = (idToken, userId, userEmail) =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId,
        userEmail: userEmail,




    }
};
export const authFail = (error) =>{
    return {
        //action.error
        //action.type
        type: actionTypes.AUTH_FAIL,
        error: error,

    }
};
export const logout =() =>{
    return{type: actionTypes.LOG_OUT}
};

export const checkAuthTimeout =(expireTime) =>{
    return dispatch =>{
     setTimeout(()=>{
       dispatch(logout())
      },expireTime* 1000)
    };
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
                dispatch(authSuccess(response.data.idToken, response.data.localId,response.data.email));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch((e)=>{
                console.log(e);
                dispatch(authFail(e.response.data.error.message))


            })
    }
};