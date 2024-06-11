import React, { useEffect, useState } from "react";
import PercheroComp from '../percheroComp/PercheroComp.jsx'
import styles from './menuPCSelect.module.css'; // Import CSS module
import { useDispatch, useSelector } from "react-redux";
import Cards from "../cards/Cards.jsx"
import { getAllProducts, productsByCat, setAdmin, setLenguaje } from "../../../redux/actions.js";
import MenuButtons from "../menuButtons/MenuButtons.jsx";

function MenuPCSelect(props) {
    const dispatch = useDispatch();
    const [isButtonHighlighted, setIsButtonHighlighted] = useState(false); // Estado local para resaltar el botón
    const currentLenguaje = useSelector(state => state.currentLenguaje); // Idioma actual del estado global

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(setAdmin(props.edit));
    }, []);

    const handleCategoryClick = (category) => {
        console.log('Categoría seleccionada:', category);
        setIsButtonHighlighted(true);
    };

    // Función para cambiar el idioma entre español e inglés
    const toggleLanguage = () => {
        if (currentLenguaje === 'ES') {
            dispatch(setLenguaje('EN')); // Cambiar al inglés si el idioma actual es español
        } else {
            dispatch(setLenguaje('ES')); // Cambiar al español si el idioma actual es inglés
        }
    };

    const switchToSpanish = () => {
        dispatch(setLenguaje('ES'));
        setIsButtonHighlighted(false);
    };

    // Función para cambiar el idioma a inglés
    const switchToEnglish = () => {
        dispatch(setLenguaje('EN'));
        setIsButtonHighlighted(true);
    };

    return (
       <div className="m-1 fixed">
    {/* Toggle para cambiar entre español e inglés */}
    <div>
        <PercheroComp
            className={styles.percheroElement}
            src="https://res.cloudinary.com/dwcp7dk9h/image/upload/v1718079744/zg1d7zmrgmphh4ftzf8w.png"
            alt="Your Image Alt Text"
            imageWidth="40px"
        />
        {/* Botón para cambiar a español */}
        <div className="flex">
            {/* Botón para cambiar a español */}
            <button
                className={`w-1/2 mb-1 mr-0.5 rounded-2xl border border-lilaDark p-1 font-Bobby_Jones_Soft text-15pt text-center ${currentLenguaje === 'ES' ? 'bg-ladrillo text-notBlack' : 'text-lilaDark bg-softGrey'}`}
                onClick={switchToSpanish}
            >
                Español
            </button>

            {/* Botón para cambiar a inglés */}
            <button 
                className={`w-1/2 mb-1 ml-0.5 rounded-2xl border border-lilaDark p-1 font-Bobby_Jones_Soft text-15pt text-center ${currentLenguaje === 'EN' ? 'bg-ladrillo text-notBlack' : 'text-lilaDark bg-softGrey'}`}
                onClick={switchToEnglish}
            >
                English
            </button>
        </div>
    </div>
    <MenuButtons
        className='fixed ' // Establecer posición fija en la parte inferior de la pantalla
        categories={currentLenguaje === 'ES' ?
            ['Café', 'Bebidas', 'Sanduches', 'Desayuno', 
            'Postres', 
            // 'Panes'
            ,'Todo'] :
            ['Coffee', 'Drinks', 'Sandwitch', 'Breackfast', 'Deserts', 
            // 'Breads'
            , "Show all"]}
        onClick={handleCategoryClick}
        highlighted={isButtonHighlighted}
    />

    <Cards
        sourceImg="https://res.cloudinary.com/dwcp7dk9h/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png"
    />
</div>
    );
}

export default MenuPCSelect;
