import React from "react";
import SideComp from '../../components/sideComp/SideComp.jsx'
// import styles from './menuPC.module.css'; // Import CSS module
import CheckListCocina from '../../components/checkList/MenuCheckListCocina.jsx'
import { useParams } from "react-router-dom";
function MenuCheckListCocina() {
    const onPressHandler = (link) => {
        // Redirect to the provided external link
        window.location.href = link;
    };



    return (
        <div 
        // className={styles.centerGroup}
        >
            <CheckListCocina
            // lassName={styles.sideC}
            
            />
            
        </div>
    );
}

export default MenuCheckListCocina;
