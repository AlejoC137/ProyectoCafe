import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { updateItem , delitem } from '../../../redux/actions.js'; // Import the Redux action

function CardCheckList(props) {
  const dispatch = useDispatch();
  const [selectedStatus, setSelectedStatus] = useState(props.datos["Estado"]); // Initialize local state

  const handleCheck = (status) => {
    setSelectedStatus(status); // Update local state immediately

    // dispatch(updateItem({
    //   id: props.datos._id,
    //   Field: "Estado",
    //   category: getCategory(props.category),
    //   Value: status
    // }));
    updateItem({
      id: props.datos._id,
      Field: "Estado",
      category: props.category,
      Value: status
    })
  };
  const handleDelete = async () => {
    const body = {
      id: props.datos._id,
      category: props.category,
    };
  // console.log(body);
    await delitem(body);
  };
  const getButtonClass = (status) => {
    switch (status) {
      case 'OK':
        return selectedStatus === 'OK' ? 'bg-green-500 hover:bg-green-700' : 'bg-gray-500 hover:bg-gray-700';
     
        case 'PENDIENTE':
        return selectedStatus === 'PENDIENTE' ? 'bg-yellow-500 hover:bg-yellow-700' : 'bg-gray-500 hover:bg-gray-700';
      
      case 'NA':
        return selectedStatus === 'NA' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-500 hover:bg-gray-700';
      default:
        return 'bg-gray-500 hover:bg-gray-700';
    }
  };



  return (
    <div className="bg-ladrillo overflow-hidden rounded-2xl border border-lilaDark relative p-4">
      <h2 className="text-lg font-semibold mb-2">{props.datos["Nombre del producto"]}{}</h2>
      <div className="flex space-x-2">
        <button
          className={`${getButtonClass('OK')} text-white font-bold py-2 px-4 rounded`}
          onClick={() => handleCheck('OK')}
        >
          OK
        </button>

        <button
          className={`${getButtonClass('PENDIENTE')} text-white font-bold py-2 px-4 rounded`}
          onClick={() => handleCheck('PENDIENTE')}
        >
          PENDIENTE
        </button>

        <button
          className={`${getButtonClass('NA')} text-white font-bold py-2 px-4 rounded`}
          onClick={() => handleCheck('NA')}
        >

          NA
        </button>
        <button
          className={`${getButtonClass('NA')} text-white font-bold py-2 px-4 rounded`}
          onClick={handleDelete}
        >
         💥
        </button>
      </div>
    </div>
  );
}

export default CardCheckList;


