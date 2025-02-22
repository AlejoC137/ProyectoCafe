import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStaffes } from "../../../redux/actions";

const CalculoNomina = () => {
  const dispatch = useDispatch();
  const staff = useSelector((state) => state.staff);

  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [resultados, setResultados] = useState([]);
  const [historialDesplegado, setHistorialDesplegado] = useState({}); // Controla qué empleados tienen el historial visible

  const tarifas = {
   "AUXILIAR COCINA JN": 7100+(7100*0.1),
    "AUX PRODUCCION": 7100+(7100*0.1),
    "Barista SN": 7100+(8489*0.1),
    
  };

  useEffect(() => {
    dispatch(getAllStaffes());
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
  };

  function calcularHorasYPropinas(data, fechaInicio, fechaFin) {
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);

    return data.map((persona) => {
      const turnosFiltrados = persona.Turno_Pasados.filter((turno) => {
        const fechaTurno = new Date(turno.turnoDate);
        return fechaTurno >= inicio && fechaTurno <= fin;
      });

      const horasTrabajadas = turnosFiltrados.reduce((total, turno) => {
        const horaInicio = new Date(`${turno.turnoDate}T${turno.horaInicio}`);
        const horaSalida =
          turno.horaSalida === "PENDING"
            ? new Date()
            : new Date(`${turno.turnoDate}T${turno.horaSalida}`);
        return total + (horaSalida - horaInicio) / (1000 * 60 * 60);
      }, 0);

      const propinasFiltradas = persona.Propinas_PP.filter((propina) => {
        const fechaPropina = new Date(propina.tipDia);
        return fechaPropina >= inicio && fechaPropina <= fin;
      });

      const totalPropinas = propinasFiltradas.reduce((total, propina) => {
        return total + parseFloat(propina.tipMonto);
      }, 0);

      return {
        nombre: `${persona.Nombre} ${persona.Apellido}`,
        horasTrabajadas: parseFloat(horasTrabajadas.toFixed(2)),
        totalPropinas: parseFloat((totalPropinas / 1000).toFixed(3)),
        cargo: persona.Cargo,
        turnos: turnosFiltrados, // Guardar los turnos filtrados
      };
    });
  }

  function calcularValorPagar(resultado, tarifas, fechaInicio, fechaFin) {
    return resultado.map((persona) => {
      const tarifaHora = tarifas[persona.cargo] || 0;

      const valorPagaPorHoras = parseFloat(
        (persona.horasTrabajadas * (8489+(8489*0.1)) / 1000).toFixed(3)
      );

      const totalNomina = parseFloat(
        (valorPagaPorHoras + persona.totalPropinas).toFixed(3)
      );

      return {
        nombre: persona.nombre,
        horasTrabajadas: persona.horasTrabajadas,
        totalPropinas: persona.totalPropinas,
        valorPagaPorHoras,
        totalNomina,
        periodo: `${fechaInicio} a ${fechaFin}`,
        turnos: persona.turnos,
      };
    });
  }

  const handleToggleHistorial = (index) => {
    setHistorialDesplegado((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Alternar entre mostrar u ocultar el historial
    }));
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      ?
      <h2 className="text-xl font-semibold mb-4">Cálculo de Nómina y Propinas</h2>

      {/* Inputs para las fechas */}
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

      {/* Mostrar resultados */}
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
                <th className="border px-4 py-2">Período</th>
                <th className="border px-4 py-2">Historial</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((persona, index) => (  persona.show &&
                <React.Fragment key={index}>
                  <tr>
                    <td className="border px-4 py-2">{persona.nombre}</td>
                    <td className="border px-4 py-2">{persona.horasTrabajadas}</td>
                    <td className="border px-4 py-2">{persona.totalPropinas}</td>
                    <td className="border px-4 py-2">{persona.valorPagaPorHoras}</td>
                    <td className="border px-4 py-2">{persona.totalNomina}</td>
                    <td className="border px-4 py-2">{persona.periodo}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => handleToggleHistorial(index)}
                        className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700"
                      >
                        🗂️
                      </button>
                    </td>
                  </tr>

                  {/* Mostrar historial de turnos si está desplegado */}
                  {historialDesplegado[index] && (
                    <tr>
                      <td colSpan="7" className="border px-4 py-2">
                        <table className="table-auto w-full border mt-2">
                          <thead>
                            <tr>
                              <th className="border px-4 py-2">Fecha</th>
                              <th className="border px-4 py-2">Hora Inicio</th>
                              <th className="border px-4 py-2">Hora Salida</th>
                            </tr>
                          </thead>
                          <tbody>
                            {persona.turnos.map((turno, idx) => (
                              <tr key={idx}>
                                <td className="border px-4 py-2">{turno.turnoDate}</td>
                                <td className="border px-4 py-2">{turno.horaInicio}</td>
                                <td className="border px-4 py-2">
                                  {turno.horaSalida === "PENDING"
                                    ? "PENDING"
                                    : turno.horaSalida}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CalculoNomina;
