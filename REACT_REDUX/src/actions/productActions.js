import * as actionType from './ActionType';
import ProductsAPI from "../api/ProductsAPI";

export function loadProductSuccess(products) {
    return { type: actionType.LOAD_PRODUCTS_SUCCESS, products };
}

export function updateProductSuccess(product) {
    return { type: actionType.UPDATE_PRODUCT_SUCCESS, product };
}

export function createProductSuccess(product) {
    return { type: actionType.CREATE_PRODUCT_SUCCESS, product };
}

export function loadProducts() {
    return function (dispatch) {
        return ProductsAPI.getAllProducts().then(products => {
            dispatch(loadProductSuccess(products));
        }).catch(error => {
            throw error;
        });
    }
}

export function updateProduct(product) {
    return function (dispatch) {
        return ProductsAPI.updateProduct(product).then(savedProduct => {
            dispatch(updateProductSuccess(savedProduct));
        }).catch(error => {
            throw error;
        });
    }
}

export function saveProduct(product) {
    return function (dispatch) {
        return ProductsAPI.saveProduct(product).then(savedProduct => {
            dispatch(createProductSuccess(savedProduct));
        }).catch(error => {
            throw error;
        });
    }
}