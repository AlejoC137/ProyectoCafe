import {
    
    POST_A_PROJECT,
    GET_ALL_PROJECTS
    
  } from "./actions-types";
  
  const initialState = {
    allProjects: [],
    postedProject: []
    
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PROJECTS:
        // return {
            // ...state,
            // allProjects: action.payload,
            console.log(action.payload);
        // };
  
        case POST_A_PROJECT:
            return {
              ...state,
              postedProject: action.payload,
            };


      default:
        return state;
    }
  };
  
  export default reducer;
  