import {
  POST_A_PROJECT,
  GET_ALL_PROJECTS,
  SET_LENGUAJE,
  GET_VITRINA,
  GET_MENU,
  GET_MENU_BY_CATEGORY,     
  GET_ALL_ITEMS,     
  GET_SRC_ITEMS,     
  SET_CATEGORY,
  GET_STAFF,
  USER_ADMIN,
  SET_RECETA,
  UPDATE_LOG_STAFF,
  GET_DAYS  // Importa la acción GET_DAYS
} from "./actions-types";

const initialState = {
  allProjects: [],
  postedProject: [],
  currentLenguaje: 'ES',
  vitrina: {},
  staff: [], 
  menu: [],
  menuByCat: [],
  menuCat: 'TODO',
  isAdmin: null,
  items:[],
  cat:'TODO',
  receta:{},
  itemsSearch:[],
  days: [] // Agrega un array para almacenar los días
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_VITRINA:
          return {
              ...state,
              vitrina: action.payload.img,
          };

      case USER_ADMIN:
          return {
              ...state,
              isAdmin: action.payload,
          };

      case GET_ALL_PROJECTS:
          return {
              ...state,
              allProjects: action.payload,
          };
          case GET_ALL_ITEMS:
            return {
                ...state,
                items: action.payload,
                itemsSearch: action.payload,
                        // console.log(action.payload);
            };


            case GET_STAFF:
                return {
                  ...state,
                  staff: action.payload,
                };


          case SET_RECETA:
            return {
                ...state,
                receta: action.payload,
                        // console.log(action.payload);
            };
          case GET_SRC_ITEMS:
            return {
                ...state,
                itemsSearch: action.payload,
                        // console.log(action.payload);
            };
      case GET_MENU:
          return {
              ...state,
              menu: action.payload,
              menuByCat: action.payload,
              itemsSearch: action.payload,
          };

      case SET_CATEGORY:
          return {
              ...state,
              cat: action.payload,
          };

      case GET_MENU_BY_CATEGORY:
          return {
              ...state,
              menuByCat: state.menuCat === 'TODOS' ? state.menu : action.payload,
              cat:  action.payload,
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

      case GET_DAYS: // Agrega el caso para la acción GET_DAYS
          return {
              ...state,
              days: action.payload, // Almacena los días en el estado
          };
         
          

          case UPDATE_LOG_STAFF:
            return {
                ...state,
                staff: state.staff.map((staffMember) => {
                    if (staffMember._id === action.payload.personaId) {
                        return {
                            ...staffMember,
                            Turno_Pasados: action.payload.updatedTurnoPasados,
                        };
                    }
                    return staffMember;
                }),
            };




          
      default:
          return state;
  }
};

export default reducer;
