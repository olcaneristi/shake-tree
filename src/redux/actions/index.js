import { toast } from 'react-toastify';
import * as types from './action-types';

export const getApples = randomNumberGenerator => dispatch => {
  try {
    dispatch({ type: types.ADD_APPLES_TO_BASKET_REQUEST });
    dispatch({ type: types.ADD_APPLES_TO_BASKET_SUCCESS, payload: randomNumberGenerator });
  } catch (error) {
    dispatch({ type: types.ADD_APPLES_TO_BASKET_ERROR, payload: toast.error(error.message) });
  }
};

export const fallApples = randomNumberGenerator => dispatch => {
  try {
    dispatch({ type: types.FALL_APPLES_REQUEST });
    dispatch({ type: types.FALL_APPLES_SUCCESS, payload: randomNumberGenerator });
  } catch (error) {
    dispatch({ type: types.FALL_APPLES_ERROR, payload: toast.error(error.message) });
  }
};
