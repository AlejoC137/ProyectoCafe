import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../../../redux/actions.js";
import CardsCheckList from './CardsCheckList.jsx';

function MenuCheckListCocina(props) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items);
    const [filteredItemsDesechablesP, setFilteredItemsDesechablesP] = useState([]);
    const [filteredItemsIgredienteP, setFilteredItemsIgredienteP] = useState([]);
    const [filteredItemsProduccionExternaP, setFilteredItemsProduccionExternaP] = useState([]);
    const [filteredItemsProduccionInternaP, setFilteredItemsProduccionInternaP] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [reportCreated, setReportCreated] = useState(false);

    useEffect(() => {
        dispatch(getAllItems());
    }, [reportCreated]);

    const handleCreateReport = async () => {
        setIsLoading(true);
        await dispatch(getAllItems());
        updateFilteredItems();
        setIsLoading(false);
        setReportCreated(true);
    };

    const handleUpdateReport = async () => {
        setIsLoading(true);
        await dispatch(getAllItems());
        updateFilteredItems();
        setIsLoading(false);
        setReportCreated(true);
    };

    const updateFilteredItems = () => {
        const allItems = [
            ...items.desechables,
            ...items.ingrediente,
            ...items.produccionExterna,
            ...items.produccionInterna
        ];

        const desechablesP = items.desechables.filter(item => item.Estado === 'PENDIENTE');
        const ingredienteP = items.ingrediente.filter(item => item.Estado === 'PENDIENTE');
        const produccionExternaP = items.produccionExterna.filter(item => item.Estado === 'PENDIENTE');
        const produccionInternaP = items.produccionInterna.filter(item => item.Estado === 'PENDIENTE');
       

        setFilteredItemsDesechablesP(desechablesP)
        setFilteredItemsIgredienteP(ingredienteP)
        setFilteredItemsProduccionExternaP(produccionExternaP)
        setFilteredItemsProduccionInternaP(produccionInternaP)
    };

    const copyToClipboard = (items) => {
        const text = items.map(item => item["Nombre del producto"]).join(', ');
        navigator.clipboard.writeText(text).then(() => {
            alert("Copiado al portapapeles");
        });
    };

    return (
        <div className="container mx-auto py-8">
            {!reportCreated && (
                <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleCreateReport}
                    disabled={isLoading || reportCreated}
                >
                    {isLoading ? 'Cargando...' : 'CREAR REPORTE'}
                </button>
            )}
            {reportCreated && (
                <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleUpdateReport}
                    disabled={isLoading}
                >
                    {isLoading ? 'Cargando...' : 'UPDATE REPORTE'}
                </button>
            )}
           
           <div className="mt-4 w-full flex flex-col md:flex-row justify-around">
                {filteredItemsDesechablesP.length > 0 && (
                    <div className="bg-gray-100 border p-4 rounded w-full md:w-1/2 m-2">
                        <h3 className="font-bold text-lg mb-2">DESECHABLES PENDIENTES DE COMPRA</h3>
                        {filteredItemsDesechablesP.map((item, index) => (
                            <div key={index} className="border p-2 mb-2 bg-white rounded">
                                <p>{item["Nombre del producto"]}</p>
                                {/* <p>Estado: {item.Estado}</p> */}
                            </div>
                        ))}
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
                            onClick={() => copyToClipboard(filteredItemsPC)}
                        >
                            Copiar al Portapapeles
                        </button>
                    </div>
                )}
                {filteredItemsIgredienteP.length > 0 && (
                    <div className="bg-gray-100 border p-4 rounded w-full md:w-1/2 m-2">
                        <h3 className="font-bold text-lg mb-2">INGREDIENTES PENDIENTES DE COMPRA</h3>
                        {filteredItemsIgredienteP.map((item, index) => (
                            <div key={index} className="border p-2 mb-2 bg-white rounded">
                                <p>{item["Nombre del producto"]}</p>
                                {/* <p>Estado: {item.Estado}</p> */}
                            </div>
                        ))}
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
                            onClick={() => copyToClipboard(filteredItemsPC)}
                        >
                            Copiar al Portapapeles
                        </button>
                    </div>
                )}
                {filteredItemsProduccionExternaP.length > 0 && (
                    <div className="bg-gray-100 border p-4 rounded w-full md:w-1/2 m-2">
                        <h3 className="font-bold text-lg mb-2">PRODUCCION A SOLICITAR</h3>
                        {filteredItemsProduccionExternaP.map((item, index) => (
                            <div key={index} className="border p-2 mb-2 bg-white rounded">
                                <p>{item["Nombre del producto"]}</p>
                                {/* <p>Estado: {item.Estado}</p> */}
                            </div>
                        ))}
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
                            onClick={() => copyToClipboard(filteredItemsPC)}
                        >
                            Copiar al Portapapeles
                        </button>
                    </div>
                )}
                {filteredItemsProduccionInternaP.length > 0 && (
                    <div className="bg-gray-100 border p-4 rounded w-full md:w-1/2 m-2">
                        <h3 className="font-bold text-lg mb-2">PRODUCCION A EJECUTAR</h3>
                        {filteredItemsProduccionInternaP.map((item, index) => (
                            <div key={index} className="border p-2 mb-2 bg-white rounded">
                                <p>{item["Nombre del producto"]}</p>
                                {/* <p>Estado: {item.Estado}</p> */}
                            </div>
                        ))}
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
                            onClick={() => copyToClipboard(filteredItemsPC)}
                        >
                            Copiar al Portapapeles
                        </button>
                    </div>
                )}

                
            </div>
           
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="m-1">
                    <CardsCheckList
                        info={items.desechables}
                        tittle='DESECHABLES'
                        sourceImg="https://res.cloudinary.com/dwcp7dk9h/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png"
                    />
                </div>
                <div className="m-1">
                    <CardsCheckList
                        info={items.ingrediente}
                        tittle='INGREDIENTE'
                        sourceImg="https://res.cloudinary.com/dwcp7dk9h/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png"
                    />
                </div>
                <div className="m-1">
                    <CardsCheckList
                        info={items.produccionExterna}
                        tittle='PRODUCCION EXTERNA'
                        sourceImg="https://res.cloudinary.com/dwcp7dk9h/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png"
                    />
                </div>
                <div className="m-1">
                    <CardsCheckList
                        info={items.produccionInterna}
                        tittle='PRODUCCION INTERNA'
                        sourceImg="https://res.cloudinary.com/dwcp7dk9h/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png"
                    />
                </div>
            </div>

        </div>
    );
}

export default MenuCheckListCocina;

