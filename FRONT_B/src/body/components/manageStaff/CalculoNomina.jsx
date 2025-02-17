import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStaff, updateLogStaff } from "../../../redux/actions";

const CalculoNomina = () => {
  const dispatch = useDispatch();
  const staff = useSelector((state) => state.staff);

  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [resultados, setResultados] = useState([]);
  const [show, setShow] = useState({});
  const [modifiedShifts, setModifiedShifts] = useState({});
  const [ajustes, setAjustes] = useState({});
  const [ajustesSign, setAjustesSign] = useState({});

 const tarifas = {
    "AUXILIAR COCINA JN": 7500+(7500*0.1),
    "AUX PRODUCCION": 7500+(7500*0.1),
    "Barista SN": 8500+(9000*0.1),
    
  };
  useEffect(() => {
    dispatch(getAllStaff());
  }, [dispatch]);

  const handleCalcular = () => {
    const resultado = calcularHorasYPropinas(staff, fechaInicio, fechaFin);
    const valorPagarPorPersona = calcularValorPagar(
      resultado,
      tarifas,
      fechaInicio,
      fechaFin
    );
    setResultados(valorPagarPorPersona);

    const shiftsByPersona = {};
    const ajustesPorPersona = {};
    const ajustesSignPorPersona = {};
    valorPagarPorPersona.forEach((persona) => {
      shiftsByPersona[persona._id] = [...persona.turnos];
      ajustesPorPersona[persona._id] = 0;
      ajustesSignPorPersona[persona._id] = "positive"; // Default to positive
    });
    setModifiedShifts(shiftsByPersona);
    setAjustes(ajustesPorPersona);
    setAjustesSign(ajustesSignPorPersona);
  };

  function calcularHorasYPropinas(data, fechaInicio, fechaFin) {
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);

    return data
      .filter((persona) => persona.show === true)
      .map((persona) => {
        const turnosFiltrados = (persona.Turno_Pasados || [])
          .filter((turno) => {
            const fechaTurno = new Date(turno.turnoDate);
            return fechaTurno >= inicio && fechaTurno <= fin;
          })
          .map((turno, idx) => ({ ...turno, id: idx }));

        const horasTrabajadas = turnosFiltrados.reduce((total, turno) => {
          const horaInicio = new Date(`${turno.turnoDate}T${turno.horaInicio}`);
          const horaSalida =
            turno.horaSalida === "PENDING"
              ? new Date()
              : new Date(`${turno.turnoDate}T${turno.horaSalida}`);
          return total + (horaSalida - horaInicio) / (1000 * 60 * 60);
        }, 0);

        const propinasFiltradas = (persona.Propinas_PP || []).filter(
          (propina) => {
            const fechaPropina = new Date(propina.tipDia);
            return fechaPropina >= inicio && fechaPropina <= fin;
          }
        );

        const totalPropinas = propinasFiltradas.reduce((total, propina) => {
          return total + parseFloat(propina.tipMonto);
        }, 0);

        return {
          _id: persona._id,
          nombre: `${persona.Nombre} ${persona.Apellido}`,
          horasTrabajadas: parseFloat(horasTrabajadas.toFixed(2)),
          totalPropinas: parseFloat((totalPropinas / 1000).toFixed(3)),
          cargo: persona.Cargo,
          turnos: turnosFiltrados,
          originalTurnos: persona.Turno_Pasados || [],
        };
      });
  }

  function calcularValorPagar(resultado, tarifas, fechaInicio, fechaFin) {
    return resultado.map((persona) => {
      const tarifaHora = tarifas[persona.cargo] || 0;

      const valorPagaPorHoras = parseFloat(
        ((persona.horasTrabajadas * tarifaHora) / 1000).toFixed(3)
      );

      const totalNomina = parseFloat(
        (valorPagaPorHoras + persona.totalPropinas).toFixed(3)
      );

      return {
        ...persona,
        valorPagaPorHoras,
        totalNomina,
        periodo: `${fechaInicio} a ${fechaFin}`,
      };
    });
  }

  const handleToggleHistorial = (index) => {
    setShow((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleShiftFieldChange = (personaId, shiftIndex, field, value) => {
    setModifiedShifts((prevShifts) => {
      const personaShifts = [...prevShifts[personaId]];
      personaShifts[shiftIndex] = {
        ...personaShifts[shiftIndex],
        [field]: value,
      };
      return {
        ...prevShifts,
        [personaId]: personaShifts,
      };
    });
  };

  const handleDeleteShift = (personaId, shiftIndex) => {
    setModifiedShifts((prevShifts) => {
      const personaShifts = [...prevShifts[personaId]];
      personaShifts.splice(shiftIndex, 1);
      return {
        ...prevShifts,
        [personaId]: personaShifts,
      };
    });
  };

  const handleAddShift = (personaId) => {
    setModifiedShifts((prevShifts) => {
      const personaShifts = [...prevShifts[personaId]];
      const newShift = {
        turnoDate: "",
        horaInicio: "",
        horaSalida: "",
      };
      personaShifts.push(newShift);
      return {
        ...prevShifts,
        [personaId]: personaShifts,
      };
    });
  };

  const handleUpdateShifts = (persona) => {
    const updatedShifts = modifiedShifts[persona._id];
    dispatch(updateLogStaff(persona._id, updatedShifts));
  };

  const handleAdjustmentSignChange = (personaId, sign) => {
    setAjustesSign((prevSign) => ({
      ...prevSign,
      [personaId]: sign,
    }));
  };

  const handleAdjustmentChange = (personaId, value) => {
    setAjustes((prevAjustes) => ({
      ...prevAjustes,
      [personaId]: Math.abs(parseFloat(value)) || 0,
    }));
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Cálculo de Nómina y Propinas</h2>

      <div className="mb-4">
        <label className="block mb-2">Fecha de Inicio:</label>
        <input
          type="date"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Fecha de Fin:</label>
        <input
          type="date"
          value={fechaFin}
          onChange={(e) => setFechaFin(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <button
        onClick={handleCalcular}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Calcular Nómina
      </button>

      {resultados.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Resultados:</h3>
          <table className="table-auto w-full border-collapse border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Nombre</th>
                <th className="border px-4 py-2">Horas Trabajadas</th>
                <th className="border px-4 py-2">Total Propinas</th>
                <th className="border px-4 py-2">Pago por Horas</th>
                <th className="border px-4 py-2">Total Nómina</th>
                <th className="border px-4 py-2">Ajuste</th>
                <th className="border px-4 py-2">Nómina Final</th>
                <th className="border px-4 py-2">Período</th>
                <th className="border px-4 py-2">Historial</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((persona, index) => {
                const nominaFinal =
                  persona.totalNomina +
                  (ajustesSign[persona._id] === "negative"
                    ? -ajustes[persona._id] || 0
                    : ajustes[persona._id] || 0);

                return (
                  <React.Fragment key={index}>
                    <tr>
                      <td className="border px-4 py-2">{persona.nombre}</td>
                      <td className="border px-4 py-2">{persona.horasTrabajadas}</td>
                      <td className="border px-4 py-2">{persona.totalPropinas}</td>
                      <td className="border px-4 py-2">{persona.valorPagaPorHoras}</td>
                      <td className="border px-4 py-2">{persona.totalNomina}</td>
                      <td className="border px-4 py-2">
                        <div className="flex items-center">
                          <button
                            onClick={() => handleAdjustmentSignChange(persona._id, "positive")}
                            className={`bg-green-500 text-white py-1 px-2 rounded-l hover:bg-green-700 ${ajustesSign[persona._id] === "positive" ? "bg-green-700" : ""}`}
                          >
                            +
                          </button>
                          <input
                            type="number"
                            value={ajustes[persona._id] || 0}
                            onChange={(e) => handleAdjustmentChange(persona._id, e.target.value)}
                            className="border p-1 rounded-none w-full text-center"
                          />
                          <button
                            onClick={() => handleAdjustmentSignChange(persona._id, "negative")}
                            className={`bg-red-500 text-white py-1 px-2 rounded-r hover:bg-red-700 ${ajustesSign[persona._id] === "negative" ? "bg-red-700" : ""}`}
                          >
                            -
                          </button>
                        </div>
                      </td>
                      <td className="border px-4 py-2">{nominaFinal.toFixed(3)}</td>
                      <td className="border px-4 py-2">{persona.periodo}</td>
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => handleToggleHistorial(index)}
                          className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700"
                        >
                          {show[index] ? "Ocultar" : "🗂️"}
                        </button>
                      </td>
                    </tr>

                    {show[index] && (
                      <tr>
                        <td colSpan="9" className="border px-4 py-2">
                          <table className="table-auto w-full border mt-2">
                            <thead>
                              <tr>
                                <th className="border px-4 py-2">Fecha</th>
                                <th className="border px-4 py-2">Hora Inicio</th>
                                <th className="border px-4 py-2">Hora Salida</th>
                                <th className="border px-4 py-2">Acciones</th>
                              </tr>
                            </thead>
                            <tbody>
                              {modifiedShifts[persona._id]?.map((turno, idx) => (
                                <tr key={idx}>
                                  <td className="border px-4 py-2">
                                    <input
                                      type="date"
                                      value={turno.turnoDate}
                                      onChange={(e) =>
                                        handleShiftFieldChange(
                                          persona._id,
                                          idx,
                                          "turnoDate",
                                          e.target.value
                                        )
                                      }
                                      className="border p-1 rounded w-full"
                                    />
                                  </td>
                                  <td className="border px-4 py-2">
                                    <input
                                      type="text"
                                      value={turno.horaInicio}
                                      onChange={(e) =>
                                        handleShiftFieldChange(
                                          persona._id,
                                          idx,
                                          "horaInicio",
                                          e.target.value
                                        )
                                      }
                                      className="border p-1 rounded w-full"
                                    />
                                  </td>
                                  <td className="border px-4 py-2">
                                    <input
                                      type="text"
                                      value={turno.horaSalida}
                                      onChange={(e) =>
                                        handleShiftFieldChange(
                                          persona._id,
                                          idx,
                                          "horaSalida",
                                          e.target.value
                                        )
                                      }
                                      className="border p-1 rounded w-full"
                                    />
                                  </td>
                                  <td className="border px-4 py-2">
                                    <button
                                      onClick={() =>
                                        handleDeleteShift(persona._id, idx)
                                      }
                                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 mr-2"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>

                          <button
                            onClick={() => handleAddShift(persona._id)}
                            className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700 mt-2"
                          >
                            Add Shift
                          </button>

                          <button
                            onClick={() => handleUpdateShifts(persona)}
                            className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 mt-2"
                          >
                            Update Shifts
                          </button>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CalculoNomina;
