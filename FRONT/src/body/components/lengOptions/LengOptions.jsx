import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link component
import PercheroComp from '../percheroComp/PercheroComp'
import styles from './LengOptions.module.css'; // Import CSS module
import { useDispatch, useSelector } from "react-redux";
import { setLenguaje } from "../../../redux/actions";

function LengOptions() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLenguaje('ES') )
    }, [/* Dependencies */]);


    const onPressHandler = (SET) => {
        // Dispatch action
        dispatch(setLenguaje(SET));
    };

    const currentLenguaje = useSelector(state => state.currentLenguaje);

    return (
        <div className={styles.centerColumn}>
            <PercheroComp 
                className={styles.percheroElement}
                src="https://res.cloudinary.com/denjiview/image/upload/v1710822553/Untitled-1-02_zml2ay.png" 
                alt="Your Image Alt Text" 
                imageWidth="40px"
            />
            <Link to="/menuprojectocafe"> {/* Use Link component */}
                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://res.cloudinary.com/denjiview/image/upload/v1710822094/PERCHERO_02-01_mvlvyz.png" 
                    alt="Your Image Alt Text" 
                    buttonText={"ESPAÑOL"}
                    value='ES'
                    onClick={onPressHandler('ES')}
                    imageWidth="40px"
                />
            </Link>
            <Link to="/menuprojectocafe"> {/* Use Link component */}
                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://res.cloudinary.com/denjiview/image/upload/v1710822094/PERCHERO_02-01_mvlvyz.png" 
                    alt="Your Image Alt Text" 
                    buttonText={"ENGLISH"}
                    value='EN'
                    onClick={onPressHandler('EN')}
                    imageWidth="40px"
                />
            </Link>
        </div>
    );
}

export default LengOptions;
