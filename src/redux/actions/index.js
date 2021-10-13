import { toast } from 'react-toastify';
import * as types from './action-types';

// actionlari daha verimli kullanmak icin action creator olusturuyoruz.
export const getApples = randomNumberGenerator => dispatch => {
  try {
    dispatch({ type: types.ADD_APPLES_TO_BASKET_REQUEST });

    // success state'inin değişeceğinin bilgisini veriyoruz ve app.js'ten gelen random sayıyı karşılıyoruz ve payload'a tasiyoruz.
    dispatch({ type: types.ADD_APPLES_TO_BASKET_SUCCESS, payload: randomNumberGenerator });
  } catch (error) {
    // herhangi bir hata durumunda error type'imizi dispatch ediyoruz ve hatayi toast icerisinde gostermek istiyoruz.
    dispatch({ type: types.ADD_APPLES_TO_BASKET_ERROR, payload: toast.error(error.message) });
  }
};

export const fallApples = randomNumberGenerator => dispatch => {
  try {
    dispatch({ type: types.FALL_APPLES_REQUEST }); // elmalarin dusme requestini dispatch ediyoruz,
    // ardindan elmalarin dusmesi icin success type'imizi dispatch ediyoruz ve payloadi
    dispatch({ type: types.FALL_APPLES_SUCCESS, payload: randomNumberGenerator });
  } catch (error) {
    // herhangi bir hata durumunda error type'imizi dispatch ediyoruz ve hatayi toast icerisinde gostermek istiyoruz.
    dispatch({ type: types.FALL_APPLES_ERROR, payload: toast.error(error.message) });
  }
};
