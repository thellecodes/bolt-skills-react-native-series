import {ADD_TRANSACTION, DELETE_TRANSACTION} from '../actions/types';

const initialState = {
  transactions: [
    // {id: 1, title: 'Soup', price: -20},
    // {id: 2, title: 'Income', price: 300},
    // {id: 3, title: 'Shoe', price: -10},
    // {id: 4, title: 'Phone', price: 150},
    // {id: 5, title: 'Laptop', price: -150},
    // {id: 6, title: 'Barber', price: -10},
    // {id: 7, title: 'Mouse', price: 20},
  ],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== payload,
        ),
      };
    default:
      return state;
  }
};
