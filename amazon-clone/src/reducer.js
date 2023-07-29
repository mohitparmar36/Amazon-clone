export const initialState = {
    basket :[],
    user : null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "SET_USER":
         return {
        ...state,
        user: action.user,
        };
        case'ADD_TO_BASKET':
            return {
                ...state,
                basket : [...state.basket,action.item]
            };
        case 'REMOVE_FROM_BASKET' :
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);

            if(index >= 0){
                // item exist in basket, remove it...
                newBasket.splice(index,1);

            }
            
            else{
                console.warn(`cant remove product (id: ${action.id}) as it is not present`)
            }

            return {...state,basket : newBasket};
        default:
            return state;         
    }
}

export default reducer;