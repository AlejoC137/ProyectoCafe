import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from '../card/Card.module.css';
import GearIcon from './GearIcon';
import SwitchToggle from './SwitchToggle';
import { useDispatch } from 'react-redux';
import { changeItemStatus } from '../../../redux/actions.js'; // Importa la acción de Redux

function Card(props) {
  const [showDescription, setShowDescription] = useState(!props.fondo); // Show description if props.fondo doesn't exist
  const [state, setState] = useState(props.isActive === 'Activo'? true : false); // Show description if props.fondo doesn't exist
  // const [state, setState] = useState(props.isActive === 'Activo'? true : false); // Show description if props.fondo doesn't exist
  
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const dispatch = useDispatch();

  const handleToggle = () => {
    setState(!state); // Cambia el estado contrario de 'state'
    dispatch(changeItemStatus(props.ID)); // Despacha la acción con el ID del item
  };

  return (
    <div className={styles.card}>
      {/* Name */}
      {props.name}

      {/* Image */}
      <div className={styles.imageContainer}>
        <img
          className={styles.img}
          src={props.fondo}
          alt=""
          onClick={toggleDescription} // Toggle description on image click
        />

        {/* Description Overlay */}
        {showDescription && (
          <div className={styles.descriptionOverlay} onClick={toggleDescription}></div>
        )}

        {/* Description */}
        {showDescription && (
          <div className={styles.description} onClick={toggleDescription}>
            {props.descripcion}
          </div>
        )}
      </div>

      {/* Precio */}
      {props.precio}

      {/* Admin Tools - Gear Icon and Switch */}
      {props.admin && (
        <div className={styles.adminTools}>
<Link to={`https://portfolio-ap-seven.vercel.app/editproducto/${props.ID}`}>
          
          <GearIcon />
          </Link>
          
          <SwitchToggle isToggled={state} onToggle={handleToggle} />

        </div>
      )}

      <br />
    </div>
  );
}

export default Card;
