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
      let index = allApples.findIndex(item => item.id !== action.payload);
      console.log(index);
      allApples.splice(index, action.payload);

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
      for (let appleArray = 0; appleArray < action.payload; appleArray++) {
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
