import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStaffes } from "../../../redux/actions"; // Asumiendo que esta es la acción correcta

const CalculoNomina = () => {
  const dispatch = useDispatch();
  const staff = useSelector((state) => state.staff); // Traer el estado de staff desde el reducer

  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [resultados, setResultados] = useState([]);

  // Tarifa por cargo
  const tarifas = {
    "AUXILIAR COCINA JN": 6528,
    "Barista JN": 8489,
    "Barista SN": 9095,
  };

  useEffect(() => {
    // Llamar a la acción para obtener todos los staff
    dispatch(getAllStaffes());
  }, [dispatch]);

  // Función para manejar el cálculo
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

  // Función para calcular horas y propinas (basada en tu código)
  function calcularHorasYPropinas(data, fechaInicio, fechaFin) {
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);

    return data.map((persona) => {
      // Filtrar turnos dentro del rango de fechas
      const turnosFiltrados = persona.Turno_Pasados.filter((turno) => {
        const fechaTurno = new Date(turno.turnoDate);
        return fechaTurno >= inicio && fechaTurno <= fin;
      });

      // Calcular horas trabajadas
      const horasTrabajadas = turnosFiltrados.reduce((total, turno) => {
        const horaInicio = new Date(`${turno.turnoDate}T${turno.horaInicio}`);
        const horaSalida =
          turno.horaSalida === "PENDING"
            ? new Date()
            : new Date(`${turno.turnoDate}T${turno.horaSalida}`);
        return total + (horaSalida - horaInicio) / (1000 * 60 * 60); // Convertir milisegundos a horas
      }, 0);

      // Filtrar propinas dentro del rango de fechas
      const propinasFiltradas = persona.Propinas_PP.filter((propina) => {
        const fechaPropina = new Date(propina.tipDia);
        return fechaPropina >= inicio && fechaPropina <= fin;
      });

      // Calcular monto total de propinas
      const totalPropinas = propinasFiltradas.reduce((total, propina) => {
        return total + parseFloat(propina.tipMonto);
      }, 0);

      return {
        nombre: `${persona.Nombre} ${persona.Apellido}`,
        horasTrabajadas: parseFloat(horasTrabajadas.toFixed(2)),
        totalPropinas: parseFloat((totalPropinas / 1000).toFixed(3)), // Dividido por 1000 para formato de miles
        cargo: persona.Cargo,
      };
    });
  }

  // Función para calcular el valor a pagar (basada en tu código)
  function calcularValorPagar(resultado, tarifas, fechaInicio, fechaFin) {
    return resultado.map((persona) => {
      // Obtener la tarifa por hora según el cargo de la persona
      const tarifaHora = tarifas[persona.cargo] || 0; // Si el cargo no se encuentra, usar tarifa de 0 para evitar NaN

      // Calcular el valor a pagar por horas trabajadas
      const valorPagaPorHoras = parseFloat(
        (persona.horasTrabajadas * tarifaHora / 1000).toFixed(3)
      ); // Dividido por 1000 para formato de miles

      // Calcular el total de la nómina
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
      };
    });
  }

  return (
    <div className="p-4 bg-white rounded shadow">
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

      {/* Botón para calcular */}
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
              </tr>
            </thead>
            <tbody>
              {resultados.map((persona, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{persona.nombre}</td>
                  <td className="border px-4 py-2">{persona.horasTrabajadas}</td>
                  <td className="border px-4 py-2">{persona.totalPropinas}</td>
                  <td className="border px-4 py-2">{persona.valorPagaPorHoras}</td>
                  <td className="border px-4 py-2">{persona.totalNomina}</td>
                  <td className="border px-4 py-2">{persona.periodo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CalculoNomina;
