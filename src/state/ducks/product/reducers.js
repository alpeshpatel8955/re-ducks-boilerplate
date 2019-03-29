import { combineReducers } from 'redux';
import * as types from './types';

/* State shape
{
    details: product,
    list: [ product ],
}
*/
const detailsReducer = (state = null, action) => {
    switch (action.type) {
    case [types.FETCH_DETAILS_SUCCESS]:
        return action.payload.product;
    default:
        return state;
    }
};

const listReducer = (state = null, action) => {
    switch (action.type) {
    case [types.FETCH_LIST_SUCCESS]:
        return action.payload.products;
    default:
        return state;
    }
};

export default combineReducers({
    details: detailsReducer,
    list: listReducer,
});
