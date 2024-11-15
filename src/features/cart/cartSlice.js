export const addItem = (itemToAdd) => {
  return {
    type: "cart/additem",
    payload: itemToAdd,
  };
};

export const changeItemQuantity = (name, newQuantity) => {
  return {
    type: "cart/changeItemQuantity",
    payload: { name, newQuantity },
  };
};

const initialState = {};

export const cartReducer = (cart = initialState, action) => {
  switch (action.type) {
    case "cart/addItem": {
      const { name, price } = action.payload;

      const quantity = cart[name] ? cart[name].quantity + 1 : 1;
      const newItem = { price, quantity };

      return {
        ...cart,
        [name]: newItem,
      };
    }
    case "cart/changeItemQuantity": {
      const { name, newQuantity } = action.payload;
      const itemToUpdate = cart[name];
      const updatedItem = { ...itemToUpdate, quantity: newQuantity };
      return { ...cart, [name]: updatedItem };
    }

    default: {
      return cart;
    }
  }
};
