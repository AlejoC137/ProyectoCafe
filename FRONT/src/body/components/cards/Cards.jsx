import React from 'react';
import Card from '../card/Card.jsx';
import styles from '../cards/Cards.module.css'
import { useSelector } from 'react-redux';
useSelector
function Cards(props) {
   const menu = useSelector(state => state.menu)


  return (
    <div >
      <div className={styles.cards}>
        {menu.map((PAD) => (
          <Card
            fondo={props.sourceImg}
            // key={PAD?._id}
            // media={PAD?.media}
            // location={PAD?.location}
            // date={PAD?.date}
            // name={PAD?.name}
            name={PAD.NombreES}
            // name={PAD?.name}
            // breaf={PAD?.breaf}
            // _id={PAD?._id}
            // PAD={props?.PAD}
            // active={props?.active}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Cards;
