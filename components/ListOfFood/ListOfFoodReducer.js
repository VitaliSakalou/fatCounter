"use strict";

import {
  CHECK_PRODUCT,
  CHANGECOUNT_PRODUCT,
  DATA_REQUEST,
  VIEW_MODAL_WINDOW
} from "./ListOfFoodAction";
let initState = { data: false };
console.log(initState);

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function ProductsReducer(state = initState, action) {
  switch (action.type) {
    case CHECK_PRODUCT: {
      //  console.log('action:',action);
      //  console.log('state до обработки редьюсером:',state);
      let arr = null;
      switch (action.url) {
        case "mcdonalds":
          arr = state.mcdonalds;
          break;
        case "burgerking":
          arr = state.burgerking;
          break;
        default:
          alert("неизвестная страница");
      }
      let newState = {
        ...state,
        [action.url]: [
          ...arr.map(V => {
            let checked = V.checked;
            let count = V.count;
            if (V.code == action.id) {
              checked = !checked;
              if (checked) {
                count = 1;
              } else {
                count = 0;
              }
            }
            return {
              name: V.name,
              calories: V.calories,
              proteins: V.proteins,
              fats: V.fats,
              carbohydrates: V.carbohydrates,
              code: V.code,
              checked,
              count,
              img: V.img,
              modal: V.modal,
              description: V.description
            };
          })
        ]
      };
      //  console.log('state после обработки редьюсером:',newState);
      return newState;
    }

    case CHANGECOUNT_PRODUCT: {
      //  console.log('action:',action);
      //  console.log('state до обработки редьюсером:',state);
      let arr = null;
      switch (action.url) {
        case "mcdonalds":
          arr = state.mcdonalds;
          break;
        case "burgerking":
          arr = state.burgerking;
          break;
        default:
          alert("неизвестная страница");
      }
      let newState = {
        ...state,
        [action.url]: [
          ...arr.map(V => {
            let count = V.count;
            let checked = V.checked;
            if (V.code == action.id) {
              count = count + action.addcount;
              if (count == 0) {
                checked = false;
              }
            }
            return {
              name: V.name,
              calories: V.calories,
              proteins: V.proteins,
              fats: V.fats,
              carbohydrates: V.carbohydrates,
              code: V.code,
              checked,
              count,
              img: V.img,
              modal: V.modal,
              description: V.description
            };
          })
        ]
      };
      //  console.log('state после обработки редьюсером:',newState);
      return newState;
    }

    case DATA_REQUEST: {
      console.log("action:", action);
      console.log("state до обработки редьюсером:", state);
      let newState = { ...action.data, data: true };
      console.log("state после обработки редьюсером:", newState);
      return newState;
    }

    case VIEW_MODAL_WINDOW: {
      console.log("action:", action);
      console.log("state до обработки редьюсером:", state);
      let arr = null;
      switch (action.url) {
        case "mcdonalds":
          arr = state.mcdonalds;
          break;
        case "burgerking":
          arr = state.burgerking;
          break;
        default:
          alert("неизвестная страница");
      }
      let newState = {
        ...state,
        [action.url]: [
          ...arr.map(V => {
            let modal = V.modal;
            if (V.code == action.id) {
              modal = !modal;
            }
            return {
              name: V.name,
              calories: V.calories,
              proteins: V.proteins,
              fats: V.fats,
              carbohydrates: V.carbohydrates,
              code: V.code,
              checked: V.checked,
              count: V.count,
              img: V.img,
              modal,
              description: V.description
            };
          })
        ]
      };
      console.log("state после обработки редьюсером:", newState);
      return newState;
    }

    default:
      //  console.log(state);
      return state;
  }
}

export default ProductsReducer;
