import React, { useEffect, useState } from "react";
import PercheroComp from '../percheroComp/PercheroComp.jsx'
import styles from './menuPCSelect.module.css'; // Import CSS module
import { useDispatch, useSelector } from "react-redux";
import Cards from "../cards/Cards.jsx"
import { getAllProducts, productsByCat } from "../../../redux/actions.js";
import MenuButtons from "../menuButtons/MenuButtons.jsx";


function MenuPCSelect() {
    const dispatch = useDispatch();
    const [isButtonHighlighted, setIsButtonHighlighted] = useState(false); // Estado local para resaltar el botón

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    const handleCategoryClick = (category) => {
        // Aquí puedes manejar la lógica para la categoría seleccionada
        console.log('Categoría seleccionada:', category);
        // Por ejemplo, puedes hacer algo como dispatch de una acción para filtrar los productos basados en la categoría
        // Aquí también puedes actualizar el estado para resaltar el botón
        setIsButtonHighlighted(true);
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
            <MenuButtons
                categories={currentLenguaje === 'ES'?
                            ['Café', 'Bebidas', 'Sanduches', 'Desayuno', 'Mostrar todo']:
                            ['Coffee', 'Drinks', 'Sandwitch', 'Breackfast', "Show all"]}
                onClick={handleCategoryClick}
                highlighted={isButtonHighlighted} // Pasamos el estado local como prop para resaltar el botón
            />
            <Cards
                sourceImg="https://res.cloudinary.com/denjiview/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png"
            />
        </div>
    );
}

export default MenuPCSelect;
