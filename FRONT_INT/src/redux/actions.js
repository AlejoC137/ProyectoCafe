// import {
//   POST_A_PROJECT,
//   GET_ALL_PROJECTS,
//   GET_ALL_ITEMS,
//   SET_LENGUAJE,
//   GET_VITRINA,
//   GET_MENU,
//   GET_MENU_BY_CATEGORY,
//   SET_CATEGORY,
//   USER_ADMIN,
//   GET_STAFF,
//   GET_DAYS,
//   SWITCH_SHIFT,
// } from "./actions-types";
// import React from "react";
// import { useSelector } from "react-redux";

// import axios from "axios";
// // import Swal from "swal"
// // import Swal from "sweetalert2";
// // import { getMenuHard } from "../assets/MENU";





// export function getAllItems() {
//   return async function (dispatch) {
  
//       try {
//         // /project?collection=soci
//           const items = await axios.get(`/items`);
//           // console.log(projects.data);
//           return dispatch({
//             type: GET_ALL_ITEMS,
//             payload:items.data,
//           });          
//       } catch (error) {
//           console.log(error.message);
//       }
//   };
//   };
// ///


// export function getAllProjects(category) {


//   return async function (dispatch) {
    
//       try {
//         // /project?collection=soci
//           const projects = await axios.get(`/project?collection=${category}`);
//           // console.log(projects.data);
//           return dispatch({
//               type: GET_MENU,
//               payload: projects.data,
//           });          
//       } catch (error) {
//           console.log(error.message);
//       }
//   };
//   };
//   export function getAllStaff(){
                  
//     // console.log( "staff" );

//     return async function (dispatch) {
//       try {
//         const staff = await axios.get('/getAllStaff');

//         // console.log( staff.data);
//         dispatch({
//           type: GET_STAFF,
//           payload: staff.data,
//         });
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//   };


//   export const agregarPropina = (id, timestamp, valor) => async (dispatch) => {
//     try {
//       // Realiza la solicitud POST con Axios
//       await axios.post(`/postinfoproyectista`, {
//         id,
//         timestamp,
//         valor
//       });
  
// // console.log(id,timestamp,valor);
//     } catch (error) {
//       console.error('Error al agregar propina:', error);
//       // Manejar cualquier error que ocurra durante la solicitud
//     }
//   };


// // export function getAllProducts() {


// //   return async function (dispatch) {
    
// //       try {
// //         // /project?collection=soci
// //           const menu = getMenuHard();
// //           // console.log(menu[0]);
// //           return dispatch({
// //               type: GET_MENU,
// //               payload: menu
// //           });          
// //       } catch (error) {
// //           console.log(error.message);
// //       }
// //   };
// //   };





// export function getAllProducts() {


//   return async function (dispatch) {
    
//       try {
//         // /project?collection=soci
//           const menu = await axios.get(`/getmenu`);
//         //   console.log(menu.data);
//           return dispatch({
//               type: GET_MENU,
//               payload: menu.data,
//           });          
//       } catch (error) {
//           console.log(error.message);
//       }
//   };
//   };
  
//   export const getDays = () => async (dispatch) => {
//       try {
//           const response = await axios.get('/getdays');
//           dispatch({
//               type: GET_DAYS,
//               payload: response.data // Assuming the response data contains the days
//           });
//       } catch (error) {
//           console.log(error.message);
//           // Optionally, dispatch an error action if needed
//       }
//   };



  
// export function productsByCat(cat , prevMenu) {


//   return async function (dispatch) {
    
//     let menuFu = []
   


// if (cat==='TODO' ) {
//   menuFu = prevMenu
// } else {

 
//   for (let i = 0; i < prevMenu.length; i++) {
//     if(cat === prevMenu[i].TipoES || cat === prevMenu[i].TipoEN ){
//       menuFu.push(prevMenu[i])
//     }
//   }



// }


//       try {
//         // /project?collection=soci
//         //   console.log(menu.data);
//           return dispatch({
//               type: GET_MENU_BY_CATEGORY,
//               payload: menuFu,
//           });          
//       } catch (error) {
//           console.log(error.message);

//     }
//   };
//   };
// export function postProject() {

//   return function (dispatch) {
//       try {
//           axios
//               .post("/postProject" , {project})
//               .then((data) => {
//                   Swal.fire("Comentario creado exitosamente");
//                   return dispatch({
//                       type: POST_A_PROJECT,
//                       payload: data,
//                   });
//               })
//               .catch((error) => {
//                   Swal.fire(error.response.data.error);
//               });
//       } catch (error) {
//           console.log(error.message);
//       }
//   };
//   };


//   export const postDay = (dayData) => async (dispatch) => {
//     try {
//         // Perform asynchronous operation (e.g., HTTP request)
//         await axios.post('/project', dayData);

//         // Dispatch a synchronous action to update the state
//         // dispatch({
//         //     type: POST_DAY,
//         //     payload: dayData // Optionally, you can pass any data you want to update in the state
//         // });
//     } catch (error) {
//         console.log(error.message);
//         // Optionally, dispatch an error action if needed
//     }
// };



// export function setLenguaje(lenguaje) {

//     return function (dispatch) {
//         try {
  
//                     return dispatch({
//                         type: SET_LENGUAJE,
//                         payload: lenguaje,
               
//                 })
//                 .catch((error) => {
//   console.log(error);             
//    });
//         } catch (error) {
//             console.log(error.message);
//         }
//     };
//   };
// export function setCat(cat) {

//     return function (dispatch) {
//         try {
  
//                     return dispatch({
//                         type: SET_CATEGORY ,
//                         payload: cat,
               
//                 })
//                 .catch((error) => {
//   console.log(error);             
//    });
//         } catch (error) {
//             console.log(error.message);
//         }
//     };
//   };
  
// export function setAdmin(admin) {

//   return async function (dispatch) {
    
//       try {
//           // console.log(admin);
//           return dispatch({
//               type: USER_ADMIN,
//               payload: 
//               admin === 'edit'?
//               true:
//               false       
//           }
//         );          
//       } catch (error) {
//           console.log(error.message);
//       }
//   };

//   };


// export function getVitrina() {


//     return async function (dispatch) {
      
//         try {
//           // /project?collection=soci
//             const vitrina = await axios.get(`/getvitrina`);
//           //   console.log(projects.data);
//             return dispatch({
//                 type: GET_VITRINA,
//                 payload: vitrina.data,
//             });          
//         } catch (error) {
//             console.log(error.message);
//         }
//     };
//   };


//   export  async function updateItem(updateData) {
//     //  return  function (dispatch){
//        try {
//         // console.log(updateData);
//           await axios.put('/updateitem', updateData).then(response => {
//             // console.log(response);
//           })
//           .catch(error => {
//             if (error.response) {
//               console.log(error.response.data);
//               console.log(error.response.status);
//               console.log(error.response.headers);
//             } else if (error.request) {
//               console.log(error.request);
//             } else {
//               console.log('Error', error.message);
//             }
//             console.log(error.config);
//           });
//         // Dispatch an action if needed
//         // return {
//           // type: PUT_PROJECT,
//           // payload: response.data, // You may or may not need to dispatch the updated project data
//         // };

//         // console.log(response);
//       } catch (error) {
//         // Swal.fire(error.response.data.error);
//         // Optionally, you can throw the error to handle it in the component
//         console.log(error.message)

//       }
      
//     }
//     export async function delitem(body) {
//       try {
//         const response = await axios.delete(`/delitem?id=${body.id}&category=${body.category}`);
//         console.log(response.data);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }

//   export const changeItemStatus = (itemId) => {
//     return async (dispatch) => {
//       try {

//         // const update = await axios.get(`/project?collection=${category}`);

//         // console.log(itemId);
//       } catch (error) {
//         console.error('Error al cambiar el estado del elemento:', error);
//       }
//     };
//   };


import {
  POST_A_PROJECT,
  GET_ALL_PROJECTS,
  GET_ALL_ITEMS,
  SET_LENGUAJE,
  GET_VITRINA,
  GET_MENU_BY_CATEGORY,
  GET_SRC_ITEMS,
  SET_CATEGORY,
  USER_ADMIN,
  GET_STAFF,
  GET_DAYS,
  SWITCH_SHIFT,
  GET_NOTAS
} from "./actions-types";
import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

// import Swal from "swal"
// import Swal from "sweetalert2";
// import { getMenuHard } from "../assets/MENU";

// // staff


// Filtra el menú para obtener los items con estado URGENTE o ACABADO en el área de CAFÉ
export function informeCafe() {
  return async function (dispatch, getState) {
    const items = await axios.get(`/items`);
    const filteredItems = items.data.filter(item =>
      (item.Estado === '25%' || item.Estado === '0%') && item.Area === 'CAFE_BEBIDAS'
    );
    
    // dispatch({
    //   type: "GET_MENU_BY_CATEGORY",
    //   payload: filteredItems
    // });
// console.log(filteredItems);

    return filteredItems; // Devuelve los items filtrados
  };
}

// Filtra el menú para obtener los items con estado URGENTE o ACABADO en el área de COCINA
export function informeCocina() {
  return async function (dispatch, getState) {
    const items = await axios.get(`/items`);
    const filteredItems = items.data.filter(item =>
      (item.Estado === '25%' || item.Estado === '0%') && item.Area === 'COCINA'
    );

    // dispatch({
    //   type: "GET_MENU_BY_CATEGORY",
    //   payload: filteredItems
    // });
    // console.log(filteredItems);
    return filteredItems; // Devuelve los items filtrados
  };
}


// Acción para redirigir a la URL específica de la lista de Café
export function listaCafe() {
  return function () {
    window.location.href = "https://proyecto-cafe-sigma.vercel.app/itemsCafe";
  };
}

// Acción para redirigir a la URL específica de la lista de Cocina
export function listaCocina() {
  return function () {
    window.location.href = "https://proyecto-cafe-sigma.vercel.app/itemsCocina";
  };
}
export  function getAllNotas(dispatch) {

  
  
  
  return async function (dispatch) {
    try {
      const response = await axios.get("/getAllNotas");
      console.log(response.data);
    dispatch({
      type: GET_NOTAS,
      payload: response.data,
    });
    } catch (error) {
      console.log(error.message);
    }
  };




}
export async function postNota(data) {

  // console.log(data);

  try {

    const response = await axios.post("/postNotes", data);
  console.log(response.data);

  } catch (error) {

    console.log(error.message)

  }

}

export function getSrcItems(search) {
  return async function (dispatch, getState) {
    try {
      const { items } = getState(); 

      if (search.trim() === '') {
        return dispatch({
          type: GET_SRC_ITEMS,
          payload: items,
        });
      }

      const filteredItems = items.filter(item => 
        item["Nombre del producto"].toLowerCase().includes(search.toLowerCase())
      );

      const sortedItems = filteredItems.sort((a, b) => 
        a["Nombre del producto"].localeCompare(b["Nombre del producto"])
      );

      return dispatch({
        type: GET_SRC_ITEMS,
        payload: sortedItems,
      });

    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getAllStaff() {
  return async function (dispatch) {
    try {
      const staff = await axios.get('/getAllStaff');
      dispatch({
        type: GET_STAFF,
        payload: staff.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const agregarPropina = (id, timestamp, valor) => async (dispatch) => {
  try {
    await axios.post(`/postinfoproyectista`, { id, timestamp, valor });
  } catch (error) {
    console.error('Error al agregar propina:', error);
  }
};

export const getDays = () => async (dispatch) => {
  try {
    const response = await axios.get('/getdays');
    dispatch({
      type: GET_DAYS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// // items
export function getAllItems() {
  return async function (dispatch) {
    try {
      const items = await axios.get(`/items`);
      return dispatch({
        type: GET_ALL_ITEMS,
        payload: items.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getAllProducts() {
  return async function (dispatch) {
    try {
      const menu = await axios.get(`/getmenu`);
      return dispatch({
        type: GET_MENU,
        payload: menu.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function productsByCat(cat, prevMenu) {
  return async function (dispatch) {
    let menuFu = [];
    if (cat === 'TODO') {
      menuFu = prevMenu;
    } else {
      for (let i = 0; i < prevMenu.length; i++) {
        if (cat === prevMenu[i].TipoES || cat === prevMenu[i].TipoEN) {
          menuFu.push(prevMenu[i]);
        }
      }
    }
    try {
      return dispatch({
        type: GET_MENU_BY_CATEGORY,
        payload: menuFu,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export async function updateStaff(data){
console.log(data);


  try {
    const response = await axios.put("/updateStaff", data);
    // console.log(response);
  } catch (error) {
    console.log(error.message)
  }
}

export async function updateItem(updateData) {
  try {
    await axios.put('/updateitem', updateData).then(response => {});
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
export async function delnota(body) {
  try {
    const response = await axios.delete(`/delnotas?id=${body.id}&category=${body.category}&type=${body.type}`);
    console.log(response.data);
  } catch (error) {
    console.error(error.message);
  }
}

export const changeItemStatus = (itemId) => {
  return async (dispatch) => {
    try {
      // Implementation here
    } catch (error) {
      console.error('Error al cambiar el estado del elemento:', error);
    }
  };
};

// // project
export function getAllProjects(category) {
  return async function (dispatch) {
    try {
      const projects = await axios.get(`/project?collection=${category}`);
      return dispatch({
        type: GET_MENU,
        payload: projects.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function postProject() {
  return function (dispatch) {
    try {
      axios
        .post("/postProject", { project })
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
}

export const postDay = (dayData) => async (dispatch) => {
  try {
    await axios.post('/project', dayData);
  } catch (error) {
    console.log(error.message);
  }
};

// // otras
export function setLenguaje(lenguaje) {
  return function (dispatch) {
    try {
      return dispatch({
        type: SET_LENGUAJE,
        payload: lenguaje,
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function setCat(cat) {
  return function (dispatch) {
    try {
      return dispatch({
        type: SET_CATEGORY,
        payload: cat,
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function setAdmin(admin) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: USER_ADMIN,
        payload: admin === 'edit' ? true : false,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getVitrina() {
  return async function (dispatch) {
    try {
      const vitrina = await axios.get(`/getvitrina`);
      return dispatch({
        type: GET_VITRINA,
        payload: vitrina.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

