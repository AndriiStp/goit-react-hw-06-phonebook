import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReduser } from '../redux/ContactsSlice';
import { filterReducer } from '../redux/FilterSlice';

// INIT STATE
const initialState = {
  contacts: [],
  filter: '',
};

// RoOOT REDUCER
const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
