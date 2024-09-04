
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
} from "./actions-types";
import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

export function getAllItems() {
  return async function (dispatch) {
    try {
      const items = await axios.get(`/items`);
      return dispatch({
        type: GET_ALL_ITEMS,
        payload:items.data,
      });          
    } catch (error) {
      console.log(error.message);
    }
  };
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
