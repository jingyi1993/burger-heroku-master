import * as actionTypes from '../actions/actions';
import {updateObject} from "../utility";

const initialState = {
    token : null,
    userID: null,
    error: null,
    loading: false,

};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    return updateObject( state, {
        token: action.idToken,
        userId: action.userId,
        userEmail: action.userEmail,
        error: null,
        loading: false
    } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const logOut = (state,action) =>{
    return updateObject( state , {
        token: null,
        userID: null,
    })
};



const auth = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.LOG_OUT: return logOut(state, action);
        default:
            return state;
    }
};

export default auth;

