import React from 'react';
import { useSelector } from 'react-redux';
import BasketSVG from '../../assets/icons/basket.svg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Apple from '../Apple';

const Basket = () => {
  const fallenApplesOnBasket = useSelector(state => state.apples);
  const { basket, error } = fallenApplesOnBasket; // sepete eklenecek elmaları çağırıyorum.
  // console.log('falling apples on basket', basket);

  return (
    <section className="basket">
      {error && <p>{error.message}</p>}
      <TransitionGroup className="basket__falling__apples">
        {basket?.map(appleOnBasket => (
          // react-transition-group paketi ile sepete düşecek elmalara animasyon tanımlıyorum.
          <CSSTransition key={appleOnBasket?.id} timeout={5000} classNames="basket__transition">
            <Apple alt="apples on basket" />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <img src={BasketSVG} alt="sepet" className="basket__hoop" />
    </section>
  );
};

export default Basket;
