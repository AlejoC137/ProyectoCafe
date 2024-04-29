import {
    
    POST_A_PROJECT,
    GET_ALL_PROJECTS,
    SET_LENGUAJE,
    GET_VITRINA,
    GET_MENU,
    GET_MENU_BY_CATEGORY,     
    SET_CATEGORY,
    USER_ADMIN    
  } from "./actions-types";
  
  const initialState = {
    allProjects: [],
    postedProject: [],
    currentLenguaje: 'ES',
    vitrina: {},
    menu: [],
    menuByCat: [],
    menuCat: 'TODO',
    isAdmin: null,

    
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
        case USER_ADMIN:
          // console.log(action.payload.img.URL);
        return {
            ...state,
            isAdmin: action.payload,
                    // console.log(action.payload);
        };

        case GET_ALL_PROJECTS:
        return {
            ...state,
            allProjects: action.payload,
                    // console.log(action.payload);
        };

        case GET_MENU:
        return {
            ...state,
            menu: action.payload,
            menuByCat: action.payload,
                    // console.log(action.payload);
        };

        case SET_CATEGORY:
          // console.log(action.payload);
          return {
            ...state,
            menuCat: action.payload,
        };

        case GET_MENU_BY_CATEGORY:
          // console.log(action.payload);

          
          return {
            ...state,
            menuByCat:state.menuCat==='TODOS'? menu:action.payload,
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
  