import {
  POST_A_PROJECT,
  GET_ALL_PROJECTS,
  SET_LENGUAJE,
  GET_VITRINA,
  GET_MENU,
  GET_MENU_BY_CATEGORY,     
  GET_ALL_ITEMS,     
  SET_CATEGORY,
  USER_ADMIN,
  GET_STAFF,
  GET_DAYS  // Importa la acción GET_DAYS
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
  items:{},
  days: [], // Agrega un array para almacenar los días
  staff: [] 
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'START_SHIFT':
        // Lógica para iniciar turno
        return {
          ...state,
          staff: state.staff.map(staff =>
            staff._id === action.payload
              ? { ...staff, Turno_Activo: true } // O la lógica que prefieras
              : staff
          ),
        };
      case 'END_SHIFT':
        // Lógica para finalizar turno
        return {
          ...state,
          staff: state.staff.map(staff =>
            staff._id === action.payload
              ? { ...staff, Turno_Activo: false } // O la lógica que prefieras
              : staff
          ),
        };




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
                        // console.log(action.payload);
            };
      case GET_MENU:
          return {
              ...state,
              menu: action.payload,
              menuByCat: action.payload,
          };

      case SET_CATEGORY:
          return {
              ...state,
              menuCat: action.payload,
          };
      case GET_STAFF:
          return {
              ...state,
              staff: action.payload,
          };

      case GET_MENU_BY_CATEGORY:
          return {
              ...state,
              menuByCat: state.menuCat === 'TODOS' ? state.menu : action.payload,
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

      default:
          return state;
  }
};

export default reducer;
