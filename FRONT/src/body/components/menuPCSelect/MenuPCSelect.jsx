import React, { useEffect, useState } from "react";
import PercheroComp from '../percheroComp/PercheroComp.jsx'
import styles from './menuPCSelect.module.css'; // Import CSS module
import { useDispatch, useSelector } from "react-redux";

import Cards from "../cards/Cards.jsx"
import { getAllProducts } from "../../../redux/actions.js";


function MenuPCSelect() {
    // const [showBanner, setShowBanner] = useState(true);
const dispatch = useDispatch()
    useEffect(() => {
        // This code will run after the first render and whenever the 'count' state changes

dispatch(getAllProducts())
// getAllProducts()
      }, [])
  
    //   console.log(menu)
    const onPressHandler = (link) => {
        // Redirect to the provided external link
        window.location.href = link;
    };



    const MENU_ES_COMIDA =
        'https://drive.google.com/open?id=1Z0NnUd9KdkuHi6KUByFvd5NEQeUfpaYg&usp=drive_fs'

    const MENU_ES_BEBIDAS = 
        'https://drive.google.com/open?id=1Z7eDDDXP6Vtc0fQFavF8zO4n9jsR3O2U&usp=drive_fs'

    const MENU_EN_FOOD = 
        'https://drive.google.com/open?id=1XwOYc3lsU5BKyAFv633x19M52GK7Za6a&usp=drive_fs'

    const MENU_EN_DRIKS = 
        'https://drive.google.com/open?id=1XxV0kRBVC-tItlqaH1rPRn_kNxmRZtdZ&usp=drive_fs'




    const currentLenguaje = useSelector(state => state.currentLenguaje);

    return (
            <div className={styles.centerColumn}>




                <PercheroComp 
                    className={styles.percheroElement}
                    src="https://res.cloudinary.com/denjiview/image/upload/v1710822553/Untitled-1-02_zml2ay.png" 
                    alt="Your Image Alt Text" 
                    // buttonText="MENÚ BEBIDAS Y CAFÉ" 
                    // onClick={() => onPressHandler('https://drive.google.com/open?id=1XdYJBJlGG72I-zdY639OOcYRHdtPz46V&usp=drive_fs')}
                    imageWidth="40px"
                    />


<Cards
                    sourceImg="https://res.cloudinary.com/denjiview/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png" 
                    // info={menu}

></Cards>
            </div>

    );
}

export default MenuPCSelect;
