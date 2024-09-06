import React from "react";
import { useSelector } from 'react-redux';

function RecetaCard() {
  const lareceta = useSelector(state => state.receta);

  return (
    <div className="bg-ladrillo h-auto w-full p-4 rounded-2xl border border-lilaDark">
      {/* Recipe Name */}
      <div className="font-Bobby_Jones_Soft text-notBlack text-16pt text-center mb-4">
        {lareceta?.nombre || "No data"}
      </div>

      {/* Yield Information */}
      <div className="font-Bobby_Jones_Soft text-notBlack text-12pt text-center mb-4">
        {lareceta?.rendimiento_cantidad && lareceta?.rendimiento_unidades && lareceta?.rendimiento_porcion
          ? `Rendimiento: ${lareceta.rendimiento_cantidad} ${lareceta.rendimiento_unidades} por ${lareceta.rendimiento_porcion} porción(es)`
          : "No data"}
      </div>

      {/* Ingredients List */}
      <div className="mb-4">
        <h3 className="font-Bobby_Jones_Soft text-notBlack text-14pt mb-2">Ingredientes:</h3>
        {lareceta?.ingredientes && lareceta.ingredientes.length > 0 ? (
          <ul className="list-disc list-inside text-notBlack text-12pt">
            {lareceta.ingredientes.map((ingrediente, index) => (
              <li key={index}>
                {ingrediente.nombre || "No data"}: {ingrediente.cantidad || "No data"} {ingrediente.unidades || "No data"}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data</p>
        )}
      </div>

      {/* Preparation Steps */}
      <div className="mb-4">
        <h3 className="font-Bobby_Jones_Soft text-notBlack text-14pt mb-2">Preparación:</h3>
        {lareceta?.preparacion && lareceta.preparacion.length > 0 ? (
          <ol className="list-decimal list-inside text-notBlack text-12pt">
            {lareceta.preparacion.map((paso, index) => (
              <li key={index}>{paso.proceso || "No data"}</li>
            ))}
          </ol>
        ) : (
          <p>No data</p>
        )}
      </div>

      {/* Plating (Emplatado) */}
      <div className="mb-4">
        <h3 className="font-Bobby_Jones_Soft text-notBlack text-14pt mb-2">Emplatado:</h3>
        {Array.isArray(lareceta?.emplatado) ? (
          <ol className="list-decimal list-inside text-notBlack text-12pt">
            {lareceta.emplatado.map((paso, index) => (
              <li key={index}>{paso.proceso || "No data"}</li>
            ))}
          </ol>
        ) : (
          <p className="text-notBlack text-12pt">
            {lareceta?.emplatado || "No data"}
          </p>
        )}
      </div>

      {/* Notes */}
      <div className="mb-4">
        <h3 className="font-Bobby_Jones_Soft text-notBlack text-14pt mb-2">Notas:</h3>
        {lareceta?.notas && lareceta.notas.length > 0 ? (
          <ul className="list-disc list-inside text-notBlack text-12pt">
            {lareceta.notas.map((nota, index) => (
              <li key={index}>{nota || "No data"}</li>
            ))}
          </ul>
        ) : (
          <p>No data</p>
        )}
      </div>

      {/* Additional Information */}
      <div className="text-notBlack text-10pt text-center">
        <p>Escrito por: {lareceta?.escrito || "No data"}</p>
        <p>Revisado por: {lareceta?.revisado || "No data"}</p>
        <p>Última actualización: {lareceta?.actualizacion || "No data"}</p>
      </div>
    </div>
  );
}

export default RecetaCard;
