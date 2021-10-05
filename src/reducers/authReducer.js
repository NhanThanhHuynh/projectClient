import {SET_AUTH} from '../constants/auth'

export const authReducer = ((state,action) =>{
    const {type,payload :{isAuthorization,authLoading,user}}=action;
    switch (type) {
        case SET_AUTH:
            return {
                ...state,
                authLoading:false,
                isAuthorization,
                user
            }
            ;
    
        default:
            return {...state};
    }
})

