const initialState = {
  account: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_ACCOUNT':
      console.log('this is reducer');
      console.log(state.account);
      console.log(action.value);
      //nanti di input change array nya di hapus aja di action.value[0]
      const InputChange = action.value;
      console.log(InputChange);

      return {
        ...state,
        account: InputChange,
      };

    default:
      return state;
  }
};

export default reducer;
