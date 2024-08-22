import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../../../redux/actions.js";
import CardsCheckList from './CardsCheckList.jsx';

function MenuCheckListByProps({ Area, category }) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items);
    const [filteredItems, setFilteredItems] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [reportCreated, setReportCreated] = useState(false);

    useEffect(() => {
        dispatch(getAllItems());
        
    }, [dispatch, reportCreated]);

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
        const categoryItems = items?.[category.toLowerCase()]?.filter(item => item.Estado === 'PENDIENTE' && item.Area === Area) || [];
        setFilteredItems(categoryItems);
    };

    const copyToClipboard = (items) => {
        const text = items.map(item => item["Nombre del producto"]).join(', ');
        navigator.clipboard.writeText(text).then(() => {
            alert("Copiado al portapapeles");
        });
    };

    return (
        <div className="container mx-auto py-8">
    
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="m-1">
                    
                    
                    <CardsCheckList
                    
                        info={items?.filter(item => item.Area === Area)}
                        tittle={category.toUpperCase()}
                        sourceImg="https://res.cloudinary.com/dwcp7dk9h/image/upload/v1710996709/PERCHERO_02-02_g4pqcy.png"
                    />
                </div>
            </div>
        </div>
    );
}

export default MenuCheckListByProps;
