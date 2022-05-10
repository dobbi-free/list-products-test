import { createReducer } from "@reduxjs/toolkit";
import {
  fetchCurrentItem,
  fetchItemList,
} from "../action-creators/listItemsActionCreator";
import { ListItem } from "../../typedef";

type State = {
  listItems: ListItem[];
  currentItem: ListItem;
};

const initialState = {
  listItems: [],
  currentItem: {} as ListItem,
} as State;

export const listItems = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchItemList, (state, action) => {
      state.listItems = action.payload;
    })
    .addCase(fetchCurrentItem, (state, action) => {
      state.currentItem = action.payload;
    })
);
