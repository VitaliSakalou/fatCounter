import { combineReducers } from 'redux';


import ProductsReducer from "../components/ListOfFood/ListOfFoodReducer";

let combinedReducer=combineReducers({
    // редьюсер ProductsReducer отвечает за раздел state под именем Product
     Product: ProductsReducer, 
    // + другие редьюсеры
});

export default combinedReducer;
