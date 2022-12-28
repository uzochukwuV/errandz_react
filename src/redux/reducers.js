
export const initialState = {
    token: null,
    error: null,
    loading: false,
};

export const updateObject = (oldObject, updatedProperties) => {
    return {
      ...oldObject,
      ...updatedProperties
    };
  };


export const authStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
};

export const authSuccess = (state, action) => {
    return updateObject(state,
        {
            token: action.token,
            error: null,
            loading: false
        });
};

//these are states to update
const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading:false
    });
};

const authLogout = (state, action )=>{
    return updateObject(state,{
        token: null
    });
};

export function Authreducers(state=initialState, action){
    
        switch (action.type) {
            case "AUTH_START":
                return authStart(state, action)
            case "AUTH_SUCCESS":
                return authSuccess(state, action);
            case "AUTH_FAIL":
                return authFail(state,action)
            case "AUTH_LOGOUT":
                return authLogout(state, action)
        
            default:
                return state
        }
    
}