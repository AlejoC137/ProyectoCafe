import {
    POST_A_PROJECT,
    GET_ALL_PROJECTS
 
  } from "./actions-types";

  import axios from "axios";
  // import Swal from "swal"
  import Swal from "sweetalert2";

const {postProjectRoute         } = require('../../../API/src/routes/postProjectRoutes.js')
const {getProjectCategoryRoute  } = require('../../../API/src/routes/getProjectRoutes.js')
const {getProjectSearchRoute    } = require('../../../API/src/routes/getProjectRoutes.js')

  export function getAllProjects(category) {
  
    return async function (dispatch) {
      try {
        // console.log(payload);
        const projects = await axios.get(`${getProjectCategoryRoute}?category=${category}`)
      
            return dispatch({
              type: GET_ALL_PROJECTS,
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
        // console.log(payload);
        axios
          .post(`${postProjectRoute}` , {project})
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