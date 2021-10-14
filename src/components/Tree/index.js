import React from 'react';
import TreeSVG from '../../assets/icons/TreeSVG';
import TreeAutumnSVG from '../../assets/icons/TreeAutumnSVG';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Apple from '../Apple';

const Tree = ({ shakeTree }) => {
  const allApplesData = useSelector(state => state.apples);
  const { allApples, error } = allApplesData;
  // console.log('apples items on tree', allApples);

  return (
    <section className={`tree ${shakeTree ? 'tree__shaking' : 'tree__not__shake'}`}>
      {error && <p>{error.message}</p>}
      {allApples?.length === 0 ? <TreeAutumnSVG /> : <TreeSVG />}
      {allApples && (
        <TransitionGroup className="apples">
          {allApples?.map(appleItems => (
            // react-transition-group ile ağaçtan düşecek elmalara animasyon oluşturuyorum.
            <CSSTransition classNames="apples__transition" timeout={3000} key={appleItems?.id}>
              <Apple
                style={appleItems?.style}
                className={`apples__item ${appleItems?.className}`}
                width="32px"
                alt="apple on tree"
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </section>
  );
};

export default Tree;
