"use strict";
import {default as isoFetch} from 'isomorphic-fetch';
const CHECK_PRODUCT='CHECK_PRODUCT';
const CHANGECOUNT_PRODUCT='CHANGECOUNT_PRODUCT';
const DATA_REQUEST='DATA_REQUEST';
const VIEW_MODAL_WINDOW='VIEW_MODAL_WINDOW';

const check_Product = function(id, url) {
  return {
    type: CHECK_PRODUCT,
    id:id,
    url: url,
  };
};

const changeCount_Product = function(id, addcount, url) {
  return {
    type: CHANGECOUNT_PRODUCT,
    id:id,
    addcount: addcount,
    url: url,
  };
};

const data_Request = (loadedData) => {
    return {
                type: DATA_REQUEST,
                data: loadedData,
            }
};

const view_modal_window = (id, url) => {
  return {
              type: VIEW_MODAL_WINDOW,
              id: id,
              url: url,
          }
};

export {
  check_Product,CHECK_PRODUCT,
  changeCount_Product,CHANGECOUNT_PRODUCT,
  data_Request, DATA_REQUEST,
  view_modal_window, VIEW_MODAL_WINDOW,
}
