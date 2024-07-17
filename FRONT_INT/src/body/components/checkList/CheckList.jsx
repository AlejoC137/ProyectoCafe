import React from "react";
import { useDispatch } from "react-redux";
import { listaCafe, informeCafe, listaCocina, informeCocina } from "../../../redux/actions.js";
import TittleComp from "../tittleComp/TittleComp";

function CheckList() {
  const dispatch = useDispatch();

  const handleListaCafe = () => {
    dispatch(listaCafe());
  };

  const handleInformeCafe = () => {
    dispatch(informeCafe());
  };

  const handleListaCocina = () => {
    dispatch(listaCocina());
  };

  const handleInformeCocina = () => {
    dispatch(informeCocina());
  };

  return (
    <div className="bg-ladrillo overflow-hidden rounded-2xl border-8 border-black h-custom-height relative">
      <TittleComp tittle="CHECKLIST" />
      <div className="p-4">
        <label
          htmlFor="staffSelector"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Ingrese el monto de la propina:
        </label>

        <div className="flex space-x-6 justify-center">
          <button
            onClick={handleListaCafe}
            className="px-4 py-2 text-white rounded-md bg-green-500"
          >
            LISTA CAFÉ
          </button>
          <button
            onClick={handleInformeCafe}
            className="px-4 py-2 text-white rounded-md bg-green-500"
          >
            INFORME CAFÉ
          </button>
        </div>
        <br />
        <div className="flex space-x-6 justify-center">
          <button
            onClick={handleListaCocina}
            className="px-4 py-2 text-white rounded-md bg-green-500"
          >
            LISTA COCINA
          </button>
          <button
            onClick={handleInformeCocina}
            className="px-4 py-2 text-white rounded-md bg-green-500"
          >
            INFORME COCINA
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckList;
