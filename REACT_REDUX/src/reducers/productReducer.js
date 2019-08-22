import * as actionType from '../actions/ActionType';

import initialState from "./initialState";

const productReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case actionType.LOAD_PRODUCTS_SUCCESS:
            return action.products;
        case actionType.CREATE_PRODUCT_SUCCESS:
            return [...state, Object.assign({}, action.product)];
        case actionType.UPDATE_PRODUCT_SUCCESS:
            return [
                ...state.filter(product => product.id != action.product.id),
                Object.assign({}, action.product)
            ];
        default:
            return state;
    }
}

export default productReducer;