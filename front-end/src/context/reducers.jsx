export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const MANUAL_INPUT = 'MANUAL_INPUT';

// https://codesandbox.io/s/nnwl26w86l?file=/src/context/reducers.js:627-667

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex((item) => item.id === product.id);

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.quantity += 1;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex((item) => item.id === productId);
  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity -= 1;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

const manualInput = (inputProduct, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex((item) => item.id === inputProduct.id);

  if (updatedItemIndex < 0) {
    updatedCart.push(inputProduct);
  } else {
    updatedCart[updatedItemIndex] = inputProduct;
  }

  if (inputProduct.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  }

  return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
  case ADD_PRODUCT:
    return addProductToCart(action.product, state);
  case REMOVE_PRODUCT:
    return removeProductFromCart(action.productId, state);
  case MANUAL_INPUT:
    return manualInput(action.inputProduct, state);
  default:
    return state;
  }
};
