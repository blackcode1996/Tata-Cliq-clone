import {GET_USERS_FAILURE,GET_USERS_REQUEST,GET_USERS_SUCCESS,Add_User,Delete_User,Update_User} from "./actionTypes";

const initialState = {
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
         
        default: return state;
    }

}

export { reducer }