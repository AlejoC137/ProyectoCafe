import React, { useEffect, useState } from 'react';
import styles from '../card/Button.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { productsByCat } from '../../../redux/actions';

function MenuButtons({ categories }) {
  const dispatch = useDispatch()
  
  const [selectedCat, setSelectedCat] = useState('');
  const menuAnt = useSelector(state => state.menu)

  useEffect(() => {
    // setSelectedCat("TODO");

    dispatch(productsByCat("TODO",menuAnt));
}, []);


  const handleOnClickCat = (category) => {
    setSelectedCat(category);
    dispatch(productsByCat(category,menuAnt))
    
  };
  


  return (
    <div>
      <button
        onClick={() => handleOnClickCat(categories[0])}
        className={selectedCat === categories[0] ? styles.highlightedButton : styles.card}
      >
        {categories[0]}
      </button>

      <button
        onClick={() => handleOnClickCat(categories[1])}
        className={selectedCat === categories[1] ? styles.highlightedButton : styles.card}
      >
        {categories[1]}
      </button>

      <button
        onClick={() => handleOnClickCat(categories[2])}
        className={selectedCat === categories[2] ? styles.highlightedButton : styles.card}
      >
        {categories[2]}
      </button>
      <button
        onClick={() => handleOnClickCat(categories[3])}
        className={selectedCat === categories[3] ? styles.highlightedButton : styles.card}
      >
        {categories[3]}
      </button>
      <button
        onClick={() => handleOnClickCat(categories[4])}
        className={selectedCat === categories[4] ? styles.highlightedButton : styles.card}
      >
        {categories[4]}
      </button>

      <button
        onClick={() => handleOnClickCat(categories[5])}
        className={selectedCat === categories[5] ? styles.highlightedButton : styles.card}
      >
        {categories[5]}
      </button>

      <button
        onClick={() => handleOnClickCat("TODO")}
        className={selectedCat === "TODO" ? styles.highlightedButton : styles.card}
      >
        {categories[6]}
      </button>


    </div>
  );
}

export default MenuButtons;
