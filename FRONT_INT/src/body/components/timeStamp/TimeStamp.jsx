import React, { useEffect, useState } from "react";
import TittleComp from "../tittleComp/TittleComp";
import { useSelector, useDispatch } from "react-redux";
import { updateStaff } from "../../../redux/actions"; // Asegúrate de tener estas acciones

function TimeStamp(props) {
  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Meses empiezan en 0
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function getCurrentTime() {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  const dispatch = useDispatch();
  const theStaff = useSelector((state) => state.staff);
  const [selectedStaff, setSelectedStaff] = useState("");
  const [t, setT] = useState(false); // Cambiado a setT para claridad

  // Efecto para actualizar t al cambiar selectedStaff
  useEffect(() => {
    const staff = theStaff.find((s) => s._id === selectedStaff);
    if (staff) {
      setT(staff.Turno_State); // Establecer t basado en Turno_State de staff seleccionado
    } else {
      setT(false); // Si no hay staff seleccionado, desactivar t
    }
  }, [selectedStaff, theStaff]);

  const handleStartShift = () => {
    const staff = theStaff.find((s) => s._id === selectedStaff);
    if (staff) {
      console.log(`Iniciando turno para: ${staff.Nombre} ${staff.Apellido}`);
      // dispatch(
        updateStaff({
        id: staff._id,
        Field: "Turno_State",
        Value: true,
        currentTurn: {
          turnoDate: getCurrentDate(),
          horaInicio: getCurrentTime(),
          horaSalida: 'PENDING',
        },
      })
    // );
      setT(true); // Actualizar t después de iniciar el turno
      // window.location.reload()
    }
  };

  const handleEndShift = () => {
    const staff = theStaff.find((s) => s._id === selectedStaff);
    if (staff) {
      console.log(`Finalizando turno para: ${staff.Nombre} ${staff.Apellido}`);
      // dispatch(
        updateStaff({
        id: staff._id,
        Field: "Turno_State",
        Value: false,
        currentTurn: {
          horaSalida: getCurrentTime(),
        },
      })
    // );
      setT(false); // Actualizar t después de finalizar el turno
      // window.location.reload()
    }

  };

  return (
    <div className="bg-ladrillo overflow-hidden rounded-2xl border-8 border-black h-custom-height225 relative ">
      <TittleComp tittle='HORAS' />
      <div className="p-4">
        <label htmlFor="staffSelector" className="block mb-2 text-sm font-medium text-gray-900">Seleccione un miembro del staff:</label>
        <select
          id="staffSelector"
          value={selectedStaff}
          onChange={(e) => setSelectedStaff(e.target.value)}
          className="mb-4 p-2 bg-white border border-gray-300 rounded-md"
        >
          <option value="" disabled>Seleccione un miembro</option>
          {theStaff.map((staff) => (
            <option key={staff._id} value={staff._id}>
              {staff.Nombre} {staff.Apellido} - {staff.Cargo}
            </option>
          ))}
        </select>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={handleStartShift}
            className={`px-4 py-2 text-white rounded-md ${t ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500'}`}
            disabled={t}
          >
            Iniciar Turno
          </button>
          <button
            onClick={handleEndShift}
            className={`px-4 py-2 text-white rounded-md ${!t ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-500'}`}
            disabled={!t}
          >
            Finalizar Turno
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimeStamp;
