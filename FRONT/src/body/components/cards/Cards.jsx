import React from 'react';
import Card from '../card/Card.jsx';
import styles from '../cards/Cards.module.css'
import { useSelector } from 'react-redux';
useSelector
function Cards(props) {
   const menu = useSelector(state => state.menu)

   const currentLenguaje = useSelector(state => state.currentLenguaje);
   const menuByCat = useSelector(state => state.menuByCat) 


// console.log(CAT );

  return (
    <div >
      <div className={styles.cards}>
        {/* {CAT==="TODO"? menu.map((PAD) => (
          <Card
            fondo={PAD.foto}
            // key={PAD?._id}
            // media={PAD?.media}
            // location={PAD?.location}
            // date={PAD?.date}
            // name={PAD?.name}
            name={currentLenguaje === 'ES'?PAD.NombreES:PAD.NombreEN}
            precio={PAD.Precio}
            DescripcioE={currentLenguaje === 'ES'?PAD.DescripcionES:PAD.DescripcionEN}
            // breaf={PAD?.breaf}
            // _id={PAD?._id}
            // PAD={props?.PAD}
            // active={props?.active}
          />
        )):
        menuByCat.map((PAD) => (
          <Card
            fondo={PAD.foto}
            // key={PAD?._id}
            // media={PAD?.media}
            // location={PAD?.location}
            // date={PAD?.date}
            // name={PAD?.name}
            name={currentLenguaje === 'ES'?PAD.NombreES:PAD.NombreEN}
            precio={PAD.Precio}
            DescripcioE={currentLenguaje === 'ES'?PAD.DescripcionES:PAD.DescripcionEN}
            // breaf={PAD?.breaf}
            // _id={PAD?._id}
            // PAD={props?.PAD}
            // active={props?.active}
          />
        ))
      } */}
{
        menuByCat.map((PAD) => (
          <Card
            fondo={PAD.foto}
            key={PAD?._id}
            // media={PAD?.media}
            // location={PAD?.location}
            // date={PAD?.date}
            // name={PAD?.name}
            name={currentLenguaje === 'ES'?PAD.NombreES:PAD.NombreEN}
            precio={PAD.Precio}
            DescripcioE={currentLenguaje === 'ES'?PAD.DescripcionES:PAD.DescripcionEN}
            // breaf={PAD?.breaf}
            // _id={PAD?._id}
            // PAD={props?.PAD}
            // active={props?.active}
          />
        ))
      }
      </div>
      
    </div>
  );
}

export default Cards;
