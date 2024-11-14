import { inventoryData } from "../../data";

export const loadData = (data) => {
  return {
    type: "inventory/loadData",
    payload: inventoryData,
  };
};

const initailInventory = [];

export const inventoryReducer = (inventory = initailInventory, action) => {
  switch (action.type) {
    case "inventory/loadData": {
      return action.payload;
    }
    default: {
      return inventory;
    }
  }
};
