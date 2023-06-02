import {
    createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
import thunk from "redux-thunk";

const usersReducer = (state = {}, action) => {
    switch (action.type) {
      case "GET_USERS_REQUEST":
        return {
          ...state,
          loading: true,
        };
  
      case "GET_USERS_SUCCESS":
        return {
          ...state,
          users: action.payload,
          loading: false,
        };
  
      case "GET_USERS_FAILURE":
        return {
          ...state,
          error: "Some error occurred",
          loading: false,
        };
  
      default:
        return state;
    }
  };
  
//Global state of the Application
  const reducer = combineReducers({
    users: usersReducer
  });
  
  let inititalState = {};
  
  //thunk used to dispatch the actions (API calling) asynchronously 
  const middleWare = [thunk];
  

  //Creation of store where all the actions data is stored and accessed through any component all over the app
  const store = createStore(
    reducer,
    inititalState,
    applyMiddleware(...middleWare)
  );
  
  export default store;
  