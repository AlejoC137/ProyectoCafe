import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../../../redux/actions.js";
import CardsCheckList from './CardsCheckList.jsx';

function CheckList(props) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items);
    const [filteredItemsPC, setFilteredItemsPC] = useState([]);
    const [filteredItemsPP, setFilteredItemsPP] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [reportCreated, setReportCreated] = useState(false);

    useEffect(() => {
        dispatch(getAllItems());
    }, [reportCreated, items]);

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

        const filteredPC = allItems.filter(item => item.Estado === 'PC');
        const filteredPP = allItems.filter(item => item.Estado === 'PP');

        setFilteredItemsPC(filteredPC);
        setFilteredItemsPP(filteredPP);
    };

    const copyToClipboard = (items) => {
        const text = items.map(item => item["Nombre del producto"]).join(', ');
        navigator.clipboard.writeText(text).then(() => {
            alert("Copiado al portapapeles");
        });
    };

    return (
        <div className="flex flex-col items-center">
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
                {filteredItemsPC.length > 0 && (
                    <div className="bg-gray-100 border p-4 rounded w-full md:w-1/2 m-2">
                        <h3 className="font-bold text-lg mb-2">ARTICULOS PENDIENTES DE COMPRA</h3>
                        {filteredItemsPC.map((item, index) => (
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
                {filteredItemsPP.length > 0 && (
                    <div className="bg-gray-100 border p-4 rounded w-full md:w-1/2 m-2">
                        <h3 className="font-bold text-lg mb-2">ARTICULOS PENDIENTES DE PRODUCCIÓN</h3>
                        {filteredItemsPP.map((item, index) => (
                            <div key={index} className="border p-2 mb-2 bg-white rounded">
                                <p>{item["Nombre del producto"]}</p>
                                {/* <p>Estado: {item.Estado}</p> */}
                            </div>
                        ))}
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
                            onClick={() => copyToClipboard(filteredItemsPP)}
                        >
                            Copiar al Portapapeles
                        </button>
                    </div>
                )}
            </div>
            <div className="flex flex-wrap">
                <div className="m-1">
                    <CardsCheckList
                        info={items.desechables}
                        tittle='desechables'
                        sourceImg="https://res.cloudinary.com/dwcp7dk9h/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png"
                    />
                </div>
                <div className="m-1">
                    <CardsCheckList
                        info={items.ingrediente}
                        tittle='ingrediente'
                        sourceImg="https://res.cloudinary.com/dwcp7dk9h/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png"
                    />
                </div>
                <div className="m-1">
                    <CardsCheckList
                        info={items.produccionExterna}
                        tittle='produccionExterna'
                        sourceImg="https://res.cloudinary.com/dwcp7dk9h/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png"
                    />
                </div>
                <div className="m-1">
                    <CardsCheckList
                        info={items.produccionInterna}
                        tittle='produccionInterna'
                        sourceImg="https://res.cloudinary.com/dwcp7dk9h/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png"
                    />
                </div>
            </div>
        </div>
    );
}

export default CheckList;
