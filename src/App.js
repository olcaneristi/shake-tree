import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getApples, fallApples, resetAll } from './redux/actions/';
import { randomNumberGenerator } from './utils/appleItems';
import Warning from './assets/icons/warning.svg';
import Apple from './assets/icons/apple.svg';
import Reset from './assets/icons/reset.svg';

import { Basket, ShakeButton, Tree } from './components';

const App = () => {
  const allApplesData = useSelector(state => state.apples);
  const { allApples } = allApplesData;
  const dispatch = useDispatch();
  const [shakeTree, setShakeTree] = useState(false);

  // ağacı sallama ve elmanın düşme fonksiyonunu oluşturduk.
  const shakeTreeFunc = () => {
    try {
      // ağacı sallayacak state'i true haline getirdim. ağaca class ekleyecek ve css animasyon ile sallayacak
      setShakeTree(true);
      // ardından settimeout ile animasyon bittikten sonra random sayıda elma düşmeye başlayacak.
      // constant olarak oluşturduğum random bir sayı generate edecek ve düşen elma sayısı / sepete eklenecek elma sayısı belirlenecek.
      // ardından elmaların ağaçtan düşüp kaybolma actionu dispatch edilecek.
      setTimeout(() => {
        dispatch(fallApples(randomNumberGenerator));
      }, 2500);
    } catch (error) {
      setShakeTree(false);
      toast.error(error);
    }
  };

  // elmanın düştükten sonra sepete eklenmesi fonksiyonunu oluşturduk.
  const dropAppleToBasketFunc = () => {
    try {
      setShakeTree(true);
      // ağaçtan düşen elma sayısını yine aynı şekilde sepete eklemek için tutuyoruz. bu sayede düşen elma sayısı sepete aynı sayıda eklenecek.
      // ardından elmaları sepete ekleme actionu dispatch edilecek.
      dispatch(getApples(randomNumberGenerator));
      setShakeTree(false);
    } catch (error) {
      setShakeTree(false);
      toast.error(error);
    }
  };

  // buttona atadığım bu fonksiyon ile aynı anda iki fonksiyonu birden çalıştıracağım.
  const startShaking = () => {
    shakeTreeFunc(); // ağaç sallama ve elma düşme fonksiyonunu çağırdık.

    // üstteki fonksiyon animasyondan sonra başlayacağı için, sepete ekleme adına 1 saniyelik delay ekliyoruz.
    setTimeout(() => {
      dropAppleToBasketFunc(); // sepete ekleme fonksiyonumuz ağaçtan düşme tamamlanınca çalışacak.
    }, 3500);
  };

  const resetAllState = () => {
    try {
      if (allApples?.length < 10) {
        dispatch(resetAll());
        toast.success('Reset successfully!');
      } else toast.warning('All your apples on the tree. Please shake it!');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className={`app ${allApples?.length === 0 ? 'autumn' : 'summer'}`}>
      <ToastContainer autoClose={3000} />
      <Tree shakeTree={shakeTree} />
      {/* ağacın sallanması/durması için state'i Tree componentine yolladık ve className değişimi sağladık. */}
      <Basket />
      <div className="buttons">
        {allApples?.length === 0 ? ( // ağaçta elma kalmadığında kullanıcının butona daha fazla basmasına engel olacağız.
          <ShakeButton
            disabled
            title="There is no more apple on the tree."
            className="button__shake--disabled"
            image={Warning}
          />
        ) : (
          <ShakeButton
            disabled={shakeTree}
            onClick={startShaking}
            title={shakeTree ? 'Shaking...' : 'Shake it!'}
            className="button__shake"
            image={Apple}
          />
        )}
        <ShakeButton onClick={resetAllState} title="Reset" className="button__reset" image={Reset} />
      </div>
    </div>
  );
};

export default App;
