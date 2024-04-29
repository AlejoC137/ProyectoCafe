import React from 'react';
import Card from '../card/Card.jsx';
import styles from '../cards/Cards.module.css';
import { useSelector } from 'react-redux';

function Cards(props) {
   const menu = useSelector(state => state.menu);
   const currentLenguaje = useSelector(state => state.currentLenguaje);
   const menuByCat = useSelector(state => state.menuByCat);
   const isAdmin = useSelector(state => state.isAdmin);

   return (
      <div>
         <div className={styles.cards}>
            {menuByCat.map((PAD) => (
               (isAdmin || PAD.Estado === 'Activo') && // Render card if isAdmin is true or PAD.Estado is 'Activo'
               <Card
                  fondo={PAD.foto}
                  key={PAD?._id}
                  ID={PAD?._id}
                  name={currentLenguaje === 'ES' ? PAD.NombreES : PAD.NombreEN}
                  precio={PAD.Precio}
                  descripcion={currentLenguaje === 'ES' ? PAD.DescripcionES : PAD.DescripcionEN}
                  admin={isAdmin}
                  isActive={PAD.Estado}
               />
            ))}
         </div>
      </div>
   );
}

export default Cards;
