import {GET_USERS_FAILURE,GET_USERS_REQUEST,GET_USERS_SUCCESS,Add_User,Delete_User,Update_User,GET_PRODUCT_FAILURE,GET_PRODUCT_REQUEST,GET_PRODUCT_SUCCESS,Add_PRODUCT,Update_PRODUCT,Delete_PRODUCT} from "./actionTypes";

const initialState = {
    pro:[],
    users: [],
    isLoading:false,
    isError:false,
}


const reducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case GET_USERS_REQUEST: {
            return { ...state,isLoading: true}
        }
        case GET_USERS_SUCCESS: {
            return {...state,users: payload,isLoading: false}
        }
        case GET_USERS_FAILURE: {
            return {...state,isError: true,isLoading: false}
        }
        case Add_User: {

            return {
                ...state,
                users: [...state.users, payload]
            }
        }

        case Update_User:{
            let NewUserdata= state.users.map((user) => user.id === payload.id ? payload : user);
            return{
                ...state,
                users:NewUserdata
            }
        }
   
         case Delete_User:{
            let UserAfterDelete = state.users.filter((user) => user.id !== payload.id);
            return{
             ...state,
             users:UserAfterDelete
            }
         }
        case GET_PRODUCT_REQUEST: {
            return { ...state,isLoading: true}
        }
        case GET_PRODUCT_SUCCESS: {
            return {...state,pro: payload,isLoading: false}
        }
        case GET_PRODUCT_FAILURE: {
            return {...state,isError: true,isLoading: false}
        }
        case Add_PRODUCT: {

            return {
                ...state,
                pro: [...state.pro, payload]
            }
        }

        case Update_PRODUCT:{
            let Newprodata= state.pro.map((pr) => pr.id === payload.id ? payload : pr);
            return{
                ...state,
                pro:Newprodata
            }
        }
   
         case Delete_PRODUCT:{
            let PRoAfterDelete = state.pro.filter((pr) => pr.id !== payload.id);
            return{
             ...state,
             users:PRoAfterDelete
            }
         }
         
        default: return state;
    }

}

export { reducer }