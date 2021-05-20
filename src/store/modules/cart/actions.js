// usar como nomenclatura das actions os nomes dos seus devidos módulos com @
export function addToCartRequest(id) {
    return {
        type: '@cart/ADD_REQUEST',
        id,
    }
}
export function addToCartSuccess(product) {
    return {
        type: '@cart/ADD_SUCCESS',
        product: product
    }
}

export function removeFromCart(id) {
    return { 
        type: '@cart/REMOVE', 
        id,
    }
}

export function updateAmount(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT',
        id,
        amount,
    }
}