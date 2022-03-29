export const initialState = {
    basket: []
}

export const getBasketTotal = (basket) => {
    return (basket.reduce((pre, item) => item.price + pre, 0));
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'add_Product':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case 'remove_Item':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product(id:${action.id}) as its not in the basket!`
                )
            } return {
                ...state,
                basket: newBasket
            }

        default:
            return state;
    }
}

export default reducer;

