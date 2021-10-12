/* eslint-disable */

import { data } from '../../utils/appleItems';
import * as types from '../actions/action-types';

const initialState = {
  allApples: data,
  basket: [],
  loading: false,
  error: null,
};

export const appleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FALL_APPLES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FALL_APPLES_SUCCESS:
      const allApples = [...state.allApples];
      //  let index = allApples.findIndex(i => i === action.payload);
      allApples.splice(0, action.payload);
      return { loading: false, ...state, allApples };

    case types.FALL_APPLES_ERROR: {
      return { loading: false, error: action.payload };
    }

    case types.ADD_APPLES_TO_BASKET_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.ADD_APPLES_TO_BASKET_SUCCESS: {
      const fallenApplesOnBasket = [...state.basket];
      for (let appleArray = action.payload; appleArray > 0; appleArray--) {
        fallenApplesOnBasket.push(state.allApples[appleArray]);
      }
      return { ...state, basket: fallenApplesOnBasket };
    }

    case types.ADD_APPLES_TO_BASKET_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
