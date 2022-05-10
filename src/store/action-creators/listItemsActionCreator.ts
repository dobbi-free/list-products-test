import {createAction} from '@reduxjs/toolkit';
import {ListItem} from '../../typedef';

export const fetchItemList = createAction('fetchItemList', () => {
    return {payload: JSON.parse(<string>localStorage.getItem('listItems'))};
});

export const fetchCurrentItem = createAction('fetchCurrentItem',(id) => {
    const data = JSON.parse(<string>localStorage.getItem('listItems'))
    const currentItem = data.find((item:ListItem) => item.id == id)

    return {payload: currentItem }
});


