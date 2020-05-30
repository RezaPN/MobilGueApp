const initialState = {
  brand: '',
  tranmisi: '',
  priceMax: '',
  priceMin: '',
  listOfCategory: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_BRAND':
      console.log('this is brand reducer');
      console.log(action.value);
      const inputChange = 'brand.name=' + action.value + '&z';
      return {
        ...state,
        brand: inputChange,
      };
    case 'INPUT_TRANMISI':
      console.log('this is tranmisi reducer');
      console.log(action.value);
      const tranmisiChange = 'category.name=' + action.value + '&';
      return {
        ...state,
        tranmisi: tranmisiChange,
      };
    case 'INPUT_PRICEMAX':
      console.log('this is pricemax reducer');
      console.log(action.value);
      const priceMaxChange = action.value;
      return {
        ...state,
        account: priceMaxChange,
      };
    case 'INPUT_PRICEMIN':
      console.log('this is pricemin reducer');
      console.log(action.value);
      const priceMinChange = action.value;
      return {
        ...state,
        account: priceMinChange,
      };
    case 'INPUT_LISTCAT':
      console.log('this is list of category reducer');
      console.log(action.value);
      const listToChange = [...state.listOfCategory];
      listToChange.push(action.value);
      return {
        ...state,
        listOfCategory: listToChange,
      };

    case 'DELETE_LISTCAT':
      console.log('this is list of delete listcat');
      console.log(action.value);
      let listDelete = [...state.listOfCategory];
      let listPostDelete = listDelete.filter(item => {
        return item !== action.value;
      });
      return {
        ...state,
        listOfCategory: listPostDelete,
      };

    default:
      return state;
  }
};

export default reducer;
