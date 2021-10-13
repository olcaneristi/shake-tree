import React from 'react';
import TreeSVG from '../../assets/icons/TreeSVG';
import AppleSVG from '../../assets/icons/apple.svg';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Tree = ({ shakeTree }) => {
  const allApplesData = useSelector(state => state.apples);
  const { allApples, error } = allApplesData;
  // console.log('apples items on tree', allApples);

  return (
    <section className={shakeTree ? 'tree' : 'tree__not__shake'}>
      {error && <p>{error.message}</p>}
      <TreeSVG />
      {allApples && (
        <TransitionGroup className="apples">
          {allApples?.map(appleItems => (
            // react-transition-group ile ağaçtan düşecek elmalara animasyon oluşturuyorum.
            <CSSTransition classNames="apples__transition" timeout={3000} key={appleItems.id}>
              <li style={appleItems.style} className={`apples__item ${appleItems.className}`}>
                <img src={AppleSVG} width="32px" alt="apple" />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </section>
  );
};

export default Tree;
