const initialState = {
  query: '',
  value: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_QUERY':
      if (action.value.nativeEvent.text == '') {
        const valueToChange = action.value.nativeEvent.text;
        const InputChange = action.value.nativeEvent.text;
        return {
          ...state,
          query: InputChange,
          value: valueToChange,
        };
      } else {
        console.log('this is SEARCH reducer');
        console.log(action.value.nativeEvent.text);
        const valueToChange = action.value.nativeEvent.text;
        const InputChange = 'name=' + action.value.nativeEvent.text + '&';
        return {
          ...state,
          query: InputChange,
          value: valueToChange,
        };
      }

    default:
      return state;
  }
};

export default reducer;
