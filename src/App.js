import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/main.scss';
import { toast } from 'react-toastify';
import { getApples, fallApples } from './redux/actions/';
import { randomNumberGenerator } from './utils/appleItems';
import Warning from './assets/icons/warning.svg';
import Apple from './assets/icons/apple.svg';

import { Basket, ShakeButton, Tree } from './components';

const App = () => {
  const allApplesData = useSelector(state => state.apples);
  const { allApples } = allApplesData;
  const dispatch = useDispatch();
  const [shakeTree, setShakeTree] = useState(false);

  const shakeTreeFunc = () => {
    try {
      setShakeTree(true);
      setTimeout(() => {
        dispatch(fallApples(randomNumberGenerator));
        setShakeTree(false);
      }, 3000);
    } catch (error) {
      setShakeTree(false);
      toast.error(error);
    }
  };

  const dropAppleToBasketFunc = () => {
    try {
      setShakeTree(true);
      dispatch(getApples(randomNumberGenerator));
      setShakeTree(false);
    } catch (error) {
      setShakeTree(false);
      toast.error(error);
    }
  };

  const startShaking = () => {
    shakeTreeFunc();
    setTimeout(() => {
      dropAppleToBasketFunc();
    }, 5000);
  };

  return (
    <div className="App">
      <Tree shakeTree={shakeTree} />
      <Basket />
      {allApples.length === 0 ? (
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
    </div>
  );
};

export default App;
