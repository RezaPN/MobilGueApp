const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      const InputToChange = [...state.cart];
      InputToChange.push(action.value);
      return {
        cart: InputToChange,
      };

    case 'DELETE_CART':
      const InputToDelete = [...state.cart];
      InputToDelete.splice(action.value, 1);
      return {
        cart: InputToDelete,
      };

    default:
      return state;
  }
};

export default reducer;
