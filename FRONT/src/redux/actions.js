import {
  POST_A_PROJECT,
  GET_ALL_PROJECTS,
  GET_ALL_ITEMS,
  GET_SRC_ITEMS,
  SET_LENGUAJE,
  GET_VITRINA,
  GET_MENU,
  GET_MENU_BY_CATEGORY,
  SET_CATEGORY,
  USER_ADMIN,
  GET_PROYECTISTAS,
  GET_DAYS,
  SET_RECETA,
} from "./actions-types";
import React from "react";
import { useSelector } from "react-redux";

import axios from "axios";
// import Swal from "swal"
import Swal from "sweetalert2";
import { getMenuHard } from "../assets/MENU";



export function getAllItems() {

  return async function (dispatch) {
  
      try {
        // /project?collection=soci
          const items = await axios.get(`/items`);
          // console.log(items.data);
          return dispatch({
            type: GET_ALL_ITEMS,
            payload:items.data,
          });          
      } catch (error) {
          console.log(error.message);
      }
  };
  
};
export function setReceta(receta) {

  return async function (dispatch, getState) {
    try {
      // Enviar los ítems filtrados y ordenados como payload en la acción
      return dispatch({
        type: SET_RECETA,
        payload: receta,
      });

    } catch (error) {
      console.log(error.message);
    }
  };
}
export function getSrcItems(search, source) {

  return async function (dispatch, getState) {
    try {
      // Obtener el estado actual desde el reducer (el estado tiene "items: []" en initialState)
       const { items } = getState() 

       const itemsToUse = source ? source : items;

      // Si el término de búsqueda está vacío, retornar todos los ítems sin filtrar
      if (search.trim() === '') {
        return dispatch({
          type: GET_SRC_ITEMS,
          payload: itemsToUse, // Retornar todos los ítems sin filtrar
        });
      }

      // Filtrar los ítems por la palabra clave ignorando mayúsculas y minúsculas
      const filteredItems = itemsToUse.filter(
        source?
        item => item["NombreES"].toLowerCase().includes(search.toLowerCase()):
        item => item["Nombre del producto"].toLowerCase().includes(search.toLowerCase())
      );

      // Ordenar alfabéticamente los ítems filtrados por nombre (u otro campo si lo deseas)
      const sortedItems = filteredItems.sort(
        source?
        (a, b) =>  a["NombreES"].localeCompare(b["NombreES"]):
        (a, b) =>  a["Nombre del producto"].localeCompare(b["Nombre del producto"])
      );

      // Enviar los ítems filtrados y ordenados como payload en la acción
      return dispatch({
        type: GET_SRC_ITEMS,
        payload: sortedItems,
      });

    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getAllProjects(category) {


  return async function (dispatch) {
    
      try {
        // /project?collection=soci
          const projects = await axios.get(`/project?collection=${category}`);
          // console.log(projects.data);
          return dispatch({
              type: GET_MENU,
              payload: projects.data,
          });          
      } catch (error) {
          console.log(error.message);
      }
    };
  };
export async function  getAllProyectistas() {


  // return async function (dispatch) {
    
      try {
        // /project?collection=soci
          const projectistas = await axios.get(`/getproyectistas`);
          // console.log(projects.data);
          // return dispatch({
            // type: GET_PROYECTISTAS,
            // payload: projectistas.data,
            // });          
            return projectistas.data
            } catch (error) {
              console.log(error.message);
              // }
              };
              // console.log(projectistas.data); 
  };


  export const agregarPropina = (id, timestamp, valor) => async (dispatch) => {
    try {
      // Realiza la solicitud POST con Axios
      await axios.post(`/postinfoproyectista`, {
        id,
        timestamp,
        valor
      });
  
// console.log(id,timestamp,valor);
    } catch (error) {
      console.error('Error al agregar propina:', error);
      // Manejar cualquier error que ocurra durante la solicitud
    }
  };


// export function getAllProducts() {


//   return async function (dispatch) {
    
//       try {
//         // /project?collection=soci
//           const menu = getMenuHard();
//           // console.log(menu[0]);
//           return dispatch({
//               type: GET_MENU,
//               payload: menu
//           });          
//       } catch (error) {
//           console.log(error.message);
//       }
//   };
//   };





export function getAllProducts() {


  return async function (dispatch) {
    
      try {
        // /project?collection=soci
          const menu = await axios.get(`/getmenu`);
        //   console.log(menu.data);
          return dispatch({
              type: GET_MENU,
              payload: menu.data,
          });          
      } catch (error) {
          console.log(error.message);
      }
  };
  };
  
  export const getDays = () => async (dispatch) => {
      try {
          const response = await axios.get('/getdays');
          dispatch({
              type: GET_DAYS,
              payload: response.data // Assuming the response data contains the days
          });
      } catch (error) {
          console.log(error.message);
          // Optionally, dispatch an error action if needed
      }
  };



  
export function productsByCat(cat , prevMenu) {


  return async function (dispatch) {
    
    let menuFu = []
   


if (cat==='TODO' ) {
  menuFu = prevMenu
} else {

 
  for (let i = 0; i < prevMenu.length; i++) {
    if(cat === prevMenu[i].TipoES || cat === prevMenu[i].TipoEN ){
      menuFu.push(prevMenu[i])
    }
  }



}


      try {
        // /project?collection=soci
        //   console.log(menu.data);
          return dispatch({
              type: GET_MENU_BY_CATEGORY,
              payload: menuFu,
          });          
      } catch (error) {
          console.log(error.message);

    }
  };
  };
export function postProject() {

  return function (dispatch) {
      try {
          axios
              .post("/postProject" , {project})
              .then((data) => {
                  Swal.fire("Comentario creado exitosamente");
                  return dispatch({
                      type: POST_A_PROJECT,
                      payload: data,
                  });
              })
              .catch((error) => {
                  Swal.fire(error.response.data.error);
              });
      } catch (error) {
          console.log(error.message);
      }
  };
  };


  export const postDay = (dayData) => async (dispatch) => {
    try {
        // Perform asynchronous operation (e.g., HTTP request)
        await axios.post('/project', dayData);

        // Dispatch a synchronous action to update the state
        // dispatch({
        //     type: POST_DAY,
        //     payload: dayData // Optionally, you can pass any data you want to update in the state
        // });
    } catch (error) {
        console.log(error.message);
        // Optionally, dispatch an error action if needed
    }
};



export function setLenguaje(lenguaje) {

    return function (dispatch) {
        try {
  
                    return dispatch({
                        type: SET_LENGUAJE,
                        payload: lenguaje,
               
                })
                .catch((error) => {
  console.log(error);             
   });
        } catch (error) {
            console.log(error.message);
        }
    };
  };
export function setCat(cat) {

    return function (dispatch) {
        try {
  
                    return dispatch({
                        type: SET_CATEGORY ,
                        payload: cat,
               
                })
                .catch((error) => {
  console.log(error);             
   });
        } catch (error) {
            console.log(error.message);
        }
    };
  };
  
export function setAdmin(admin) {

  return async function (dispatch) {
    
      try {
          // console.log(admin);
          return dispatch({
              type: USER_ADMIN,
              payload: 
              admin === 'edit'?
              true:
              false       
          }
        );          
      } catch (error) {
          console.log(error.message);
      }
  };

  };


export function getVitrina() {


    return async function (dispatch) {
      
        try {
          // /project?collection=soci
            const vitrina = await axios.get(`/getvitrina`);
          //   console.log(projects.data);
            return dispatch({
                type: GET_VITRINA,
                payload: vitrina.data,
            });          
        } catch (error) {
            console.log(error.message);
        }
    };
  };


  export async function updateItem(updateData) {
    try {
      await axios.put('/updateitem', updateData);
      // After a successful update, dispatch an action to update the state in the store
      return (dispatch) => {
        dispatch(getAllItems());  // Assuming getAllItems fetches the updated list
      };
    } catch (error) {
      console.log(error.message);
    }
  }
  
    export async function delitem(body) {
      try {
        const response = await axios.delete(`/delitem?id=${body.id}&category=${body.category}`);
        console.log(response.data);
      } catch (error) {
        console.error(error.message);
      }
    }

  export const changeItemStatus = (itemId) => {
    return async (dispatch) => {  
      try {

        // const update = await axios.get(`/project?collection=${category}`);

        // console.log(itemId);
      } catch (error) {
        console.error('Error al cambiar el estado del elemento:', error);
      }
    };
  };