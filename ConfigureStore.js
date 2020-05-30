import {createStore, combineReducers} from 'redux';

import accountReducers from './src/reducer/account';
import cartReducers from './src/reducer/cart';
import searchReducers from './src/reducer/search';
import filterReducers from './src/reducer/filter';
import FavoriteReducers from './src/reducer/listOfFavorite';

const rootReducer = combineReducers({
  account: accountReducers,
  cart: cartReducers,
  search: searchReducers,
  filter: filterReducers,
  favorite: FavoriteReducers,
});

const ConfigureStore = () => {
  return createStore(rootReducer);
};

export default ConfigureStore;
