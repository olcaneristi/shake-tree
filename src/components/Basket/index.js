import React from 'react';
import { useSelector } from 'react-redux';
import BasketSVG from '../../assets/icons/basket.svg';
import AppleSVG from '../../assets/icons/apple.svg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Basket = () => {
  const fallenApplesOnBasket = useSelector(state => state.apples);
  const { basket } = fallenApplesOnBasket;
  console.log('falling apples on basket', basket);

  return (
    <section className="basket">
      <TransitionGroup className="basket__falling__apples">
        {basket?.map(appleOnBasket => (
          <CSSTransition key={appleOnBasket?.id} timeout={3000} classNames="basket__transition">
            <img src={AppleSVG} alt="apples on basket" />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <img src={BasketSVG} alt="sepet" className="basket__hoop" />
    </section>
  );
};

export default Basket;