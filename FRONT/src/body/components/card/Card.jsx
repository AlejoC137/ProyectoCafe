import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import styles from '../card/Card.module.css'
// import { setDonationItems } from "../../redux/actions";
// import green1 from "../../assets/icons/green1.png";
// import green2 from "../../assets/icons/green2.png";
// import donationIcon from '../../assets/icons/donationIcon.png'
// import editPencil from '../../assets/icons/editpencil.png'


function Card(props) {
  const dispatch = useDispatch();
  // const Items = useSelector(state => state.ItemsDonation);
  // const User = useSelector(state => state.userAuth);
  // const [green, setGreen] = useState(green1);

  useEffect(() => {
    // const resultArray = Items.map(item => item?.split('=')[1]);

    // if (resultArray.includes(props._id)) {
    //   setGreen(green2);
    // } else {
    //   setGreen(green1);
    // }
    
  // }, [Items]);
  }, []);

  const handleCartButton = (event) => {
    // const value = event.target.getAttribute("data-value");
    // // console.log('handle' ,value);
    // dispatch(setDonationItems([value]));
  };

console.log(props);

  return(
    <div className={styles.card}>
      <img 
      className={styles.img}
      src={props.fondo} alt="" />
      <h5 
      // className="h-14 mt-2 text-xl font-bold font-gobold tracking-tight text-gray-900 dark:text-white"
      >
      {props.name}
      </h5>
    </div>
  )
}

export default Card;