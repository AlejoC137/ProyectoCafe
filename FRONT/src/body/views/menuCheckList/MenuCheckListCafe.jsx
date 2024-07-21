import React from "react";
import SideComp from '../../components/sideComp/SideComp.jsx'
// import styles from './menuPC.module.css'; // Import CSS module
import CheckList from '../../components/checkList/MenuCheckListCafe.jsx'
import { useParams } from "react-router-dom";
function MenuCheckListCafe() {
    const onPressHandler = (link) => {
        // Redirect to the provided external link
        window.location.href = link;
    };



    return (
        <div 
        // className={styles.centerGroup}
        >
            <CheckList 
            // lassName={styles.sideC}
            
            />
            
        </div>
    );
}

export default MenuCheckListCafe;
