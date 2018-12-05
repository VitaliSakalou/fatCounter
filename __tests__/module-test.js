"use strict";

// import {power2} from '../modules/power2';
import {check_Product} from '../components/ListOfFood/listOfFoodAction';

test('проверка работы Actions', () => {

  expect(check_Product(200, "TEST")).toEqual({ 
    type: "CHECK_PRODUCT",
    id:200,
    url: "TEST",});

});
