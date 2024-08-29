import React from "react";
import TittleComp from "../tittleComp/TittleComp";
import { Link } from 'react-router-dom';

function TaskAndStandars(props) {
  return (
    <div className="bg-ladrillo overflow-hidden rounded-2xl border-8 border-black h-custom-height225 relative">
      <TittleComp tittle='PENDIENTES Y STANDARES' />
      
      {/* Botón para redirigir a la URL */}
      <Link to="https://proyecto-cafe-sigma.vercel.app/menupc/edit">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          EDITAR MENU  - BUSCAR RECETAS 
        </button>
      </Link>
    </div>
  );
}

export default TaskAndStandars;
