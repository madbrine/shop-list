const initialState = {
    products: [],
    filteredProducts: [],
    category: 'All', // Изначально отображать все продукты
};

const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                filteredProducts: action.payload,
            };
        case 'FILTER_PRODUCTS':
            const category = action.payload;
            let filteredProducts;
            if (category === 'All') {
                filteredProducts = state.products;
            } else {
                filteredProducts = state.products.filter((product: any) => product.category === category);
            }
            return {
                ...state,
                category,
                filteredProducts,
            };
        default:
            return state;
    }
};

export default productReducer;