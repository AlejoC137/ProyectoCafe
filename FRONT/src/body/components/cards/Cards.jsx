import React from 'react';
import Card from '../card/Card.jsx';
import styles from '../cards/Cards.module.css'
import { useSelector } from 'react-redux';
useSelector
function Cards(props) {
   const menu = useSelector(state => state.menu)

   const currentLenguaje = useSelector(state => state.currentLenguaje);
   const menuByCat = useSelector(state => state.menuByCat) 
   const Admin = useSelector(state => state.isAdmin) 


// console.log(CAT );

  return (
    <div >
      <div className={styles.cards}>
{
        menuByCat.map((PAD) => (
          <Card
            fondo={PAD.foto}
            key={PAD?._id}
            name={currentLenguaje === 'ES'?PAD.NombreES:PAD.NombreEN}
            precio={PAD.Precio}
            descripcion={currentLenguaje === 'ES'?PAD.DescripcionES:PAD.DescripcionEN}
            admin={Admin}
          />
        ))
      }
      </div>
      
    </div>
  );
}

export default Cards;
