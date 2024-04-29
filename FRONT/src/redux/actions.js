import {
  POST_A_PROJECT,
  GET_ALL_PROJECTS,
  SET_LENGUAJE,
  GET_VITRINA,
  GET_MENU,
  GET_MENU_BY_CATEGORY,
  SET_CATEGORY,
  USER_ADMIN,
} from "./actions-types";
import React from "react";
import { useSelector } from "react-redux";

import axios from "axios";
// import Swal from "swal"
import Swal from "sweetalert2";




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
          console.log(admin);
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


  export const changeItemStatus = (itemId) => {
    return async (dispatch) => {
      try {

        // const update = await axios.get(`/project?collection=${category}`);

        console.log(itemId);
      } catch (error) {
        console.error('Error al cambiar el estado del elemento:', error);
      }
    };
  };