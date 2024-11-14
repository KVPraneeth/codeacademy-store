import React, { useEffect } from "react";

import { calculatePrice, getCurrencySymbol } from "./../../utilities/utilities";
import { addItem } from "./../cart/cartSlice";

import { loadData } from "./inventorySlice";

export const Inventory = ({ inventory, currencyFilter, dispatch }) => {
  const onMount = () => {
    dispatch(loadData());
  };
  useEffect(onMount, [dispatch]);

  const onClickhandler = (inventoryData) => {
    dispatch(addItem(inventoryData));
  };

  if (inventory.length === 0) {
    return <p>Sorry , no products are currently available...</p>;
  }

  return (
    <ul id="inventory-container">{inventory.map(createInventoryItem)} </ul>
  );

  function createInventoryItem(inventoryItem) {
    const { price, qunaity } = inventoryItem;
    const displayPrice = calculatePrice(price, qunaity);
    return (
      <li key={name} className="item">
        <img src={img} alt={""} />
        <h3>{name}</h3>
        <h3 className="price">
          {getCurrencySymbol(currencyFilter)}
          {displayPrice.toFixed(2)} {currencyFilter}
        </h3>
        <button
          onClick={() => onClickhandler(inventoryItem)}
          className="add-tocart-button"
        >
          Add To Cart
        </button>
      </li>
    );
  }
};
