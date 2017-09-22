import { combineReducers } from 'redux'

const authDefaultState = {
  authObj: null
}

const authReducer = (state = authDefaultState, action) => {
  switch (action.type) {
    case 'ADD_AUTH':
      return {
        ...state,
        authObj: action.authObj
      }
    case 'LOG_OUT':
      return {
        ...state,
        authObj: null
      }
    default:
      return state;
  }
}

const reducer = combineReducers({
  auth: authReducer,
})

export default reducer;
