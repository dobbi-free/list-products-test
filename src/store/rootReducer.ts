import {combineReducers} from '@reduxjs/toolkit';
import {listItems} from './reducers/listItemsToolkitReducer';

export const rootReducer = combineReducers({
  listItems,
});
