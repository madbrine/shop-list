export const setProducts = (products: any) => {
    return {
        type: 'SET_PRODUCT',
        payload: products,
    };
};

export const filterProducts = (category: any) => {
    return {
        type: 'FILTER_PRODUCT',
        payload: category,
    };
};

