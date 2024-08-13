import React from 'react';
import CardCheckList from './CardCheckList';
import { useSelector } from 'react-redux';

function CardsCheckList(props) {
    const items = props.info;

    return (
        <div>
            {props.tittle}
            <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items && items.map((item) => (
                    <div key={item?._id} className="min-w-0">
                        <CardCheckList
                            datos={item}
                            category={props.tittle}
                            subCategory={item}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardsCheckList;
