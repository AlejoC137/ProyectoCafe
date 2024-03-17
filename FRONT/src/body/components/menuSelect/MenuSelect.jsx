import React, { useEffect } from "react";
import PercheroComp from '../percheroComp/PercheroComp'
import styles from './MenuSelect.module.css'; // Import CSS module
import { useSelector } from "react-redux";

function MenuSelect() {
    const onPressHandler = (link) => {
        // Redirect to the provided external link
        window.location.href = link;
    };

    const currentLenguaje = useSelector(state => state.currentLenguaje);

    return (
            <div className={styles.centerColumn}>
                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://i.imgur.com/f7xPeGC.png" 
                    alt="Your Image Alt Text" 
                    // buttonText="MENÚ BEBIDAS Y CAFÉ" 
                    // onClick={() => onPressHandler('https://drive.google.com/open?id=1XdYJBJlGG72I-zdY639OOcYRHdtPz46V&usp=drive_fs')}
                    imageWidth="40px"
                    />
                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://i.imgur.com/xj2tmL5.png" 
                    alt="Your Image Alt Text" 
                    buttonText={currentLenguaje == 'ES' ? "MENÚ CAFÉ Y BEBIDAS" : "COFFEE & DRINKS MENU"}
                    onClick={
                        currentLenguaje == 'ES' 
                        ? () => onPressHandler('https://drive.google.com/file/d/1Z7eDDDXP6Vtc0fQFavF8zO4n9jsR3O2U/view?usp=drive_link')
                        : () => onPressHandler('https://drive.google.com/file/d/1XxV0kRBVC-tItlqaH1rPRn_kNxmRZtdZ/view?usp=drive_link')
                    }                    imageWidth="40px"
                    />
                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://i.imgur.com/xj2tmL5.png" 
                    alt="Your Image Alt Text" 
                    buttonText={currentLenguaje == 'ES' ? "MENÚ COMIDA" : "FOOD MENU"}
                    onClick={
                        currentLenguaje == 'ES' 
                        ? () => onPressHandler('https://drive.google.com/file/d/1Z7eDDDXP6Vtc0fQFavF8zO4n9jsR3O2U/view?usp=drive_link')
                        : () => onPressHandler('https://drive.google.com/file/d/1XwOYc3lsU5BKyAFv633x19M52GK7Za6a/view?usp=drive_link')
                    }
                    imageWidth=""
                    />
                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://i.imgur.com/xj2tmL5.png" 
                    alt="Your Image Alt Text" 
                    buttonText={currentLenguaje == 'ES' ? "SERVICIOS" : "SERVICES"}
                    onClick={() => console.log('Button clicked')} 
                    imageWidth="45px"
                    />

                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://i.imgur.com/xj2tmL5.png" 
                    alt="Your Image Alt Text" 
    
                    buttonText={currentLenguaje == 'ES' ? "CÓMO LLEGAR?" : "HOW TO GET HERE?"}

                    onClick={() => onPressHandler('https://maps.app.goo.gl/W6rawzsECjrDqJYf7')}
                    imageWidth="40px"
                    />

                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://i.imgur.com/xj2tmL5.png" 
                    alt="Your Image Alt Text" 
                    buttonText={currentLenguaje == 'ES' ? "AGENDA / CONTACTO" : "EVENTS / CONTACT"}

                    onClick={() => onPressHandler('https://www.instagram.com/proyecto__cafe?igsh=MWllenJ5Y2wwM2FuaA%3D%3D&utm_source=qr')}
                    imageWidth="40px"
                    />
            </div>

    );
}

export default MenuSelect;
