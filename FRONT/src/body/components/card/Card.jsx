import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from '../card/Card.module.css';
import GearIcon from './GearIcon';
import SwitchToggle from './SwitchToggle';

function Card(props) {
  const [showDescription, setShowDescription] = useState(!props.fondo); // Show description if props.fondo doesn't exist

  const toggleDescription = () => {
    setShowDescription(!showDescription);
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
      <div className={styles.adminTools}>
        <GearIcon />
        <SwitchToggle />
      </div>

      <br />
    </div>
  );
}

export default Card;
