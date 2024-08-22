import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { updateItem, delitem } from '../../../redux/actions.js'; // Import the Redux action

function CardCheckList(props) {
  const dispatch = useDispatch();
  const [selectedStatus, setSelectedStatus] = useState(props.datos["Estado"]);
  
  // Estado local para controlar los campos editables
  const [editableField, setEditableField] = useState(null);
  const [editedValue, setEditedValue] = useState(null);
  
  // Estado local para almacenar el precio por unidad
  const [precioPorUnidad, setPrecioPorUnidad] = useState(0);

  useEffect(() => {
    calcularPrecioPorUnidad();
  }, [props.datos["CANTIDAD"], props.datos["COSTO"], props.datos["COOR"]]);

  const handleCheck = (status) => {
    setSelectedStatus(status); // Update local state immediately
    updateItem({
      id: props.datos._id,
      Field: "Estado",
      category: "STOCK",
      Value: status
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
    updateItem({
      id: props.datos._id,
      Field: field,
      category: 'STOCK',
      Value: editedValue
    });
    setEditableField(null); // Finaliza la edición y oculta el input
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
    const cantidad = parseFloat(props.datos["CANTIDAD"]) || 1; // Evitar división por 0
    const costo = parseFloat(props.datos["COSTO"]) || 0;
    const coor = parseFloat(props.datos["COOR"]) || 1;
    const precio = (costo / cantidad) * coor;
    setPrecioPorUnidad(precio.toFixed(2)); // Redondear a 2 decimales
  };

  const renderField = (fieldName, displayName) => {
    return (
      <div className="flex items-center mb-2">
        <span className="mr-2 text-lg font-semibold">{displayName}:</span>
        {editableField === fieldName ? (
          <input
            type="text"
            value={editedValue}
            onChange={handleChange}
            onBlur={() => handleBlur(fieldName)}
            className="border rounded px-2 py-1"
            placeholder={props.datos[fieldName]}
            autoFocus
          />
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

      {renderField("Nombre del producto", "Nombre del producto")}
      {renderField("Proveedor", "Proveedor")}
      {renderField("Estado", "Estado")}
      {renderField("Area", "Área")}
      {renderField("category", "Categoría")}
      {renderField("CANTIDAD", "Cantidad")}
      {renderField("UNIDADES", "Unidades")}
      {renderField("COSTO", "Costo")}
      {renderField("COOR", "Coordinador")}
      {renderField("FECHA_ACT", "Fecha Actualización")}
      {renderField("GRUPO", "Grupo")}

      {/* Mostrar el precio por unidad */}
      <div className="flex items-center mb-2">
        <span className="mr-2 text-lg font-semibold">Precio por unidad:</span>
        <span className="text-lg font-semibold">{precioPorUnidad}</span>
      </div>

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

        <button
          className="text-white font-bold py-2 px-4 rounded bg-red-500 hover:bg-red-700"
          onClick={handleDelete}
        >
         💥
        </button>
      </div>
    </div>
  );
}

export default CardCheckList;
