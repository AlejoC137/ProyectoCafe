import {
    POST_A_PROJECT,
    GET_ALL_PROJECTS,
    GET_ALL_ITEMS,
    SET_LENGUAJE,
    GET_VITRINA,
    GET_MENU,
    GET_MENU_BY_CATEGORY,
    SET_CATEGORY,
    USER_ADMIN,
    GET_NOTAS,
    GET_STAFF,
    GET_DAYS
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
    items: [],  // Aquí se almacenarán todos los items
    days: [],  // Almacenar los días de trabajo
    staff: [], 
    staffNotas: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      // Acción para almacenar todos los proyectos
      case GET_ALL_PROJECTS:
        return {
          ...state,
          allProjects: action.payload,
        };
  
      // Acción para almacenar los items obtenidos
      case GET_ALL_ITEMS:
        return {
          ...state,
          items: action.payload,
        };
  
      // Acción para manejar la vitrina
      case GET_VITRINA:
        return {
          ...state,
          vitrina: action.payload.img,
        };
  
      // Acción para manejar la administración
      case USER_ADMIN:
        return {
          ...state,
          isAdmin: action.payload,
        };
  
      // Acción para obtener el menú completo
      case GET_MENU:
        return {
          ...state,
          menu: action.payload,
          menuByCat: action.payload,  // Almacena también en `menuByCat` inicialmente
        };
  
      // Acción para almacenar el filtro por categoría del menú
      case GET_MENU_BY_CATEGORY:
        return {
          ...state,
          menuByCat: state.menuCat === 'TODO' ? state.menu : action.payload,  // Aplica el filtro según categoría
        };
  
      // Acción para cambiar la categoría del menú
      case SET_CATEGORY:
        return {
          ...state,
          menuCat: action.payload,
        };
  
      // Acción para almacenar la información del personal
      case GET_STAFF:
        return {
          ...state,
          staff: action.payload,
        };
  
      // Acción para almacenar el proyecto que se acaba de publicar
      case POST_A_PROJECT:
        return {
          ...state,
          postedProject: action.payload,
        };
  
      // Acción para cambiar el lenguaje de la aplicación
      case SET_LENGUAJE:
        return {
          ...state,
          currentLenguaje: action.payload,
        };
  
      // Acción para almacenar los días de trabajo
      case GET_DAYS:
        return {
          ...state,
          days: action.payload,
        };
  
      // Acción para almacenar las notas del staff
      case GET_NOTAS:
        return {
          ...state,
          staffNotas: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  