import * as t from '../types/types';

const basketReducer = (state = [], action) => {
  switch (action.type) {
    case t.ADD_PRODUCT:
      const found = state.find(product => product.id === action.payload.id);
      if (found) {
        return state;
      }
      return [...state, action.payload];
    case t.INCREMENT_PRODUCT:
      const newState = state.map(product => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      return newState;
    case t.SUBTRACT_PRODUCT:
      const refreshedState = state.map(product => {
        if (product.id === action.payload) {
          return product.quantity ? { ...product, quantity: product.quantity - 1 } : product;
        }
        return product;
      });
      return refreshedState;
    case t.DELETE_PRODUCT:
      return state.filter(product => product.id !== action.payload);
    default:
      return state;
  }
};

export default basketReducer;
