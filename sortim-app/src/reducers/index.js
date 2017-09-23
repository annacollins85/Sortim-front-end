import { combineReducers } from 'redux'

const authDefaultState = {
  authObj: null
};

const authReducer = (state = authDefaultState, action) => {
  switch (action.type) {
    case 'ADD_AUTH':
      return {
        ...state,
        authObj: action.authObj
      }
    case 'LOG_OUT':
      return authDefaultState
    default:
      return state;
  }
};

const objectifyArray = (array, idKey = 'id') => {
  return array.reduce((accum, item) => {
    accum[item[idKey]] = item

    return accum;
  }, {})
};

const entitiesDefaultState = {
  events: {},
  otherUsers: []
};

const entitiesReducer = (state = entitiesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EVENTS':
      return {
        ...state,
        events: objectifyArray(action.events)
      }
    case 'LOG_OUT':
      return entitiesDefaultState
    case 'ADD_OTHER_USERS':
      return {
        ...state,
        otherUsers: action.eventId
      }
    default:
      return state;
  }
};


// const pagesDefaultState = {
//   selectedEvent: null,
//   selectedUser: null,
// };
//
// const pagesReducer = (state = pagesDefaultState, action) => {
//   switch (action.type) {
//     case 'SELECT_EVENT':
//       return {
//         ...state,
//         selectedEvent: action.id
//       }
//     case 'SELECT_EVENT':
//       return {
//         ...state,
//         selectedEvent: action.id
//       }
//     default:
//       return state;
//   }
// }

const reducer = combineReducers({
  auth: authReducer,
  entities: entitiesReducer,
  // pages: pagesReducer,
});

export default reducer;
