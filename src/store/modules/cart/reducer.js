import produce from 'immer';

// todo reducer recebe 2 parametros
export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            // todos os returns que não são defaults serão produce
            return produce(state, draft => {
                // todas as mudanças que fizermos aqui(draft) ira refletir no estado
                const productIndex = draft.findIndex(p => p.id === action.product.id);

                if(productIndex >= 0) {
                    draft[productIndex].amount += 1;
                } else {
                    draft.push({...action.product, amount: 1});
                }                 
            });
        case '@cart/REMOVE':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if(productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });
        case '@cart/UPDATE_AMOUNT': {
            if (action.amount <= 0) {
                return state;
            }

            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if(productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            })
        }
        default:
            return state;
    }
}