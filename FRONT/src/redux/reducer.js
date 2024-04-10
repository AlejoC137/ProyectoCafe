import {
    
    POST_A_PROJECT,
    GET_ALL_PROJECTS,
    SET_LENGUAJE,
    GET_VITRINA
    
  } from "./actions-types";
  
  const initialState = {
    allProjects: [],
    postedProject: [],
    currentLenguaje: 'ES',
    vitrina: {},

    
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VITRINA:
          // console.log(action.payload.img.URL);
        return {
            ...state,
            vitrina: action.payload.img,
                    // console.log(action.payload);
        };
        case GET_ALL_PROJECTS:
        return {
            ...state,
            allProjects: action.payload,
                    // console.log(action.payload);
        };
  
        case POST_A_PROJECT:
            return {
              ...state,
              postedProject: action.payload,
            };

        case SET_LENGUAJE:
            return {
              ...state,
              currentLenguaje: action.payload,
            };


      default:
        return state;
    }
  };
  
  export default reducer;
  