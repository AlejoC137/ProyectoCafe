import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects, postProject } from '../../../redux/actions';

function Home() {
    const dispatch = useDispatch();
    
    // useEffect( () => {
    //     dispatch()
    // } , [] );

    const [sampleState, setSampleState] = useState();

    const sampleSelectionState = useSelector(state => state.sampleSelectionState);

    const onPressHandler = (value) => {
        // Handle press action
        console.log(value);
    };

    return (
        <div>
            <button onClick={() => onPressHandler('arch')}>ARCHITECTURE</button>
            <button onClick={() => onPressHandler('code')}>CODING</button>
            <button onClick={() => onPressHandler('soci')}>SOCIAL</button>
        </div>
    );
}

export default Home;
