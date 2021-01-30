import { IAction } from "../../../../shared/interfaces/common"
import { IProduct } from "../../../../shared/interfaces/product";


export enum ProductActionTypes {
    GET_PRODUCTS = '[Products] GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS = '[Products] GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_FAIL = '[Products] GET_PRODUCTS_FAIL',

    CREATE_PRODUCT = '[Products] CREATE_PRODUCT',
    CREATE_PRODUCT_SUCCESS = '[Products] CREATE_PRODUCT_SUCCESS',
    CREATE_PRODUCT_FAIL = '[Products] CREATE_PRODUCT_FAIL',
    
    CLEAR_DATA = '[Products] CLEAR_DATA',
    REMOVE_PRODUCT = '[Products] REMOVE_PRODUCT',

    DELETE_PRODUCT = '[Products] GET_PRODUCTS',
    DELETE_PRODUCT_SUCCESS = '[Products] DELETE_PRODUCT_SUCCESS',
    DELETE_PRODUCT_FAIL = '[Products] DELETE_PRODUCT_FAIL',
}

// Get all Product
export const getProducts = (): IAction<any> => {
    return {
        type: ProductActionTypes.GET_PRODUCTS
    }
}

export const clearData = (): IAction<any> => {
    return {
        type: ProductActionTypes.CLEAR_DATA
    }
}

export const getProductsSuccess = (payload: IProduct[]): IAction<any> => {
    return {
        type: ProductActionTypes.GET_PRODUCTS_SUCCESS,
        payload
    }
}

export const getProductsFail = (error: string): IAction<any> => {
    return {
        type: ProductActionTypes.GET_PRODUCTS_FAIL,
        error
    }
}

// Create new product
export const createProduct = (product: IProduct): IAction<any> => ({
    type: ProductActionTypes.CREATE_PRODUCT,
    payload: product
});

export const createProductSuccess = (payload: any): IAction<any> => ({
    type: ProductActionTypes.CREATE_PRODUCT_SUCCESS,
    payload
});

export const createProductFail = (error: string): IAction<any> => ({
    type: ProductActionTypes.CREATE_PRODUCT_FAIL,
    payload: error
});

/// Delete Product
export const deleteProduct = (product: IProduct): IAction<any> => ({
    type: ProductActionTypes.DELETE_PRODUCT,
    payload: product
});

export const deleteProductSuccess = (payload: any): IAction<any> => ({
    type: ProductActionTypes.DELETE_PRODUCT_SUCCESS,
    payload
});

export const deleteProductFail = (error: string): IAction<any> => ({
    type: ProductActionTypes.DELETE_PRODUCT_FAIL,
    payload: error
});

/// Delete Product
export const removeProduct = (product: IProduct): IAction<any> => ({
    type: ProductActionTypes.REMOVE_PRODUCT,
    payload: product
});