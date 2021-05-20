import { combineReducers } from 'redux';

// caso eu tivesse mais outro modulo, eu apenas o importaria aqui
import cart from './cart/reducer';

export default combineReducers({
    // e passaria ele aqui dentro
    cart,
});

// e pronto tenho dois reducers combinados, basta agora eu importar no index store
// e coloca-lo como parâmetro