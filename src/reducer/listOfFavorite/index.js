const initialState = {
  listOfFavorite: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_LISTFAV':
      console.log('this is LISTFAV reducer');
      console.log(action.value);
      const InputChange = action.value;
      return {
        listOfFavorite: InputChange,
      };
    case 'INPUT_ADDFAV':
      console.log('this is ADDFAV reducer');
      console.log(action.value);
      const InputToChange = [...state.listOfFavorite];

      if (InputToChange.some(item => item.id === action.value.id)) {
        console.log('delete already exist fav...');
        const inputDel = InputToChange.filter(item => {
          return item.id != action.value.id;
        });
        return {
          listOfFavorite: inputDel,
        };
      } else {
        console.log('add fav processing...');
        InputToChange.push(action.value);
        return {
          listOfFavorite: InputToChange,
        };
      }

    case 'DELETE_ADDFAV':
      console.log('this is DELETEFAV reducer');
      console.log(action.value);
      const InputToDelete = [...state.listOfFavorite];
      const InputAfterDelete = InputToDelete.filter(item => {
        return item.id == action.value.id;
      });
      return {
        listOfFavorite: InputAfterDelete,
      };

    default:
      return state;
  }
};

export default reducer;
