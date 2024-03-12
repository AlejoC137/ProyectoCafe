import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory hook
import PercheroComp from '../percheroComp/PercheroComp'
import styles from './MenuSelect.module.css'; // Import CSS module
import { useDispatch } from "react-redux";
import { setLenguaje } from '../../../redux/actions';

function LlengSelect() {
    const history = useHistory(); // Initialize useHistory hook
    const dispatch = useDispatch();
    
    const onPressHandler = (e) => {
        dispatch(setLenguaje(e.target.value));
        // Redirect to the desired route
        history.push('/menuprojectocafe'); // Replace with your desired route
    };

    return (
        <div className={styles.centerColumn}>
            <PercheroComp 
                className={styles.percheroElement}
                src="https://i.imgur.com/f7xPeGC.png" 
                alt="Your Image Alt Text" 
                imageWidth="40px"
            />
            <PercheroComp 
                className={styles.percheroElement}
                src="https://i.imgur.com/xj2tmL5.png" 
                alt="Your Image Alt Text" 
                buttonText="ESPAÑOL" 
                value='ES'
                onClick={() => onPressHandler('https://drive.google.com/open?id=1XdYJBJlGG72I-zdY639OOcYRHdtPz46V&usp=drive_fs')}
                imageWidth="40px"
            />
            <PercheroComp 
                className={styles.percheroElement}
                src="https://i.imgur.com/xj2tmL5.png" 
                alt="Your Image Alt Text" 
                buttonText="ENGLISH" 
                value='EN'
                onClick={() => onPressHandler('https://drive.google.com/open?id=1Xu7jar-yGV9DGc1P9OTI8VbMBzey7dml&usp=drive_fs')}
                imageWidth=""
            />
        </div>
    );
}

export default LlengSelect;
