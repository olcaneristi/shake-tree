/* eslint-disable */

import { data } from '../../utils/appleItems';
import * as types from '../actions/action-types';

const initialState = {
  allApples: data,
  basket: [],
  loading: false,
  error: null,
};

// baslangicta state'in undefined olmamasi icin default degerimizi state'e aktariyoruz.
export const appleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FALL_APPLES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FALL_APPLES_SUCCESS:
      const allApples = [...state.allApples]; // state'in bir kopyasini aliyoruz.
      // action bize random sayi dondugu icin id eslestirmesi yapamiyorum. yorum satirina aldim
      /* let index = allApples.findIndex(item => item.id !== action.payload); */
      allApples.splice(0, action.payload); // 0. indexten itibaren action'dan bize donen random sayi kadar eleman siliyorum.

      return { loading: false, ...state, allApples }; // yeni state'i return ediyorum.

    case types.FALL_APPLES_ERROR: {
      return { loading: false, error: action.payload };
    }

    case types.ADD_APPLES_TO_BASKET_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.ADD_APPLES_TO_BASKET_SUCCESS: {
      const fallenApplesOnBasket = [...state.basket]; // state'in bir kopyasini aliyoruz.

      // sepet icerisinde yer alacak elmalarimizi, action'un bize dondugu random sayi kadar bir dongu icerisinde donuyoruz.
      for (let appleArray = 0; appleArray < action.payload; appleArray++) {
        // ardindan sepetimize dusen elmalarimizi pushluyoruz.
        fallenApplesOnBasket.push(state.allApples[appleArray]);
      }
      return { loading: false, ...state, basket: fallenApplesOnBasket }; // yeni state'i return ediyoruz.
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
