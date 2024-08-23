import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { updateItem, delitem } from '../../../redux/actions.js'; // Import the Redux action

const grupoOptions = ["FRUTAS_VERDURAS", "CONDIMENTO_ESPECIA", "CANAZTA_FAMILIAR", "PANADERIA"];

function CardCheckList(props) {
  const dispatch = useDispatch();
  const [selectedStatus, setSelectedStatus] = useState(props.datos["Estado"]);

  const [editableField, setEditableField] = useState(null);
  const [editedValue, setEditedValue] = useState(null);
  const [precioPorUnidad, setPrecioPorUnidad] = useState(0);

  useEffect(() => {
    calcularPrecioPorUnidad();
  }, [props.datos["CANTIDAD"], props.datos["COSTO"], props.datos["COOR"]]);

  const handleCheck = (status) => {
    setSelectedStatus(status);
    dispatch(updateItem({
      id: props.datos._id,
      Field: "Estado",
      category: "STOCK",
      Value: status,
    })).then(() => {
      dispatch(getAllItems());  // Re-fetch the updated list after a change
    });
  };

  const handleDelete = async () => {
    const body = {
      id: props.datos._id,
      category: props.category,
    };
    await delitem(body);
  };

  const handleEditClick = (field) => {
    setEditableField(field); // Permite editar el campo
    setEditedValue(props.datos[field]); // Establece el valor inicial del campo editable
  };

  const handleBlur = (field) => {
    dispatch(updateItem({
      id: props.datos._id,
      Field: field,
      category: 'STOCK',
      Value: editedValue,
    })).then(() => {
      dispatch(getAllItems());  // Re-fetch the updated list after a change
    });
    setEditableField(null);
  };

  const handleChange = (e) => {
    setEditedValue(e.target.value); // Actualiza el valor del campo mientras se edita
  };

  const getButtonClass = (status) => {
    switch (status) {
      case '100%':
        return selectedStatus === '100%' ? 'bg-green-500 hover:bg-green-700' : 'bg-gray-500 hover:bg-gray-700';
      case '75%':
        return selectedStatus === '75%' ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-700';
      case '50%':
        return selectedStatus === '50%' ? 'bg-yellow-500 hover:bg-yellow-700' : 'bg-gray-500 hover:bg-gray-700';
      case '25%':
        return selectedStatus === '25%' ? 'bg-orange-500 hover:bg-orange-700' : 'bg-gray-500 hover:bg-gray-700';
      case '0%':
        return selectedStatus === '0%' ? 'bg-red-500 hover:bg-red-700' : 'bg-gray-500 hover:bg-gray-700';
      case 'NA':
        return selectedStatus === 'NA' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-500 hover:bg-gray-700';
      default:
        return 'bg-gray-500 hover:bg-gray-700';
    }
  };

  const calcularPrecioPorUnidad = () => {
    // Ensure CANTIDAD, COSTO, and COOR are parsed as numbers, default to 0 if not a valid number.
    const cantidad = isNaN(parseFloat(props.datos["CANTIDAD"])) ? 0 : parseFloat(props.datos["CANTIDAD"]);
    const costo = isNaN(parseFloat(props.datos["COSTO"])) ? 0 : parseFloat(props.datos["COSTO"]);
    const coor = isNaN(parseFloat(props.datos["COOR"])) ? 0 : parseFloat(props.datos["COOR"]);
  
    // Perform the calculation only if the quantity and coordinator values are greater than 0 to avoid division by zero.
    if (cantidad === 0 || coor === 0) {
      setPrecioPorUnidad(0);
    } else {
      const precio = (costo / cantidad) * coor;
      setPrecioPorUnidad(precio.toFixed(2)); // Round to 2 decimals
    }
  };
  

  const renderField = (fieldName, displayName) => {
    return (
      <div className="flex items-center mb-2">
        <span className="mr-2 text-lg font-semibold">{displayName}:</span>
        {editableField === fieldName ? (
          fieldName === "GRUPO" ? (
            // Render select if the field is GRUPO
            <select
              value={editedValue}
              onChange={handleChange}
              onBlur={() => handleBlur(fieldName)}
              className="border rounded px-2 py-1"
              autoFocus
            >
              {grupoOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            // Render input for other fields
            <input
              type="text"
              value={editedValue}
              onChange={handleChange}
              onBlur={() => handleBlur(fieldName)}
              className="border rounded px-2 py-1"
              placeholder={props.datos[fieldName]}
              autoFocus
            />
          )
        ) : (
          <span className="text-lg font-semibold">{props.datos[fieldName]}</span>
        )}
        <button 
          className="ml-2 text-gray-600 hover:text-gray-800"
          onClick={() => handleEditClick(fieldName)}
        >
          ✏️
        </button>
      </div>
    );
  };

  return (
    <div className="bg-ladrillo overflow-hidden rounded-2xl border border-lilaDark relative p-4">
      <h2 className="text-lg font-semibold mb-2">{props.datos["Nombre del producto"]}</h2>

      {props.largeEditSet === true && renderField("Nombre del producto", "Nombre del producto")}
      {props.largeEditSet === true && renderField("Proveedor", "Proveedor")}
      {props.largeEditSet === true && renderField("Estado", "Estado")}
      {props.largeEditSet === true && renderField("Area", "Área")}
      {props.largeEditSet === true && renderField("category", "Categoría")}
      {props.largeEditSet === true && renderField("CANTIDAD", "Cantidad")}
      {props.largeEditSet === true && renderField("UNIDADES", "Unidades")}
      {props.largeEditSet === true && renderField("COSTO", "Costo")}
      {props.largeEditSet === true && renderField("COOR", "Coordinador")}
      {props.largeEditSet === true && renderField("FECHA_ACT", "Fecha Actualización")}
      {/* {props.datos["GRUPO"] ? (props.largeEditSet === true ? renderField("GRUPO", "Grupo") : props.datos["GRUPO"]) : "NaN"} */}

      {/* Mostrar el precio por unidad */}
      {props.largeEditSet === true && (
        <div className="flex items-center mb-2">
          <span className="mr-2 text-lg font-semibold">Precio por unidad:</span>
          <span className="text-lg font-semibold">{precioPorUnidad}</span>
        </div>
      )}

      <div className="flex space-x-2">
        <button
          className={`${getButtonClass('100%')} text-white font-bold py-2 px-4 rounded`}
          onClick={() => handleCheck('100%')}
        >
          100%
        </button>

        <button
          className={`${getButtonClass('75%')} text-white font-bold py-2 px-4 rounded`}
          onClick={() => handleCheck('75%')}
        >
          75%
        </button>

        <button
          className={`${getButtonClass('50%')} text-white font-bold py-2 px-4 rounded`}
          onClick={() => handleCheck('50%')}
        >
          50%
        </button>

        <button
          className={`${getButtonClass('25%')} text-white font-bold py-2 px-4 rounded`}
          onClick={() => handleCheck('25%')}
        >
          25%
        </button>

        <button
          className={`${getButtonClass('0%')} text-white font-bold py-2 px-4 rounded`}
          onClick={() => handleCheck('0%')}
        >
          0%
        </button>

        <button
          className={`${getButtonClass('NA')} text-white font-bold py-2 px-4 rounded`}
          onClick={() => handleCheck('NA')}
        >
          NA
        </button>

        {props.largeEditSet === true && (
          <button
            className="text-white font-bold py-2 px-4 rounded bg-red-500 hover:bg-red-700"
            onClick={handleDelete}
          >
            💥
          </button>
        )}
      </div>
    </div>
  );
}

export default CardCheckList;
