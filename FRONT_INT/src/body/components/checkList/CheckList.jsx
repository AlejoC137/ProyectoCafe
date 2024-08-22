import React from "react";
import { useDispatch } from "react-redux";
import { listaCafe, informeCafe, listaCocina, informeCocina } from "../../../redux/actions.js";
import TittleComp from "../tittleComp/TittleComp";

function CheckList() {
  const dispatch = useDispatch();

  // Maneja la copia al portapapeles
  const copyToClipboard = (items) => {
    const text = items?.map(item => item["Nombre del producto"]).join(', ');
    navigator.clipboard.writeText(text).then(() => {
      alert("Copiado al portapapeles");
    });
// 
    // console.log(items);
    
  };

  const handleExportListCafe = async () => {
    const filteredItems = await dispatch(informeCafe());
    copyToClipboard(filteredItems); // Copia los items al portapapeles
  };

  const handleExportListCocina = async () => {
    const filteredItems = await dispatch(informeCocina());
    copyToClipboard(filteredItems); // Copia los items al portapapeles
  };

  return (
    <div className="bg-ladrillo overflow-hidden rounded-2xl border-8 border-black h-custom-height relative">
      <TittleComp tittle="CHECKLIST" />
      <div className="p-4">
        <div className="space-y-4">
          {/* Sección para Café */}
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h2 className="text-center text-lg font-bold text-green-700 mb-4">
              Sección Café
            </h2>
            <div className="flex space-x-6 justify-center">
              <button
                onClick={() => dispatch(listaCafe())}
                className="px-4 py-2 text-white rounded-md bg-green-500"
              >
                CHECK LIST
              </button>
              <button
                onClick={handleExportListCafe}
                className="px-4 py-2 text-white rounded-md bg-green-500"
              >
                EXPORT LIST
              </button>
            </div>
          </div>

          {/* Sección para Cocina */}
          <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
            <h2 className="text-center text-lg font-bold text-yellow-700 mb-4">
              Sección Cocina
            </h2>
            <div className="flex space-x-6 justify-center">
              <button
                onClick={() => dispatch(listaCocina())}
                className="px-4 py-2 text-white rounded-md bg-yellow-500"
              >
                CHECK LIST
              </button>
              <button
                onClick={handleExportListCocina}
                className="px-4 py-2 text-white rounded-md bg-yellow-500"
              >
                EXPORT LIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckList;
