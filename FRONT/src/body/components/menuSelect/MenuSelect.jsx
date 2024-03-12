import React from "react";
import PercheroComp from '../percheroComp/PercheroComp'
import styles from './MenuSelect.module.css'; // Import CSS module

function MenuSelect() {
    const onPressHandler = (link) => {
        // Redirect to the provided external link
        window.location.href = link;
    };

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
                    buttonText="MENÚ CAFÉ Y BEBIDAS" 
                    onClick={() => onPressHandler('https://drive.google.com/open?id=1XdYJBJlGG72I-zdY639OOcYRHdtPz46V&usp=drive_fs')}
                    imageWidth="40px"
                    />
                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://i.imgur.com/xj2tmL5.png" 
                    alt="Your Image Alt Text" 
                    buttonText="MENÚ COMIDA" 
                    onClick={() => onPressHandler('https://drive.google.com/open?id=1Xu7jar-yGV9DGc1P9OTI8VbMBzey7dml&usp=drive_fs')}
                    imageWidth=""
                    />
                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://i.imgur.com/xj2tmL5.png" 
                    alt="Your Image Alt Text" 
                    buttonText="SERVICIOS" 
                    onClick={() => console.log('Button clicked')} 
                    imageWidth="45px"
                    />

                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://i.imgur.com/xj2tmL5.png" 
                    alt="Your Image Alt Text" 
                    buttonText="COMO LLEGAR" 
                    onClick={() => onPressHandler('https://maps.app.goo.gl/W6rawzsECjrDqJYf7')}
                    imageWidth="40px"
                    />

                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://i.imgur.com/xj2tmL5.png" 
                    alt="Your Image Alt Text" 
                    buttonText="AGENDA / CONTACTO" 
                    onClick={() => onPressHandler('https://www.instagram.com/proyecto__cafe?igsh=MWllenJ5Y2wwM2FuaA%3D%3D&utm_source=qr')}
                    imageWidth="40px"
                    />
            </div>

    );
}

export default MenuSelect;
