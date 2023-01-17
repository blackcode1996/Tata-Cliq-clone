
import {
    Get_Product_Failure,
    Get_Product_Request,
    Get_Product_Success,

} from "./actionTypes";

const initialState = {
    data: [],
    isLoading:false,
    isError:false,
}


const reducer = (state = initialState, action) => {

    const { type, payload } = action;
    switch (type) {
        case Get_Product_Request: {
            return {
                ...state,
                isLoading: true
            }
        }

        case Get_Product_Success: {
            return {
                ...state,
                data: payload,
                isLoading: false
            }
        }

        case Get_Product_Failure: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }

        default: return state;
    }

}

export { reducer }