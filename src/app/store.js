import { createStore, combineReducers } from "redux";

import { cartReducer } from "../features/cart/cartSlice";
import { inventoryReducer } from "../features/inventory/inventorySlice";
import { currencyFilterReducer } from "./../features/currencyFilter/currencyFilterSlice";

const reducers = {
  inventory: inventoryReducer,
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
};

const rootReducer = combineReducers(reducers);
export const store = createStore(rootReducer);
