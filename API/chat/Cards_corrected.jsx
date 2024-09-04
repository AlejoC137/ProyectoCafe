
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSrcItems } from './actions';

const Cards = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.itemsSearch);  // Usar itemsSearch para mostrar los resultados filtrados
  const isAdmin = useSelector(state => state.isAdmin);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getSrcItems(searchTerm)); // Despachar la búsqueda cada vez que cambie el término de búsqueda
  }, [searchTerm, dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar producto"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="cards-container">
        {items.map(PAD => (
          <Card
            fondo={PAD?.foto}
            key={PAD?._id}
            ID={PAD?._id}
            name={PAD.NombreES}
            precio={PAD.Precio}
            descripcion={PAD.DescripcionES}
            admin={isAdmin}
            isActive={PAD.Estado}
            receta={PAD.receta}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
