import React, { useState } from "react";
import TittleComp from "../tittleComp/TittleComp";
import { useSelector } from "react-redux";
import { updateStaff } from "../../../redux/actions";

function TipStaff(props) {
  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Meses empiezan en 0
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getCurrentTime() {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  const [propina, setPropina] = useState("");
  const theStaff = useSelector((state) => state.staff);

  const handlePropinaSubmit = () => {
    const propinaNumber = parseFloat(propina);
    if (isNaN(propinaNumber) || propinaNumber <= 0) {
      alert("Por favor ingrese un número válido para la propina.");
      return;
    }

    // Filtrar staff con Turno_State === true
    const staffConTurno = theStaff.filter((staff) => staff.Turno_State);

    if (staffConTurno.length === 0) {
      alert("No hay personal con turno activo para distribuir la propina.");
      return;
    }

    const propinaPorPersona = propinaNumber / staffConTurno.length;

    const distribucionPropina = staffConTurno.map((staff) => ({
      id: staff._id,
      Monto: propinaPorPersona.toFixed(0), // Redondear a dos decimales
    }));

    // console.log("Distribución de propina:", distribucionPropina);

    // Despachar acción para enviar la distribución de propina al backend
    distribucionPropina.forEach((propina) => {

      // console.log(propina);
      updateStaff({
        id: propina.id,
        propina:true,
        nuevaPropi: {
          tipDia: getCurrentDate(),
          tipHora: getCurrentTime(),
          tipMonto: propina.Monto,
        },
      });
    })
    // Limpiar el campo de propina después de procesar
    setPropina("");
  };

  return (
    <div className="bg-ladrillo overflow-hidden rounded-2xl border-8 border-black h-custom-height relative ">
      <TittleComp tittle="INGRESAR PROPINA" />
      <div className="p-4">
        <label
          htmlFor="staffSelector"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Ingrese el monto de la propina:
        </label>
        <input
          id="propinaInput"
          type="number"
          step="1000"
          value={propina}
          onChange={(e) => setPropina(e.target.value)}
          className="mb-4 p-2 bg-white border border-gray-300 rounded-md"
          placeholder="Ingrese la cantidad de propina"
        />
        <div className="flex space-x-6 justify-center">
          <button
            onClick={handlePropinaSubmit}
            className="px-4 py-2 text-white rounded-md bg-green-500"
          >
            INGRESAR PROPINA
          </button>
        </div>
      </div>
    </div>
  );
}

export default TipStaff;
