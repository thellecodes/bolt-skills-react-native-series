import {ADD_TRANSACTION, DELETE_TRANSACTION} from './types';

export const addTransaction = ({price, title, id}) => (dispatch) => {
  const transaction = {price, title, id};

  dispatch({type: ADD_TRANSACTION, payload: transaction});
};

export const deleteTransaction = (id) => (dispatch) => {
  dispatch({type: DELETE_TRANSACTION, payload: id});
};
