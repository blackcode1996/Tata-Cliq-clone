import * as types from "./actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, {type ,payload}) => {
  switch(type){

    //Get
   case types.GET_PRODUCT_REQUEST:
    return {...state, isLoading:true,};
    case types.GET_PRODUCT_SUCCESS:
        return {...state, isLoading: false, data:payload};
     case types.GET_PRODUCT_FAILURE:
     return {...state , isLoading:false, isError:true};   

     //Add
     case types.ADD_PRODUCT_REQUEST:
        return {...state, isLoading:true,};
     case types.ADD_PRODUCT_SUCCESS:
        return {...state, data : [...state,payload],
     
        isLoading:false};
     case types.ADD_PRODUCT_FAILURE:
        return {...state,isLoading:false, isError:true}   

   //Edit
   case types.EDIT_PRODUCT_REQUEST:
    return {...state, isLoading:true,};
    case types.EDIT_PRODUCT_SUCCESS:
    let upDatedProduct = state.data.map((el)=>el.id===payload.id ? payload :el)
     return {...state, isLoading:false ,data: upDatedProduct};
     case types.EDIT_PRODUCT_FAILURE:
      return {...state , isLoading:false, isError:true}  

    //Delete
    case types.DELETE_PRODUCT_REQUEST:
      return {...state, isLoading:true};
     case types.DELETE_PRODUCT_SUCCESS:
    let upDatednew = state.data.filter((el)=>el.id !== payload)
    return {...state , isLoading:false, data:upDatednew}
    case types.DELETE_PRODUCT_FAILURE:
        return {...state, isLoading:false , isError:true};
  
    default:
        return state;
  }
};

export { reducer };


