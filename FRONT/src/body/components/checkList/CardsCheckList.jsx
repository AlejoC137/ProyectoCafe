import React from 'react';
import CardCheckList from './CardCheckList';
// import styles from '../cards/Cards.module.css';
import { useSelector } from 'react-redux';

function CardsCheckList(props) {
const items = props.info
// console.log(items.length);
   return (
      <div 
      >
         {props.tittle}
      <div 
      className="grid gap-1 h-screen overflow-y-auto"
      // className="grid grid-cols-3 gap-1 overflow-y-auto"
      >
        
            {items && items.map((item) => (
               <div key={item?._id} className="w-full">
                  <CardCheckList
                     
                     datos={item}
                     category={props.tittle} 
                     subCategory={item} 

                  />

               </div>
            )
            
            )}

      </div>
      </div>
   );
}

export default CardsCheckList;


